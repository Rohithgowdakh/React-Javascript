import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)
const Increment=()=>{
    setCount(count+=1)
}
const Decrement=()=>{
    setCount(count-1)
}
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button type='button' onClick={Increment} >Increment</button>
        <button type='button' onClick={Decrement} >Decrement</button>
    </div>
  )
}

export default Counter