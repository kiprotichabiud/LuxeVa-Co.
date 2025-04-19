import React, { useState } from "react";
import { motion } from "framer-motion";
import CalendlyModal from "./CalendlyModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-pink-50 bg-no-repeat h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/your-path/Screenshot-from-2025-04-18-10-18-16.png')" }}
    >
      <div className="text-center px-6">
        <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-primary tracking-wide mb-6">
          LET'S CREATE SPACE TO BREATHE TOGETHER
        </h2>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-pink-300 text-black uppercase tracking-wider text-sm hover:bg-pink-700 hover:bg-opacity-10 transition-all duration-300 border border-gray-200 shadow-2xl"
            onClick={() => setIsModalOpen(true)}
          >
            Get in touch
          </motion.button>
        </div>
      </div>

      <CalendlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Contact;