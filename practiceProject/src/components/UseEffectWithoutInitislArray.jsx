import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectWithoutInitislArray = () => {
    const[count,setCount]=useState(0)
   useEffect(()=>{
    console.log("Execute useEffect");
    
   })
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button type='button' onClick={handleClick} >Count</button>
    </div>
  )
}

export default UseEffectWithoutInitislArray