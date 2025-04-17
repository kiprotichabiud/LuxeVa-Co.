import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Online Business  ",
    description: "Share the load. Make me your strategic business partner today.",
    image: "/images/service1.jpg",
  },
  {
    title: "Virtual Assistant",
    description: "Stop the overwhelm. Outsource tasks and watch productivity soar.",
    image: "/images/service2.jpg",
  },
  {
    title: "Consulting",
    description: "Unlock your potential. Transform your business via one-on-one sessions.",
    image: "/images/service3.jpg",
  },
  {
    title: "Retail Support",
    description: "Increase your knowledge by tapping into mine. Tailored packages to suit.",
    image: "/images/service4.jpg",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const Services = () => {
  return (
    <section className="bg-pink-50 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="text-center text-gray-800 bg-pink-50 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="mx-auto w-full h-64 object-cover"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              />
              <div className="p-6">
                <motion.h3 
                  className="text-lg font-semibold uppercase tracking-wide mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.4 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                >
                  {service.description}
                </motion.p>
                <motion.button 
                  className="border border-gray-800 text-gray-800 px-6 py-2 text-sm uppercase tracking-widest hover:bg-gray-800 hover:text-white transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;