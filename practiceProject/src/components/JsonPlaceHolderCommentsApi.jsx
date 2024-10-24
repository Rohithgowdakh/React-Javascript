import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const JsonPlaceHolderCommentsApi = () => {
    const [comments, setComments] = useState([])
    const getComments = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        setComments(data)
    }
    useEffect(() => {
        getComments()
    })
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    {
                        comments.map((comt) => {
                            return (
                                <>
                                    <div className="col-md-5  p-5">
                                        <div className="fw-bolder">
                                            <span>PostID :</span><span>{comt.postId}</span>
                                        </div>
                                        <p ><span className="fw-bolder">Name :</span>{comt.name}</p>
                                        <p><span className="fw-bolder">Email :</span>{comt.email}</p>
                                        <p><span className="fw-bolder">Info :</span>{comt.body}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default JsonPlaceHolderCommentsApi