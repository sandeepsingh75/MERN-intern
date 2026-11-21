import mongoose, { mongo } from "mongoose";


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)

const userModel = mongoose.model("user", userSchema);

export default userModel;