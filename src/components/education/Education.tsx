'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  grade?: string;
}

const timelineData: TimelineItem[] = [
    {
    id: 1,
    title: "Bachelor's Degree",
    institution: "IIMT College Of Enginnering Greater Noida",
    period: "2021 – 2025",
    description: "Pursued B.Tech in Artificial Intelligence and DataScience. Gained expertise in software development, data structures, algorithms, and modern web technologies.",
    grade: "7.2 CGPA"
  },
  {
    id: 2,
    title: "Matriculation (10th Grade)",
    institution: "KNICE Lal Diggi Sultanpur U.P",
    period: "2018 – 2019",
    description: "Completed secondary education with focus on Science and Mathematics. Achieved excellent results in board examinations and participated in various academic competitions.",
    grade: "90.4%"
  },
  {
    id: 3,
    title: "Intermediate (12th Grade)",
    institution: "KNICE Lal Diggi Sultanpur U.P",
    period: "2020 – 2022",
    description: "Specialized in Physics, Chemistry, and Mathematics (PCM). Developed strong analytical skills and prepared for engineering entrance examinations.",
    grade: "80.0%"
  },
  
];

// Utility function to determine card position
const getCardPosition = (index: number): 'left' | 'right' => {
  return index % 2 === 0 ? 'left' : 'right';
};

const EducationTimeline: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: (position: string) => ({
      opacity: 0,
      x: position === 'left' ? -100 : 100,
      y: 50
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education Timeline
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A journey through academic excellence and continuous learning
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 to-purple-400"
              
              style={{ height: `${(timelineData.length - 1) * 300 + 100}px` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const position = getCardPosition(index);
              
              return (
                <div key={item.id} className="relative">
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-blue-600 text-lg shadow-lg z-10 hidden md:flex"
                    variants={dotVariants}
                    custom={position}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                    }}
                  >
                    {item.id}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`
                      relative md:w-5/12 w-full
                      ${position === 'left' 
                        ? 'md:mr-auto md:pr-16 md:text-right' 
                        : 'md:ml-auto md:pl-16 md:text-left'
                      }
                    `}
                    variants={itemVariants}
                    custom={position}
                  >
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                      {/* Mobile Dot */}
                      <div className="md:hidden w-8 h-8 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-blue-600 text-sm mb-4 mx-auto">
                        {item.id}
                      </div>

                      {/* Card Content */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                            {item.title}
                          </h3>
                          {item.grade && (
                            <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {item.grade}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <p className="text-blue-200 font-semibold text-lg">
                            {item.institution}
                          </p>
                          <p className="text-gray-300 font-medium">
                            {item.period}
                          </p>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Decorative Arrow */}
                        <div className={`
                          hidden md:block absolute top-6 
                          ${position === 'left' 
                            ? 'right-0 transform translate-x-6' 
                            : 'left-0 transform -translate-x-6'
                          }
                        `}>
                          <div className={`
                            w-0 h-0 
                            ${position === 'left'
                              ? 'border-l-8 border-l-white/20 border-y-8 border-y-transparent'
                              : 'border-r-8 border-r-white/20 border-y-8 border-y-transparent'
                            }
                          `} />
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        
         
        
      </div>
    </section>
  );
};

export default EducationTimeline;