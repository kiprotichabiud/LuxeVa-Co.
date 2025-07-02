import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, MessageSquare, Image } from "lucide-react";

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolCategories = [
    {
      category: "Productivity",
      icon: <LayoutDashboard className="w-5 h-5" />,
      color: "from-[#d4af37] to-[#d4af37]/80",
      textColor: "text-[#0d1b2a]",
      bgColor: "bg-[#d4af37]/10",
      description: "Essential tools to streamline your workflow",
      tools: [
        {
          name: "G Suite",
          purpose: "Productivity suite",
          mastery: 95,
          details: "Docs, Sheets, Slides, Drive",
        },
        {
          name: "Trello",
          purpose: "Task management",
          mastery: 88,
          details: "Kanban boards, checklists, due dates",
        },
        {
          name: "Calendly",
          purpose: "Scheduling meetings",
          mastery: 90,
          details: "Booking meetings, calendar integration, reminders",
        },
      ],
    },
    {
      category: "Communication",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "from-[#d4af37] to-[#d4af37]/80",
      textColor: "text-[#0d1b2a]",
      bgColor: "bg-[#d4af37]/10",
      description: "Core tools for team collaboration",
      tools: [
        {
          name: "Slack",
          purpose: "Team communication",
          mastery: 90,
          details: "Channels, direct messages, file sharing",
        },
        {
          name: "WhatsApp",
          purpose: "Messaging",
          mastery: 92,
          details: "Group chats, file sharing, voice notes",
        },
        {
          name: "Zoom",
          purpose: "Video conferencing",
          mastery: 94,
          details: "Video calls, webinars, screen sharing",
        },
      ],
    },
    {
      category: "Design",
      icon: <Image className="w-5 h-5" />,
      color: "from-[#d4af37] to-[#d4af37]/80",
      textColor: "text-[#0d1b2a]",
      bgColor: "bg-[#d4af37]/10",
      description: "Basic tools for visual content",
      tools: [
        {
          name: "Canva",
          purpose: "Graphic design",
          mastery: 96,
          details: "Templates, stock photos, basic editing",
        },
        {
          name: "Figma",
          purpose: "UI/UX design",
          mastery: 85,
          details: "Prototyping, design systems, collaboration",
        },
        {
          name: "Adobe Photoshop",
          purpose: "Image editing",
          mastery: 82,
          details: "Advanced editing, retouching, graphic design",
        },
      ],
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-primary text-[#d4af37] mb-3">
            Essential Digital Toolkit
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-secondary">
            Fundamental tools we use to deliver quality support
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-xl bg-[#0d1b2a] p-2 shadow-sm border border-[#d4af37]/30">
            {toolCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-secondary rounded-lg transition-all ${
                  activeCategory === index
                    ? `text-[#0d1b2a] bg-gradient-to-r ${category.color} shadow-md`
                    : `text-gray-300 hover:bg-[#d4af37]/20`
                }`}
                variants={fadeIn}
              >
                {category.icon}
                <span>{category.category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {toolCategories[activeCategory].tools.map((tool, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={fadeIn}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0d1b2a] rounded-xl shadow-md border border-[#d4af37]/20 overflow-hidden transition-transform"
              >
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-secondary text-[#d4af37] mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm sm:text-base text-white font-secondary">
                      {tool.purpose}
                    </p>
                  </div>

                  <div className="mb-4 flex-grow">
                    <p className="text-gray-100 text-sm sm:text-base font-secondary">
                      {tool.details}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs sm:text-sm text-[#d4af37] mb-1 font-secondary">
                      <span>Proficiency</span>
                      <span>{tool.mastery}%</span>
                    </div>
                    <div className="w-full h-2 sm:h-3 bg-[#0d1b2a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tool.mastery}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${toolCategories[activeCategory].color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Tools;