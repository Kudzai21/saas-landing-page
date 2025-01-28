import React from "react";
import faqData from "../data/content.json"; // Import the JSON data

const FAQ = () => {
  const { faq } = faqData; // Destructure faq from the imported JSON

  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-gray-600">Got questions? We've got answers!</p>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-700">{item.question}</h3>
              <button
                className="text-blue-600 focus:outline-none"
                onClick={() => document.getElementById(`answer-${index}`).classList.toggle("hidden")}
              >
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <p
              id={`answer-${index}`}
              className="text-gray-600 mt-4 hidden"
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
