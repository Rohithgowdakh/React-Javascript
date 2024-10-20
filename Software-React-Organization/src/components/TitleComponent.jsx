import React from 'react'

const TitleComponent = (Props) => {
  return (
    <div>
        <h1 className='text-center'>{Props.title}</h1>
    </div>
  )
}

export default TitleComponent