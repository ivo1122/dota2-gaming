import React from "react";
import heroImg01 from "../assets/images/topson.png";
import heroImg02 from "../assets/images/mind-control.png";
import heroImg03 from "../assets/images/insania.png";
import esportsIcon from "../assets/images/esports.png";
import stormstormer from "../assets/images/stormstormer.png";
import videoIcon from "../assets/images/video-icon.png";
import { Link } from "react-router-dom";
import roles from "../assets/images/roles.png";
import appointment from "../assets/images/appointment.png";
import About from "../components/About";
import ServiceList from "../components/ServiceList";
import CoachesList from "../components/Coaches/CoachesList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial";

import { BsArrowRight } from "react-icons/bs";

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
                  World-class care for every player. Our System offers unmatched
                  coaching sessions. From the start to the end of the game, and
                  more.
                </p>
                <Link
                  to="/players"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#282A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
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
                  At what position have you been struggling recently? Improve
                  your overall gameplay, let our experts guide you!
                </p>
                <Link
                  to="/players"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#282A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
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
                  World-class care for every player. Our System offers unmatched
                  coaching sessions. From the start to the end of the game, and
                  more.
                </p>
                <Link
                  to="/players"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#282A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============about section start=========== */}
      <About />
      {/*============about section end=========== */}

      {/*==============services section=========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our coaching services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our systems offer unmatched expert
              coaching for players.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*==============services section end=========== */}

      {/*==========feature section============ */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*===============feature content================ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">Get virtual coaching anytime</h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2.Search for your coach here, and contact his office
                </li>
                <li className="text__para">
                  3.View our coach who is appreciating new starters, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/*==============feature img============= */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={stormstormer} className="w-2/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src="" alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*==========feature section end============ */}

      {/*==========our great players ============ */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great coaches</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our systems offer unmatched expert
              coaching for players.
            </p>
          </div>
          <CoachesList />
        </div>
      </section>

      {/*==========our great players end ============ */}

      {/*==========FAQ SECTION ============ */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2  hidden md:block">
              <img src={heroImg03} alt="/" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most asked questions by our players</h2>
              <FaqList/>
            </div>



          </div>
        </div>
      </section>

      {/*==========FAQ SECTION END============ */}



      {/*==============Testimonial=============== */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Players feedback</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our systems offer unmatched expert
              coaching for players.
            </p>
            </div>
            <Testimonial/>
        </div>
      </section>






      {/*==============Testimonial end=============== */}
      </div>
  );
};

export default Home;
