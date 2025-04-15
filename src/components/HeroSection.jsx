import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("booking");
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
        setActiveTab("booking");
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Initialize Calendly when modal opens
  useEffect(() => {
    if (isModalOpen && window.Calendly && activeTab === "booking" && calendlyRef.current) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jepkoechherma990/30min',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {},
        style: { minWidth: '320px', height: '100%' }
      });
    }
  }, [isModalOpen, activeTab]);

  const openModal = () => {
    setIsModalOpen(true);
    setActiveTab("booking");
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsBookingSuccess(false);
    document.body.style.overflow = 'auto';
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primary font-bold text-black mb-6 leading-tight">
              <span className="block">Organized, Efficient</span>
              <span className="block">and Simplified</span>
              <span className="text-pink-600">Business</span>
            </h1>

            <p className="text-lg text-gray-900 font-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              I help ambitious women entrepreneurs reclaim their time through personalized virtual support.
              Let me handle the details while you focus on growing your empire.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          >
            <div className=" h-[90vh] w-full max-w-md lg:max-w-lg rounded-t-full border-b-pink-200 shadow-2xl overflow-hidden ">
              <img
                src="src/assets/image1.png"
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
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen w-screen">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">
              {activeTab === "booking" ? "Schedule a Call" : "Call Information"}
            </h2>
            <button 
              onClick={closeModal}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
            </button>
          </div>

          {/* Mobile Tabs */}
          <div className="md:hidden border-b border-gray-200">
            <div className="flex">
              <button
                className={`flex-1 py-3 text-sm font-medium ${activeTab === "booking" ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab("booking")}
              >
                Booking
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${activeTab === "info" ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab("info")}
              >
                Information
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Calendly Widget */}
            <div className={`${activeTab === "booking" ? 'flex' : 'hidden'} md:flex flex-1 h-full`}>
              <div 
                ref={calendlyRef}
                className="calendly-inline-widget w-full h-full"
                style={{ minHeight: 'calc(100vh - 120px)' }}
              />
            </div>

            {/* Info Section */}
            <div className={`
              ${activeTab === "info" ? 'flex flex-col' : 'hidden'} 
              md:flex md:w-80 bg-gray-50 p-4 sm:p-6 
              border-t md:border-t-0 md:border-l border-gray-200
              overflow-y-auto h-full
            `}>
              <div className="space-y-6 md:sticky md:top-20 flex-1">
                <div>
                  <h3 className="font-semibold text-lg mb-3">What We'll Cover</h3>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li className="list-disc">Your business goals</li>
                    <li className="list-disc">Current pain points</li>
                    <li className="list-disc">How I can help</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Integrations</h3>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li className="list-disc">Google Workspace</li>
                    <li className="list-disc">Microsoft 365</li>
                    <li className="list-disc">CRM Systems</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 md:hidden">
                <button
                  onClick={() => setActiveTab("booking")}
                  className="w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm"
                >
                  Back to Booking
                </button>
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
            className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 text-center"
          >
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              You'll receive a confirmation email with the details shortly.
            </p>
            <button
              onClick={closeModal}
              className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
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