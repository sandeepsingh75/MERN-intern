import React from 'react'
import { useCountContest } from '../App'

const Component4 = () => {
    const count = useCountContest()
  return (
    <div>
      <h2>Component:{count}</h2>
    </div>
  )
}

export default Component4
