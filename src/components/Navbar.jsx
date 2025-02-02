import React, { useState } from "react";
import content from "../data/content.json";
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { navbar } = content;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-10 sticky top-0 z-50">
      <div className="px-4 md:px-8 lg:px-32">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="logo" className="w-32 md:w-40" />
          
          {/* Desktop Navbar Links */}
          <ul className="hidden md:flex space-x-6 font-medium">
            {navbar.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.toLowerCase()} // Match the link with the section id
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 capitalize cursor-pointer"
                >
                  {link}
                </Link>
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
                    <Link
                      to={link.toLowerCase()} // Match the link with the section id
                      smooth={true}
                      duration={500}
                      className="hover:text-gray-300 capitalize cursor-pointer"
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                      {link}
                    </Link>
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
