export const authorizeRole = (...allowerdRoles) =>{
    return (req, res, next) =>{
        if(!allowerdRoles.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                message: "Access denied: insufficient permissions"
            })
        }
        next();
    }
}
