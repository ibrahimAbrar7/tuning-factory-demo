"use client";

import React from "react";

const Form: React.FC = () => {
  return (
    <div
      className="relative bg-[url('/contact.jpg')] bg-cover bg-center my-12 py-12"
    >
      <div className="relative z-20 bg-gray-800 dark:bg-slate-950 bg-opacity-90 p-6 sm:p-8 md:p-12 mx-auto max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg">
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <form className="space-y-4">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name *"
              className=" dark:bg-slate-900 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white dark:placeholder-gray-400 placeholder-black text-gray"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email *"
              className="dark:bg-slate-900 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white dark:placeholder-gray-400 placeholder-black text-gray"
            />
          </div>

          {/* Service and Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              id="service"
              name="service"
              className="dark:bg-slate-900 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select A Service</option>
              <option value="maintenance">Maintenance & Repairs</option>
              <option value="performance">Performance</option>
            </select>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone - Number *"
              className="dark:bg-slate-900 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white dark:placeholder-gray-400 placeholder-black text-gray"
            />
          </div>

          {/* Special Request */}
          <textarea
            id="specialRequest"
            name="specialRequest"
            placeholder="Special Request"
            rows={4}
            className="dark:bg-slate-900 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white dark:placeholder-gray-400 placeholder-black text-gray"
          ></textarea>

          {/* Captcha */}
          <div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              placeholder="Captcha *"
              className="dark:bg-slate-900 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white dark:placeholder-gray-400 placeholder-black text-gray"
            />
            <p className="text-gray-300 text-sm mt-2">
              Enter the 4-digit number: <span className="font-bold">6480</span>
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition duration-300"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/50"></div>
    </div>
  );
};

export default Form;
