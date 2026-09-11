// ================================= Application level middleware ========================
// const express = require('express');
// const app = express();
// const PORT = 5000;
// app.use((req, res, next)=>{
//     console.log("middleware executed");
//     next();
// })
// app.listen(PORT, ()=>{
//     console.log(`Server is running on port: ${PORT}`)
// })




// ==================================== Router level middleware ===========================
const express = require("express");

const app = express();
const userRouter = express.Router();

// Router-level middleware
userRouter.use((req, res, next) => {
    console.log("User router middleware executed");
    next();
});

// Routes
userRouter.get("/profile", (req, res) => {
    res.send("User Profile");
});

userRouter.get("/orders", (req, res) => {
    res.send("User Orders");
});

// Router ko app me mount karna
app.use("/users", userRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});







