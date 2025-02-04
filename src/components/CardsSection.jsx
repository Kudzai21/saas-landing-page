import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import content from '../data/content.json';

function CardsSection() {
  const { cards } = content;

  // Use useInView to detect when the section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  // Function to render animated numbers
  const renderAnimatedNumber = (title) => {
    const numberMatch = title.match(/\d+/); // Extract the number from the title
    if (numberMatch) {
      const number = parseInt(numberMatch[0], 10); // Convert the extracted number to an integer
      const prefix = title.split(numberMatch[0])[0]; // Get the text before the number
      const suffix = title.split(numberMatch[0])[1]; // Get the text after the number
      return (
        <>
          {prefix}
          <CountUp start={0} end={number} duration={2} separator="," />
          {suffix}
        </>
      );
    }
    return title;
  };

  return (
    <section id="features" className="px-4 md:px-8 lg:px-32 py-12 md:py-16 lg:py-20" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* First Card */}
          <div className="bg-accentBlue p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">
              {inView ? renderAnimatedNumber(cards[0].title) : '0'}
            </h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[0].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[0].description}</p>
          </div>

          {/* Second Card */}
          <div className="bg-accentPurple p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">
              {inView ? renderAnimatedNumber(cards[1].title) : '0'}
            </h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[1].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[1].description}</p>
          </div>

          {/* Third Card */}
          <div className="bg-accentOrange p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">
              {inView ? renderAnimatedNumber(cards[2].title) : '0'}
            </h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[2].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[2].description}</p>
          </div>

          {/* Fourth Card */}
          <div className="lg:col-span-2 bg-background p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">
              {inView ? renderAnimatedNumber(cards[3].title) : '0'}
            </h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[3].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[3].description}</p>
          </div>

          {/* Fifth Card */}
          <div className="bg-white md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-5xl font-medium mb-7">{cards[4].title}</h3>
            <p className="text-sm md:text-base mb-4">{cards[4].description}</p>
            {cards[4].button && (
              <button className="w-full md:w-auto bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-90 text-sm md:text-base transition-opacity">
                {cards[4].button}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsSection;