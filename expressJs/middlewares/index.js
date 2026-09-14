// const express = require('express');
// const app = express();

// app.use(express.json())

// // ============================= Application level middleware ==========================
// // app.use((req, res, next)=>{
// //     console.log("application level");
// //     next();
// // })

// // ============================= Router level middleware ===============================
// const routerMiddleware = (req, res, next) =>{
//     console.log("router middleware");
//     next();
// }


// // ==============  use middleware in a perticular route =============================
// app.get("/", routerMiddleware,(req, res)=>{
//     res.send("response datas")
// })

// app.get("/persion", (req, res)=>{
//     res.send("Persion's data");
// })

// app.listen(5100,()=>{
//     console.log("Server is running on port 5100.")
// })


const express = require("express");
const app = express();
const userRouter = express.Router();


app.use(express.json());

userRouter.use((req, res, next)=>{
    console.log("userRouter middleware");
    next();
})

userRouter.get("/person", (req, res)=>{
    res.send("person data");
})
userRouter.get("/card", (req, res)=>{
    res.send("card data")
})

app.use("/", userRouter)

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})