import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    console.log("backend:", req.body);
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid request data",
      });
    }
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "User already exist.",
      });
    }
    // console.log("body:", req.body);s
    let newPassword;
    if (typeof password !== String) {
      newPassword = String(password);
    }
    const hashedPassword = await bcrypt.hash(newPassword || password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid data.",
      });
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }
    res.status(200).json({
      success: true,
      message: "data fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }

    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    const matchPass = await bcrypt.compare(password, existingUser.password);
    if (!matchPass) {
      return res.status(401).json({
        success: false,
        message: "Password doesn't exist",
      });
    }
    // Generate access token
    const accessToken = jwt.sign(
      {
        userId: existingUser._id,
        role: existingUser.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      {
        _id: existingUser._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      },
    );
    // console.log("existingUser:", existingUser)
    // Save refresh token in database
    existingUser.refreshToken = refreshToken;
    await existingUser.save({ validateBeforeSave: false });

    // send refresh token in HttpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      accessToken,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================== Re-Generate Access Token ====================
export const refreshAccessToken = async (req, res) => {
  const incommingRefreshToken =
  req?.cookies?.refreshToken || req?.body?.refreshToken;
  
  if (!incommingRefreshToken) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized request",
    });
  }
  
  try {
    // console.log("incommingRefreshToken:",incommingRefreshToken)
    // console.log("refresh secret:",process.env.REFRESH_TOKEN_SECRET)
    const decodedToken = jwt.verify(
      incommingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await userModel.findById(decodedToken?._id);
    console.log("user:",user)
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    if (incommingRefreshToken !== user?.refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token is expired or used",
      });
    }
    const options = {
      httpOnly: true,
      secure: true,
    };

    // Generate access token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      },
    );

    // Generate refresh token
    const newRefreshToken = jwt.sign(
      {
        _id: user._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("refreshToken", newRefreshToken,options);

    res.status(200).json({
      success: true,
      message: "New Access token generated.",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
