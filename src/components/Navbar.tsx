"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Use the new hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // New way to get the current path in app directory

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isCurrentPage = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <nav style={{ backgroundColor: '#EE1925' }} className="p-4 w-full fixed top-0 left-0 z-50">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
  <Link href="/">
    <div style={{ width: '110px', height: '130px' }}> {/* Add fixed width and height */}
      <Image 
        src="/state.png" 
        alt="Bucket List Logo" 
        width={110} 
        height={130} 
        priority 
        className="w-full h-full" 
        style={{ transition: 'none', animation: 'none' }} // Explicitly remove any animation
      />
    </div>
  </Link>
</div>


          {/* Hamburger Menu Icon for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links for desktop */}
          <div className="hidden md:flex space-x-52 text-white text-2xl font-bold">
            <Link 
              href="/shop" 
              className={`${isCurrentPage('/shop') ? 'text-black' : 'text-white'} no-underline`}
            >
              Shop
            </Link>
            <Link 
              href="/author" 
              className={`${isCurrentPage('/author') ? 'text-black' : 'text-white'} no-underline`}
            >
              Author
            </Link>
            <Link 
              href="/media" 
              className={`${isCurrentPage('/media') ? 'text-black' : 'text-white'} no-underline`}
            >
              Media
            </Link>
            <Link 
              href="/contact" 
              className={`${isCurrentPage('/contact') ? 'text-black' : 'text-white'} no-underline`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`md:hidden transition-all duration-1000 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col items-center text-white space-y-2 mt-2">
            <Link href="/shop" className={`${isCurrentPage('/shop') ? 'text-black' : 'text-white'} no-underline block py-2`}>
              Shop
            </Link>
            <Link href="/author" className={`${isCurrentPage('/author') ? 'text-black' : 'text-white'} no-underline block py-2`}>
              Author
            </Link>
            <Link href="/media" className={`${isCurrentPage('/media') ? 'text-black' : 'text-white'} no-underline block py-2`}>
              Media
            </Link>
            <Link href="/contact" className={`${isCurrentPage('/contact') ? 'text-black' : 'text-white'} no-underline block py-2`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
