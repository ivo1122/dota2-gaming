import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  { path: "/home", display: "Home" },
  {
    path: "/",
    display: "About us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-player",
    display: "Find a Player",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Get a opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="/" className="w-[150px]" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright &copy; {year} developer by Ivo Pavić all rights
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item,index)=>
              <li key={index} className="mb-4"><Link to={item.path} key={index} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks02.map((item,index)=>
              <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick links
            </h2>
            <ul>
              {quickLinks.map((item,index)=>
              <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;