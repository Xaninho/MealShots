export const tweetTransformer = (tweet: any) => {
    console.log('tweet:', tweet);
    return {
        id: tweet.id,
        text: tweet.text,
    }

}