import React from "react";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12 px-6">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Your Virtual Assistant</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping busy professionals and entrepreneurs streamline their workflow 
              through efficient virtual assistance and smart business solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-amber-600 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-amber-500 transition-colors">Recent Work</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Me</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Administrative Support</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Email Management</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Calendar Management</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Customer Support</a></li>
            </ul>
          </div>

          {/* Contact info */}
          
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center shadow-lg transition-all"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;