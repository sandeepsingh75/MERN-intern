import express from 'express';
import {getUsers, createUser, updateUser, deleteUser, loginUser} from "../controllers/userController.js"

const userRoute = express.Router();

userRoute.get("/",getUsers)
userRoute.post("/create",createUser)
userRoute.post("/login",loginUser)
userRoute.patch("/update",updateUser)
userRoute.delete("/delete",deleteUser)

export default userRoute