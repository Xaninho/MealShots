import { prisma } from '.'

export const createTweet = (tweetData : any) => {
    return prisma.tweet.create({
        data: tweetData
    })
}

export const getTweets = (params : any) => {
    return prisma.tweet.findMany({
        ...params
    })
}