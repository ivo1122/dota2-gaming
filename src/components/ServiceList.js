import React from 'react'
import {services} from "../../src/assets/data/services"
import ServiceCard from "../components/ServiceCard"


const ServiceList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]'>
      {services.map((item,index)=> (
      <ServiceCard item={item} index={index} key={index}/>
      ))}
    </div>
  )
}

export default ServiceList