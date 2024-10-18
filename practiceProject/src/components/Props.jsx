import React from 'react'

const PropsEmployee = (Props) => {
  return (
    <>
        <h1>{Props.name}</h1>
        <h1>{Props.age}</h1>
        <h1>{Props.city}</h1>
    </>
  )
}

export default PropsEmployee