import React from 'react'
import Dropdown from './Dropdown'
import { Link  } from 'react-router-dom'
const MenuItem = ({Data}) => {
  return (
         <>
            {
                Data.dropdownList ? 
                <>
                  <li>{Data.title}
                  <Dropdown DropdownData={Data.dropdownList}/>
                  </li>
                </>
                : 
                <>
                  <li><Link to={Data.url}>{Data.title}</Link></li>
                </>
            }
         </>
  )
}

export default MenuItem