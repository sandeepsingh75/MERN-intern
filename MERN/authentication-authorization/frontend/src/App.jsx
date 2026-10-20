import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Orders from './components/Orders'
import Products from './components/Products'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
          </>
  )
}

export default App
