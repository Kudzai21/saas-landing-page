import React from "react";
import testimonialsData from "../data/content.json"; // Import the JSON data

const Testimonials = () => {
  const { testimonials } = testimonialsData; // Destructure testimonials from the imported JSON

  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-600">Hear from those who have experienced our service</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-sm text-center"
          >
            <p className="text-xl text-gray-600 italic">"{testimonial.feedback}"</p>
            <p className="mt-4 font-semibold text-blue-600">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
