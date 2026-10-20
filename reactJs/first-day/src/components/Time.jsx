import React, { useEffect, useState } from "react";

const Time = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
    </div>
  );
};

export default Time;
