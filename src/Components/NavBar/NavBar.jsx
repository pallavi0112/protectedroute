import React from 'react'
import {navbarItems} from './NavBarData'
import MenuItem from './MenuItem'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar-container'>
          <div className='logo-container'>
                 <h2>Protected Routes</h2>
          </div>
          <div className='navbar'>
          <ul>
            {
                navbarItems.map((item , index)=>{
                    return <MenuItem key={index} Data={item}/>
                })
            }
          </ul>
          </div>
    </div>
  )
}

export default NavBar