import express from 'express';
import {getPosts, createPost, updatePost, deletePost} from "../controllers/postController.js";
const postRoute = express.Router();

postRoute.get("/",getPosts)
postRoute.post("/create",createPost)
postRoute.patch("/update",updatePost)
postRoute.delete("/delete",deletePost)

export default postRoute;