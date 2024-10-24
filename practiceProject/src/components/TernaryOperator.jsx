import React from 'react'
import { useState } from 'react'

const TernaryOperator = () => {
    const[content,setContent]=useState('')
    const handleClick=()=>{
        setContent(!content)
    }
  return (
    <div>
        <h1 >{content ? "Goood Morning":"Good Night"}</h1>
        <button type='button' onClick={handleClick}>Change</button>
    </div>
  )
}

export default TernaryOperator