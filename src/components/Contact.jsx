import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="relative px-6 py-28 overflow-hidden bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-pink-200 mix-blend-multiply filter blur-xl"></div>
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-secondary font-bold mb-4 text-gray-900"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ready to streamline your workflow? Get in touch today.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-pink-600 mx-auto mt-6"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div 
            variants={fadeIn}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            style={{ boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="admin">Administrative Support</option>
                  <option value="customer-service">Customer Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="Tell me about your project needs..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div 
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <a href="mailto:hello@yourdomain.com" className="text-gray-600 hover:text-pink-600 transition-colors">
                      hello@yourdomain.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-pink-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Based In</h4>
                    <p className="text-gray-600">San Francisco, CA (Working remotely worldwide)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-gray-700 mb-4">Availability</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 5pm PST<br />
                  Quick response within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;