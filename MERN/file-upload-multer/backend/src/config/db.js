


import { connect } from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
    dotenv.config();
    console.log("uri:", process.env.MONGO_URI)
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;