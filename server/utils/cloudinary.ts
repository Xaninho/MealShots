import {v2 as cloudinary, UploadApiResponse} from 'cloudinary';

export const uploadToCloudinary = async (file: any) => {
    return new Promise<UploadApiResponse>((resolve, reject) => {
        
        const config = useRuntimeConfig();

        cloudinary.config({
            cloud_name: config.cloudinaryCloudName,
            api_key: config.cloudinaryApiKey,
            api_secret: config.cloudinaryApiSecret
        });
        
        cloudinary.uploader.upload(file, (error: Error, result: UploadApiResponse) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });

    })
}