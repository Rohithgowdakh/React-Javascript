import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchContentFromApi = () => {
    const [user,getUsers]=useState([])
    const getData=async ()=>{
        const response=await fetch("https://api.github.com/users")
        const users=await response.json()
        getUsers(users)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        {
            user.map((userss)=>{
                return(
                    <>
                    <li key={userss.id}>{userss.login}</li>
                    <img src={userss.avatar_url} style={{width:'150px',height:"150px"}}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default FetchContentFromApi