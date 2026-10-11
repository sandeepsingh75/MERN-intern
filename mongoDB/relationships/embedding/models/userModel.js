import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
});

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:addressSchema         //embedded relationship

    // address:[addressSchema]       //embedded array of documents
});

const User = mongoose.model("user", userSchema);

export default User;