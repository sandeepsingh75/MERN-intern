const express = require("express");
const server = express();
const PORT = 5000;

// server.use((req,res,next)=>{
//     // const token = req.headers.authorization;
//     const params = req.params
//     console.log("params:", params)
//     if(token === 123){
//         next();
//     }
// })

server.get("/",(req, res)=>{
    res.json({type:"GET"})
})
server.post("/",(req,res)=>{
        res.json({type:"POST"})
})
server.put("/", (req,res)=>{
    res.json({type:"PUT"})
})
server.patch("/", (req,res)=>{
    res.json({type:"PATCH"});
})
server.delete("/", (req,res)=>{
    res.json({type:"DELETE"});
})
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})