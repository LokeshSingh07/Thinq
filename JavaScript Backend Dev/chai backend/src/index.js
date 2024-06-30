// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';


// import mongoose from "mongoose";
// import {DB_NAME} from './constants';
import { app } from "./app.js"
import { connectDB } from "./db/db.js";


dotenv.config({
    path: '.env'
})


const PORT = process.env.PORT || 4000;


connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at PORT ${PORT}\n`)
    })
})
.catch((e)=>{
    console.log("MONGO DB connection failed !!!", e);
})








/*
import express from "express";
const app = express();



(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("Err: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on PORT ${PORT}`);
        });
    }   
    catch(err){
        console.error("ERROR: ", err);
        throw err;
    }
})()
*/
