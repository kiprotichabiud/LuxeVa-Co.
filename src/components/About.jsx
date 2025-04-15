import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Zap, Users, Clock, Shield, ChevronRight, Star, Award } from "lucide-react";

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

  const stats = [
    { value: "97%", label: "Client Retention", icon: <Users className="w-6 h-6" /> },
    { value: "24hr", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
    { value: "100+", label: "Businesses Served", icon: <Shield className="w-6 h-6" /> }
  ];

  const services = [
    {
      title: "Executive Support",
      description: "Premium assistance tailored for high-performing entrepreneurs",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-gradient-to-br from-pink-500 to-pink-300"
    },
    {
      title: "Strategic Operations",
      description: "Systems that streamline your business workflow",
      icon: <ChevronRight className="w-5 h-5" />,
      color: "bg-gradient-to-br from-rose-500 to-rose-300"
    },
    {
      title: "Brand Excellence",
      description: "Client experiences that reflect your luxury positioning",
      icon: <Star className="w-5 h-5" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-300"
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50 py-24 px-6"
      id="about"
    >
      {/* Luxury decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle diamond pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMTAgMTBoNDB2NDBIMTB6IiBzdHJva2U9IiNGRkMwODgiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0zMCAxMHYzMCIgc3Ryb2tlPSIjRkZDMDg4IiBzdHJva2Utd2lkdGg9Ii41IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTAgMzBoNDAiIHN0cm9rZT0iI0ZGQzA4OCIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')"
        }}></div>
        
        {/* Floating gold accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Luxe Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-pink-500 to-pink-300 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
              <Award className="w-6 h-6" />
            </div>
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-pink-600 mb-3">
            The LuxeVA Difference
          </motion.p>
          
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500">Elevated Support</span> for Visionaries
          </motion.h2>
          
          <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            At LuxeVA & Co., we redefine virtual assistance by combining operational excellence with 
            the personal touch of a luxury concierge. Our bespoke solutions empower visionary leaders 
            to focus on what truly matters.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-hidden relative group"
            >
              <div className="absolute -top-1 -right-1 w-16 h-16 rounded-bl-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full ${index === 0 ? 'bg-pink-100 text-pink-600' : index === 1 ? 'bg-rose-100 text-rose-600' : 'bg-purple-100 text-purple-600'}`}>
                    {stat.icon}
                  </div>
                </div>
                
                <h3 className="text-4xl font-serif font-medium mb-2 text-gray-900">
                  {stat.value}
                </h3>
                
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
  <img
    src="src/assets/image3.png" // Replace with your actual image path
    alt="Herma Jepkoech, Founder & Lead Virtual Assistant"
    className="w-full h-full object-cover object-center"
    loading="lazy"
  />
  {/* Optional overlay with name/title - remove if not needed */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
    <p className="font-serif text-lg italic">Herma Jepkoech</p>
    <p className="text-sm opacity-90">Founder & Lead Virtual Assistant</p>
  </div>

              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-pink-200 opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-rose-200 opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeIn} className="text-3xl font-serif font-medium text-gray-900 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400">Signature</span> Services
            </motion.h3>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="group relative overflow-hidden"
                >
                  <div className="relative z-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full text-white ${service.color} shadow-md flex-shrink-0`}>
                        {service.icon}
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${service.color.replace('bg-gradient-to-br', '')} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Founder's Note */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 md:p-12 shadow-sm border border-pink-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pink-200 opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-rose-200 opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-300 flex items-center justify-center text-white mr-4 shadow-md">
                <span className="text-xl font-serif">HJ</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Herma Jepkoech</h4>
                <p className="text-sm text-pink-600">Founder, LuxeVA & Co.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                "I founded LuxeVA & Co. with one vision: to provide executive support that feels less like a service and more like an extension of your team. We don't just manage tasks—we anticipate needs, elevate experiences, and become strategic partners in your success."
              </p>
              
              <p className="text-gray-600">
                Our approach combines meticulous attention to detail with the discretion and sophistication demanded by high-profile clients. When you work with us, you're not just getting an assistant—you're gaining a trusted ally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;