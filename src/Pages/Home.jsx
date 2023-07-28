import React, { useMemo, useState } from 'react'
import Login from '../Components/Login/Login'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
   const authuser = {
    username : "Pallavi" ,
    password : "pallavi@12"
   }
   const [isAuthenticated , setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("isAuthenticated")))
   console.log(isAuthenticated)
   localStorage.setItem("user" , JSON.stringify(authuser))
   const LogOut = () =>{
        localStorage.setItem("isAuthenticated" , false)
        navigate('/login')
   }
 
  return (
    <div>{
      isAuthenticated ? 
      <div><h1>Welcome</h1> <button onClick={LogOut}>LogOut</button></div>
      : 
      <button onClick={()=>{navigate("/login")}}>Login</button>
    }
    </div>
  )
}

export default Home