import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerData from "../data/content.json"; // Import JSON data

const Footer = () => {
  const { footer } = footerData; // Destructure footer data from JSON

  return (
    <footer className="bg-background py-12 md:py-20 px-4 md:px-8 lg:px-32">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        {/* Email Subscription */}
        <div className="w-full max-w-md">
          <p className="mb-2 text-lg font-semibold">Subscription for more information</p>
          <div className="flex items-center border border-background rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-primary text-white hover:bg-gray-700 transition">Subscribe</button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href={footer.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href={footer.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href={footer.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href={footer.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
            <FaLinkedin />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="w-full border-t border-gray-600 pt-4">
          <p className="text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
