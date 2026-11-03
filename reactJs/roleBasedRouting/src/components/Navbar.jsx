import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/principle"  style={{margin:"0 5px", textDecoration:"none"}}> Principle</Link>
      <Link to="/sub-principle"  style={{margin:"0 5px", textDecoration:"none"}}> Sub-Principle</Link>
      <Link to="/teacher"  style={{margin:"0 5px", textDecoration:"none"}}> Teacher</Link>
      <Link to="/student"  style={{margin:"0 5px", textDecoration:"none"}}> Student</Link>
      <Link to="/login" style={{margin:"0 5px", textDecoration:"none"}}> Login</Link>
    </div>
  )
}

export default Navbar
