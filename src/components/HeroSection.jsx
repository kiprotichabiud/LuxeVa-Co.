import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const calendlyRef = useRef(null);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e) => {
      if (e.data.event === 'calendly.event_scheduled') {
        setIsBookingSuccess(true);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Initialize Calendly when modal opens
  useEffect(() => {
    if (isModalOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jepkoechherma990/30min',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsBookingSuccess(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="relative px-4 sm:px-6 py-16 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[url('https://img.icons8.com/ios-filled/100/ff6b9a/flower.png')] bg-contain bg-no-repeat opacity-30"></div>
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-[url('https://img.icons8.com/ios-filled/100/9c6bff/flower.png')] bg-contain bg-no-repeat opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Organized, Efficient</span>
              <span className="block">and Simplified</span>
              <span className="text-pink-600">Business</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              I help ambitious women entrepreneurs reclaim their time through personalized virtual support.
              Let me handle the details while you focus on growing your empire.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={openModal}
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
            className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-md aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                alt="Professional virtual assistant at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Page Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Schedule a Discovery Call</h2>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 flex flex-col md:flex-row">
              {/* Calendly Widget - Takes full width */}
              <div className="flex-1 p-4 md:p-6">
                <div 
                  ref={calendlyRef}
                  className="calendly-inline-widget w-full h-full min-h-[80vh]"
                />
              </div>

              {/* Sidebar with Info - Only visible on larger screens */}
              <div className="md:w-80 bg-gray-50 p-6 border-l border-gray-200 hidden md:block">
                <div className="space-y-8 sticky top-20">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Lectures</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Scheduling automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Customizable availability</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Integrations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Google ecosystem</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Microsoft ecosystem</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Success Modal */}
      {isBookingSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center"
          >
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for scheduling a discovery call. You'll receive a confirmation email shortly.
            </p>
            <button
              onClick={closeModal}
              className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;