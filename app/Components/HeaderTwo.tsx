"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const HeaderTwo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Ensure the menu state is only set after component mounts
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white dark:bg-slate-950 sticky top-0 z-50 shadow-md border-t-[0.1px] border-b-[0.1px] border-gray-300">
      <div className="flex justify-between items-center pl-8">
        {/* Logo Section */}
        <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">
          <Link href="/">
            <Image
              src="/logo-img.jpeg"
              alt="Logo"
              width={198}
              height={55}
              priority
              className="border-2 border-transparent rounded-lg"
            />
          </Link>
        </div>

        {/* Navbar Section */}
        <nav className="hidden lg:flex">
          <Link href="/" className="text-md xl:text-lg text-orange-500 hover:text-orange-500 px-6 py-6 font-semibold">
            HOME
          </Link>
          <Link href="/about" className="text-md xl:text-lg text-black hover:text-orange-500 px-6 py-6 font-semibold dark:text-gray-300">
            ABOUT
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-md xl:text-lg text-black hover:text-orange-500 px-5 xl:px-6 py-6 font-semibold flex items-center dark:text-gray-300">
              VEHICLES WE SPECIALIZE IN
              <IoIosArrowDropdownCircle size={20} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md w-64 dark:text-gray-300 dark:bg-slate-950">
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/1">Audi</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/2">Volkswagen</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/3">Porsche</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/4">BMW</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/5">Dodge Challenger</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/6">Ford Mustang and Bronco</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/7">Chevrolet/Pontiac/Cadillac</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/8">Mitsubishi EVO/DSM</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/9">Nissan Silvia</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/10">Toyota MK5 Supra</Link>
                </li>
                <li className="hover:bg-orange-500 px-4 py-1">
                  <Link href="/vehicles-we-specialise/11">Mazda Rotary/Miata</Link>
                </li>
              </ul>
            )}
          </div>
          <Link href="/contact" className="text-md xl:text-lg text-black hover:text-orange-500 px-6 py-6 font-semibold dark:text-gray-300">
            CONTACT
          </Link>
          <div className="text-md xl:text-lg flex items-center px-12 py-6 bg-orange-500 hover:bg-orange-400 text-white font-semibold">
            <FaMobileScreenButton size={18} className="mr-2 text-md md:text-xl" />
            <span>Call : 403-993-6742</span>
          </div>
        </nav>

        {/* Mobile Navbar Icon */}
        <div className="lg:hidden py-8">
          <button className="text-gray-700 dark:text-gray-300 hover:text-orange-500 pr-8" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-4 mt-4 px-6 py-6 bg-white shadow-md dark:bg-slate-950">
          <Link href="#" className="text-orange-500 hover:text-orange-500">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500 dark:text-gray-300">
            About
          </Link>
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 flex items-center">
              Vehicles We specialise in
              <IoIosArrowDropdownCircle size={20} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <ul className="bg-white shadow-md rounded-md mt-2 dark:bg-slate-950 dark:text-gray-300">
                <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/1">Audi</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/2">Volkswagen</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/3">Porsche</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/4">BMW</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/5">Dodge Challenger</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/6">Ford Mustang and Bronco</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/7">Chevrolet/Pontiac/Cadillac</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/8">Mitsubishi EVO/DSM</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/9">Nissan Silvia</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/10">Toyota MK5 Supra</Link>
          </li>
          <li className="hover:bg-orange-500 px-4 py-2">
            <Link href="/vehicles-we-specialise/11">Mazda Rotary/Miata</Link>
          </li>

              </ul>
            )}
          </div>
          <Link href="#" className="text-gray-700 hover:text-gray-500 dark:text-gray-300">
            Contact
          </Link>
          <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-500 dark:text-gray-300">
            <FaMobileScreenButton size={18} />
            <span>Call : 403-993-6742</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderTwo;
