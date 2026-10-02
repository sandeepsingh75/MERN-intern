const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");

const handleUserSignup = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        console.log("body",req.body)
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"Invalid reequest data"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.insertOne({name,email, password:hashedPassword});
        // console.log("user", user)
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid reequest data"
            })
        }
        res.status(201).json({
            success:true,
            message:"user created successfully",
            data: user
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


const getUsers = async (req, res) =>{
try{
  const users = await User.find();
  console.log(users)
  if(!users){
    return res.status(401).json({
        success:false,
        message:false
    })
  }

  res.status(200).json({
    success:true,
    message:"Users fetched successfully",
    data:users
  })
}catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    })
}
} 

const login = async (req, res) =>{
try{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Invalid request"
        })
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User does not exist"
        })
    }
    const isPassMatched = await bcrypt.compare(password, user.password);
    if(!isPassMatched){
        return res.status(401).json({
            success:false,
            message:"Invalid credential"
        })
    }
    res.status(200).json({
        success:true,
        id:user._id,
        name:user.name
    })

}catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    })
}
}



module.exports = {handleUserSignup, getUsers, login};