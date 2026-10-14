import React, { useReducer } from "react";

const ReducerHook = () => {

  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
        break;
      case "DECREMENT":
        return { count: state.count - 1 };
        break;
      case "RESET": {
        return { count: (state.count = 0) };
        break;
      }
      default:
        return { count: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log("count:", count)
  return (
    <div>
      <h1> useReducer hook </h1>
      <h1> count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};

export default ReducerHook;
