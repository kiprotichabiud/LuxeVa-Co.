import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dierde Farrell",
      role: "Founder",
      company: "Account-Abilities",
      text: "Herma is an amazing assistant in any and all tasks I send her. She works quickly and efficiently always willing to jump into new projects and master them as I send them. She saves me many many hours per week and produces quality work. Highly recommended!"
    },
    {
      name: "Laudikio Koech",
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
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#0d1b2a] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-100 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
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