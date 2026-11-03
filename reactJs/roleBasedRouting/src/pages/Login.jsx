import React from 'react'
import { Navigate } from "react-router-dom";

const Login = () => {

const handleLogin = (role) =>{
    // console.log("role:",role)
    localStorage.setItem("role",role);
    localStorage.setItem("loggedIn", true);
if(role === "principle"){
  <Navigate to="/principle" />
}else if(role === "sub-principle"){
  <Navigate to="/sub-principle" />
}else if(role === "teacher"){
  <Navigate to="/teacher" />
}else if(role === "student"){
  <Navigate to="/student" />
}



}
  return (
    <div style={{margin:"10px"}}>
      <button style={{margin:"0 2px"}} onClick={()=>handleLogin("principle")}>Priciple Login</button>
      <button style={{margin:"0 2px"}} onClick={()=>handleLogin("sub-principle")}>Sub-Priciple Login</button>
      <button style={{margin:"0 2px"}} onClick={()=>handleLogin("teacher")}>Teacher Login</button>
      <button style={{margin:"0 2px"}} onClick={()=>handleLogin("student")}>Student Login</button>
    </div>
  )
}

export default Login
