import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Smartphone, 
  MessageSquare,
  ShoppingCart,
  FileText,
  BarChart2,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Executive Administrative Support",
      icon: <Mail className="w-6 h-6" />,
      description: "Comprehensive email management, calendar optimization, and document preparation to streamline your operations.",
      highlights: ["Inbox organization", "Meeting coordination", "Report generation"]
    },
    {
      title: "Social Media Management",
      icon: <Smartphone className="w-6 h-6" />,
      description: "End-to-end platform management including content strategy, scheduling, and performance analytics.",
      highlights: ["Content calendar", "Engagement growth", "Brand consistency"]
    },
    {
      title: "Customer Experience Management",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Professional client communication and support systems to elevate your customer satisfaction.",
      highlights: ["Ticket systems", "FAQ databases", "Response templates"]
    },
    {
      title: "E-commerce Operations",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Complete product lifecycle management from listing to fulfillment across platforms.",
      highlights: ["Inventory tracking", "Order processing", "Platform migrations"]
    },
    {
      title: "Content Development",
      icon: <FileText className="w-6 h-6" />,
      description: "Strategic content creation and coordination to establish your brand authority.",
      highlights: ["Blog writing", "Visual content planning", "Editorial calendars"]
    },
    {
      title: "Business Intelligence",
      icon: <BarChart2 className="w-6 h-6" />,
      description: "Data-driven market research and competitive analysis to inform your decisions.",
      highlights: ["Market trends", "Competitor reports", "Data visualization"]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="relative px-6 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-10 w-48 h-48 rounded-full bg-pink-200 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-pink-100 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-secondary font-bold mb-4 text-gray-900">
            Services I Offer
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions designed to amplify your productivity and business growth
          </motion.p>
          <motion.div variants={fadeIn} className="w-20 h-1 bg-pink-600 mx-auto mt-6"></motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 relative">
                <div className={`p-4 rounded-lg bg-pink-100 text-pink-600 w-fit mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-pink-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
            Get Customized Service Package
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;