// CardsSection.jsx
import React from "react";
import content from '../data/content.json';

function CardsSection() {
  const { cards } = content;

  return (
    <section id="features" className="px-4 md:px-8 lg:px-32 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* First Card */}
          <div className="bg-accentBlue p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">{cards[0].title}</h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[0].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[0].description}</p>
          </div>

          {/* Second Card */}
          <div className="bg-accentPurple p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">{cards[1].title}</h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[1].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[1].description}</p>
          </div>

          {/* Third Card */}
          <div className="bg-accentOrange p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">{cards[2].title}</h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[2].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[2].description}</p>
          </div>

          {/* Fourth Card - Digital Marketing (3/4 width) */}
          <div className="lg:col-span-2 bg-background p-4 md:p-5 lg:p-10">
            <h3 className="text-3xl md:text-6xl font-semibold mb-10">{cards[3].title}</h3>
            <p className="text-xl md:text-xl font-medium mb-4">{cards[3].subtitle}</p>
            <p className="text-sm md:text-base mb-4">{cards[3].description}</p>
          </div>

          {/* Fifth Card - Why Choose LocalConnect (1/4 width) */}
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