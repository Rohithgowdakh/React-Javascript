import React from 'react'

const StudentDemo = () => {
    const student={
        fname:"Rohith",
        age:24,
        city:"Hassan"
    }
  return (
    <div>
        <h1>Firstname : {student.fname} , Age : {student.age} , City : {student.city}</h1>
    </div>
  )
}

export default StudentDemo