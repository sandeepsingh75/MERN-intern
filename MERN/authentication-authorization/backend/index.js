import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import {mongoConnection} from "./config/db.js"


dotenv.config();
const app = express();
const PORT = process.env.PORT ||5001;

mongoConnection();

app.use(express.json());
app.use(cors());
// app.use(cookieParser());
app.use("/users",userRouter);

app.listen(PORT, ()=>{
    console.log(`Server is on port: ${PORT}`)
})