import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import pricingData from "../data/content.json";

const PricingCards = () => {
  const [pricing, setPricing] = useState(pricingData.pricing);

  const handleTextChange = (index, field, value) => {
    const updatedPricing = [...pricing];
    updatedPricing[index][field] = value;
    setPricing(updatedPricing);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-32">
      <div className="container mx-auto">
        <div className="lg:mb-28">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-10 max-w-2xl">
            Simple Pricing,
            <IoPricetagOutline className="inline bg-orange-700 text-white text-3xl lg:text-6xl rounded-lg lg:rounded-2xl mb-1 lg:mb-4 p-1 lg:p-3" />
            <br/> No Surprises
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-10 transition-transform transform flex flex-col justify-between ${
                index === 1 ? "lg:scale-110 bg-primary text-white" : "bg-gray-100 text-gray-800"
              }`}
            >
              <div>
                <input
                  type="text"
                  value={plan.title}
                  onChange={(e) => handleTextChange(index, "title", e.target.value)}
                  className="text-2xl mb-10 font-semibold bg-transparent focus:outline-none w-full"
                />
                <input
                  type="text"
                  value={plan.price}
                  onChange={(e) => handleTextChange(index, "price", e.target.value)}
                  className="text-3xl lg:text-4xl mb-10 bg-transparent focus:outline-none w-full"
                />
                <textarea
                  value={plan.subtitle}
                  onChange={(e) => handleTextChange(index, "subtitle", e.target.value)}
                  className="mt-2 text-lg lg:text-xl bg-transparent focus:outline-none resize-none w-full"
                />
                <ul className="mt-6 text-left space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-base ${index === 1 ? "text-white" : "text-gray-600"}`}>
                      <span className={`flex items-center justify-center w-auto h-6 rounded-full p-1 mb-1 ${index === 1 ? "bg-white text-primary" : "bg-gray-300 text-primary"}`}>
                        <BsCheckLg className="text-base" />
                      </span>
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                          const updatedPricing = [...pricing];
                          updatedPricing[index].features[featureIndex] = e.target.value;
                          setPricing(updatedPricing);
                        }}
                        className="bg-transparent focus:outline-none w-full ml-2"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`px-10 py-4 rounded-full mt-10 font-semibold w-full ${
                  index === 1 ? "bg-white text-primary hover:bg-gray-200" : "bg-primary text-white hover:bg-gray-800"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
