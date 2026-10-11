import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: false,
  },
  // parentComment: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "comment",
  //   required: false,
  // },
});

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
