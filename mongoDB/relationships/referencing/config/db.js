import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoConn = async ()=>{
    try{
      let conn = await mongoose.connect(process.env.MONGO_URI_LOCAL);
      if(conn){
        console.log("MongoDB connected");
      }

    }catch(error){
        console.error(error.message)
    }
}

export default mongoConn;