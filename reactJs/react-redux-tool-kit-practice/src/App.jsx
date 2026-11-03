import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0);
  const [isEditBtnCliced, setIsEditBtnClicked] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  console.log("isEditBtnCliced:",isEditBtnCliced)

  return (
    <>
    <AddTodo editTodo={editTodo} isEditBtnCliced={isEditBtnCliced}/>
    <Todos setIsEditBtnClicked={setIsEditBtnClicked} setEditTodo={setEditTodo} />
    </>
  )
}

export default App
