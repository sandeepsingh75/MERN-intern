import React from 'react'
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = ({ allowedRoles}) => {
    const role = localStorage.getItem("role");
    const loggedIn = localStorage.getItem("loggedIn");

    console.log("roles:",role)
    console.log("loggedIn:", loggedIn);

    if(!role){
        return <Navigate to="/login" />
    }
    if(!loggedIn){
        return <Navigate to="/login" />;    
    }

    if(!allowedRoles.includes(role)){
        return <Navigate to="/unauthorized" />
    }

    return <Outlet />
 
}

export default ProtectedRoutes
