import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Star } from "lucide-react"; 

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const testimonials = [
    {
      quote: "My VA completely transformed my business operations. They implemented systems that saved me 15+ hours weekly while increasing our client satisfaction scores by 30%.",
      author: "Alexandra R.",
      role: "Marketing Agency CEO",
      rating: 5,
      highlight: "Saved 15+ hours weekly"
    },
    {
      quote: "The social media strategy my VA developed helped us grow our Instagram following from 2k to 15k in just 4 months while tripling our engagement rate.",
      author: "James L.",
      role: "Fitness Coach",
      rating: 5,
      highlight: "650% follower growth"
    },
    {
      quote: "I was skeptical about hiring a VA, but within weeks they had organized my chaotic inbox, streamlined my scheduling, and became my right hand. Worth every penny.",
      author: "Sophia M.",
      role: "Executive Consultant",
      rating: 5,
      highlight: "Became my right hand"
    },
    {
      quote: "Our VA built an entire customer service system from scratch that reduced response times by 75% while maintaining our brand voice perfectly.",
      author: "David K.",
      role: "E-commerce Founder",
      rating: 5,
      highlight: "75% faster responses"
    },
    {
      quote: "The operations manual and training system my VA created reduced our new hire onboarding time from 3 weeks to 4 days while improving retention.",
      author: "Priya N.",
      role: "Tech Startup COO",
      rating: 5,
      highlight: "83% faster onboarding"
    }
  ];

  return (
    <section id="testimonials" className="relative px-6 py-28 overflow-hidden bg-gradient-to-br from-pink-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-300 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-amber-200 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-secondary font-bold mb-4 text-gray-900">
            Client Love
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what my clients say about working together
          </p>
          <div className="w-20 h-1 bg-pink-600 mx-auto mt-6"></div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const delay = index * 0.1;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-amber-100 transform transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${delay}s`,
                  boxShadow: "0 10px 30px -10px rgba(217, 119, 6, 0.15)"
                }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-amber-50">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator for more testimonials (only shows on mobile) */}
        <div className="md:hidden mt-12 text-center animate-bounce">
          <p className="text-sm text-gray-500">Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;