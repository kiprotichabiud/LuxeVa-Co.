import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, X, Menu, X as Close } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
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
      className={`fixed w-full z-50 px-6 py-6 transition-all duration-300 ${
        scrolled ? "bg-pink-50 shadow-lg" : "bg-pink-50 backdrop-blur-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-serif font-bold tracking-wide"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="text-black font-primary">Jepkoech Herma</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.path}
              className="relative uppercase font-secondary tracking-wide group"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Social Media Icons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <motion.a 
            href="#" 
            className="p-2 rounded-full hover:bg-amber-100 text-gray-700 hover:text-pink-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="#" 
            className="p-2 rounded-full hover:bg-amber-100 text-gray-700 hover:text-amber-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-full focus:outline-none"
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
            className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="max-w-md mx-auto">
              <motion.div className="flex flex-col space-y-8 py-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    className="text-2xl font-medium text-gray-800 py-2 border-b border-gray-100"
                    variants={itemVariants}
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>

              <motion.div 
                className="flex space-x-6 justify-center pt-12"
                variants={itemVariants}
              >
                <motion.a 
                  href="#" 
                  className="p-3 rounded-full bg-pink-100 text-pink-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 rounded-full bg-pink-100 text-pink-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6" />
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