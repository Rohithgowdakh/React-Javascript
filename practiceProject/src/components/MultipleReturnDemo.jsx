import React, { useState } from 'react'

const MultipleReturnDemo = () => {
    const[show,setShow]=useState(false)
    if(show)
    {
        return<h1>Welcom First Return</h1>
    }
  return (
    <div>
        <h1>Welcome inside Second Return </h1>
    </div>
  )
}

export default MultipleReturnDemo