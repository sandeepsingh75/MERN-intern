import React ,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice.js';
import {useSelector} from 'react-redux';

const AddTodo = (props) => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([])
    const dispatch = useDispatch();
    // const todoList = useSelector(state => state.todos);
    // useEffect(()=>{
    //     setTodos(todoList)
    // },[todoList])
    // console.log("todos:", todos)
    // console.log("props.editTodoId:", props.editTodoId)

    // useEffect(()=>{
    //     const todo = todos.filter((todo)=>todo.id === props.editTodoid)[0];
    //     setInput(todo)
    //     // console.log("todo:", todo)
    // },[props.editTodoId])

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <div className="flex align-center justify-center flex-col ">
      <h1 className="text-3xl font-bold mb-4">AddTodo</h1>
      <form onSubmit={addTodoHandler}>
        <input type="text" placeholder="Enter a todo" value={input} onChange={(e)=>setInput(e.target.value)} className="bg-black text-white placeholder:text-gray-400 placeholder:font-bold border border-gray-600  p-1" />
        <button type="submit" className='bg-blue-500 text-gray ml-2 p-1'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
