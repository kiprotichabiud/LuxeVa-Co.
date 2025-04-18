import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";



 

const Contact = () => {
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
        url: 'https://calendly.com/luxevaandco/45min?fbclid=PAZXh0bgNhZW0CMTEAAaeq7uOMD5hzkXVpGYbfZwDnVdPld3uDSP_pRoqQhZc8RlmviIXWyWmQhM9poQ_aem_GIM4a6XMJAamrZgtKgLmaQ&month=2025-04',
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
    <section
      id="contact"
      className="relative bg-cover bg-center bg-pink-50 bg-no-repeat h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/your-path/Screenshot-from-2025-04-18-10-18-16.png')" }}
    >
      <div className="text-center px-6">
        <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-secondary tracking-wide mb-6">
          LET'S CREATE SPACE TO BREATHE TOGETHER
        </h2>
        <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-pink-500 text-white uppercase tracking-wider text-sm hover:bg-pink-700 hover:bg-opacity-10 transition-all duration-300 border border-gray-200 shadow-2xl"
              onClick={openModal}
            >
              Get in touch
            </motion.button>
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
      </div>
    </section>
  );
};

export default Contact;
