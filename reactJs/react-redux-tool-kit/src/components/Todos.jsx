import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from "../features/todo/todoSlice.js";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todos = (props) => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
//   console.log("todos:", todos);



  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Todos</h1>
      {
        todos?.map((todo)=>(
            <li key={todo.id} className="flex justify-between items-center mb-2 bg-black text-white p-2 w-1/2">
                {todo.text}
                <div className="flex">
                <FaEdit className="text-blue-500 text-3xl mx-2" onClick={()=>props.setEditTodoid(todo.id)}/>
                <MdDelete size="2rem" onClick={()=> dispatch(removeTodo(todo.id))} className="text-red-600"/>
                </div>
            </li>
        ))
      }
    </div>
  )
}

export default Todos
