import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // null, "success", "error"
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate subscription process
    if (email && email.includes("@") && email.includes(".")) {
      setSubscriptionStatus("success");
      setEmail("");
      // In a real application, you would send this to your backend
    } else {
      setSubscriptionStatus("error");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-pink-100 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stay Connected, Stay <span className="text-pink-400">Organized</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Don't miss out on virtual assistant tips, productivity hacks, and exclusive insights. Join our community of busy professionals who've transformed their workflow.
            </p>
            
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-gray-200">Weekly actionable productivity tips</p>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-gray-200">Exclusive virtual assistant best practices</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-gray-200">Early access to VA training resources</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="relative max-w-md">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-full py-4 pl-6 pr-36 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-6 rounded-full transition-all hover:from-pink-600 hover:to-purple-700 flex items-center gap-2"
                >
                  Subscribe Now
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {subscriptionStatus === "success" && (
                <div className="absolute mt-2 text-sm flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Thanks for subscribing! Check your inbox.</span>
                </div>
              )}
              
              {subscriptionStatus === "error" && (
                <div className="absolute mt-2 text-sm flex items-center gap-2 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>Please enter a valid email address.</span>
                </div>
              )}
            </form>
          </div>
          
          {/* Right column: Image and visual elements */}
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
              <img 
                src="/api/placeholder/600/400" 
                alt="Virtual assistant at work"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-pink-400">98%</p>
                    <p className="text-sm text-gray-300">Client Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-pink-400">15+</p>
                    <p className="text-sm text-gray-300">Hours Saved Weekly</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-pink-400">3x</p>
                    <p className="text-sm text-gray-300">Productivity Boost</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-full filter blur-3xl opacity-30 z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full filter blur-3xl opacity-30 z-0"></div>
            
            {/* Audio wave visualization */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-40 w-full flex items-center justify-center z-0 opacity-20">
              {[...Array(20)].map((_, index) => (
                <div 
                  key={index}
                  className="w-1 mx-px h-6 bg-gradient-to-t from-pink-400 to-purple-500 rounded-full animate-pulse"
                  style={{ 
                    height: `${Math.sin(index / 3) * 50 + 60}px`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;