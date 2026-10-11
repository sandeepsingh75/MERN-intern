import mongoose from "mongoose";

const mongoConn = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log("MongoDB connected");
        }
    }catch(error){
        console.log(error.message)
    }
}

export default mongoConn;