import React from 'react'

const Btn = ({text, handleChance}) => {
  return (
    <button onClick={()=> handleChance(text)}>{text}</button>
  )
}

export default Btn