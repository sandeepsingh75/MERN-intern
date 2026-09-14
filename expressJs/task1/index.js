const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use(express.json());

// ================================= req.body ==========================================
app.post("/user",(req, res)=>{
    console.log(req.body)
    let personName = req.body.name;
    let age = req.body.age;
    // res.send(`<h1>My name is ${name} and age is ${age}</h1>`)
    res.json({name:personName,age})
})


// ======================================= req.query =============================
app.get("/product", (req, res)=>{
    console.log(req.query)
    res.send(`<h1> User search for   ${req.query.search} limit ${req.query.limit}</h1>`)
})

// =========================== req.params ===================================
// app.get("/:name/:city",(req, res)=>{
//     let name = req.params.name;
//     let city = req.params.city;
//     console.log({name, city})
//     res.json({name, city});
// });
app.post("/",(req, res)=>{
    res.json({type:"POST"});
})
app.put("/",(req, res)=>{
    res.json({type:"PUT"});
})
app.patch("/",(req, res)=>{
    res.json({type:"patch"});
})
app.delete("/",(req, res)=>{
    res.json({type:"DELETE"});
})

app.listen(PORT, ()=>{
console.log(`Server is running on port: ${PORT}`)
})