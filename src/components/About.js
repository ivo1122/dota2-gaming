import React from "react";
import topson from "../assets/images/topson.png"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/*=========about image========== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={topson}/>

                </div>


        </div>
      </div>
    </section>
  );
};

export default About;
