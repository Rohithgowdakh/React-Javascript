import React from 'react'
import { useState } from 'react'

const ShortCircuitEvaluation = () => {
    const[content,setContent]=useState('')
    const handleClick=()=>{
        setContent(!content)
    }
  return (
    <div>
        <h1 >{content && 'This is the first module display'}</h1>
        <button type='button' onClick={handleClick}>Change</button>
    </div>
  )
}

export default ShortCircuitEvaluation