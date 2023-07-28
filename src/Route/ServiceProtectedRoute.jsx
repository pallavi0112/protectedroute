import React , {useEffect} from 'react'
import { useParams , useNavigate } from 'react-router-dom'
const ServiceProtectedRoute = ({Component , Services}) => {
    const {service_name} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
       if(!Services.includes(service_name)){
          navigate('/*')
       }
    },[navigate , service_name])
  return (
    <>{<Component/>}</>
  )
}

export default ServiceProtectedRoute