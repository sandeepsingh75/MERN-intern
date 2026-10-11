import express from 'express';
import { createComment, deleteComment, getComments, updateComment } from '../controllers/commentController.js';

const commentRoute = express.Router();

commentRoute.get("/",getComments)

commentRoute.post("/create", createComment)

commentRoute.patch("/update", updateComment)

commentRoute.delete("/delete", deleteComment)

export default commentRoute;