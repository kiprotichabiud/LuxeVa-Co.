import React from "react";
import { motion } from "framer-motion";
import { Camera, BarChart2, Users, Award } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { number: "2+", label: "Years Experience", icon: <Award className="w-8 h-8 text-pink-600" /> },
    { number: "10+", label: "Clients Helped", icon: <Users className="w-8 h-8 text-pink-600" /> },
    { number: "100+", label: "Content Reached", icon: <BarChart2 className="w-8 h-8 text-pink-600" /> }
  ];

  return (
    <section className="relative px-6 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-pink-50 font-secondary ">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-pink-200 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-secondary font-bold mb-4">
            Who I Am
          </motion.h2>
          <motion.div variants={fadeIn} className="w-20 h-1 bg-pink-600 mx-auto"></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <motion.p variants={fadeIn}>
  I'm a <span className="font-secondary text-pink-700">Virtual Business Assistant</span> with a passion for 
  helping entrepreneurs and small business owners streamline their operations and reclaim their time.
</motion.p>
<motion.p variants={fadeIn}>
  My journey began when managing my own business showed me how overwhelming administrative tasks 
  can distract from core business growth. I discovered the transformative power of organized systems 
  and efficient workflows.
</motion.p>
<motion.p variants={fadeIn}>
  Now I combine <span className="font-semibold text-pink-700">operational expertise</span> with my love for 
  productivity systems to help clients build sustainable businesses through strategic support.
</motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square shadow-xl border-8 border-white">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="w-12 h-12 mx-auto text-pink-700 mb-4" />
                  <p className="text-pink-800 font-medium">[Your Professional Photo]</p>
                </div>
              </div>
            </div>
           
          </motion.div>
        </div>

        <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }}
  className="mt-20"
>
  {/* Decorative connecting line */}
  <div className="hidden md:block relative h-2 mb-16">
    <div className="absolute top-0 left-1/4 right-1/4 h-full bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
  </div>

  <div className="grid md:grid-cols-3 gap-8 relative">
    {stats.map((stat, index) => (
      <motion.div 
        key={index}
        variants={{
          hidden: { opacity: 0, y: 30, rotate: -2 },
          visible: { 
            opacity: 1, 
            y: 0, 
            rotate: 0,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }
        }}
        whileHover={{ 
          y: -10,
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-pink-100"
        style={{
          transformOrigin: "center bottom"
        }}
      >
        {/* Floating decorative shape */}
        <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-full ${index % 2 === 0 ? 'bg-pink-100' : 'bg-purple-100'} opacity-60 z-0`}></div>
        
        <div className="relative z-10">
          <div className={`flex justify-center mb-6 p-4 w-fit mx-auto rounded-full ${index % 2 === 0 ? 'bg-pink-50 text-pink-600' : 'bg-purple-50 text-purple-600'}`}>
            {React.cloneElement(stat.icon, { className: "w-8 h-8" })}
          </div>
          
          <motion.p 
            className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-3"
            whileHover={{ scale: 1.1 }}
          >
            {stat.number}
          </motion.p>
          
          <p className="text-gray-600 text-lg">{stat.label}</p>
          
          {/* Animated underline */}
          <motion.div 
            className="mt-6 h-1 bg-gradient-to-r from-pink-300 to-purple-300 w-1/2 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          />
        </div>
        
        {/* Floating dots decoration */}
        <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-pink-200 opacity-70"></div>
        <div className="absolute -bottom-4 -right-4 w-4 h-4 rounded-full bg-purple-200 opacity-70"></div>
      </motion.div>
    ))}
  </div>

  {/* Connecting line for mobile */}
  <div className="md:hidden relative h-2 mt-8 mb-8">
    <div className="absolute top-0 left-1/4 right-1/4 h-full bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default About;