import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='containner flex justify-between items-center h-15 bg-slate-300 px-5'>
      <div className="text-3xl font-bold">Logo</div>
      <div className="">
        <Link to="/" className='mx-5 font-bold text-lg'>Home</Link>
        <Link to="/about" className='mx-1 font-bold text-lg'>About</Link>
        <Link to="/users" className='mx-1 font-bold text-lg'>Users</Link>
        <Link to="/manager" className='mx-1 font-bold text-lg'>Manager</Link>
        <Link to="/admin" className='mx-1 font-bold text-lg'>Admin</Link>
        <Link to="/collage" className='mx-1 font-bold text-lg'>Collage</Link>
      </div>
      <div className="actions">
        <Link to="/login"><button className='mx-2 font-bold border bg-blue-500 px-2 py-1 rounded-full'> Login </button></Link>
        <Link to="/register"><button className='mx-2 font-bold border bg-blue-500 px-2 py-1 rounded-full'> Register </button></Link>
        <Link to="/logout"><button className='ml-2 font-bold border bg-blue-500 px-2 py-1 rounded-full'> Log Out</button> </Link>
      </div>
    </div>
  )
}

export default Navbar
