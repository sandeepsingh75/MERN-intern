import postModel from "../models/postModel.js";

export const createPost = async (req, res) =>{
    try{
        const {title, desc,imageUrl,user}  = req.body;
        if(!title || !desc || !imageUrl || !user){
            return res.status(400).json({
                success:false,
                message:"Invalid data"
            })
        }
        const post = await postModel.create({title, desc,imageUrl,user});
        if(!post){
            return res.status(404).json({
                success: false,
                message:"Invalid data"
            })
        }
        res.status(201).json({
            success:true,
            message:"Post created successfully",
            data:post
        })
    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

export const getPosts = async (req, res)=>{
    try{
        //  const post = await postModel.find().populate("user","name email address age");
        //  const post = await postModel.find().populate("user","-name -password -age -address");
        const post = await postModel.find().populate({
            path:"user",
            match:{name: "radheshyam@gmail.com"},
            select:"-password -age -address"
            
        })
        if(!post){
            return res.status(404).json({
                success: false,
                message:"Invalid data"
            })
        }
        res.status(200).json({
            success:true,
            data:post
        })
    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

export const updatePost = (req, res)=>{
    res.send("update post")
}

export const deletePost = (req, res)=>{
    res.send("delete post")
}
