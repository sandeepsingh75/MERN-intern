import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate();
  useEffect(()=>{
    localStorage.removeItem("isLoggedIn");
    navigate("/login")
  },[])
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1>User Page</h1>
     
    </div>
  )
}

export default LogOut
