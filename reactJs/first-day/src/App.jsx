// import {useCallback, useState, createContext, useContext } from "react";
// // import "./App.css";
// import Component1 from "./components/Component1.jsx";
// import ControlledForm from "./components/ControlledForm.jsx";
// import ReducerHook from "./components/ReducerHook.jsx";
// import UseMemo from "./components/UseMemo.jsx";
// import UseCallback from "./components/UseCallback.jsx";
import Time from "./components/Time.jsx";

// export const CountContext = createContext();

function App() {
  // const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(0);

  // const addEvent = () => {
  //   setCount(number + 1);
  // };

  // const subTractEvent = () => {
  //   setCount(count - 1);
  // };

  // const changeCount = useCallback(() =>{
  //   setNumber(number+1)
  //   console.log("number",number)
  // },[])

  return (
    <>
     {/* <button onClick={()=>addEvent()} >+</button> */}
    {/*<button onClick={()=>subTractEvent()}>-</button>
      <CountContext.Provider value={count}>
        <Component1 count={count} />
      </CountContext.Provider> */}

      {/* <ControlledForm /> */}
      {/* <ReducerHook /> */}
      {/* <UseMemo /> */}
      {/* <h1>number:{number}</h1>
      <button onClick={changeCount}>increase</button>
      <UseCallback count={count} changeCount={changeCount}/> */}
      <Time />
       
    </>
  );
}

export default App;

// Create custom hook
export const useCountContest = () => {
  const contest = useContext(CountContext);
  return contest;
};
