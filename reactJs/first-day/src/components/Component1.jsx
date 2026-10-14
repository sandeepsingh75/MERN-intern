import React, { useRef, useState } from 'react'
import Component2 from './Component2'

const Component1 = (props) => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  return (
    <div>
      
      <h1>Type in the input field</h1>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <h1> Render Count: {count.current} </h1>
      <h1>inputValue:{inputValue}</h1>

      <Component2 props={props}/>
    </div>
  )
}

export default Component1
