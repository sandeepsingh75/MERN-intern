const express = require("express");
const dotenv = require("dotenv");
const app = express();
const helmet = require("helmet");
const rateLimit = require('express-rate-limit');

dotenv.config();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 5,                 // 100 requests
    message: {
        success: false,
        message: "Too many requests, please try again later."
    }
});

app.use(limiter);

// Helmet middleware
app.use(helmet());

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("get api called");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})