import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.models.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import jwt from 'jsonwebtoken'





const generateAccessAndRefreshTokens = async(userId) => {
    try{
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        console.log(user);
        await user.save({ validateBeforeSave: false });
        
        return {accessToken, refreshToken};

    }
    catch(err){
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}



const registerUser = asyncHandler(async (req,res)=>{

    // get user details from request body
    const {username, email, password, fullName } = req.body;
    // console.log("req.body: ", req.body);

    // validation - not empty
    if(!fullName || !username || !email || !password){
        throw new ApiError(400, "All fields are required");
    }

    // check if user already exist, if present return   - username, email
    const existedUser =  await User.findOne({
        $or: [ {username}, {email} ]
    });
    // console.log("Existed user: ", existedUser);

    if(existedUser){
        throw new ApiError(403, "User with email or username already exist");
    }


    // upload coverImage & avatar on cloudinary
    // console.log("req.files: ", req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    // console.log(coverImage, avatar);
 
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
    // console.log("User: ", user);


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




const loginUser = asyncHandler(async (req,res)=> {
    // get user details from req body
    // validation
    // check if user already exist or not
    // check password
    // generate accessToken & refreshToken
    // create an entry of refreshToken in db
    // send cookie as response

    const {email, username, password} = req.body;

    if(!username && !email){
        throw new ApiError(400, "username or email is required");
    }
    if(!password){
        throw new ApiError(400, "password is required");
    }


    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!existedUser){
        throw new ApiError(404, "User is not registered");
    }


    const isPassworValid = await existedUser.isPasswordCorrect(password);

    if(!isPassworValid){
        throw new ApiError(401, "Invalid user credentials");
    }

    
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(existedUser._id);

    const loggedInUser = await User.findById(existedUser._id)
    .select("-password -refreshToken");


    const options = {
        httpOnly: true,     // cookie is managed by backend
        secure: true,
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {user: loggedInUser, accessToken, refreshToken},
            "User logged in successfully"
        )
    )

})




const logoutUser = asyncHandler(async(req,res) => {
    const userId = req.user._id;
    console.log("UserId: ", userId);

    await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {new: true}
    )

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, "User logged out successfully")
    )

})




const refreshAccessToken = asyncHandler(async(req,res)=> {
    // get refresh Token from user
    // validation
    // check refresh token is valid or not (check expired or not)
    // genertate refresh and access token
    // send cookie

    const incomingRefreshToken  = req.cookies.refreshToken || req.body.refreshToken || req.header("Authorization")?.replace("Bearer ", "");

    if(!incomingRefreshToken){
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(
        incomingRefreshToken, 
        process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    
    if(!user){
        throw new ApiError(401, "Invalid refresh token");
    }

    if(incomingRefreshToken !== user?.refreshToken){
        throw new ApiError(401, "refresh token is expired or used");
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {accessToken, refreshToken},
            "Access token refreshed",
        ) 
    )



})




const changeCurrentPassword = asyncHandler(async(req,res)=> {
    const {oldPassword, newPassword} = req.body;
    
    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid old password");
    }

    user.password = newPassword;
    await user.save({validateBeforeSave: false});

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Password changes successfully",
        )
    )
})




const getCurrentUser = asyncHandler(async(req,res)=> {
    const user = await User.findById(req.user?._id)
    .select("-password -refreshToken");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user,
            "user details fetched successfully",
        )
    )
})




const updateAccountDetails = asyncHandler(async(req,res)=> {
    const {fullName, email} = re.body;

    if(!fullName || !email){
        throw new ApiError(400, "All fields are required");
    }


    const user = await User.findByIdAndDelete(
        req.user?._id,
        {
            $set: {
                fullName,
                email,
            }
        },
        {new: true}
    )
    .select("-password -refreshToken")

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Account details update successfully")
    )
})




const updateUserAvatar = asyncHandler(async(req,res)=> {
    const avatarLocalPath = req.file?.avatar[0]?.path;      // req.file?.-----  bcz single file leni h

    if(!avatarLocalPath){
        throw new ApiError(401, "Avatar file is missing")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if(!avatar){
        throw new ApiError(400, "Error while uploading avatar file on uploaded");
    }

    // TODO: delete old image

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                avatar: avatar?.url,
            }
        },
        {new: true}
    )
    .select("-password -refreshToken");


    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Avatar Image update successfully")
    )
})




const updateUserCoverImage = asyncHandler(async(req,res)=> {
    const coverImageLocalPath = req.file?.coverImage[0]?.path;      // req.file?.-----  bcz single file leni h

    if(!coverImageLocalPath){
        throw new ApiError(401, "Cover Image file is missing")
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if(!coverImage){
        throw new ApiError(400, "Eror while uploading coverImage file on uploaded");
    }

    // TODO: delete old image

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                coverImage: coverImage?.url,
            }
        },
        {new: true}
    )
    .select("-password -refreshToken");


    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "coverImage update successfully")
    )
})




const getUserChannelProfile = asyncHandler(async(req,res)=> {
    const {username} = req.params; // url se channerl name extract krnge

    if(!username?.trim()){
        throw new ApiError(400, "Username is missing");
    }

    const channel = await User.aggregate([
        // stage1 - (pipeline)
        {
            $match: {
                username: username?.toLowerCase(),
            }
        },
        // stage2:
        {
            $lookup: {
                from: "Subscription",
                localField: "_id",
                foreignField: "channel",        // kitne subscriber h -> channel select krne pr subscriber milenge
                as: "subscribers"
            }
        },
        // stage3:
        {
            $lookup: {
                from: "Subscription",
                localField: "_id",
                foreignField: "subscriber",        // kitne channel subscribed kre h -> subsciber select krne pr channel milenge
                as: "subscribedTo"
            }
        },
        // stage4: original document (User) me field add krni h
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers",
                },
                channelsSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: {$in: [req.user?._id, "$subscribers.subscriber"]},
                        then: true,
                        else: false
                    }
                }
            }
        },
        // stage5: what field i need to give
        {
            $project: {
                username: 1,
                fullName: 1,
                subscribersCount: 1,
                channelsSubscribedToCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
            }
        }
    ])

    // console.log(channel);

    if(!channel?.length){
        throw new ApiError(400, "Channel does not exists");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {channelDetails: channel[0]},
            "User channel fetched successfully",
        )
    )
})




// 









export { 
    registerUser, 
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,

}; 