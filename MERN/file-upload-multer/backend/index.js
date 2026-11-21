
import express from 'express';
import connectDB from './src/config/db.js';

const app = express();
const PORT = 5000;

// Database connection
connectDB();

app.get("/", (req, res)=>{
    res.send("Home route")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
