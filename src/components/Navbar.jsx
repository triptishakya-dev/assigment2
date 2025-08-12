// components/Navbar.jsx
import { FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";


export default function Navbar() {
  return (
    <nav className="bg-[#EFF5E1] px-8 py-4 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="font-bold text-lg tracking-wide text-gray-800">
        SKINCARE
      </div>

      {/* Middle Section - Links */}
      <ul className="flex space-x-8 text-sm text-gray-700">
        <li className="cursor-pointer hover:text-gray-900">All Products</li>
        <li className="cursor-pointer hover:text-gray-900">Serum</li>
        <li className="cursor-pointer hover:text-gray-900">Sunscreen</li>
        <li className="cursor-pointer hover:text-gray-900">Bundle</li>
      </ul>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-6 text-gray-800">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">

          <img src="/images/bag.svg" alt="" />
          <span className="text-sm">Cart (1)</span>
        </div>
        <img src="/images/heart.svg" alt="" />
       <img src="/images/vector.svg" alt="" />
      </div>
    </nav>
  );
}
