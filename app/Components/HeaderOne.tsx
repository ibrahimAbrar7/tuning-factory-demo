"use client";
import Link from "next/link";
import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeaderOne: React.FC = () => {
  // Using useState to handle client-specific data if needed in the future
  const [location] = React.useState("Calgary Alberta, Canada");
  const [time] = React.useState("Mon - Fri : 09.00 AM - 09.00 PM");

  return (
    <div className="flex justify-between items-center bg-gray-100 px-12 py-4 dark:bg-slate-950">
      {/* Left Section: Location and Time (Hidden on mobile and tablet) */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-orange-500 dark:text-gray-300" />
          <span className="text-md text-gray-700 dark:text-gray-300">{location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock className="text-orange-500 dark:text-gray-300" />
          <span className="text-md text-gray-700 dark:text-gray-300">{time}</span>
        </div>
      </div>

      {/* Right Section: Social Media Icons (Visible on all screen sizes) */}
      <div className="flex items-center space-x-4 justify-center md:justify-start w-full md:w-auto">
        <Link href="#" className="text-orange-500 hover:text-orange-400 dark:text-gray-300">
          <FaFacebookF size={20} />
        </Link>
        <Link href="#" className="text-orange-500 hover:text-orange-400 dark:text-gray-300">
          <FaXTwitter size={20} />
        </Link>
        <Link href="#" className="text-orange-500 hover:text-orange-400 dark:text-gray-300">
          <FaInstagram size={20} />
        </Link>
        <Link href="#" className="text-orange-500 hover:text-orange-400 dark:text-gray-300">
          <FaYoutube size={20} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderOne;
