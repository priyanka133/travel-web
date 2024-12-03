"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGlobe, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-lg font-bold flex items-center">
            <FaGlobe className="text-2xl mr-2" />
            <span className="font-semibold text-xl">Horizone</span>
          </div>
          <ul className="hidden lg:flex space-x-6 text-sm">
      <li className="hover:text-gray-300 cursor-pointer">
        <Link href="/hotel">Hotel</Link>
      </li>
      <li className="hover:text-gray-300 cursor-pointer">
        <Link href="/activity">Actiity</Link>
      </li>
      <li className="hover:text-gray-300 cursor-pointer">
        <Link href="/car">Car Rental</Link>
      </li>
    </ul>
        </div>

        <div className="hidden lg:flex items-center flex-grow max-w-md relative">
          <input
            type="text"
            placeholder="Search destination..."
            className="w-full px-4 pr-10 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center text-sm space-x-1">
            <span className="flex items-center">
              <FaGlobe className="mr-1" /> <span>EN</span>
            </span>
          </div>

          <button className="text-sm hover:text-gray-300">Log In</button>
          <button className="text-sm text-black bg-white px-4 py-2 rounded-md hover:bg-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
