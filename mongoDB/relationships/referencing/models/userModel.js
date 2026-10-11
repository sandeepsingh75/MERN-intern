import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:String,
    address:String,
    age:Number,
    isAdmin:{
        type:Boolean,
        defau:false
    }
   
},{timestamps:true});

const userModel = mongoose.model('user',userSchema);

export default userModel;