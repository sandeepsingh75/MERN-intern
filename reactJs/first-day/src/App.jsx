import { useState, createContext, useContext } from "react";
import "./App.css";
import Component1 from "./components/Component1.jsx";
import ControlledForm from "./components/ControlledForm.jsx";
import ReducerHook from "./components/ReducerHook.jsx";
import UseMemo from "./components/UseMemo.jsx";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const addEvent = () => {
    setCount(count + 1);
  };

  const subTractEvent = () => {
    setCount(count - 1);
  };

  return (
    <>
    {/* <button onClick={()=>addEvent()} >+</button>
    <button onClick={()=>subTractEvent()}>-</button>
      <CountContext.Provider value={count}>
        <Component1 count={count} />
      </CountContext.Provider> */}

      {/* <ControlledForm /> */}
      {/* <ReducerHook /> */}
      <UseMemo />
    </>
  );
}

export default App;

// Create custom hook
export const useCountContest = () => {
  const contest = useContext(CountContext);
  return contest;
};
