import React from 'react'

const StudentsDemo1 = () => {
    const student=[
        {name:"manu",age:20,city:"BTM"},
        {name:"Rohith",age:20,city:"Nelamangala"},
        {name:"Sai",age:20,city:"Vijayanagara"}
    ]
  return (
    <ol>
        {
            student.map((stud)=>(
                <li key={stud.name}>{stud.name},{stud.city}</li>
            ))
        }
    </ol>
  )
}

export default StudentsDemo1