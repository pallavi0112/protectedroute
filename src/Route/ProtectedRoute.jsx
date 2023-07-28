import React, { Children, useEffect , useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
     const {Component} = props 
    const navigate = useNavigate()
  useEffect(()=>{
    let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))
    if(!isAuthenticated){
        navigate("/login")         
    }
   
  },[navigate])
  return (
    <>
          {<Component/>}
    </>
  )
}

export default ProtectedRoute