const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) =>{
    try{
        //Get authorization header
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                success:false,
                message:"Invalid or missing Json Web Token"
            });
        }

        // Expected
        // Bearer eyjhchekdmdld...
        const token  = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Invalid or missing Json Web Token"
            })
        }

        //Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        //Store decoded information in request
        req.user = decoded;

        next();
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = authMiddleware;