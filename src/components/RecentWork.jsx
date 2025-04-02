import React from "react";

const RecentWork = () => {
  const projects = [
    {
      title: "E-commerce Management System",
      client: "Boutique Online Store",
      description: "Implemented complete product catalog organization, order processing system, and customer service workflow",
      results: "Reduced order processing time by 40% and improved customer satisfaction ratings",
      image: "🛍️"
    },
    {
      title: "Executive Calendar Overhaul",
      client: "Tech Startup CEO",
      description: "Restructured chaotic scheduling system and implemented time blocking strategy",
      results: "Created 8+ hours of productive time weekly and reduced meeting overload",
      image: "📅"
    },
    {
      title: "Social Media Transformation",
      client: "Life Coach",
      description: "Rebranded social presence and implemented content calendar with automated posting",
      results: "Grew Instagram following by 220% in 3 months and increased engagement rate",
      image: "📈"
    },
    {
      title: "Operations Manual Creation",
      client: "Consulting Firm",
      description: "Documented all business processes and created training materials for new hires",
      results: "Reduced onboarding time from 3 weeks to 5 days for new team members",
      image: "📚"
    }
  ];

  return (
    <section id="work" className="px-6 py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Recent Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Examples of how I've helped clients streamline their operations
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-5 text-center">{project.image}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-amber-700 font-medium mb-4">{project.client}</p>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="bg-amber-50 p-4 rounded">
                <p className="text-sm font-semibold text-amber-800 mb-1">RESULTS ACHIEVED:</p>
                <p className="text-gray-700">{project.results}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            See More Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;