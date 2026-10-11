import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser, userLogin } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { authorizeRole } from '../middleware/roleMiddleware.js';

const userRouter = express.Router();

userRouter.get("/",authMiddleware, authorizeRole("admin","manager","user"), getUsers)
// userRouter.get("/:id", authMiddleware, authorizeRole("admin"), getUser)
userRouter.post("/create",createUser)
userRouter.put("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login", userLogin)


// Manager Router
userRouter.get("/manager",authMiddleware,  authorizeRole("admin", "manager"),(req, res)=>{
    res.send("Manager Router");
})

// Admin Router
userRouter.get("/admin",authMiddleware, authorizeRole("admin"), (req, res)=>{
    res.send("Admin Router");
})

export default userRouter;