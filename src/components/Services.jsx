import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Data Entry Wizardry",
    description: "Precision data handling that keeps your business information flawless and up-to-date.",
    image: "/images/data-entry.jpg"
  },
  {
    title: "Calendar Mastery",
    description: "Effortless schedule coordination so you never miss another important date.",
    image: "/images/calendar.jpg"
  },
  {
    title: "Email Alchemy",
    description: "Inbox transformation that turns chaos into perfectly organized communication.",
    image: "/images/email.jpg"
  },
  {
    title: "Customer Support",
    description: "Warm, professional support that makes your clients feel truly valued.",
    image: "/images/support.jpg"
  },
  {
    title: "Travel Planning",
    description: "Seamless itinerary creation for stress-free business trips and vacations.",
    image: "/images/travel.jpg"
  },
  {
    title: "Project Coordination",
    description: "Flawless execution from planning to delivery with sparkling attention to detail.",
    image: "/images/project.jpg"
  },
  {
    title: "Online Research",
    description: "Thorough and accurate research tailored to your business needs.",
    image: "/images/research.jpg"
  },
  {
    title: "Customer Relationship Management",
    description: "Enhancing loyalty and experience through effective CRM strategies.",
    image: "/images/crm.jpg"
  },
  {
    title: "Customer Relationship Management",
    description: "Enhancing loyalty and experience through effective CRM strategies.",
    image: "/images/crm.jpg"
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
    <section className="bg-[#f8f6f1] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start mb-12">
          {/* Left Content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-4xl font-serif font-medium text-black leading-tight mb-4">
              Services we offer
            </h2>
            <p className="text-gray-700 text-sm">
              All of the resources you need to get your small business the help it needs. Spend less time working IN your business and more time working ON it.
            </p>
            {/* Bottom Arrows */}
            <div className="mt-8 flex justify-center items-center gap-6">
              <button
                onClick={goToPrevious}
                className="bg-white shadow-md p-3 rounded-full hover:bg-yellow-100 transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                className="bg-white shadow-md p-3 rounded-full hover:bg-yellow-100 transition"
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
                  className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-yellow-900 mb-2">
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
