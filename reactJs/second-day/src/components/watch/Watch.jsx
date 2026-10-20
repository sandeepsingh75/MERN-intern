import { useState, useEffect } from "react";
import "./watch.css";

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="app">
      <h1>Analog Clock</h1>

      <div className="clock">
        {/* Clock numbers */}
        {Array.from({ length: 12 }, (_, i) => {
          const number = i + 1;
            console.log("number:",number)
          return (
            <div
              className="number"
              key={number}
              style={{
                transform: `rotate(${number * 30}deg)`,
              }}
            >
              <span
                style={{
                  transform: `rotate(-${number * 30}deg)`,
                }}
              >
                {number}
              </span>
            </div>
          );
        })}

        {/* Clock hands */}
        <div
          className="hand hour-hand"
          style={{
            transform: `rotate(${hourAngle}deg)`,
          }}
        />

        <div
          className="hand minute-hand"
          style={{
            transform: `rotate(${minuteAngle}deg)`,
          }}
        />

        <div
          className="hand second-hand"
          style={{
            transform: `rotate(${secondAngle}deg)`,
          }}
        />

        <div className="center-dot" />
      </div>

      <p className="digital-time">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default Watch;


