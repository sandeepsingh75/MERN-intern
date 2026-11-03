import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if(props.isEditBtnCliced){
        dispatch(editTodo({
            id:props.editTodo.id,
            text:todo
        }))
    }else{   
        dispatch(addTodo(todo));
    }
        setTodo("");
  };

  const onchangeHandler = (e) => {
    setTodo(e.target.value);
  };

  console.log("props:", props)
  useEffect(()=>{
    setTodo(props.editTodo?.text || "")
  },[props.isEditBtnCliced, props.editTodo])

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a todo"
          onChange={onchangeHandler}
          value={todo || ""}
        />
        <button type="submit" style={{ margin: "0 10px" }}>
         {props.isEditBtnCliced ? "Edit Todo" : "Add Todo"} 
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
