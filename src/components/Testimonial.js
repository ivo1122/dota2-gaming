import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import user from "../assets/images/user.png";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={user} alt="/" className="w-[30px] h-[30px]"/>
              <div>
                {" "}
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColog">
                  John Doe
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              These guys are great , I have been following them for a while now.
              Great service,thanks.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
            <img src={user} alt="/" className="w-[30px] h-[30px]"/>
              <div>
                {" "}
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColog">
                  Marcos Lugiano
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              The price is over the roof, I am not satisfied.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
            <img src={user} alt="/" className="w-[30px] h-[30px]"/>
              <div>
                {" "}
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColog">
                  Anthony Merge
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Have been waiting for a collaboration like this!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
            <img src={user} alt="/" className="w-[30px] h-[30px]"/>
              <div>
                {" "}
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColog">
                  Edward Angels
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Working with these guys for months now, I am very satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
            <img src={user} alt="/" className="w-[30px] h-[30px]"/>
              <div>
                {" "}
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColog">
                  Mary Hopkins
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px]" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I booked appointment and nobody appeared...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
            <img src={user} alt="/" className="w-[30px] h-[30px]"/>
              <div>
                {" "}
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColog">
                  Roger Edward
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                  <HiStar className="text-yellowColor w-[18px]" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Quite satisfied{" "}
            </p>
          </div>
        </SwiperSlide>{" "}

      </Swiper>
    </div>
  );
};

export default Testimonial;
