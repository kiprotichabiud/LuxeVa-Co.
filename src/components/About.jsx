import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Zap, Users, Clock, Shield, ChevronRight, Star, Award } from "lucide-react";
import { assets } from "..//assets/assets"; // Adjust the path as necessary

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const services = [
    {
      title: "Client Centricity",
      description: "We prioritize your needs and work tirelessly to provide solutions that support your unique goals.",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-[#d4af37]"
    },
    {
      title: "Innovation",
      description: "We continually evolve, embracing new tools and methodologies to ensure that our services remain at the forefront of the industry.",
      icon: <ChevronRight className="w-5 h-5" />,
      color: "bg-[#d4af37]"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering services that meet the highest standards, ensuring precision and reliability in every task we undertake.",
      icon: <Star className="w-5 h-5" />,
      color: "bg-[#d4af37]"
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-[#0d1b2a] py-20 px-6 font-secondary"
      id="about"
    >
     

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Professional Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.p variants={fadeIn} className="uppercase font-bold text-lg text-[#d4af37] mb-3 tracking-wider">
            About LuxeVA&Co.
          </motion.p>
          
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold font-primary text-white mb-6">
            <span className="text-[#d4af37]">Elevated Support</span> for Visionaries
          </motion.h2>
          
          <motion.p variants={fadeIn} className="max-w-4xl mx-auto text-lg text-white leading-relaxed">
            At LuxeVA&Co., we redefine virtual assistance by combining operational excellence with 
            the personal touch of a luxury concierge. Our bespoke solutions empower visionary leaders 
            to focus on what truly matters while we handle the complexities of administrative excellence.
          </motion.p>
        </motion.div>

        {/* Company Overview */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeIn}
            className="bg-[#0d1b2a] rounded-2xl p-8 md:p-12 shadow-lg border border-[#d4af37]/30 relative overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#1b263b] blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
                Our <span className="text-[#d4af37]">Professional</span> Promise
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-white">
                <div>
                  <p className="leading-relaxed mb-4">
                    Founded with a vision to transform how professionals manage their administrative responsibilities, 
                    LuxeVA&Co. brings together expertise, innovation, and unwavering commitment to excellence.
                  </p>
                  <p className="leading-relaxed">
                    We understand that your time is invaluable, and every moment spent on routine tasks is a moment 
                    taken away from strategic thinking and business growth.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed mb-4">
                    Our team integrates seamlessly into your workflow, becoming an extension of your professional 
                    capabilities while maintaining the highest standards of confidentiality and reliability.
                  </p>
                  <p className="leading-relaxed">
                    Through our comprehensive suite of services, we enable you to achieve greater productivity 
                    and maintain optimal work-life balance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeIn} className="text-3xl font-semibold text-white mb-12 text-center">
            Our <span className="text-[#d4af37]">Core Values</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 backdrop-blur-md ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                
                <div className="relative z-10 bg-[#0d1b2a] p-8 rounded-xl shadow-sm border border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 p-4 rounded-full text-white ${service.color} shadow-md flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-4">{service.title}</h4>
                    <p className="text-gray-100 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-lg`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Message */}
      <motion.div
          className="bg-[#0d1b2a] rounded-2xl p-8 md:p-12 shadow-lg border h-[80vh] border-[#d4af37]/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-contain bg-center   bg-no-repeat opacity-30 "
            style={{
              backgroundImage: `url(${assets.image3})`
            }}
          ></div>
          
          {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d1b2a] opacity-40"></div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-8">
              {/* <div className="w-24 h-24 rounded-full bg-[#d4af37] flex items-center justify-center shadow-lg">
                <img 
                  src={assets.image3}
                  alt="Herma Jepkoech" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div> */}
            </div>
            
            <h4 className="text-2xl font-semibold text-white mb-2">Herma Jepkoech</h4>
            <p className="text-[#d4af37] mb-8 text-lg">Founder & Lead Virtual Assistant</p>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-white leading-relaxed">
                "My journey from navigating complex administrative challenges to establishing LuxeVA & Co. 
                was driven by a singular vision: to offer bespoke, high-caliber assistance that aligns 
                seamlessly with your professional aspirations."
              </p>
              
              <p className="text-lg text-white leading-relaxed">
                "Our mission is to empower you to achieve greater productivity and work-life harmony by 
                entrusting us with your administrative responsibilities. We achieve this by integrating 
                seamlessly into your workflow, anticipating your needs, and delivering results that 
                consistently exceed expectations."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;