import { getUserByUsername } from "../../transformers/user.ts"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken} from "../../utils/jwt.ts";
import { createRefreshToken } from "~/server/database/refreshTokens.ts";
import { userTransformer } from "../../transformers/user.ts"

export default defineEventHandler(async (event) => {

    console.log("login.post.js");
    const body = await readBody(event);

    const { username, password } = body;
    if (!username || !password) {
        return sendError(event, createError({ statusCode: 400, statusMessage: "Missing required fields" }));
    }

    // If the user is registered
    const user = await getUserByUsername(username);
    if (!user) {
        return sendError(event, createError({ statusCode: 400, statusMessage: "User not found" }));
    }

    // Compare passwords
    const doesThePasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesThePasswordMatch) {
        return sendError(event, createError({ statusCode: 400, statusMessage: "Password is incorrect" }));
    }

    // Generate Tokens
    // -- Access Token
    // -- Refresh Token
    const { accessToken, refreshToken } =  generateTokens(user);

    // Save it inside the database
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // add http only cookie
    sendRefreshToken(event, refreshToken);

    return {
        access_token: accessToken,
        user: userTransformer(user)
    };
});