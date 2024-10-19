import React from 'react'

const Colors1 = () => {
    const colors=["red","Blue","Pink"]
  return (
    <div>
        <ul>
        {
            colors.map((color)=>{
                return(
                    <li key={color}>{color}</li>
                )    
            })
        }
        </ul>
    </div>
  )
}

export default Colors1