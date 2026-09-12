// const express = require("express");
// const app = express();
// app.use(express.json());
// // Route
// app.get("/user/:id", (req, res, next) => {
//     const userId = req.params.id;
//     // Suppose user does not exist
//     if (userId !== "1") {

//         const error = new Error("User not found");

//         error.statusCode = 404;
//         error.errorCode = "USER_NOT_FOUND";

//         return next(error);
//     }

//     res.status(200).json({
//         success: true,
//         data: {
//             id: 1,
//             name: "Sandeep"
//         }
//     });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {

//     console.log("Error:", err.message);

//     res.status(err.statusCode || 500).json({
//         success: false,
//         errorCode: err.errorCode || "SERVER_ERROR",
//         message: err.message
//     });
// });

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });


const express = require('express');
const app = express();

app.use(express.json());

app.get("/user/:id", (req, res, next)=>{
    
    const id = req.params.id;
    if(id !== '1'){
        const error = new Error("User not found");
        error.statusCode = 404;
        error.errorCode='User_Not_Found';
        error.message="user doesn't exist";
        return next(error)
    }

    res.status(200).json({
        success: true,
        data: {
            id: 1,
            name: "Sandeep"
        }
    });
})

app.use((err, req, res, next)=>{
    console.log(err.message);
    res.status(err.statusCode || 500).json({
        success:false,
        errorCode: err.errorCode || "Server Error",
        message:err.message
    })
})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})