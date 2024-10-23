import React from 'react'
import { useEffect } from 'react'

const UseEffectHooks = () => {
    useEffect(()=>{
        console.log("Executing useEffect!!!")
    })
  return (
    <div>
        <h1>Use Effect!!!</h1>
    </div>
  )
}

export default UseEffectHooks