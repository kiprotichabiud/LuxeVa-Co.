import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../assets/assets';

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

        // If scrolled to end, scroll back to start
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
    <section className="bg-pink-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-secondary font-medium text-black leading-tight mb-4">
            Services we offer
          </h2>
          <p className="text-gray-900 font-tertiary text-lg max-w-2xl mx-auto">
            All of the resources you need to get your small business the help it needs.
            Spend less time working <span className="font-bold">IN</span> your business and more time working <span className="font-bold">ON</span> it.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-2 pb-4"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start bg-pink-100  shadow-xl rounded-2xl overflow-hidden w-[320px] transition duration-300 hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-tertiary text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows Below */}
          <div className="mt-8 flex justify-center gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
