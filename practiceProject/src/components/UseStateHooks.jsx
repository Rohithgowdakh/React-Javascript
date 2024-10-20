import React, { useState } from 'react'

const EventDemo2 = () => {
    const [text,setText]=useState("Rohith is Full stack Developer")
    const handleChange=()=>{
        if(text==="Rohith is Full stack Developer"){
            setText("Rohith is web developer")
        }else{
            setText("Rohith is Full stack Developer")
        }
       
    }
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={handleChange}>Change Title</button>
    </div>
  )
}

export default EventDemo2