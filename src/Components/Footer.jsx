import React from "react";
import { MdLocationOn, MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footerimg from "../photos/Logo.jpeg"

const Footer = () => {
  return (
    <div className="bg-background2 py-8 px-4 flex flex-col items-center sm:items-start sm:flex-row sm:justify-between sm:px-10 md:py-12 lg:py-16 lg:px-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 lg:gap-12">
        <div className="flex items-start text-white mb-6 sm:mb-0">
          <MdLocationOn size={32} className="mr-3" />
          <p className="text-xs sm:text-sm lg:text-base">
            Madhupatna, Kaji Diha Road, Rajendra Nagar, Khanna Nagar, Industrial Estate Khapuria, Cuttack, Odisha, India
          </p>
        </div>
        <div className="flex items-start text-white mb-6 sm:mb-0">
          <MdAlternateEmail size={20} className="mr-3" />
          <p className="text-xs sm:text-sm lg:text-base">
            ases.pvtltd@gmail.com/sescort320@yahoo.com
          </p>
        </div>
        <div className="flex items-start text-white">
          <FaPhoneAlt size={20} className="mr-3" />
          <p className="text-xs sm:text-sm lg:text-base">
            8114655062, 9437294337
          </p>
        </div>
      </div>
      <img
        className="mt-6 sm:mt-0 w-16 h-16 lg:w-20 lg:h-20 object-contain"
        src={Footerimg}
        alt="Footer Logo"
      />
    </div>
  );
};

export default Footer;
