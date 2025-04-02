import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-r from-amber-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-amber-200 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-amber-100 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="lg:w-1/2"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram Growth Specialist
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Transform Your <span className="text-amber-600">Photography</span> Business Online
            </motion.h1>

            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-serif text-gray-700 mb-8">
              Social Media Strategy & Instagram Coaching
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed mb-6">
              When I was busy planning my wedding, I discovered the incredible artistry behind professional photography. 
              Now I help photographers showcase their work through strategic social media that actually converts.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-700 px-8 py-4 rounded-lg font-medium transition-colors">
                View Case Studies
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              <img
                src="/hero-image.jpg"
                alt="Social Media Manager Coaching Photographers"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">+200%</p>
                    <p className="text-sm text-gray-600">Avg. Engagement</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-600">Photographers Helped</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;