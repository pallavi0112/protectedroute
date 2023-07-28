import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
const Products = () => {
    const {product_name} = useParams()

  return (
    <div>
         <h1>{product_name}</h1>
         <Outlet/>

         
    </div>
  )
}

export default Products