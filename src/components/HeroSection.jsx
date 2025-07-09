import React, { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { assets } from '../assets/assets';

const CalendlyModal = lazy(() => import("./CalendlyModal"));

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      className="relative px-4 sm:px-6 pt-24 md:pt-28  lg:pt-32 pb-12 md:pb-16 lg:pb-20 min-h-screen  flex items-center overflow-hidden bg-[#0d1b2a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dark blue background with subtle texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0d1b2a]">
          {/* Subtle texture overlay */}
         
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
              <span className="block">Organized, Efficient</span>
              <span className="block">and Simplified</span>
              <span className="text-[#d4af37]">Business</span>
            </h1>

            <motion.p 
              className="text-lg sm:text-xl font-secondary  text-gray-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
          You’re the visionary. We’re the get-it-done crew.
For Executives, Founders and Entrepreneurs building fast and thinking bigger—we bring strategic, done-for-you support that keeps your business flowing, your systems humming, and your time protected.
Because building your legacy shouldn’t mean burning out.
            </motion.p>

            <div className="flex justify-center lg:justify-between ">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#d4af37] text-[#0d1b2a] font-semibold font-secondary uppercase cursor-pointer text-sm lg:text-base hover:bg-[#c2a035] transition-all duration-300 border border-[#d4af37] shadow-lg hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-es-full rounded-e-full overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl">
              <img
                src={assets.image1}
                alt="Professional business support"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/70 via-[#0d1b2a]/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      

      <Suspense fallback={null}>
        <CalendlyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Suspense>
    </motion.section>
  );
};

export default HeroSection;