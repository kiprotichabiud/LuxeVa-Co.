import React from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Smartphone, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Decorative floral elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[url('https://img.icons8.com/ios-filled/100/ff6b9a/flower.png')] bg-contain bg-no-repeat opacity-30"></div>
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-[url('https://img.icons8.com/ios-filled/100/9c6bff/flower.png')] bg-contain bg-no-repeat opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-black font-primary">
                Organized. Efficient.
              </span > <br  className=" font-primary"/>
              and Simplified<br /> 
              <span className=" font-primary">Business</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I help ambitious women entrepreneurs reclaim their time through personalized virtual support. 
              Let me handle the details while you focus on growing your empire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-300 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Book a Discovery Call
                <ChevronRight className="w-5 h-5" />
              </motion.button>
             
            </div>

          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Main image with decorative frame */}
              <div className="relative z-10  overflow-hidden shadow-2xl ">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                  alt="Professional virtual assistant at work"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative elements */}
           
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;