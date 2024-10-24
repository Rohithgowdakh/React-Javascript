import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GitHubUserApi = () => {
    const [users, setUser] = useState([])

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users")
        const user = await response.json()
        setUser(user)
    }
    useEffect(() => {
        getUsers()
    })
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {
                        users.map((userss) => {
                            return (
                                <>
                                    <div className="col-md-4 p-5">
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src={userss.avatar_url} className="card-img-top img-fluid" alt="..." />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{userss.login}</h5>
                                                <p className="card-text">{userss.user_view_type}</p>
                                                <a href={userss.html_url} className="btn btn-primary">Git Hub Profile</a>
                                            </div>
                                        </div>

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

export default GitHubUserApi