import express from "express";
import dotenv from "dotenv";
import mongoConn from "./config/db.js";
import postRoute from "./routes/postRoute.js";
import userRoute from "./routes/userRoute.js";
import commentRoute from "./routes/commentRoute.js";

dotenv.config();

const app = express();

mongoConn();

app.use(express.json());
app.use("/posts",postRoute)
app.use("/users",userRoute)
app.use("/comments",commentRoute)

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("get api called");
});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});