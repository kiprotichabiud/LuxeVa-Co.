import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const RecentWork = () => {
  const caseStudies = [
    {
      title: "Executive Inbox Management for C-Level Founder",
      description:
        "Provided full email oversight, streamlined communications, created filters, and reduced inbox clutter by over 80% within the first month.",
    },
    {
      title: "Social Media Scheduling for Coaching Brand",
      description:
        "Managed weekly social content calendar, scheduled posts across platforms, and maintained brand consistency using Canva and Buffer.",
    },
    {
      title: "CRM Optimization for Online Store Owner",
      description:
        "Cleaned and organized client database in HubSpot, automated follow-ups, and improved client engagement through personalized sequences.",
    },
  ];

  return (
    <motion.section
      className="bg-pink-50 py-20 px-6 md:px-10"
      id="work"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-primary text-gray-900 mb-16"
          variants={fadeIn}
        >
          Case Studies
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 rounded-3xl p-6 md:p-8 text-gray-900"
              variants={fadeIn}
            >
              <h3 className="text-lg md:text-xl font-secondary mb-4 leading-snug">
                {study.title}
              </h3>
              <p className="text-sm md:text-base mb-4 font-quaternary">
                {study.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RecentWork;
