import React from "react";
import Avatar from "../assets/img/avatar-1.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineSkype,
  AiOutlineDownload,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="relative px-4 py-8 bg-container rounded-2xl">
      <img
        className="absolute left-[50%] -translate-x-[50%] -translate-y-[70%] h-36 w-36 rounded-3xl "
        src={Avatar}
        alt="avatar"
      />
      <div className="mt-16 text-center">
        <h1 className="text-2xl font-bold text-heading ">Felecia Brown</h1>
        <div className="mt-3 text-center">
          <span className="px-3 py-1 text-white bg-container2 rounded-2xl ">
            Creative Director
          </span>
        </div>
        <div className="flex justify-center mt-6">
          <span className="mr-4 text-heading hover:text-blue-400">
            <FaFacebookF />
          </span>
          <span className="mr-4 text-heading hover:text-blue-400">
            <FaTwitter />
          </span>
          <span className="text-heading hover:text-blue-400">
            <FaLinkedinIn />
          </span>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 text-white ">
          <div className="flex items-center">
            <AiOutlineCalendar className="mr-2" />
            March 12, 1995
          </div>
          <div className="flex items-center">
            <HiOutlineLocationMarker className="mr-2" />
            Hong Kong, China
          </div>
          <div className="flex items-center">
            <AiOutlineMail className="mr-2" />
            example@mail.com
          </div>
          <div className="flex items-center">
            <AiOutlineMobile className="mr-2" />
            +1 (070) 123-4567
          </div>
          <div className="flex items-center">
            <AiOutlineSkype className="mr-2" />
            Felecia_Brown
          </div>
        </div>

        <button className="flex bg-[#0D86FF] text-white items-center mx-auto mt-4  shadow-lg shadow-blue-500/50 px-6 py-2 rounded-2xl">
          <AiOutlineDownload className="mr-2" />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
