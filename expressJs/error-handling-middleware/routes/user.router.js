const express = require('express');
const router = express.Router();


const login = (req, res, next) =>{
    console.log("Middleware1");
    next();
}

const coursebuy = (req, res, next) =>{
    console.log("Middleware2");
    next();
}



router.get('/', login, userController.getUser);
router.get(':id',login, coursebuy, userController.getUserWithId);

module.exports = router;