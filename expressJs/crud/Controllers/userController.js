const User = require("../models/userModel.js");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ========================== Create User ===============================
const createUser = async (req, res) => {
  try {
    // console.log("create user called")
    const validResult = validationResult(req);
    if (!validResult.isEmpty()) {
      return res.status(400).json({ errors: validResult.array() });
    }

    const { name, email, password } = req.body;

    if (typeof password !== "string") {
      return res.status(400).json({
        success: false,
        message: "Password must be text",
      });
    }

    const hassedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hassedPassword,
    });
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid request",
      });
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================== Login User ============================
const userLogin = async (req, res)=>{
    console.log("login api called")
    try{

        const {email, password} = req.body;
        if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Invalid request data"
        })
    }

    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({
            success:false,
            message:"user doesn't exist"
        })
    }
    // compare password
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if(!isPasswordMatched){
        return res.status(401).json({
            success:false,
            message: "Invalid email or password"
        })
    }
    // cretae JWT token
    const token = jwt.sign(
        {
            userId:user._id,
            email:user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );


    return res.status(200).json({
        success:true,
        message:"Login successful",
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
        }
    })
}catch(error){
return res.status(500).json({
    success:false,
    message:error.message
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
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================== Read single user  =============================
const user = async (req, res) => {
  try {
    // const userData = await User.findOne({_id:req.params.id});
    const userData = await User.findById(req.params.id);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================== Replace all data in object ====================
const replaceUserData = async (req, res) => {
  console.log("params", req.params.id);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      // new:true,
      returnDocument: "after",
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================= Delete user ===========================================
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { usersList, createUser,userLogin, user, replaceUserData, deleteUser };
