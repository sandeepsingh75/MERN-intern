import mongoose from "mongoose";
import dotenv from  'dotenv';

dotenv.config();

export const mongoConnection = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL);
        if(conn){
            console.log("MongoDB connected");
        }
    }catch(error){
        console.log(error.message)
    }
}