import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        lowercase: true,
        // required: [true, "password is required"],
    },
    isActive: {
        type: Boolean,
        required: true,
    },


},{timestamps: true});


// mongoose.model (kya model banau, kiske basics pr banau)
export const User = mongoose.model("User", userSchema);     // mongoose schema ko directly export nhi kr skte, first we need to create model 

// users  --> In mongoDB the model is store in the (plural form by adding s to the end + lowercase), standared format h