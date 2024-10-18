import React, { useState } from 'react'
import { course } from './Courses'
const ArayInEvent = () => {
    const [course1,setCourse]=useState(course)
    const handleClear=()=>{
        setCourse([])
    }
    const handleView=()=>{
        setCourse(course)
    }
  return (
    <div>
        {
            course1.map((courses)=>(
                <h2 key={courses.id}>{courses.cname}</h2>
            ))
        }
        <button type='button' onClick={handleClear}>Clear All</button>
        <button type='button' onClick={handleView}>View All</button>
    </div>
  )
}

export default ArayInEvent