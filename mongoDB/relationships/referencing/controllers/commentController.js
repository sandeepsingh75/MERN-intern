import commentModel from "../models/commentModel.js";

export const getComments = async (req, res)=>{
    try{
        const comments = await commentModel.find().populate("user post","-age -posts");
        if(!comments){
            return res.status(400).json({
                success:false,
                message:"invalid data"
            })
        }
        res.status(200).json({
            success:true,
            message:true,
            data:comments
        })

    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

export const createComment = async (req, res)=>{
    try{
        const {message, user, post} = req.body;
        if(!message || !user || !post){
            return res.status(400).json({
                success:false,
                message:"Invalid data"
            })
        }

        const comment = await commentModel.create({message, user, post});
        res.status(201).json({
            success:true,
            message:"comment created successfully",
            data:comment
        })

    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

export const updateComment = (req, res)=>{
    res.send("update comment")
}

export const deleteComment = (req, res)=>{
    res.send("delete comment")
}