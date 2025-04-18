import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-pink-50 bg-no-repeat h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/your-path/Screenshot-from-2025-04-18-10-18-16.png')" }}
    >
      <div className="text-center px-6">
        <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-quaternary tracking-wide mb-6">
          LET'S CREATE SPACE TO BREATHE TOGETHER
        </h2>
        <button className=" bg-pink-300 text-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
