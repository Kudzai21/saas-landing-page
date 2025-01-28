// LogoCarousel.jsx
import React from "react";
import content from "../data/content.json";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

const LogoCarousel = () => {
  const { logos } = content;

  const logosArray = [logo1, logo2, logo3, logo4];

  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of logos */}
        <div className="flex shrink-0 items-center space-x-16 px-8">
          {logosArray.map((logo, index) => (
            <img 
              key={`logo-1-${index}`}
              src={logo} 
              alt={`Partner Logo ${index + 1}`} 
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex shrink-0 items-center space-x-16 px-8">
          {logosArray.map((logo, index) => (
            <img 
              key={`logo-2-${index}`}
              src={logo} 
              alt={`Partner Logo ${index + 1}`} 
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
        {/* Third set to ensure no gaps */}
        <div className="flex shrink-0 items-center space-x-16 px-8">
          {logosArray.map((logo, index) => (
            <img 
              key={`logo-3-${index}`}
              src={logo} 
              alt={`Partner Logo ${index + 1}`} 
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
