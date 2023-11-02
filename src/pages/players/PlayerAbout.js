import React from "react";
import { formateDate } from "../../utils/formateDate";
import { players } from "../../assets/data/players";

const PlayerAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Coach Name
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          ultricies dui. Aliquam ultrices felis erat. Duis mollis turpis sit
          amet magna finibus fringilla. Nam non orci eu lorem mollis
          pellentesque. Donec tristique mi a ex aliquam commodo. Morbi lobortis
          hendrerit placerat. Vestibulum blandit, sem vitae faucibus porttitor,
          leo justo hendrerit mauris, a accumsan ipsum libero quis mi. Mauris
          vehicula lectus non eros gravida fringilla. Vivamus nec pretium eros.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20] leading-[30px] text-headingColor font-semibold">
          Professional Carreer
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("11-02-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Mid position
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Team OG
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("11-07-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Mid position
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Team OG
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("12-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Mid position
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Team OG
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[14px] leading-6 font-semibold">
              {formateDate("12-04-2010")} - {formateDate("12-04-2010")}
            </span>
            <p className="text-[16px] leading-5 font-medium text-textColor">
                Some text
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Some text
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[14px] leading-6 font-semibold">
              {formateDate("12-04-2010")} - {formateDate("12-04-2010")}
            </span>
            <p className="text-[16px] leading-5 font-medium text-textColor">
                Some text
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Some text
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerAbout;
