import React from 'react'
import {services} from "../assets/data/services"
import ServiceCard from '../components/ServiceCard'
import {motion} from "framer-motion"
import { indexFadeIn } from '../assets/variants/variants'

const Services = () => {
  return (
    <section>
      <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]  '>
      {services.map((item,index)=> (
        <ul>
          <motion.li variants={indexFadeIn("down", "tween", 0.45 * index)} initial="hidden" whileInView={"show"} ><ServiceCard item={item} index={index} key={index}/></motion.li>
        </ul>
      ))}
    </div>

      </div>
    </section>
  )
}

export default Services