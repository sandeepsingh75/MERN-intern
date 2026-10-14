import React, { useState } from 'react'
import Component3 from './Component3';
import { useCountContest } from '../App';
// import { useContext } from 'react'
// import { CountContext } from '../App';

const Component2 = (props) => {
    //  console.log("props:",props)
    // const count =  useContext(CountContext);
    const count = useCountContest()
    const [loggedin, setLoggedin] = useState(false);
    function loggedinhandler(){
      setLoggedin(!loggedin)
    }
  return (
    <div>
      {/* <h1> component
         {props.props.count}</h1>
         <h2>next:{count}</h2> */}
         <h2> count:{count}</h2>
          <button onClick={()=> loggedinhandler()}> {loggedin ? "logout" : "login"} </button>
         <h2>{loggedin ? "Conditional rendering" : ""} </h2>

         <Component3 />

    </div>
  )
}

export default Component2
