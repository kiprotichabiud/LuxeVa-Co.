import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-100 text-gray-700 pt-16 pb-8 px-6 border-t border-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding and contact */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-primary font-bold text-pink-700 mb-2">LuxeVA&Co.</h3>
            <p className="text-sm mb-4">Your trusted virtual assistant partner</p>
            
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-pink-500" />
                <a href="jepkoechherma990@gmail.com" className="hover:text-pink-600 transition-colors text-sm">
                jepkoechherma990@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-pink-500" />
                <a href="tel:+1234567890" className="hover:text-pink-600 transition-colors text-sm">
                  +254758084900
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-6 mb-4">
              <a href="#services" className="hover:text-pink-600 transition-colors font-medium">Services</a>
              <a href="#work" className="hover:text-pink-600 transition-colors font-medium">Work</a>
              <a href="#about" className="hover:text-pink-600 transition-colors font-medium">About</a>
              <a href="#contact" className="hover:text-pink-600 transition-colors font-medium">Contact</a>
            </div>
            
            <p className="text-xs font-primary text-gray-500">
              &copy; {currentYear} LuxeVa&Co.. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to top button - simplified */}
        <a 
          href="#" 
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center shadow-md transition-all"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;