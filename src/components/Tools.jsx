import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Share2, 
  Zap,
  ChevronRight
} from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      category: "Productivity & Organization",
      icon: <LayoutDashboard className="w-6 h-6 text-amber-600" />,
      tools: [
        { name: "Notion", purpose: "All-in-one workspace", logo: "📋" },
        { name: "Trello", purpose: "Task management", logo: "📌" },
        { name: "Asana", purpose: "Project tracking", logo: "📊" },
        { name: "Google Workspace", purpose: "Docs, Sheets, Slides", logo: "🖥️" }
      ]
    },
    {
      category: "Communication",
      icon: <MessageSquare className="w-6 h-6 text-amber-600" />,
      tools: [
        { name: "Slack", purpose: "Team messaging", logo: "💬" },
        { name: "Zoom", purpose: "Video conferencing", logo: "🎥" },
        { name: "Microsoft Teams", purpose: "Collaboration", logo: "👥" },
        { name: "Calendly", purpose: "Scheduling", logo: "📅" }
      ]
    },
    {
      category: "Social Media Management",
      icon: <Share2 className="w-6 h-6 text-amber-600" />,
      tools: [
        { name: "Buffer", purpose: "Content scheduling", logo: "⏱️" },
        { name: "Canva", purpose: "Graphic design", logo: "🎨" },
        { name: "Later", purpose: "Instagram planning", logo: "📱" },
        { name: "Hootsuite", purpose: "Multi-platform management", logo: "🦉" }
      ]
    },
    {
      category: "Specialized Tools",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      tools: [
        { name: "Zapier", purpose: "Automation", logo: "⚡" },
        { name: "QuickBooks", purpose: "Bookkeeping", logo: "💰" },
        { name: "LastPass", purpose: "Password management", logo: "🔒" },
        { name: "Loom", purpose: "Video messages", logo: "🎬" }
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="tools" className="relative px-6 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-amber-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-amber-200 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            My Digital Toolkit
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">
            The tools I master to deliver exceptional virtual assistance
          </motion.p>
          <motion.div variants={fadeIn} className="w-20 h-1 bg-amber-600 mx-auto mt-4"></motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {toolCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-100">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{tool.logo}</span>
                      <div>
                        <p className="font-medium text-gray-800">{tool.name}</p>
                        <p className="text-sm text-gray-500">{tool.purpose}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I specialize in quickly adapting to new tools that fit your specific workflow needs.
          </p>
          <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
            Discuss Your Preferred Tools
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;