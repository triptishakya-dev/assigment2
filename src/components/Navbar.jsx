// components/Navbar.jsx
"use client";
import { useState } from "react";
import { FiShoppingBag, FiHeart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#EFF5E1] px-6 py-4 flex items-center justify-between relative z-50">
        {/* Left Section - Logo */}
        <div className="font-bold text-lg tracking-wide text-gray-800">
          SKINCARE
        </div>

        {/* Middle Section - Links (Desktop only) */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-gray-900">All Products</li>
          <li className="cursor-pointer hover:text-gray-900">Serum</li>
          <li className="cursor-pointer hover:text-gray-900">Sunscreen</li>
          <li className="cursor-pointer hover:text-gray-900">Bundle</li>
        </ul>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
            <FiShoppingBag size={18} />
            <span className="text-sm">Cart (1)</span>
          </div>
          <FiHeart className="cursor-pointer hover:text-gray-900" size={18} />
          <FiUser className="cursor-pointer hover:text-gray-900" size={18} />
        </div>

        {/* Right Section - Mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart icon */}
          <FiShoppingBag
            size={22}
            className="cursor-pointer hover:text-gray-900 text-gray-800"
          />
          {/* Menu toggle */}
          <button
            className="text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-[#EFF5E1] w-full shadow-md absolute top-[64px] left-0 z-40">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700">
            <li className="cursor-pointer hover:text-gray-900">All Products</li>
            <li className="cursor-pointer hover:text-gray-900">Serum</li>
            <li className="cursor-pointer hover:text-gray-900">Sunscreen</li>
            <li className="cursor-pointer hover:text-gray-900">Bundle</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-3 py-4 border-t border-gray-300">
            <button className="px-6 py-2 border border-gray-700 rounded-full text-gray-800 hover:bg-gray-200">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900">
              Sign Up
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 py-3 border-t">
            <FiHeart size={18} className="cursor-pointer hover:text-gray-900" />
            <FiUser size={18} className="cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      )}
    </>
  );
}
