import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='font-bold flex justify-center'>
      {/* <h1>Header</h1> */}
      <Link to="/" className='mx-2'>Home</Link>|
      <Link to="/about" className='mx-2'>About</Link>|
      <Link to="/contact" className='mx-2'>Contact</Link>|
      <Link to="/rq" className='mx-2'>ReactQuery</Link>|
      <Link to="/infinite" className='mx-2'>InfiniteScrolling</Link>
    </div>
  )
}

export default Header
