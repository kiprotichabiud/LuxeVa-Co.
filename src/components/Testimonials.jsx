import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { assets } from '../assets/assets'

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      image: "src/assets/image2.png",
      text: "Working with this team transformed our entire workflow. We've saved countless hours and our client satisfaction scores have never been higher.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "NexGen Solutions",
      image: "src/assets/image2.png",
      text: "The attention to detail and creative problem-solving approach exceeded all my expectations. My business has grown 230% since implementing their strategies.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Manager",
      company: "Global Connect",
      image: "src/assets/image2.png",
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

  return (
    <section className="relative w-full overflow-hidden bg-pink-50- text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What Our Clients <span className="text-black">Say</span>
            </h2>
            
            <p className="text-lg text-black-300 mb-8 max-w-lg">
              Don't just take our word for it. Here's what busy professionals are saying about how we've transformed their workflow and productivity.
            </p>
            
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-black-200">98% client satisfaction rate</p>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-black-200">15+ hours saved weekly per client</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-black-200">3x average productivity increase</p>
              </div>
            </div>
            
            <div className="relative p-8 bg-gradient-to-r from-black-800/70 to-black-900/70 rounded-lg border border-black-700 max-w-md">
              <div className="absolute -top-4 -left-4">
                <Quote className="w-8 h-8 text-pink-400 opacity-50" />
              </div>
              
              <p className="text-black-200 italic mb-6">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black-700">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-black-400">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 flex">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentTestimonial === index ? "bg-pink-400 w-6" : "bg-black-600"
                    } transition-all duration-300`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-black-800/70 border border-black-700 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-black-800/70 border border-black-700 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Right column: Image and visual elements */}
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 rounded-t-full overflow-hidden shadow-2xl">
              <img 
                src= {assets.image2}
                alt="Virtual assistant at work"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-black/100 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-pink-400">98%</p>
                    <p className="text-sm text-black-300">Client Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-pink-400">15+</p>
                    <p className="text-sm text-black-300">Hours Saved Weekly</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-pink-400">3x</p>
                    <p className="text-sm text-black-300">Productivity Boost</p>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-full filter blur-3xl opacity-30 z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full filter blur-3xl opacity-30 z-0"></div>
            
          
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;