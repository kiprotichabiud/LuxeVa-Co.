'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { fadeIn, staggerContainer } from '../utils/motion';

const services = [
  {
    title: "Data Entry",
    description: "Precision data handling that keeps your business information flawless and up-to-date.",
    image: assets.image4
  },
  {
    title: "Calendar Mastery",
    description: "Effortless schedule coordination so you never miss another important date.",
    image: assets.image5
  },
  {
    title: "Email Alchemy",
    description: "Inbox transformation that turns chaos into perfectly organized communication.",
    image: assets.image6
  },
  {
    title: "Customer Support",
    description: "Warm, professional support that makes your clients feel truly valued.",
    image: assets.image7
  },
  {
    title: "Travel Planning",
    description: "Seamless itinerary creation for stress-free business trips and vacations.",
    image: assets.image8
  },
  {
    title: "Project Coordination",
    description: "Flawless execution from planning to delivery with sparkling attention to detail.",
    image: assets.image9
  },
  {
    title: "Online Research",
    description: "Thorough and accurate research tailored to your business needs.",
    image: assets.image10
  },
  {
    title: "Customer Relationship Management",
    description: "Enhancing loyalty and experience through effective CRM strategies.",
    image: assets.image11
  },
  {
    title: "Digital Marketing",
    description: "Drive awareness and sales through effective digital strategies.",
    image: assets.image12
  }
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="bg-[#0d1b2a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title + Description */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight mb-3 sm:mb-4">
            Our Premium Services
          </h2>
          <p className="text-[#d4af37] font-secondary text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Strategic solutions designed to elevate your business operations and maximize efficiency
          </p>
        </motion.div>

        {/* Services Grid - Responsive columns */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#1b263b] rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-lg hover:shadow-[#d4af37]/10"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }} // Added tap feedback for mobile
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/30 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold font-secondary text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-quaternary leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-3 sm:mt-4 h-0.5 w-16 bg-[#d4af37] transition-all duration-300 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;