const User = require("../models/userModel.js")
const {validationResult} = require("express-validator");

// ========================== Create User ===============================
const createUser = async (req, res)=>{
    try{
        console.log("create user called")
        const validResult = validationResult(req);
        if(!validResult.isEmpty()){
            return res.status(400).json({ errors: validResult.array() })
        }

        const {name, email, age} = req.body
        // const user = await User.insertOne({ name, email, age });

        const user = await User.create({ name, email, age })
        
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid request"
            })
        }

        res.status(201).json({
            success:true,
            message: "User created successfully",
            data: user
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

// ============================ Read Users ===============================

// READ ALL
const usersList = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// ================================== Read single user  =============================
const user = async (req, res) =>{
    try{
        // const userData = await User.findOne({_id:req.params.id});
        const userData = await User.findById(req.params.id)
        
        if(!userData){
            return res.status(404).json({
                success: false,
                message:"User not found"
            })
        }
        
        res.status(200).json({
            success:true,
            data: userData
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



// ====================== Replace all data in object ====================
const replaceUserData = async (req, res) =>{
    console.log("params",req.params.id)
    try{
        const user = await User.findOneAndUpdate(
        req.params.id,
        req.body,
        {
            // new:true,
            returnDocument:"after",
            runValidators:true
        }
    );
    if(!user){
       return res.status(404).json({
            success:false,
            message: "user not found"
        })
    };

    res.status(200).json({
        success:true,
        message:"User updated successfully",
        data: user
    });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

// ======================================= Delete user ===========================================
const deleteUser = async (req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        };
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 


module.exports = {usersList, createUser,user,replaceUserData, deleteUser}