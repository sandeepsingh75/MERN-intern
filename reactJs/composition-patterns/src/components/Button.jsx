import React from 'react'

const Button = ({color, text}) => {
  return (
    <button style={{backgroundColor:color ,margin:"5px 5px"}}> {text}</button>
  )
}

export default Button
