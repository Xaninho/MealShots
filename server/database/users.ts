import { prisma } from './index';

const createUser = (userData : any) => {

    return prisma.user.create({
        data: userData
    })

}

export { createUser }