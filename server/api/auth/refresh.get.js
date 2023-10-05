import { sendError } from "h3"
import { getRefreshTokenByToken } from "../../database/refreshTokens.ts"
import { decodeRefreshToken, generateTokens } from "../../utils/jwt.ts"
import { getUserById } from "../../database/users.ts"

export default defineEventHandler(async (event) => {
    const cookies = useCookies(event)

    const refreshToken = cookies.refresh_token

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const rToken = await getRefreshTokenByToken(refreshToken)

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const token = decodeRefreshToken(refreshToken)

    try {
        ///const user = await getUserById(token.userId)

        const user = "123"
        const { accessToken } = generateTokens(user)

        return { access_token: accessToken }

    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    }
});