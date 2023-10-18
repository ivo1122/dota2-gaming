import React from "react";
import zai from "../assets/images/zai.png"
import { Link } from "react-router-dom";
import { useTypeEffect } from "../assets/custom-hooks/typeEffect";
import { motion } from "framer-motion";
import { staggerContainer,fadeIn,plateVariants } from "../assets/variants/variants";



const About = () => {

  const text = useTypeEffect("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat semper. Duis hendrerit at felis nec viverra. Donec vitae ante ex. Fusce vestibulum sapien erat, id pulvinar odio fringilla id. Suspendisse vulputate mattis magna vitae laoreet. Aenean tristique augue in purus consequat, et consequat purus sagittis.",25,2)
  const text2 = useTypeEffect("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat semper. ",25,80)

  return (
    <section>
      <motion.div variants={staggerContainer} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.6}} className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/*=========about image========== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <motion.img variants={plateVariants} src={zai}/>
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
{/*                         <img src={heroImg03} alt="/"/>
 */}                    </div>
                </div>

      {/*==========about content======== */}
      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
        <motion.h2 variants={fadeIn("right", "tween", 0.4,1)} initial="hidden" whileInView={"show"} className="heading">Proud to be the one of the best</motion.h2>
        <motion.p variants={fadeIn("right", "tween", 0.6,2)} initial="hidden" whileInView={"show"}   className="text__para">{text}</motion.p>
        <motion.p variants={fadeIn("right", "tween", 8,1.5)} initial="hidden" whileInView={"show"}  className="text__para mt-[30px]">{text2}</motion.p>
        <Link to="/">
          <motion.button variants={fadeIn("right", "tween",8.5,1.6)} initial="hidden" whileInView={"show"}  className="btn">Learn More</motion.button>
        </Link>
      </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
