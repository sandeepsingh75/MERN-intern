const express = require("express");
const { handleUserSignup, getUsers } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signUp", handleUserSignup);

userRouter.get("/",getUsers);

module.exports = userRouter;