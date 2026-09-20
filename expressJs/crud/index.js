const dotenv = require("dotenv");
const express = require('express');
const app = express();
const mongoDbConnect = require("./config/db.js");
const userRouter = require('./Routes/userRoutes.js');
const bookRouter = require("./Routes/booksRouter.js")

dotenv.config();

const PORT = process.env.PORT || 5000;

// console.log("url", process.env.MONGO_URI)

app.use(express.json());

app.use("/users", userRouter);
app.use("/books", bookRouter)

const startServer = async () => {
    try {
        await mongoDbConnect();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server error:", error.message);
    }
};

startServer();