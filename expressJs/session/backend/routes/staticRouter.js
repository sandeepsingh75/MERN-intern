const express = require("express");
const router = express.Router();

router.get("/signup",(req, res)=>{
    return res.render("signup", {
        name:"Sandeep Singh",
        email:"sandeep@example.com"
    })
})

module.exports = router;