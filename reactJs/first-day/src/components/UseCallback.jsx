import React, { memo } from 'react'

const UseCallback = (props) => {
    console.log("UseCallback rendered")
  return (
    <div>
      <h1> Use Callback {props.count} </h1>
      <button onClick={props.changeCount}>Change Me</button>
    </div>
  )
}

export default memo(UseCallback)
