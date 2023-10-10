import formidable from 'formidable';
import { createMediaFile } from '~/server/database/mediaFiles';
import { createTweet } from '~/server/database/tweets';
import { tweetTransformer } from '~/server/transformers/tweet';
import { uploadToCloudinary } from '~/server/utils/cloudinary';

export default defineEventHandler(async (event) => {

    console.log('event:', event)
    
    const form = formidable({})

    const response = await new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
        form.parse(event.req, (err: Error, fields: formidable.Fields, files: formidable.Files) => {
            if (err) {
                reject(err);
            } else {
                resolve({ fields, files });
            }
        });
    });

    const { fields, files } = response;
    const userId = event.context?.auth?.user?.id

    const tweetData = {
        authorId: userId,
        text: fields.text.toString(),
    }

    const replyTo = fields.replyTo;

    if (replyTo && replyTo !== 'null') {
        tweetData.replyToId = replyTo;
    }

    const tweet = await createTweet(tweetData)

    const filePromises = Object.keys(files).map(async key => {
        const file = files[key];

        const cloudinaryResource = await uploadToCloudinary(file[0].filepath);
        
        return createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            tweetId: tweet.authorId
        });
    })

    await Promise.all(filePromises)

    return { tweet: tweetTransformer(tweet) };
});