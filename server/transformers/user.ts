import { prisma } from "../database"

export const userTransformer = (user: any) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
    }
}

export const getUserByUsername = (username : any) => {

    return prisma.user.findUnique({
        where: {
            username
        }
    })

}


export const getUserById = (userId : any) => {
    
    return prisma.user.findUnique({
        where : {
            id: userId
        }
    })
    
}