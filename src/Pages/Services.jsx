import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
const Services = () => {
    const {service_name} = useParams()

  return (
    <><h1>{service_name}</h1></>
  )
}

export default Services