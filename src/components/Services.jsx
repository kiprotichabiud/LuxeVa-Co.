import React from "react";

const Services = () => {
  const services = [
    {
      title: "Administrative Support",
      icon: "📋",
      description: "Email management, calendar scheduling, data entry, and document preparation to keep your business running smoothly."
    },
    {
      title: "Social Media Management",
      icon: "📱",
      description: "Content scheduling, engagement tracking, and platform optimization across all major social networks."
    },
    {
      title: "Customer Support",
      icon: "💬",
      description: "Email/chat responses, ticket management, and FAQ maintenance to enhance client satisfaction."
    },
    {
      title: "E-commerce Assistance",
      icon: "🛒",
      description: "Product listing management, order processing, and basic Shopify/Amazon/WooCommerce support."
    },
    {
      title: "Content Creation",
      icon: "✍️",
      description: "Blog post drafting, graphic design coordination, and basic video editing support."
    },
    {
      title: "Research & Data Organization",
      icon: "🔍",
      description: "Market research, competitor analysis, and data compilation in spreadsheets or reports."
    }
  ];

  return (
    <section id="services" className="px-6 py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Virtual Assistant Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive remote support tailored to your business needs
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Request Service Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;