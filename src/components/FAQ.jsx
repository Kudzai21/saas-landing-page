import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiQuestionLine } from "react-icons/ri";
import faqData from "../data/content.json";

const FAQ = () => {
  const { faq } = faqData; // Extract FAQ data from JSON
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 px-4 md:px-8 lg:px-32">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl mb-6 md:mb-10 max-w-4xl">
          Got Questions
            <RiQuestionLine className="inline bg-accentRed text-primary text-3xl lg:text-6xl rounded-lg lg:rounded-2xl mb-1 lg:mb-4 p-1 mx-2 lg:p-3" />
            <br/>
            We’ve Got Answers
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto px-4">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-lg font-medium"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <FiMinus className="text-gray-600 text-xl" />
                ) : (
                  <FiPlus className="text-gray-600 text-xl" />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-600 text-base pb-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
