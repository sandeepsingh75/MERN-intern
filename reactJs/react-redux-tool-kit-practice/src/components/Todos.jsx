import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteTodo } from "../features/todo/todoSlice"

const Todos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todo.todos)

   const editBtnHandler =(todo) =>{
    props.setEditTodo(todo);
    props.setIsEditBtnClicked(true);
   }
  return (
    <div>
      <h1>Todo List</h1>
        {
            todos.map((todo, index)=>(
                <ul key={index} style={{display:"flex", justifyContent:"space-around" ,listStyle:"none"}}>
                    <li>{index}</li>
                    <li>{todo.text}</li>
                    <li>
                        <button style={{margin:"0 10px"}} onClick={()=>editBtnHandler(todo)}>Edit</button>
                        <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                </ul>
            ))
        }
    </div>
  )
}

export default Todos
