import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
  const [editTodoId, setEditTodoid] = useState(null);

 
  return (
    <div className="flex align-center justify-center flex-col h-screen w-screen">

     <AddTodo editTodoId={editTodoId}/>
     <Todos setEditTodoid={setEditTodoid}/>
    </div>
  )
}

export default App
