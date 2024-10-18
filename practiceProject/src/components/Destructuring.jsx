import React from 'react'

const Destructuring = (Props) => {
const {age,name}=Props
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Destructuring