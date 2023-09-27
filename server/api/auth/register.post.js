import {sendError} from "h3"
import { createUser } from "../../database/users.ts"


export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const { username, email, password, repeatPassword, name } = body

    if (!username || !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Missing required fields"}))
    }

    if (password !== repeatPassword) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Passwords do not match"}))
    }

    const userData = {
        username,
        email,
        password,
        name
    }

    const user = await createUser(userData)
    console.log(user)

    return {
        body: body
    }

})