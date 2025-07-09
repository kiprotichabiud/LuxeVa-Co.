import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronUp } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/herma.simei.2025" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/hermajepkoech/" },
  ];

  return (
    <footer className="bg-[#0d1b2a] text-[#d4af37] pt-20 pb-12 px-6 border-t border-[#1b263b] relative overflow-hidden font-secondary">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-primary tracking-wider">LUXEVA&CO.</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
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
                  className="w-12 h-12 rounded-full bg-[#1b263b] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d1b2a] transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold mb-8 tracking-wider border-b border-[#d4af37]/30 pb-3">Contact Us</h4>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mt-1 mr-4 text-[#d4af37]" />
                <div>
                  <p className="font-medium text-lg mb-1">Email</p>
                  <a 
                    href="mailto:luxevaandco@gmail.com" 
                    className="hover:text-[#d4af37] transition-colors text-base"
                  >
                    luxevaandco@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 mt-1 mr-4 text-[#d4af37]" />
                <div>
                  <p className="font-medium text-lg mb-1">Phone</p>
                  <a 
                    href="tel:+254758084900" 
                    className="hover:text-[#d4af37] transition-colors text-base"
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