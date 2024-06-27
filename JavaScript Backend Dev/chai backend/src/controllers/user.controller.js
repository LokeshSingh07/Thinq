import { asyncHandler } from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.models.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';





const registerUser = asyncHandler(async (req,res)=>{

    // get user details from request body
    const {username, email, password, fullName } = req.body;
    console.log("req.body: ", req.body);

    // validation - not empty
    if(!fullName || !username || !email || !password){
        throw new ApiError(400, "All fields are required");
    }

    // check if user already exist, if present return   - username, email
    const existedUser =  await User.findOne({
        $or: [ {username}, {email} ]
    });
    console.log("Existed user: ", existedUser);

    if(existedUser){
        throw new ApiError(409, "User with email or username already exist");
    }


    // upload coverImage & avatar on cloudinary
    console.log("req.files: ", req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    console.log(coverImage, avatar);
 
    if(!avatar){
        throw new ApiError(400, "Avatar file not uploaded");
    }


    // create an user object , insert it into db
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase(),
    });
    console.log("User: ", user);


    // remove password and refesh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refeshToken"
    )
    
    // check for user creation
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user");
    }
    
    console.log("Created User: ", createdUser);
    

    // return res
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})














export {registerUser}; 