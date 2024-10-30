import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const SchoolDetails = () => {
    const [parentsDet, getParentsDet] = useState([])
    const getParentsDetail = async () => {
        const response = await axios.get("http://localhost:8000/v1/api/school")
        const result = response.data
        getParentsDet(result)
    }
    useEffect(() => {
        getParentsDetail()
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center'>School Details</h1>
                        <table className='table table-bordered  table-striped'>
                            <thead>
                                <tr>
                                    <th>StudentId</th>
                                    <th>parentFirstName</th>
                                    <th>parentLastName</th>
                                    <th>parentNumber</th>
                                    <th>parentEmail</th>
                                    <th>parentLocation</th>
                                    <th>createdAt</th>
                                    <th>updatedAt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <>
                                    {
                                       parentsDet.map((parent)=>{
                                        return(
                                            <tr>
                                                <td>{parent.sid}</td>
                                                <td>{parent.parentFirstName}</td>
                                                <td>{parent.parentLastName}</td>
                                                <td>{parent.parentNumber}</td>
                                                <td>{parent.parentEmail}</td>
                                                <td>{parent.parentLocation}</td>
                                                <td>{parent.createdAt}</td>
                                                <td>{parent.updatedAt}</td>
                                            </tr>
                                        )
                                       })
                                    }
                                </>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolDetails