import React, { useEffect, useState } from "react";
import useCounter from "./CustomHooks/useCounter.jsx";

const Time = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const {count, increment, decrement, reset} = useCounter();

  let showTime = () => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    h = h < 10 ? "0"+h : h
    m = m < 10 ? "0"+m : m
    s = s < 10 ? "0"+s : s
    setHours(h);
    setMinutes(m);
    setSeconds(s);

    setTimeout(showTime, 1000);
  };

  useEffect(() => {
    showTime();
  }, []);
 

  return (
    <div className="text-3xl font-bold">
      Time:{hours}:{minutes}:{seconds}
      <div>
        <h1>count:{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset }>reset</button>
      </div>
    </div>
  );
};

export default Time;
