import React, { useState, useEffect } from "react";
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
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);
  
  useEffect(() => {
    setAnimateIn(false);
    setTimeout(() => setAnimateIn(true), 100);
  }, [activeCategory]);

  const toolCategories = [
    {
      category: "Productivity Suite",
      icon: <LayoutDashboard className="w-6 h-6" />,
      color: "from-pink-500 to-rose-400",
      textColor: "text-pink-500",
      bgColor: "bg-pink-50",
      description: "Streamlining your business operations with precision and elegance",
      tools: [
        { 
          name: "Notion", 
          purpose: "All-in-one command center", 
          logo: "📋", 
          featured: true,
          mastery: 95,
          details: "Custom templates, databases, workflow automation"
        },
        { 
          name: "ClickUp", 
          purpose: "Premium task orchestration", 
          logo: "✨", 
          mastery: 90,
          details: "Custom fields, automations, time tracking"
        },
        { 
          name: "Monday.com", 
          purpose: "Visual workflow management", 
          logo: "🌈", 
          mastery: 85,
          details: "Boards, automations, integrations"
        },
        { 
          name: "Asana", 
          purpose: "Strategic project execution", 
          logo: "📊", 
          mastery: 92,
          details: "Timeline views, workload management, reporting"
        }
      ]
    },
    {
      category: "Communication Hub",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-fuchsia-500 to-pink-500",
      textColor: "text-fuchsia-500",
      bgColor: "bg-fuchsia-50",
      description: "Elevating conversations and connections to an art form",
      tools: [
        { 
          name: "Slack", 
          purpose: "Channel-based messaging", 
          logo: "💬", 
          featured: true,
          mastery: 98,
          details: "Workflow automations, Slackbot customization, app integration"
        },
        { 
          name: "Zoom", 
          purpose: "Immersive video experiences", 
          logo: "🎥", 
          mastery: 94,
          details: "Webinars, breakout rooms, advanced scheduling"
        },
        { 
          name: "Loom", 
          purpose: "Asynchronous video magic", 
          logo: "🎬", 
          mastery: 90,
          details: "Screen recording, video editing, analytics"
        },
        { 
          name: "Calendly", 
          purpose: "Frictionless scheduling", 
          logo: "📅", 
          featured: true,
          mastery: 96,
          details: "Round robin, custom workflows, payments"
        }
      ]
    },
    {
      category: "Digital Presence",
      icon: <Share2 className="w-6 h-6" />,
      color: "from-rose-400 to-pink-600",
      textColor: "text-rose-500",
      bgColor: "bg-rose-50",
      description: "Crafting magnetic brand narratives across digital landscapes",
      tools: [
        { 
          name: "Canva Pro", 
          purpose: "Visual storytelling", 
          logo: "🎨", 
          featured: true,
          mastery: 99,
          details: "Brand kits, premium elements, magic resize"
        },
        { 
          name: "Later", 
          purpose: "Visual content calendar", 
          logo: "📱", 
          mastery: 88,
          details: "Analytics, story planning, hashtag suggestions"
        },
        { 
          name: "Buffer", 
          purpose: "Cross-platform orchestration", 
          logo: "⏱️", 
          mastery: 92,
          details: "Analytics, campaign planning, approval workflows"
        },
        { 
          name: "Flodesk", 
          purpose: "Boutique email experiences", 
          logo: "✉️", 
          featured: true,
          mastery: 96,
          details: "Beautiful templates, audience segmentation, workflows"
        }
      ]
    },
    {
      category: "Specialized Toolkit",
      icon: <Zap className="w-6 h-6" />,
      color: "from-pink-600 to-purple-500",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      description: "Unlocking extraordinary solutions for unique business challenges",
      tools: [
        { 
          name: "Zapier", 
          purpose: "Automation architect", 
          logo: "⚡", 
          featured: true,
          mastery: 97,
          details: "Multi-step zaps, filters, paths, formats"
        },
        { 
          name: "Airtable", 
          purpose: "Relational database magic", 
          logo: "🧩", 
          featured: true,
          mastery: 95,
          details: "Custom views, automations, interface designer"
        },
        { 
          name: "WebFlow", 
          purpose: "Visual web development", 
          logo: "🌐", 
          mastery: 87,
          details: "CMS, animations, responsive design"
        },
        { 
          name: "Dubsado", 
          purpose: "Client experience automation", 
          logo: "✨", 
          mastery: 91,
          details: "Workflows, contracts, invoicing, scheduling"
        }
      ]
    }
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Unique Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-fuchsia-50"></div>
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-pink-400 opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 160 + 40}px`,
                height: `${Math.random() * 160 + 40}px`,
                filter: 'blur(50px)',
                animation: `float ${Math.random() * 10 + 10}s infinite alternate ease-in-out`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline Section with Pink Crystal Effect */}
        <div className="relative text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-pink-300 blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white mx-auto shadow-xl">
              <Sparkles className="w-10 h-10" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="inline-block relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-500">
                Digital Mastery
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-pink-200 to-fuchsia-200 opacity-60 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A curated collection of premium tools I've mastered to deliver extraordinary virtual assistance
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-pink-600">
              TOP 1% OF VIRTUAL ASSISTANTS WORLDWIDE
            </span>
            <Crown className="w-5 h-5 text-pink-500" />
          </div>
        </div>

        {/* 3D Rotating Category Selector */}
        <div className="perspective-1000 mb-16">
          <div className="relative overflow-x-auto py-4">
            <div className="flex justify-center gap-2 md:gap-6">
              {toolCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`relative px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105 ring-2 ring-white ring-offset-1`
                      : `${category.bgColor} ${category.textColor} hover:scale-102`
                  }`}
                >
                  {activeCategory === index && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`${activeCategory === index ? 'text-white' : category.textColor}`}>
                      {category.icon}
                    </div>
                    <span>{category.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Category Description with Animated Underline */}
        <div className="text-center mb-12">
          <p className="relative inline-block text-xl text-gray-600 max-w-3xl">
            {toolCategories[activeCategory].description}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50"></span>
          </p>
        </div>

        {/* Immersive Tool Display with Visual Effects */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
          {toolCategories[activeCategory].tools.map((tool, index) => {
            const isHovered = hoveredTool === `${activeCategory}-${index}`;
            const categoryColor = toolCategories[activeCategory].color;
            const categoryTextColor = toolCategories[activeCategory].textColor;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredTool(`${activeCategory}-${index}`)}
                onMouseLeave={() => setHoveredTool(null)}
                className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                  tool.featured 
                    ? `bg-white shadow-xl border border-pink-100` 
                    : `bg-white shadow-lg hover:shadow-xl border border-gray-100`
                }`}
              >
                {/* Background Gradient Animation on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Featured Badge */}
                {tool.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-full shadow-md">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-white mr-1" />
                      <span className="text-xs font-bold text-white">TOP EXPERTISE</span>
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Tool Header */}
                  <div className="flex items-center mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 bg-gradient-to-br ${categoryColor} text-white shadow-md`}>
                      <span className="text-xl">{tool.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                      <p className={`text-sm ${categoryTextColor}`}>{tool.purpose}</p>
                    </div>
                  </div>
                  
                  {/* Mastery Level */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">MASTERY LEVEL</span>
                      <span className="text-xs font-bold text-gray-700">{tool.mastery}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${categoryColor} rounded-full`} 
                        style={{ width: `${tool.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Expertise Details */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">{tool.details}</p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6">
                    <button className={`group flex items-center text-sm font-medium ${categoryTextColor} hover:opacity-80 transition-opacity`}>
                      <span>Discover my expertise</span>
                      <ArrowRight className={`w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1`} />
                    </button>
                  </div>
                </div>
                
                {/* Curved Decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-100 to-transparent opacity-50"></div>
              </div>
            );
          })}
        </div>

        {/* Client Projects Highlight */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Success with Premium Tools</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Productivity", "Design", "Project Management", "Communication", "Automation"].map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-pink-200 rounded-full text-sm text-gray-700 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
          
          {/* Client Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { number: "60%", label: "Time Saved", icon: <Zap className="w-6 h-6 text-pink-500" /> },
              { number: "85%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6 text-pink-500" /> },
              { number: "100%", label: "Project Completion", icon: <CheckCircle className="w-6 h-6 text-pink-500" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Call to Action */}
        <div className="relative mt-24 mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-3xl transform rotate-1 scale-105 opacity-20 blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-3xl transform -rotate-1 scale-105 opacity-10 blur-lg"></div>
          
          <div className="relative bg-white p-12 rounded-3xl shadow-2xl border border-pink-100">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-pink-500 mr-2" />
                  <span className="text-sm font-bold text-pink-600">PREMIUM VIRTUAL ASSISTANCE</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Ready to transform your digital workflow?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Let's discuss your unique needs and create a tailored toolkit that will elevate your business operations to new heights.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Tool selection tailored to your specific business", "Complete setup and integration", "Custom workflow design", "Ongoing premium support"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Book Your Strategy Call</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    Limited availability for new premium clients in April 2025
                  </p>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white py-4 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-102 flex items-center justify-center">
                    <span>Schedule Consultation</span>
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                  <div className="flex items-center justify-center mt-4">
                    <Star className="w-4 h-4 text-pink-500" />
                    <Star className="w-4 h-4 text-pink-500" />
                    <Star className="w-4 h-4 text-pink-500" />
                    <Star className="w-4 h-4 text-pink-500" />
                    <Star className="w-4 h-4 text-pink-500" />
                    <span className="text-xs text-gray-500 ml-2">5.0 from 48 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100">
            <div className="text-2xl">💖</div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100">
            <div className="text-xl">✨</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 15s infinite alternate ease-in-out;
        }
        
        .animate-float-delayed {
          animation: float 18s infinite alternate-reverse ease-in-out;
        }
        
        .animate-float-slow {
          animation: float 20s infinite alternate ease-in-out;
          animation-delay: 5s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        .bg-mesh-gradient {
          background-image: radial-gradient(at 40% 20%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
                            radial-gradient(at 80% 0%, rgba(219, 39, 119, 0.1) 0px, transparent 50%),
                            radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
                            radial-gradient(at 80% 50%, rgba(244, 114, 182, 0.1) 0px, transparent 50%),
                            radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
                            radial-gradient(at 80% 100%, rgba(219, 39, 119, 0.1) 0px, transparent 50%),
                            radial-gradient(at 0% 0%, rgba(244, 114, 182, 0.1) 0px, transparent 50%);
        }
        
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: 
            linear-gradient(to right, rgba(236, 72, 153, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(236, 72, 153, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Tools;