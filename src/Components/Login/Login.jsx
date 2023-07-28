import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const[user , setUser] = useState({
        username : "",
        password : "",
    })
    const DataHandler = (e) =>{

        setUser({...user , [e.target.name]:e.target.value})
    }
    localStorage.setItem("isAuthenticated" , false)
    const LoginHandler = (e) =>{
       e.preventDefault()
       const authuser = JSON.parse(localStorage.getItem("user"))
       if(authuser.username === user.username && authuser.password === user.password){
            localStorage.setItem("isAuthenticated" , true)
            navigate("/")
       }

    }
  return (
    <div className='form'>
          <form onSubmit={LoginHandler}>
          <input type='text' placeholder='Enter Username' value={user.username}  name="username" onChange={DataHandler}/>
          <input type='password' placeholder='Enter Password' value={user.password} name="password" onChange={DataHandler}/>
          <button type='submit'>Login</button>
          </form>
         
    </div>
  )
}

export default Login