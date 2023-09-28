import React from "react";
import heroImg01 from "../assets/images/topson.png";
import heroImg02 from "../assets/images/mind-control.png";
import heroImg03 from "../assets/images/insania.png";
import esportsIcon from "../assets/images/esports.png";
import { Link } from "react-router-dom";
import roles from "../assets/images/roles.png"
import appointment from "../assets/images/appointment.png"
import About from "../components/About";


import {BsArrowRight} from "react-icons/bs"

const Home = () => {
  return (
    <div>
      {/*========hero section========== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*========hero content======== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help players make better performances
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  cursus molestie urna quis pulvinar. Aliquam tellus eros,
                  posuere eget interdum eget, varius vel nunc. Proin nec euismod
                  dolor
                </p>

                <button className="btn">Request an Appointment</button>
              </div>
              {/*========hero counter========= */}
              <div className="mt-[30px] lg;mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[14px]"></span>
                  <p className="text__para">Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[14px]"></span>
                  <p className="text__para">Players satisfaction</p>
                </div>
              </div>
            </div>
            {/*========hero content======== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className=" w-full" src={heroImg03} alt="" />
              </div>

              <div>
                <img className="w-full mb-[30px] " src={heroImg02} alt="" />
                <img className="w-full" src={heroImg01} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*========hero section end========== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best gaming services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our systems offer unmatched expert
              coaching for players.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img className="w-[150px]" src={esportsIcon} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Coach
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for every player. Our System offers
                    unmatched coaching sessions. From the start to the end of
                    the game, and more.
                  </p>
                  <Link
                    to="/players"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#282A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  ><BsArrowRight className="group-hover:text-white w-6 h-5"/></Link>
                </div>
                
              </div>
  
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img className="w-[150px]" src={roles} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Choose position
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    At what position have you been struggling recently? Improve your overall gameplay, let our experts guide you!
                  </p>
                  <Link
                    to="/players"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#282A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  ><BsArrowRight className="group-hover:text-white w-6 h-5"/></Link>
                </div>
                
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img className="w-[150px]" src={appointment} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for every player. Our System offers
                    unmatched coaching sessions. From the start to the end of
                    the game, and more.
                  </p>
                  <Link
                    to="/players"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#282A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  ><BsArrowRight className="group-hover:text-white w-6 h-5"/></Link>
                </div>
                
              </div>
            </div>
        </div>
      </section>
      {/*============about section start=========== */}
      <About/>
      {/*============about section end=========== */}


    </div>
  );
};

export default Home;
