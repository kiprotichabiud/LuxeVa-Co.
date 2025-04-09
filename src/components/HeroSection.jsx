import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const calendlyRef = useRef(null);

  // Load Calendly script and set up event listeners
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e) => {
      if (e.data.event && e.data.event.indexOf('calendly.') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          setIsBookingSuccess(true);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Initialize Calendly widget when modal opens
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
    setIsBookingSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsBookingSuccess(false);
  };

  return (
    <section className="relative px-4 sm:px-6 py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-black">
                Organized, Efficient
              </span><br/>
              and Simplified<br/> 
              <span className="text-pink-600">Business</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              I help ambitious women entrepreneurs reclaim their time through personalized virtual support. 
              Let me handle the details while you focus on growing your empire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
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
            className="lg:w-1/2 relative mt-10 lg:mt-0"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto">
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

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center px-4 mt-8 z-50 h-[100vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative mx-2"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 sm:p-8">
              {!isBookingSuccess ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Schedule a Discovery Call
                  </h2>
                  <div 
                    ref={calendlyRef}
                    className="calendly-inline-widget min-w-[320px] h-[580px]"
                    style={{ minHeight: '580px', width: '100%' }}
                  />
                  <div className="mt-4 text-center">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Successful!</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for scheduling a discovery call. You'll receive a confirmation email shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;