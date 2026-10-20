import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1><Link to="/login" >Login</Link></h1>
      <h1><Link to="/register" >Register</Link></h1>
      <h1><Link to="/users" >User List</Link></h1>
    </div>
  )
}

export default Home
