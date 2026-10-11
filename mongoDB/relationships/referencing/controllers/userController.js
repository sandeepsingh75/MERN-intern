import userModel from "../models/userModel.js";

export const createUser = async (req, res) =>{
    try{
        const {name, email, password, address, age} = req.body;
        if(!name || !email || !password || !address || !age){
            return res.status(400).json({
                success:false,
                message:"Invalid data"
            })
        }
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409).json({
                success:false,
                message:"User already exist"
            })
        }

        let response = await userModel.create({name, email, password, address, age})
        if(!response){
            return  res.status(400).json({
                success:false,
                message:"Invalid data"
            })
        }
        res.status(201).json({
            success:true,
            data:response
        })
    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

export const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
             return res.status(400).json({
                success:false,
                message:"Invalid data"
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message:"User not exist"
            })
        }
        res.status(200).json({
            success:true,
            data:user
        })
    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

export const getUsers = async (req, res)=>{
    try{
        const users = await userModel.find();
        if(!users){
            return res.status(400).json({
                success:false,
                message: "Invalid data"
            })
        }
        res.status(200).json({
            success:true,
            data: users
        }) 
    }catch(error){
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}


export const updateUser = (req, res)=>{
    res.send("update user")
}


export const deleteUser = (req, res)=>{
    res.send("delete users")
}
