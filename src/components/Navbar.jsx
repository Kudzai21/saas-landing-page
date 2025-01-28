// Navbar.jsx
import React, { useState } from "react";
import content from "../data/content.json";
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { navbar } = content;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-10 sticky top-0 z-50">
        <div className="mx-4 md:mx-8 lg:mx-16">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo - updated src */}
                <img src={logo} alt="logo" className="w-32 md:w-40" />
                
                {/* Nav Links */}
                <ul className="hidden md:flex space-x-6 font-medium">
                {navbar.map((link, index) => (
                    <li key={index}>
                    <a
                        href={`#${link.toLowerCase()}`}
                        className="hover:text-gray-300 capitalize"
                    >
                        {link}
                    </a>
                    </li>
                ))}
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <HiXMark className="h-6 w-6" />
                    ) : (
                        <HiOutlineBars3 className="h-6 w-6" />
                    )}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white p-4 md:hidden shadow-lg">
                        <div className="flex flex-col gap-4 list-none">
                            {navbar.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="hover:text-gray-300 capitalize"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </div>
                    </div>
                )}
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
