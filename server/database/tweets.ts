import { prisma } from '.'

export const createTweet = (tweetData : any) => {

    prisma.tweet.create({
        data: tweetData
    })  

}