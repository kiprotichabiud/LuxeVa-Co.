import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets"; // Adjust the path as necessary

const Contact = () => {
  const openWhatsApp = () => {
    // Replace with your WhatsApp number in international format (without +)
    const phoneNumber = "254758084900"; 
    const message = "Hello! I'd like to get in touch about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative bg-contain bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.image2})` }}
    >
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#0d1b2a] opacity-80"></div>
      
      <div className="text-center px-6 z-10">

        <h2 className="text-[#d4af37] text-2xl md:text-4xl lg:text-5xl font-primary p-12 tracking-wide mb-6">
          Together, we'll turn your full potential into your every day reality
        </h2>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1b263b" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#d4af37]  uppercase font-secondary text-black hover:bg-[#1b263b] transition-all duration-300 border border-[#d4af37] shadow-lg"
            onClick={openWhatsApp}
          >
            Get in touch
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;