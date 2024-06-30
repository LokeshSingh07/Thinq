import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js'
import jwt from 'jsonwebtoken';
import { User } from '../models/user.models.js';



export const verifyJWT = asyncHandler(async(req, _, next)=> {
    try {
        const accessToken = await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if(!accessToken){
            return next(new ApiError(404, "Unauthorized request or token not found"));
        }
    
        // verify jwt token 
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken).select("-password -refreshToken");
    
        if(!user){
            // TODO: discuss about frontend
            throw new ApiError(401, "Invalid Access Token");
        }
    
        req.user = user;
    
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
})