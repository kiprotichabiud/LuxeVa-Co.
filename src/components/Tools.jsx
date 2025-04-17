import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Share2, 
  Zap,
  Star,
  Sparkles,
  Crown,
  Heart,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Award
} from "lucide-react";

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTool, setHoveredTool] = useState(null);
  
  const toolCategories = [
    {
      category: "Productivity",
      icon: <LayoutDashboard className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      description: "Streamlining operations with precision and elegance",
      tools: [
        { 
          name: "Notion", 
          purpose: "All-in-one workspace", 
          logo: "📋",
          mastery: 95,
          details: "Custom templates, databases, workflow automation"
        },
        { 
          name: "ClickUp", 
          purpose: "Task management", 
          logo: "✨",
          mastery: 90,
          details: "Custom fields, automations, time tracking"
        },
        { 
          name: "Asana", 
          purpose: "Project execution", 
          logo: "📊",
          mastery: 92,
          details: "Timeline views, workload management"
        }
      ]
    },
    {
      category: "Communication",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "from-fuchsia-500 to-purple-500",
      textColor: "text-fuchsia-600",
      bgColor: "bg-fuchsia-50",
      description: "Elevating conversations to an art form",
      tools: [
        { 
          name: "Slack", 
          purpose: "Team messaging", 
          logo: "💬",
          mastery: 98,
          details: "Workflow automations, app integration"
        },
        { 
          name: "Zoom", 
          purpose: "Video meetings", 
          logo: "🎥",
          mastery: 94,
          details: "Webinars, breakout rooms"
        },
        { 
          name: "Calendly", 
          purpose: "Scheduling", 
          logo: "📅",
          mastery: 96,
          details: "Custom workflows, payments"
        }
      ]
    },
    {
      category: "Design",
      icon: <Share2 className="w-5 h-5" />,
      color: "from-rose-500 to-pink-600",
      textColor: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "Crafting magnetic brand narratives",
      tools: [
        { 
          name: "Canva Pro", 
          purpose: "Visual design", 
          logo: "🎨",
          mastery: 99,
          details: "Brand kits, premium elements"
        },
        { 
          name: "Flodesk", 
          purpose: "Email design", 
          logo: "✉️",
          mastery: 96,
          details: "Beautiful templates, workflows"
        }
      ]
    },
    {
      category: "Automation",
      icon: <Zap className="w-5 h-5" />,
      color: "from-violet-500 to-purple-600",
      textColor: "text-violet-600",
      bgColor: "bg-violet-50",
      description: "Streamlining repetitive tasks",
      tools: [
        { 
          name: "Zapier", 
          purpose: "Workflow automation", 
          logo: "⚡",
          mastery: 97,
          details: "Multi-step zaps, filters"
        },
        { 
          name: "Airtable", 
          purpose: "Database automation", 
          logo: "🧩",
          mastery: 95,
          details: "Custom views, automations"
        }
      ]
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-white via-pink-50 to-fuchsia-50">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-300"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              opacity: Math.random() * 0.4 + 0.1
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 40 - 20],
              opacity: [Math.random() * 0.4 + 0.1, Math.random() * 0.4 + 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-pink-200 border-dashed"
              />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-500">
              Digital Tool
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium tools I've mastered to deliver exceptional results
          </p>
        </motion.div>

        {/* Category selector */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex rounded-xl bg-white p-1 shadow-sm border border-gray-100">
            {toolCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === index
                    ? `text-white bg-gradient-to-r ${category.color} shadow-md`
                    : `text-gray-600 hover:text-gray-900`
                }`}
              >
                {activeCategory === index && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r"
                    initial={false}
                    style={{ background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category.icon}
                  {category.category}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {toolCategories[activeCategory].description}
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {toolCategories[activeCategory].tools.map((tool, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                onMouseEnter={() => setHoveredTool(`${activeCategory}-${index}`)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 bg-gradient-to-br ${toolCategories[activeCategory].color} text-white shadow-sm`}>
                      <span className="text-xl">{tool.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{tool.name}</h3>
                      <p className={`text-sm ${toolCategories[activeCategory].textColor}`}>
                        {tool.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Mastery</span>
                      <span>{tool.mastery}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tool.mastery}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                        className={`h-full bg-gradient-to-r ${toolCategories[activeCategory].color} rounded-full`}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">{tool.details}</p>

                  
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