import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset, incrementByAmount} from "./features/counter/counterSlice"
import User from './components/User.jsx'

const App = () => {
const count = useSelector((state)=>state.counter.count)
const dispatch = useDispatch()
  return (
    <div>
      <h1 className='font-bold text-3xl'>Count:{count} </h1>
      <button onClick={()=>dispatch(increment())} className='border bg-blue-500 p-2 rounded-md mx-2'>Increment</button>
      <button onClick={()=>dispatch(decrement())} className='border bg-blue-500 p-2 rounded-md mx-2'>Decrement</button>
      <button onClick={()=>dispatch(reset())} className='border bg-blue-500 p-2 rounded-md mx-2'>Reset</button>
      <button onClick={()=>dispatch(incrementByAmount(5))} className='border bg-blue-500 p-2 rounded-md mx-2'>Increment by 5</button>


      <User />
    </div>
  )
}

export default App
