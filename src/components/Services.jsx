'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <motion.section
      id="services"
      className="bg-pink-50 py-16 px-6 lg:px-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title + Description */}
        <motion.div
          className="text-center mb-12"
          variants={fadeIn}
        >
          <h2 className="text-5xl font-primary font-medium text-black leading-tight mb-4">
            Services we offer
          </h2>
          <p className="text-gray-900 font-secondary text-lg max-w-2xl mx-auto">
            All of the resources you need to get your small business the help it needs.
            Spend less time working in your business and more time working on it.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-2 pb-4"
            variants={fadeIn}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex-shrink-0 snap-start bg-pink-100 shadow-xl rounded-2xl overflow-hidden w-full sm:w-[280px] md:w-[300px] lg:w-[320px] transition duration-300 hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-secondary text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700 font-quaternary">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrows */}
          <motion.div
            className="mt-8 flex justify-center gap-6"
            variants={fadeIn}
          >
            <button
              onClick={scrollLeft}
              className="bg-white shadow-md p-3 rounded-full hover:bg-pink-200 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white shadow-md p-3 rounded-full hover:bg-pink-200 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
