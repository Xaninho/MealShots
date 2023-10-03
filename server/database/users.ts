import { prisma } from './index';
import bcrypt from 'bcrypt'

export const createUser = (userData : any) => {

    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }

    return prisma.user.create({
        data: finalUserData
    })

}