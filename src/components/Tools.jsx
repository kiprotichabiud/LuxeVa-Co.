import React from "react";

const Tools = () => {
  const toolCategories = [
    {
      category: "Productivity & Organization",
      tools: [
        { name: "Notion", purpose: "All-in-one workspace" },
        { name: "Trello", purpose: "Task management" },
        { name: "Asana", purpose: "Project tracking" },
        { name: "Google Workspace", purpose: "Docs, Sheets, Slides" }
      ]
    },
    {
      category: "Communication",
      tools: [
        { name: "Slack", purpose: "Team messaging" },
        { name: "Zoom", purpose: "Video conferencing" },
        { name: "Microsoft Teams", purpose: "Collaboration" },
        { name: "Calendly", purpose: "Scheduling" }
      ]
    },
    {
      category: "Social Media Management",
      tools: [
        { name: "Buffer", purpose: "Content scheduling" },
        { name: "Canva", purpose: "Graphic design" },
        { name: "Later", purpose: "Instagram planning" },
        { name: "Hootsuite", purpose: "Multi-platform management" }
      ]
    },
    {
      category: "Specialized Tools",
      tools: [
        { name: "Zapier", purpose: "Automation" },
        { name: "QuickBooks", purpose: "Bookkeeping" },
        { name: "LastPass", purpose: "Password management" },
        { name: "Loom", purpose: "Video messages" }
      ]
    }
  ];

  return (
    <section id="tools" className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">My Toolkit</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The digital tools I'm proficient in to deliver efficient virtual assistance
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-amber-700">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="flex justify-between items-start">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-gray-600 text-sm text-right">{tool.purpose}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Comfortable learning new tools specific to your workflow
          </p>
          <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-2 rounded-md font-medium transition-colors">
            Ask About a Specific Tool
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tools;