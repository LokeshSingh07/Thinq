import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();



// --------- Middlewares ---------  

// allow origin to send req         // app.use()    to config middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16kb"}));        // accept json req
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("pubic"));
app.use(cookieParser());






// routes import
import userRouter from './routes/user.routes.js';



// routes declaration
app.use("/api/v1/users", userRouter);




export { app };