import React from 'react'
import {services} from "../../src/assets/data/services"
import ServiceCard from "../components/ServiceCard"

import { motion } from "framer-motion";
import { staggerContainer,fadeIn,plateVariants,indexFadeIn } from "../assets/variants/variants";


const ServiceList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]'>
      {services.map((item,index)=> (
        <ul>
          <motion.li variants={indexFadeIn("down", "tween", 0.45 * index)} initial="hidden" whileInView={"show"} ><ServiceCard item={item} index={index} key={index}/></motion.li>
        </ul>
      ))}
    </div>
  )
}

export default ServiceList