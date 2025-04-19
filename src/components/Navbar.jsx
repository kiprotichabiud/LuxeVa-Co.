import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Linkedin, Menu, X as Close } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Work", path: "#work" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 px-6 py-3 transition-all duration-300 ${
        scrolled ? "bg-pink-50 shadow-md" : "bg-pink-50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              className="text-pink-500"
              fill="currentColor"
            >
              <path d="M16 0L20.94 12.42L32 16L20.94 19.58L16 32L11.06 19.58L0 16L11.06 12.42L16 0Z"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-primary text-2xl font-bold text-gray-900 tracking-tight">
                Luxe<span className="text-pink-500">VA</span>
              </span>
              <span className="font-primary text-black font-bold">
                & CO.
              </span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.path}
              className="relative font-semibold uppercase font-secondary tracking-wider group"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          <motion.a 
            href="https://www.instagram.com/luxe_virtualassistance/" 
            className="p-2 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/herma.simei.2025" 
            className="p-2 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/hermajepkoech/" 
            className="p-2 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-full focus:outline-none text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-white z-[999] pt-24 px-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {/* Close Button Inside Menu */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-pink-600 transition"
              >
                <Close className="w-6 h-6" />
              </button>
            </div>

            <div className="max-w-md mx-auto">
              <motion.div className="flex flex-col space-y-6 py-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    className="text-xl font-secondary font-semibold text-gray-800 py-3 border-b border-gray-100"
                    variants={itemVariants}
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                className="flex space-x-6 justify-center pt-12"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://www.instagram.com/luxe_virtualassistance/" 
                  className="p-3 rounded-full bg-pink-50 text-pink-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/herma.simei.2025" 
                  className="p-3 rounded-full bg-pink-50 text-pink-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/hermajepkoech/" 
                  className="p-3 rounded-full bg-pink-50 text-pink-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
