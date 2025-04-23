import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from '../assets/assets';
import CalendlyModal from "./CalendlyModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      className="relative px-4 sm:px-6 pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[url('https://img.icons8.com/ios-filled/100/ff6b9a/flower.png')] bg-contain bg-no-repeat opacity-30"></div>
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-[url('https://img.icons8.com/ios-filled/100/9c6bff/flower.png')] bg-contain bg-no-repeat opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-primary font-bold text-black mb-3 leading-tight">
              <span className="block">Organized, Efficient</span>
              <span className="block">and Simplified</span>
              <span className="text-pink-400">Business</span>
            </h1>

            <p className="text-base font-secondary font-normal sm:text-lg text-gray-900 mb-5 max-w-xl mx-auto lg:mx-0">
            "You’re the visionary. We're the get-it-done crew.
            For Executives, Entrepreneurs and Coaches building first and thinking bigger – we bring strategic, done-for-you support that keeps your business flowing, your systems humming, and your time protected. 
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-pink-300 text-black uppercase tracking-wider text-sm hover:bg-pink-700 hover:bg-opacity-10 transition-all duration-300 border border-gray-200 shadow-2xl"
                onClick={() => setIsModalOpen(true)}
              >
                BOOK A DISCOVERY CALL
              </motion.button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full flex justify-center items-center order-1 lg:order-2 mt-8 md:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm aspect-[3/4] rounded-t-full rounded-bl-full overflow-hidden shadow-2xl border border-pink-200">
              <img
                src={assets.image1}
                alt="Professional virtual assistant at work"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <CalendlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
};

export default HeroSection;
