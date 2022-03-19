import React from "react";
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
    <div className="bg-container rounded-2xl ">
      <img
        className="h-36 w-36 rounded-3xl mx-auto -translate-y-20 "
        src="https://art-template.ru/vcard1/assets/img/avatar-1.jpg"
        alt="avatar"
      />
      <div className="text-center -translate-y-16">
        <h1 className="text-heading text-2xl font-bold ">Felecia Brown</h1>
        <div className="mt-3 text-center">
          <span className="bg-container2 text-white px-3 py-1 rounded-2xl ">
            Creative Director
          </span>
        </div>
        <div className="mt-6 flex justify-center">
          <span className="text-heading hover:text-blue-400 mr-4">
            <FaFacebookF />
          </span>
          <span className="text-heading hover:text-blue-400 mr-4">
            <FaTwitter />
          </span>
          <span className="text-heading hover:text-blue-400">
            <FaLinkedinIn />
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center text-white">
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
