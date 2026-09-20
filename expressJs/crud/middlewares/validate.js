const validate = (schema) =>{
    return (req, res, next) =>{
        const result = schema.safeParse(req.body);
        console.log("result", result)
        if(!result.success){
            return res.status(400).json({
                success:false,
                    errors: result.error.issues.map((error)=>({
                    field:error.path[0],
                    message:error.message
                }))
            })
        }
        req.body = result.data;
        next();
    }
} 
module.exports = validate;