import React from "react";
import content from "../data/content.json";
import example2 from "../assets/example (2).jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function TextImage() {
  const { features, titleStart, titleEnd } = content.textImage;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-5xl mb-6 md:mb-10">
              {titleStart}
              <br />
              <HiOutlineBadgeCheck className="inline bg-purple-700 text-white text-3xl lg:text-6xl rounded-lg lg:rounded-2xl mb-1 lg:mb-4 p-1 lg:p-3"/> {titleEnd}
            </h1>
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <p key={index} className="text-sm md:text-xl">
                  <span className="font-semibold">{feature.bold}</span>{' '}
                  {feature.regular}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img 
              src={example2} 
              alt="Features illustration" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextImage;
