import express from "express";
import dotenv from 'dotenv';
import mongoConn from "./config/db.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoConn();

app.use(express.json());
app.use("/users",userRouter);

app.get("/",(req, res)=>{
    res.send("get request")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`)
})