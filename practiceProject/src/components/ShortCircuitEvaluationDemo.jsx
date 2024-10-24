import React, { useState } from 'react'

const ShortCircuitEvaluationDemo = () => {
    const [data,setData]=useState('www')
    const firstResult=data || 'Welcom to OR Operator'
    const secondResult=data && 'Welcome to AND Operator'
  return (
    <div>
        <h1>First Result:{firstResult}</h1>
        <h1>Second Result:{secondResult}</h1>
    </div>
  )
}

export default ShortCircuitEvaluationDemo