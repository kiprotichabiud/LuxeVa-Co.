import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Linkedin, Menu, X as Close } from "lucide-react";
import { assets } from "../assets/assets";

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
        when: "beforeChildren",
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.nav
        className={`fixed w-full z-50 px-6 py-3 transition-all duration-300 ${
          scrolled ? "bg-[#0d1b2a] shadow-lg" : "bg-[#0d1b2a]/90"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
        <div>
          <img src={assets.logo} alt="LuxeVA&Co. Logo" className="w-20 h-16" />
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="relative  uppercase font-secondary font-semibold  "
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            <motion.a
              href="https://www.instagram.com/luxe_virtualassistance/"
              className="p-2 rounded-full hover:bg-[#d4af37]/10 text-white hover:text-[#d4af37] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/herma.simei.2025"
              className="p-2 rounded-full hover:bg-[#d4af37]/10 text-white hover:text-[#d4af37] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hermajepkoech/"
              className="p-2 rounded-full hover:bg-[#d4af37]/10 text-white hover:text-[#d4af37] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full focus:outline-none text-white hover:text-[#d4af37]"
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
              className="md:hidden fixed inset-0 bg-[#0d1b2a] z-[999] pt-24 px-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              {/* Close Button Inside Menu */}
              <div className="absolute top-6 right-6 z-50">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#d4af37] transition"
                >
                  <Close className="w-6 h-6" />
                </button>
              </div>

              <div className="max-w-md mx-auto">
                <motion.div
                  className="flex flex-col space-y-6 py-8"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                >
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.path}
                      className="text-xl font-secondary font-semibold text-white py-3 border-b border-[#d4af37]/20"
                      variants={itemVariants}
                      onClick={() => setMenuOpen(false)}
                      whileHover={{ x: 10, color: "#d4af37" }}
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
                    className="p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/herma.simei.2025"
                    className="p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/hermajepkoech/"
                    className="p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37]"
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
    </motion.div>
  );
};

export default Navbar;