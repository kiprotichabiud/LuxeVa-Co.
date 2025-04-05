import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My VA completely transformed my business operations. The systems implemented saved me 15+ hours weekly.",
      author: "Alexandra R.",
      role: "Marketing Agency CEO",
      rating: 5,
      highlight: "15+ hours saved weekly",
      image: "/client1.jpg"
    },
    {
      quote: "The organization systems my VA created turned my chaotic workflow into a well-oiled machine.",
      author: "James L.",
      role: "Fitness Entrepreneur",
      rating: 5,
      highlight: "3x productivity boost",
      image: "/client2.jpg"
    },
    {
      quote: "From inbox zero to calendar mastery, my VA has become my business's secret weapon.",
      author: "Sophia M.",
      role: "Consulting Firm Owner",
      rating: 5,
      highlight: "Inbox zero maintained",
      image: "/client3.jpg"
    },
    {
      quote: "Our customer service response times improved by 75% while maintaining our brand voice perfectly.",
      author: "David K.",
      role: "E-commerce Founder",
      rating: 5,
      highlight: "75% faster responses",
      image: "/client4.jpg"
    },
    {
      quote: "The onboarding system my VA created reduced training time from 3 weeks to 4 days.",
      author: "Priya N.",
      role: "Tech Startup COO",
      rating: 5,
      highlight: "83% faster onboarding",
      image: "/client5.jpg"
    }
  ];

  // Double the array for seamless looping
  const scrollingTestimonials = [...testimonials, ...testimonials];
  const containerRef = useRef(null);
  const speed = 30; // pixels per second (slower for better visibility)

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    let startTime;
    let progress = 0;
    const containerWidth = container.scrollWidth / 2; // Since we doubled the items

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      progress = (elapsed / 1000) * speed;
      
      // Reset when reaching halfway (since we duplicated the items)
      if (progress >= containerWidth) {
        progress = 0;
        startTime = timestamp;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = progress;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="testimonials" className="relative px-6 py-20 overflow-hidden bg-gradient-to-br from-pink-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-100 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how I've helped businesses thrive
          </p>
          <div className="w-20 h-1 bg-pink-600 mx-auto mt-6"></div>
        </div>

        {/* Scrolling container with fixed height */}
        <div className="relative h-[420px] overflow-hidden py-4">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide h-full items-center"
            style={{ scrollbarWidth: 'none' }}
          >
            {scrollingTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.author}-${index}`}
                className="inline-flex px-4 w-full sm:w-1/2 lg:w-1/3 h-full"
                style={{ minWidth: 'calc(100%/3)' }}
              >
                <motion.div
                  className="bg-white p-6 rounded-3xl shadow-lg h-[360px] border border-pink-100 flex flex-col"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Profile image */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-pink-200 shadow-md">
                      <div className="w-full h-full bg-pink-100 flex items-center justify-center text-pink-600">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl font-bold">
                            {testimonial.author.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.author}</h3>
                      <p className="text-sm text-pink-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Highlight */}
                  <div className="mt-auto pt-3 border-t border-pink-100">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-pink-50 text-pink-700">
                      {testimonial.highlight}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;