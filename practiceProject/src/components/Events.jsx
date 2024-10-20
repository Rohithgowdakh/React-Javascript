import React from 'react'

const EventDemo1 = () => {
    const handleClick=()=>{
        alert("This is a sample alert!!!")
    }
  return (
    <div>
        <button onClick={handleClick}>Click Alert</button>
    </div>
  )
}

export default EventDemo1