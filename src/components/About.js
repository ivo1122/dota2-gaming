import React from "react";
import zai from "../assets/images/zai.png"
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { staggerContainer,fadeIn,plateVariants } from "../assets/variants/variants";



const About = () => {
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
        <h2 className="heading">Proud to be the one of the best</h2>
        <p className="text__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat semper. Duis hendrerit at felis nec viverra. Donec vitae ante ex. Fusce vestibulum sapien erat, id pulvinar odio fringilla id. Suspendisse vulputate mattis magna vitae laoreet. Aenean tristique augue in purus consequat, et consequat purus sagittis.</p>
        <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat semper. Duis hendrerit at felis nec viverra. Donec vitae ante ex. Fusce vestibulum sapien erat, id pulvinar odio fringilla id. Suspendisse vulputate mattis magna vitae laoreet. Aenean tristique augue in purus consequat, et consequat purus sagittis.</p>
        <Link to="/">
          <button className="btn">Learn More</button>
        </Link>
      </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
