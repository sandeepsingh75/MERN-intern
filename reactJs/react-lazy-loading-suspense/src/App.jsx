import { lazy, useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import Users from './components/Users'
const Users = lazy(()=> import("./components/Users"))

function App() {
  const [load, setLoad] = useState(false)

  return (
    <>
    <h1>Lazy Loading</h1>
    {
      load ?<Suspense fallback={<h2>loading...</h2>}> <Users /> </Suspense> : null 
    }
    
    <button onClick={()=>setLoad(!load)}> Load Users </button>


      {/* <h1> React lazy loading example </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" style={{margin:"0 10px"}}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <hr/>

      <Suspense fallback={ <h2 className='textAlign:"center"'> Please wait... Loading Page</h2> }>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense> */}
    </>
  )
}

export default App
