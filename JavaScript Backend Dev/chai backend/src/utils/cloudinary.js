import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


// cloudinary config
;(()=>{
    try{
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
        });
        console.log("Cloudinary connected successfully");
    }
    catch(err){
        console.log("Cloudinary connection failed");
    }
})();



const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath){
            return res.status(404).json({
                success: false,
                message: "file path not found",
            });            
        }

        // upload the file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // file has been uloaded successfully
        console.log("File is uploaded on cloudinary succesfully: ", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    }
    catch(err){
        console.log("file not uploaded on cloudniary");
        fs.unlinkSync(localFilePath);       // remove the locally saved temp file as the upload ooperation got failed
    }
}



export {uploadOnCloudinary}