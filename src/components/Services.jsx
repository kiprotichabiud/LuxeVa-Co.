import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../assets/assets';
import { a } from 'framer-motion/client';

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
    image:  assets.image9
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
    description: "Enhancing loyalty and experience through effective CRM strategies.",
    image: assets.image12
  }
];

const Services = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(services.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPage]);

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = services.slice(start, end);

  return (
    <section className="bg-pink-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start mb-12">
          {/* Left Content */}
          <div className=" pr-8 lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-5xl font-secondary font-medium text-black leading-tight mb-6">
              Services we offer
            </h2>
            <p className="text-gray-900 font-tertiary text-lg mb-6">
              All of the resources you need to get your small business the help it needs. Spend less time working IN your business and more time working ON it.
            </p>
            {/* Bottom Arrows */}
            <div className="mt-8 flex justify-center items-center gap-6">
              <button
                onClick={goToPrevious}
                className="bg-white shadow-md p-3 rounded-full hover:bg-pink-200 transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                className="bg-white shadow-md p-3 rounded-full hover:bg-pink-50 transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
          

          {/* Right Cards Section */}
          <div className="lg:w-2/3 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
              {currentItems.map((service, index) => (
                <div
                  key={index}
                  className="bg-pink-100 shadow-2xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-tertiary text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
