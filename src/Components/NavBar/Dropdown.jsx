import React from 'react'
import { Link } from 'react-router-dom'
const Dropdown = ({DropdownData}) => {
  return (
    <ul>
        {
            DropdownData.map((item , index)=>{
                return <li key={index}><Link to={item.url}>{item.title}</Link></li>
            })
        }
    </ul>
  )
}

export default Dropdown