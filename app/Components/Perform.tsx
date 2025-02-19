"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For "Certified"
import { RiUserSettingsFill } from "react-icons/ri"; // For "Expert Technician"
import { FaUsers } from "react-icons/fa"; // For "Satisfied Clients"

const Perform = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12 h-[40vh]"
      style={{
        backgroundImage: "url('/carousel-1.jpg')", // Replace with the actual image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center text-white h-full">
        {/* Certified */}
        <div className="flex flex-col items-center text-center">
          <FaCheckCircle className="text-2xl sm:text-3xl mb-2" />
          <h3 className="text-base sm:text-lg md:text-xl font-bold">Certified</h3>
        </div>

        {/* Expert Technician */}
        <div className="flex flex-col items-center text-center mt-6 sm:mt-0">
          <RiUserSettingsFill className="text-2xl sm:text-3xl mb-2" />
          <h3 className="text-base sm:text-lg md:text-xl font-bold">
            Expert Technician
          </h3>
        </div>

        {/* Satisfied Clients */}
        <div className="flex flex-col items-center text-center mt-6 sm:mt-0">
          <FaUsers className="text-2xl sm:text-3xl mb-2" />
          <h3 className="text-base sm:text-lg md:text-xl font-bold">
            Satisfied Clients
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Perform;
