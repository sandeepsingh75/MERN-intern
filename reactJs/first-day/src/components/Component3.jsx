import React from 'react'
import Component4 from './Component4'
import { useCountContest } from '../App'

const Component3 = () => {
    const count = useCountContest()
  return (
    <div>
        <h2>3.Component:{count}</h2>
      <Component4 />
    </div>
  )
}

export default Component3
