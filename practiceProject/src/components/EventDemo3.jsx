import React from 'react'
import { useState } from 'react'
import { batches } from './batches'

const EventDemo3 = () => {
    const[batch,setBatch]=useState(batches)
    const handleClear=()=>{
        setBatch([])
    }
    const handleView=()=>{
        setBatch(batches)
    }
  return (
    <div>
        {
            batch.map((batch1)=>{
                return(
                    <h2>{batch1.name}</h2>
                )
            })
        }
        <button type='button' onClick={handleClear}>Clear</button>
        <button type='button' onClick={handleView}>View</button>
    </div>
  )
}

export default EventDemo3