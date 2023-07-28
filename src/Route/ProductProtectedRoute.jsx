import React, { useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
const ProductProtectedRoute = ({Component , Products }) => {
    const {product_name} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(!Products.includes(product_name)){
            navigate('/*')
        }

    },[product_name , navigate])
  return (
    <>
        {<Component/>}
    </>
  )
}

export default ProductProtectedRoute