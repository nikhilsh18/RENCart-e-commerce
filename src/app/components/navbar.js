"use client";

import { useState } from "react";
import { FiMenu, FiSearch, FiMail, FiPhone, FiHeart, FiShoppingCart } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [cartCount] = useState(0);

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-2 py-3">
        {/* Logo & Search */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="IndianaCart" width={120} height={10} className="object-contain" />
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search here.."
              className="px-4 py-2 outline-none w-72 text-sm"
            />
            <button className="px-3 bg-gray-100 hover:bg-gray-200">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm flex items-center gap-1">
            Login <MdOutlineArrowForwardIos size={14} />
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">
            Sign Up
          </button>
          <div className="relative">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex items-center justify-between px-6 py-2 bg-white text-sm text-gray-700">
        <div className="flex items-center gap-6">
          <a href="/" className="hover:text-red-600">Home</a>
          <a href="/shop" className="hover:text-red-600">Shop</a>
          <a href="/about" className="hover:text-red-600">About Us</a>
          <div className="flex items-center gap-1 hover:text-red-600">
            <FiMail size={16} /> enquiry@fashionbrand.com
          </div>
          <div className="flex items-center gap-1 hover:text-red-600">
            <FiPhone size={16} /> +91 99999999
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}
