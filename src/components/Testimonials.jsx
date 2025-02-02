import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";
import example2 from "../assets/john.jpg";
import example3 from "../assets/jane.jpg";
import example4 from "../assets/alice.jpg";
import example5 from "../assets/bob.jpg";
import example6 from "../assets/eve.jpg";
import data from "../data/content.json";

// Importing all images used in the testimonials
const images = {
  john: example2,
  jane: example3,
  alice: example4,
  bob: example5,
  eve: example6,
};

const Testimonials = () => {
  const testimonialsData = data.testimonialsData; // Access testimonialsData from the JSON file
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State to determine if mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check for mobile screen width
    };

    // Set initial screen size
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTestimonialClick = (index) => {
    setActiveTestimonialIndex(index);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-secondary" />);
    }
    if (halfStars) {
      stars.push(<FaStarHalfAlt key={`half`} className="text-secondary" />);
    }
    return stars;
  };

  const handleNext = () => {
    setActiveTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - (isMobile ? 1 : 3) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - (isMobile ? 1 : 3) : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 md:px-8 lg:px-32">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl mb-6 md:mb-10 max-w-4xl">
            See How Businesses Are
            <br/>
            Growing
            <GrGrow className="inline bg-accentGreen text-primary text-3xl lg:text-6xl rounded-lg lg:rounded-2xl mb-1 lg:mb-4 p-1 mx-2 lg:p-3" />
            with LocalConnect
          </h2>
        </div>

        {/* Testimonial Cards Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Create a container for all testimonials */}
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${activeTestimonialIndex * (100 / (isMobile ? 1 : 3))}%)`, // Adjust dynamically based on screen size
            }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="w-full sm:w-1/3 p-2 flex-shrink-0">
                <div className="bg-gray-100 rounded-lg p-6 mx-auto">
                  {/* Dynamically use image from imported images */}
                  <img
                    src={images[testimonial.image]} // Use the imported image based on the name
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.designation}</p>
                  <div className="flex justify-center my-2">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6">
          {/* Show only navigation dots based on the number of cards shown */}
          {Array.from({ length: Math.ceil(testimonialsData.length / (isMobile ? 1 : 2)) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-2 bg-gray-500 hover:bg-gray-300 transition-all duration-200 ${
                index === activeTestimonialIndex ? "bg-secondary" : ""
              }`}
              onClick={() => handleTestimonialClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
