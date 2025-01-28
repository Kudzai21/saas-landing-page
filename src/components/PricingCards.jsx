import React from "react";
import pricingData from "../data/content.json"; // Import the JSON data

const PricingCards = () => {
  const { pricing } = pricingData; // Destructure pricing data from the imported JSON

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">Choose the plan that best suits your needs</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {pricing.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 text-center transition-transform transform 
              ${
                index === 1
                  ? "bg-primary text-white scale-105"
                  : "bg-gray-100 text-gray-800"
              }`}
          >
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-xl mt-2">{plan.price}</p>
            <p className="mt-2 text-sm">{plan.subtitle}</p>
            <ul className="mt-6 text-left space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center text-sm text-gray-600"
                >
                  <span className="text-white mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-2 rounded-lg mt-6 font-bold ${
                index === 1
                  ? "bg-white text-blue-500 hover:bg-gray-200"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
