import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='font-bold text-2xl flex justify-center'>
    <NavLink to="/" className="mx-2">Home</NavLink>
    <NavLink to="/dashboard" className="mx-2">Dashboard</NavLink>
    <NavLink to="/users" className="mx-2">Users</NavLink>
    <NavLink to="/reports" className="mx-2">Reports</NavLink>
    <NavLink to="/products" className="mx-2">Products</NavLink>  
    </nav>
  )
}

export default Header
