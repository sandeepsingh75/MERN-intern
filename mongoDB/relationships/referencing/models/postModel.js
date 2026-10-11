import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:String,
    desc:String,
    imageUrl:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

const postModel = mongoose.model('post',postSchema);

export default postModel;