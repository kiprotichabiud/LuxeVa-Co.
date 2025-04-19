import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from '../assets/assets';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Abiud kiprotich",
      role: "Marketing Director",
      company: "TechVision Inc.",
      image: "",
      text: "Working with this team transformed our entire workflow. We've saved countless hours and our client satisfaction scores have never been higher.",
      rating: 5
    },
    {
      name: "Laud suits",
      role: "Startup Founder",
      company: "NexGen Solutions",
      image: "",
      text: "The attention to detail and creative problem-solving approach exceeded all my expectations. My business has grown 230% since implementing their strategies.",
      rating: 5
    },
    {
      name: "Herma",
      role: "Operations Manager",
      company: "Global Connect",
      image: "",
      text: "I was skeptical at first, but the results speak for themselves. Our team is more productive than ever and our clients are thrilled with the improved service.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Animation variants
  const fadeVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const scaleVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 }
  };

  return (
    <section className="relative w-full overflow-hidden bg-pink-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-secondary mb-6 leading-tight text-black"
            >
              What Our Clients <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-black"
              >Say</motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-black font-tertiary mb-8 max-w-lg"
            >
              Don't just take our word for it. Here's what busy professionals are saying about how we've transformed their workflow and productivity.
            </motion.p>
            
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                "98% client satisfaction rate",
                "15+ hours saved weekly per client",
                "3x average productivity increase"
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center"
                  >
                    <Star className="w-5 h-5 text-pink-400" />
                  </motion.div>
                  <p className="text-black">{text}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="relative p-8 bg-pink-100 rounded-lg border border-gray-300 max-w-md shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="absolute -top-4 -left-4"
                initial={{ rotate: -45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Quote className="w-8 h-8 text-pink-400" />
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentTestimonial}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-black font-primary mb-6"
                >
                  {testimonials[currentTestimonial].text}
                </motion.p>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`profile-${currentTestimonial}`}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full overflow-hidden bg-gray-300"
                  >
                    <img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="font-medium text-black">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-8 right-8 flex">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`stars-${currentTestimonial}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex"
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? "bg-pink-400 w-6" : "bg-gray-400 w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </motion.button>
              <motion.button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right column: Image and visual elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Main image */}
            <motion.div 
              className="relative z-10 rounded-t-full overflow-hidden shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={assets.image2}
                alt="Virtual assistant at work"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with stats */}
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/200 p-6"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "15+", label: "Hours Saved Weekly" },
                    { value: "3x", label: "Productivity Boost" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <motion.p 
                        className="text-3xl font-bold text-white"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-white">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-full filter blur-3xl opacity-30 z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full filter blur-3xl opacity-30 z-0"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2 
              }}
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3 
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;