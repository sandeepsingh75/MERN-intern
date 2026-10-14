import React, { useState } from 'react'

const ExpensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return <p> count:{num} </p>
};



const UseMemo = () => {
    const [count, setCount] = useState(0);  
  return (
    <div>
      <ExpensiveCalculation />
      <button onClick={()=>setCount(count+1)} >re-render Parent</button>
      <p> Parent Re-render count: {count} </p>
    </div>
  )
}

export default UseMemo
