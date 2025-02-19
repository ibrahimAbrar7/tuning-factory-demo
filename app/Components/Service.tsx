"use client";
import React from "react";
import { FaTools } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";
const Service = () => {
  return (
    <div className="bg-white py-12 dark:bg-gray-850 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Repairs Box */}
        <div className="bg-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div className="text-orange-500 text-5xl mb-4">
            <FaTools />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Repairs</h3>
          <p className="text-gray-600 text-center">
            We provide mechanical and electrical diagnosis followed by the
            repair required to remedy the issue.
          </p>
        </div>

        {/* Service Box */}
        <div className="bg-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div className="text-orange-500 text-5xl mb-4">
            <GrServices />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Service</h3>
          <p className="text-gray-600 text-center">
            We provide scheduled and preventative maintenance service work as
            per manufacturer specifications.
          </p>
        </div>

        {/* Performance Box */}
        <div className="bg-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div className="text-orange-500 text-5xl mb-4">
            <GrDocumentPerformance />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Performance</h3>
          <p className="text-gray-600 text-center">
            We provide mechanical and software modifications to meet and exceed
            the drivers requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
