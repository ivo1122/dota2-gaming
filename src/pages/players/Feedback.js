import React from "react";
import { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import { AiFillStar } from "react-icons/ai";
import { formateDate } from "../../utils/formateDate";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="/" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ish Roberts
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("02-10-2012")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                {" "}
                Good servieces,highly recommended!
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="/" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                John Joneas
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("01-04-2015")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                {" "}
                Some great coaches you got there
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(4).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="/" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Matthew Tatum
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("05-05-2015")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                {" "}
                I am not satisfied with your work
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(2).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="/" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Matteo Cervics
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("02-10-2012")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                {" "}
                Good servieces,highly recommended!
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
