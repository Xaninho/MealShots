import { tweetTransformer } from '~/server/transformers/tweet';
import { getTweets } from '~~/server/database/tweets'


export default defineEventHandler(async (event) => {
    const { query } = useQuery(event)
    
    const prismaQuery = await getTweets({
        include: {
            author: true,
            mediaFiles: true,
            replies: {
                include: {
                    author: true
                }
            },
            replyTo: {
                include: {
                    author: true
                }
            }
        },
        orderBy: [
            {
                createdAt: 'desc'
            }
        ]
    });

    if (!!query) {
        primsaQuery = {
            ...primsaQuery,
            where: {
                text: {
                    contains: query
                }
            }
        }
    }

    const tweets = await getTweets(primsaQuery)
    
    return {
        tweets: tweets.map(tweetTransformer)
    }

})