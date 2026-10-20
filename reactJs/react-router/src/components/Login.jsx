import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate(); 
 const handleLogin = () => {
    // Demo login only
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1>Login Page</h1>
      <button onClick={handleLogin} className='bg-slate-500 border-b-white-500 p-2 rounded-md'>Login</button>
     
    </div>
  )
}

export default Login
