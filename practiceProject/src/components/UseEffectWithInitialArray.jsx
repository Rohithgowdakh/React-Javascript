import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectWithInitialArray = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Execute UseEffect!!!!!!!!!");
        
    },[])
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button type='button' onClick={handleClick}>Count</button>
    </div>
  )
}

export default UseEffectWithInitialArray