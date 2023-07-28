import React, { useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
const Authorized = ({Component , auth}) => {
    const navigate = useNavigate()
    useEffect(()=>{
         let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))
         if(isAuthenticated){
            if(!auth.includes("user")){
                navigate("/not_authorized")
            }
         }
         else{
            navigate("/login")
         }
    },[])
  return (
    <>{<Component/>}</>
  )
}

export default Authorized