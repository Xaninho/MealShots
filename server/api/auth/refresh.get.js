import { sendError, createError } from "h3"
import { getRefreshTokenByToken } from "../../database/refreshTokens.ts"
import { decodeRefreshToken, generateTokens } from "../../utils/jwt.ts"
import { getUserById } from "../../database/users.ts"

export default defineEventHandler(async (event) => {
    const cookies = parseCookies(event)

    const refreshToken = cookies.refresh_token

    if (!refreshToken) {
        
        return sendError(event, createError({
            status: 401,
            message: "No refresh token provided"
        }));
    
    }

    const rToken = await getRefreshTokenByToken(refreshToken)

    if (!rToken) {
            
        return sendError(event, createError({
            status: 401,
            message: "Invalid refresh token"
        }));
        
    }

    const token = decodeRefreshToken(refreshToken)

    try {
        const user = await getUserById(token.userId)

        const {accessToken} = await generateTokens(user)

        return {
            access_token: accessToken
        }
        
    } catch (error) {
        return sendError(event, createError({
            status: 500,
            message: "Something went wrong..."
        }));
    }

    return {
        refreshToken: token
    }
});