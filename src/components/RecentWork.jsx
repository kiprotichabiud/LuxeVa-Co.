import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Calendar, 
  TrendingUp, 
  BookOpen,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const RecentWork = () => {
  const projects = [
    {
      title: "E-commerce Management System",
      client: "Boutique Online Store",
      description: "Revolutionized their digital operations with a complete product catalog organization and streamlined order processing system",
      results: ["40% faster order processing", "25% higher customer satisfaction", "30% reduction in support tickets"],
      icon: <ShoppingCart className="w-6 h-6" />,
      accentColor: "bg-blue-500"
    },
    {
      title: "Executive Calendar Overhaul",
      client: "Tech Startup CEO",
      description: "Transformed chaotic scheduling into an optimized time management system with strategic blocking",
      results: ["8+ productive hours gained weekly", "60% fewer unnecessary meetings", "Better work-life balance"],
      icon: <Calendar className="w-6 h-6" />,
      accentColor: "bg-purple-500"
    },
    {
      title: "Social Media Transformation",
      client: "Life Coach",
      description: "Rebranded online presence with data-driven content strategy and automated posting workflow",
      results: ["220% follower growth in 3 months", "3x engagement increase", "Higher quality leads"],
      icon: <TrendingUp className="w-6 h-6" />,
      accentColor: "bg-green-500"
    },
    {
      title: "Operations Manual Creation",
      client: "Consulting Firm",
      description: "Developed comprehensive business documentation with interactive training modules",
      results: ["75% faster onboarding", "Improved knowledge retention", "Standardized processes"],
      icon: <BookOpen className="w-6 h-6" />,
      accentColor: "bg-pink-500"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="work" className="relative px-6 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-pink-50/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-pink-200 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-pink-100 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-secondary font-bold mb-4 text-gray-900">
            Client Success Stories
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming visions into measurable business results
          </motion.p>
          <motion.div variants={fadeIn} className="w-20 h-1 bg-pink-600 mx-auto mt-6"></motion.div>
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
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${project.accentColor}`}></div>
              
              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`p-3 rounded-lg ${project.accentColor.replace('500', '100')} text-pink-700`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-pink-600 font-medium">{project.client}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-3">ACHIEVED RESULTS:</p>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1 text-pink-500">
                          <ChevronRight className="w-4 h-4" />
                        </span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
          <button className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWork;