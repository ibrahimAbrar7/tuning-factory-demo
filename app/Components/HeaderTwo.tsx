"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation"; // Import usePathname

const HeaderTwo: React.FC = () => {
  const pathname = usePathname(); // Use usePathname to get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white dark:bg-slate-950 sticky top-0 z-50 shadow-md border-y border-gray-300 dark:border-stone-800">
      <div className="flex justify-between items-center pl-8">
        {/* Logo Section */}
        <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">
          <Link href="/">
            <Image
              src="/logo-img.png" // Light mode logo
              alt="Logo"
              width={198}
              height={55}
              className="border-2 border-transparent rounded-lg dark:hidden"
            />
            <Image
              src="/logo-img-dark.png" // Dark mode logo
              alt="Logo"
              width={198}
              height={55}
              className="border-2 border-transparent rounded-lg hidden dark:block"
            />
          </Link>
        </div>

        {/* Navbar Section */}
        <nav className="hidden lg:flex">
          <Link href="/" className={`dark:text-gray-300 text-md xl:text-lg ${pathname === '/' ? 'text-orange-500 dark:text-orange-500' : 'text-black'} hover:text-orange-500 px-6 py-6 font-semibold`}>
            HOME
          </Link>
          <Link href="/about" className={`text-md xl:text-lg ${pathname === '/about' ? 'text-orange-500 dark:text-orange-500' : 'text-black'} hover:text-orange-500 px-6 py-6 font-semibold dark:text-gray-300`}>
            ABOUT
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`text-md xl:text-lg ${pathname.includes('/vehicles-we-specialise') ? 'text-orange-500 dark:text-orange-500' : 'text-black'} hover:text-orange-500 px-5 xl:px-6 py-6 font-semibold flex items-center dark:text-gray-300`}>
              VEHICLES WE SPECIALIZE IN
              <IoIosArrowDropdownCircle size={20} className="ml-2" />
            </button>

            {/* Dropdown List with Animation */}
            <ul
              className={`absolute top-full left-0 border border-gray-200 dark:border-slate-700 bg-white shadow-md w-86 dark:text-gray-300 dark:bg-slate-950 
              transition-all duration-300 ease-in-out transform ${isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
            >
              <Link href="/vehicles-we-specialise/1"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Audi</li></Link>
              <Link href="/vehicles-we-specialise/2"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Volkswagen</li></Link>
              <Link href="/vehicles-we-specialise/3"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Porsche</li></Link>
              <Link href="/vehicles-we-specialise/4"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">BMW</li></Link>
              <Link href="/vehicles-we-specialise/5"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Dodge Challenger</li></Link>
              <Link href="/vehicles-we-specialise/6"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Ford Mustang and Bronco</li></Link>
              <Link href="/vehicles-we-specialise/7"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Chevrolet/Pontiac/Cadillac</li></Link>
              <Link href="/vehicles-we-specialise/8"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Mitsubishi EVO/DSM</li></Link>
              <Link href="/vehicles-we-specialise/9"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Nissan Silvia</li></Link>
              <Link href="/vehicles-we-specialise/10"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Toyota MK5 Supra</li></Link>
              <Link href="/vehicles-we-specialise/11"><li className="hover:bg-orange-500 hover:text-white text-lg uppercase text-dm px-6 py-1">Mazda Rotary/Miata</li></Link>
            </ul>
          </div>
          <Link href="/contact" className={`text-md xl:text-lg ${pathname === '/contact' ? 'text-orange-500 dark:text-orange-500' : 'text-black'} hover:text-orange-500 px-6 py-6 font-semibold dark:text-gray-300`}>
            CONTACT
          </Link>
          <Link href="tel:4039936742">
            <div className="text-md xl:text-lg flex items-center px-12 lg:px-8 xl:px-12 py-6 bg-orange-500 hover:bg-orange-400 text-white font-semibold">
              <FaMobileScreenButton size={18} className="mr-2 text-md md:text-xl" />
              <span>Call: 403-993-6742</span>
            </div>
          </Link>
        </nav>

        {/* Mobile Navbar Icon */}
        <div className="lg:hidden py-8">
          <button className="text-gray-700 dark:text-gray-300 hover:text-orange-500 pr-8" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar with Animation */}
      <div
        className={`fixed top-0 right-0 w-8/12 h-full bg-white dark:bg-slate-950 shadow-lg transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} transition-all duration-300 ease-in-out lg:hidden flex flex-col space-y-4 px-6 py-12`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-img.png" // Light mode logo
              alt="Logo"
              width={150}
              height={40}
              className="border-2 border-transparent rounded-lg dark:hidden"
            />
            <Image
              src="/logo-img-dark.png" // Dark mode logo
              alt="Logo"
              width={150}
              height={40}
              className="border-2 border-transparent rounded-lg hidden dark:block"
            />
          </Link>

          {/* Theme Toggle Button */}
          <div>
            <ThemeToggle />
          </div>
          {/* Close Button */}
          <button className="text-gray-700 dark:text-gray-300" onClick={toggleMenu}>
            <FaTimes size={20} />
          </button>
        </div>

        <Link href="/" className={`text-orange-500 dark:text-gray-300 hover:text-orange-500 py-2 ${pathname === '/' ? 'text-orange-500 dark:text-orange-500' : ''}`}>
          Home
        </Link>
        <Link href="/about" className={`text-gray-700 hover:text-orange-500 dark:text-gray-300 py-2 ${pathname === '/about' ? 'text-orange-500 dark:text-orange-500' : ''}`}>
          About
        </Link>

        <div className="relative py-2">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 flex items-center text-sm sm:text-lg"
          >
            Vehicles We Specialise In
            <IoIosArrowDropdownCircle size={20} className="ml-2" />
          </button>

          <ul
            className={`bg-white absolute w-1/2 shadow-md rounded-md mt-2 dark:bg-slate-950 dark:text-gray-300 
            transition-all duration-300 ease-in-out transform ${isDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
          >
            <Link href="/vehicles-we-specialise/1"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Audi</li></Link>
            <Link href="/vehicles-we-specialise/2"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Volkswagen</li></Link>
            <Link href="/vehicles-we-specialise/3"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Porsche</li></Link>
            <Link href="/vehicles-we-specialise/4"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">BMW</li></Link>
            <Link href="/vehicles-we-specialise/5"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Dodge Challenger</li></Link>
            <Link href="/vehicles-we-specialise/6"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Ford Mustang and Bronco</li></Link>
            <Link href="/vehicles-we-specialise/7"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Chevrolet/Pontiac/Cadillac</li></Link>
            <Link href="/vehicles-we-specialise/8"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Mitsubishi EVO/DSM</li></Link>
            <Link href="/vehicles-we-specialise/9"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Nissan Silvia</li></Link>
            <Link href="/vehicles-we-specialise/10"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Toyota MK5 Supra</li></Link>
            <Link href="/vehicles-we-specialise/11"><li className="hover:bg-orange-500 hover:text-white px-4 py-2">Mazda Rotary/Miata</li></Link>
          </ul>
        </div>

        <Link href="/contact" className={`text-gray-700 hover:text-gray-500 dark:text-gray-300 py-2 ${pathname === '/contact' ? 'text-orange-500 dark:text-orange-500' : ''}`}>
          Contact
        </Link>

        <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-500 dark:text-gray-300 py-2">
          <FaMobileScreenButton size={18} />
          <span>Call : 403-993-6742</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
