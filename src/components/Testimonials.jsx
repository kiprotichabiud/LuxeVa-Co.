import React from "react";
import { Quote } from "lucide-react";
import { image } from "framer-motion/client";
import { assets } from "../assets/assets";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dierde Farrell",
      image: assets.image13,
      role: "Founder",
      company: "Account-Abilities",
      text: "Herma is an amazing assistant in any and all tasks I send her. She works quickly and efficiently always willing to jump into new projects and master them as I send them. She saves me many many hours per week and produces quality work. Highly recommended!"
    },
    {
      name: "Laudikio Koech",
      image: assets.image14,
      role: "CEO and Founder",
      company: "Laud Suits KE",
      text: "I've had the pleasure of working with Herma as the social media manager for Laüd Suits KE, and I can confidently say she has been a key part of our growth and online presence. She brings creativity, consistency, and strategy to every platform — from content creation to campaign execution."
    }
  ];

  return (
    <section className="bg-[#0d1b2a] py-16 px-6 font-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-primary text-[#d4af37] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what clients say about working with us and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
     <div className="grid md:grid-cols-2 gap-8">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="bg-[#1a2332] rounded-lg p-8 relative">
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 bg-[#d4af37] rounded-full p-3">
        <Quote className="w-6 h-6 text-[#0d1b2a]" />
      </div>
      
  
      
      
      {/* Testimonial Text */}
      <p className="text-white text-lg mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      {/* Client Info */}
      <div className="flex items-center">
        <div className="w-24 h-24 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover object-center"
          />
        </div>
        <div>
          <h4 className="text-[#d4af37] font-semibold text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-100 text-sm">
            {testimonial.role}, {testimonial.company}
          </p>
          <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className= "w-5 h-5 text-[#d4af37] mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default TestimonialsSection;