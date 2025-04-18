import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const CalendlyModal = ({ 
  isOpen, 
  onClose, 
  onBookingSuccess,
  bookingUrl = 'https://calendly.com/luxevaandco/45min?fbclid=PAZXh0bgNhZW0CMTEAAaf8iWHcNVSw4s1y6qpdzAHs47FqS4B7tRJMsksPkZDiWgLDaTD-C_FcovGTmA_aem_jbKgeMY1cdevxA4S2S7W7w&month=2025-04'
}) => {
  const [activeTab, setActiveTab] = useState("booking");
  const calendlyRef = useRef(null);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  // Handle Calendly event messages
  const handleMessage = useCallback((e) => {
    if (e.data.event === 'calendly.event_scheduled') {
      setIsBookingSuccess(true);
      onBookingSuccess?.();
    }
  }, [onBookingSuccess]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('message', handleMessage);
    }
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isOpen, handleMessage]);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Initialize Calendly widget when activeTab is 'booking'
  useEffect(() => {
    if (isOpen && activeTab === "booking" && calendlyRef.current) {
      calendlyRef.current.innerHTML = ""; // Clear previous Calendly widget
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: bookingUrl,
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {},
          style: { minWidth: '320px', height: '100%' }
        });
      }
    }
  }, [isOpen, activeTab, bookingUrl]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen w-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            {activeTab === "booking" ? "Schedule a Call" : "Call Information"}
          </h2>
          <button 
            onClick={onClose}
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

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Calendly Section */}
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

            {/* Back to booking for mobile */}
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
              onClick={() => {
                setIsBookingSuccess(false);
                onClose();
              }}
              className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CalendlyModal;
