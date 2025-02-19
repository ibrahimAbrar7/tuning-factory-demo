"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-8 mt-12"
      style={{
        backgroundImage: "url('/carousel-1.jpg')", // Replace with your background image path
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {/* Address Section */}
        <div className="flex flex-col items-center text-justify">
          <h3 className="text-3xl font-bold mb-4">Address</h3>
          <div className="flex items-center space-x-2 text-md md:text-xl mb-2">
            <FaPhoneAlt className="text-white" />
            <p>403-993-6742</p>
          </div>
          <div className="flex items-center space-x-2 text-md md:text-xl mb-2">
            <FaMapMarkerAlt className="text-white" />
            <p>Calgary Alberta, Canada</p>
          </div>
          
          <div className="flex items-center space-x-2 text-md md:text-xl">
            <FaEnvelope className="text-white" />
            <p>general@tuningfactory.ca</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 justify-center">
            <a
              href="#"
              className="p-3 rounded-full text-white border border-white bg-transparent hover:bg-gray-300 transition hover:text-black"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full text-white border border-white bg-transparent hover:bg-gray-300 transition hover:text-black"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
             className="p-3 rounded-full text-white border border-white bg-transparent hover:bg-gray-300 transition hover:text-black"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full text-white border border-white bg-transparent hover:bg-gray-300 transition hover:text-black"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="p-3 rounded-full text-white border border-white bg-transparent hover:bg-gray-300 transition hover:text-black"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold mb-4">Opening Hours</h3>
          <p className="text-md md:text-xl">
            Monday - Friday:
            <br />
            09:00 AM - 09:00 PM
          </p>
          <p className="mt-4 text-md md:text-xl">
            Saturday - Sunday:
            <br />
            09:00 AM - 12:00 PM
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold mb-4">Pages</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500 transition text-md md:text-xl">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500 transition text-md md:text-xl">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500 transition text-md md:text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative mt-8 pt-4 text-center">
        <p className="text-md md:text-xl">© Tuning Factory, &nbsp; All Rights Reserved.</p>
        <div className="absolute inset-x-0 top-0 border-t border-gray-500 w-1/3 mx-auto"></div>
      </div>
    </footer>
  );
};

export default Footer;
