import React from 'react';

const services = [
  {
    title: "Online Business Management (OBM)",
    description: "Share the load. Make me your strategic business partner and trusted ally.",
    image: "/images/service1.jpg",
  },
  {
    title: "Virtual Assistant",
    description: "Stop the overwhelm. Outsource tasks and watch productivity soar.",
    image: "/images/service2.jpg",
  },
  {
    title: "Consulting",
    description: "Unlock your potential. Transform your business via one-on-one sessions.",
    image: "/images/service3.jpg",
  },
  {
    title: "Retail Support",
    description: "Increase your knowledge by tapping into mine. Tailored packages to suit.",
    image: "/images/service4.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="text-center text-white">
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-6 w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="border border-white text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-[#5F695C] transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
