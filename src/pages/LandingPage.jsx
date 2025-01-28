// App.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import CardsSection from "../components/CardsSection";
import TextImageSection from "../components/TextImagesSection";
import PricingCards from "../components/PricingCards";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

// Ensure Tailwind CSS is configured correctly
//import "./styles/tailwind.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <CardsSection />
      <TextImageSection />
      <PricingCards />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
