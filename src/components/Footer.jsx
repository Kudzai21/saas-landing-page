import React from "react";
import footerData from "../data/content.json"; // Import the JSON data

const Footer = () => {
  const { footer } = footerData; // Destructure footer data from the imported JSON

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
