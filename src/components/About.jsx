import React from "react";
import { motion } from "framer-motion";
import { Camera, BarChart2, Users, Award } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { number: "5+", label: "Years Experience", icon: <Award className="w-8 h-8 text-amber-600" /> },
    { number: "200+", label: "Clients Helped", icon: <Users className="w-8 h-8 text-amber-600" /> },
    { number: "3M+", label: "Content Reached", icon: <BarChart2 className="w-8 h-8 text-amber-600" /> }
  ];

  return (
    <section className="relative px-6 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-amber-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-amber-200 mix-blend-multiply filter blur-xl"></div>
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
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            My Journey in Visual Storytelling
          </motion.h2>
          <motion.div variants={fadeIn} className="w-20 h-1 bg-amber-600 mx-auto"></motion.div>
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
              I'm a <span className="font-semibold text-amber-700">social media strategist</span> with a deep passion for helping visual artists 
              showcase their work in ways that attract their ideal clients.
            </motion.p>
            <motion.p variants={fadeIn}>
              My journey began when planning my wedding revealed the incredible artistry behind 
              professional photography. I was captivated by how photographers translate moments 
              into lasting emotional connections.
            </motion.p>
            <motion.p variants={fadeIn}>
              Now I combine <span className="font-semibold text-amber-700">marketing expertise</span> with my appreciation for visual storytelling 
              to help photographers develop authentic, high-converting online presences.
            </motion.p>
            <motion.div variants={fadeIn} className="pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                <Camera className="w-5 h-5" />
                See My Photography Passion
              </button>
            </motion.div>
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
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="w-12 h-12 mx-auto text-amber-700 mb-4" />
                  <p className="text-amber-800 font-medium">[Your Professional Photo]</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <p className="text-sm font-semibold text-gray-700">Fun Fact:</p>
              <p className="text-xs text-gray-600">Wedding photography enthusiast</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-4xl font-serif font-bold text-amber-700 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;