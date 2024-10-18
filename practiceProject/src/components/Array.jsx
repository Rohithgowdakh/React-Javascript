import React from 'react'

const Colors = () => {
    const colors=["red","Green","Blue","Pink"]
  return (
    <ol>
        {
            colors.map((color)=>
                (
                    <li key={color}>{color}</li>  
                )
            
            )
        }
    </ol>
  )
}

export default Colors