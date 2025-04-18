import React from "react";

const RecentWork = () => {
  const caseStudies = [
    {
      title: "Collette Noll Interior Design",
      description:
        "Concept and creation of interior designer Collette Noll’s website, with focus on her variety of client-forward services and recent successful collaborations",
      link: "#"
    },
    {
      title: "Sofia Pazari Home Goods",
      description:
        "Website and packaging design for independent maker Sofia Pazari’s marketplace of original beauty, lifestyle, and home goods",
      link: "#"
    },
    {
      title: "Sauce & Slice Pizzeria",
      description:
        "Brand identity development and website redesign for family–owned and longstanding Brooklyn–based pizzeria Sauce & Slice",
      link: "#"
    }
  ];

  return (
    <section className="bg-pink-50 py-20 px-6 md:px-10">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-tertiary font-semibold text-gray-900 mb-16">
          Case Studies
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-pink-100 rounded-3xl p-6 md:p-8 text-gray-900"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 leading-snug">
                {study.title}
              </h3>
              <p className="text-sm md:text-base mb-4">
                {study.description}
              </p>
              <a
                href={study.link}
                className="text-sm font-medium underline hover:text-gray-700 transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
