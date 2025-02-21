"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white pb-8 pt-24"
      style={{
        backgroundImage: "url('/carousel-1.jpg')", // Replace with your background image path
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <Link href="/">
          <Image
            src="/logo-img-dark.png" // Dark mode logo
            alt="Logo"
            width={198}
            height={55}
            className="border-2 border-transparent rounded-lg pb-4"
          />
          </Link>
          <p className="text-md md:text-xl">
            Tuning Factory is a Calgary automotive hobby shop focused on specific makes and models, offering tools and expertise for hassle-free repairs and upgrades.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Address</h3>
          <div className="flex items-center space-x-2 text-md md:text-xl mb-2">
            <FaPhoneAlt className="text-white" />
            <p>403-993-6742</p>
          </div>
          <div className="flex items-center space-x-2 text-md md:text-xl mb-2">
            <FaMapMarkerAlt className="text-white" />
            <p>Calgary, Alberta, Canada</p>
          </div>
          <div className="flex items-center space-x-2 text-md md:text-xl">
            <FaEnvelope className="text-white" />
            <Link href="mailto:general@tuningfactory.ca" className="underline">
              general@tuningfactory.ca
            </Link>
          </div>

          <div className="flex items-center space-x-3 mt-4 justify-center">
  {[
    { icon: <FaFacebookF aria-label="Facebook" />, href: "https://www.facebook.com/TuningfactoryCanada" },
    { icon: <FaInstagram aria-label="Instagram" />, href: "https://www.instagram.com/tuningfactoryms/" },
    { icon: <FaXTwitter aria-label="Twitter" />, href: "https://x.com/tuningfactoryca?mx=2" },
    { icon: <FaYoutube aria-label="YouTube" />, href: "https://www.youtube.com/@tuningfactoryca8309" },
  ].map(({ icon, href }, index) => (
    <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
      <div className="p-3 rounded-full text-white border border-white bg-transparent hover:bg-gray-300 transition hover:text-black">
        {icon}
      </div>
    </Link>
  ))}
</div>

        </div>

        {/* Opening Hours Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Opening Hours</h3>
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

        {/* Pages Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Pages</h3>
          <ul>
            {["/", "About", "Contact"].map((page, index) => (
              <li key={index} className="mb-2">
                <Link href={`/${page.toLowerCase()}`} className="hover:text-orange-500 transition text-md md:text-xl">
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative mt-8 pt-4 text-center">
  <p className="text-md md:text-xl">
    ©{" "}
    <Link href="https://tuningfactory.ca" target="_blank" className="underline">
      Tuning Factory
    </Link>
    , &nbsp; All Rights Reserved.
  </p>
  <div className="absolute inset-x-0 top-0 border-t border-gray-500 w-1/3 mx-auto"></div>
</div>

      
    </footer>
  );
};

export default Footer;
