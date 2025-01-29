// Hero.jsx
import React from "react";
import content from "../data/content.json";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi";

const Hero = () => {
  const { hero } = content;

  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-32 -mt-20">
        <div>
          <h2 className="inline-block text-secondary font-semibold px-4 md:px-5 py-2 md:py-3 mb-6 md:mb-10 rounded-full shadow-[0_0_7px_rgba(0,0,0,0.2)] text-sm md:text-base">
            <HiOutlineBriefcase className="inline-block text-xl mr-2 mb-0.5" /> {hero.label}
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-10 max-w-5xl">
            {hero.titleStart} <HiOutlineRocketLaunch className="inline bg-secondary text-white text-3xl lg:text-6xl rounded-lg lg:rounded-2xl mb-1 lg:mb-4 p-1 lg:p-3"/> {hero.titleEnd}
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-3xl">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <button className="bg-primary text-white px-10 py-3 rounded-full hover:opacity-90">
              {hero.button1}
            </button>
            <button className="border border-primary px-10 py-3 rounded-full hover:text-gray-300 hover:border-gray-300">
              {hero.button2}
            </button>
          </div>
        </div>
    </section>
  );
};

export default Hero;
