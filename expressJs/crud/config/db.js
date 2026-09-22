const mongoose = require("mongoose");

const mongoDbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
        throw error;
    }
};

module.exports = mongoDbConnect;


// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const url = process.env.MONGO_URI;

// const mongoDbConnect = async () =>{
// try{
//     await mongoose.connect(url);
//     console.log("MongoDB connected");
// }catch(error){
//     console.log("Database connection error:", error.message);
//     throw error;
// }
// }

// module.exports = mongoDbConnect;

