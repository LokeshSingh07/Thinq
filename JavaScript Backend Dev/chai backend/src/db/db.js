import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


export const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connecte!! DB HOST: ${connectionInstance.connection.host}`);
    }   
    catch(err){
        console.log('MONGODB connection failed ', err);
        process.exit(1);
    }
}


// exports.connectDB = ()=>{}       // type: common.js 