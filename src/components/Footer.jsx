import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronUp } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" }
  ];

  return (
    <footer className="bg-[#0d1b2a] text-[#d4af37] pt-20 pb-12 px-6 border-t border-[#1b263b] relative overflow-hidden font-secondary">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#d4af37]/10 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#d4af37]/5 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-primary tracking-wider">LUXEVA&CO.</h3>
            <p className="text-gray-300 leading-relaxed">
              Elevating businesses through premium virtual assistance services tailored to your unique needs.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#1b263b] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d1b2a] transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-xl font-semibold mb-6 tracking-wider border-b border-[#d4af37]/30 pb-2 w-full">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              {['Services', 'Work', 'About', 'Testimonials', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-[#d4af37] transition-colors flex items-center"
                  >
                    <ChevronUp className="w-4 h-4 mr-2 rotate-90 text-[#d4af37]/70" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold mb-6 tracking-wider border-b border-[#d4af37]/30 pb-2">Contact Us</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-4 text-[#d4af37]" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:luxevaandco@gmail.com" 
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    luxevaandco@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-4 text-[#d4af37]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+254758084900" 
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    +254 758 084 900
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#1b263b] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} LuxeVA&Co. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.a 
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -5, backgroundColor: "#d4af37", color: "#0d1b2a" }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#1b263b] text-[#d4af37] flex items-center justify-center shadow-lg border border-[#d4af37]/30 z-50 transition-all"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.a>
    </footer>
  );
};

export default Footer;