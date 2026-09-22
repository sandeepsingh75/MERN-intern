const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const app = express();
const mongoDbConnect = require("./config/db.js");
const userRouter = require('./Routes/userRoutes.js');
const bookRouter = require("./Routes/booksRouter.js")

dotenv.config();

const allowOrigins = (process.env.CORS_ORIGIN  || '').split(",").map(s => s.trim()).filter(Boolean)
const originIsAllowed = origin => allowOrigins.includes(origin);

app.use(express.json());

app.use((req, res, next) =>{
    res.setHeader("Vary","Origin");
    next()
})

app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(originIsAllowed(origin)) return callback(null, true);
        callback(new Error("CORS origin denied"));
    },
    credentials:true,
    methods:['GET','POST','PUT','PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['X-Rate-Remaining'],
    optionsSuccessStatus: 204,
    maxAge:600
}));

app.use((error, req, res, next)=>{
    if(error && error.message === "CORS origin denied") return res.status(403).send("CORS denied");
    next();
})




const PORT = process.env.PORT || 5000;

// console.log("url", process.env.MONGO_URI)


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