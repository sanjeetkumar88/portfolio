'use cilent'
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "Prutor@IITK",
      location: "Noida, Uttar-Pradesh",
      duration: "Sep 2024 – Present",
      highlights: [
        "Built and deployed MERN stack apps with 10+ third-party integrations, boosting user experience by 30% through agile workflows",
        "Optimized MongoDB and SQL queries with indexing, improving performance by 35% and reducing data retrieval time",
        "Refactored backend architecture for sathee.prutor.ai, cutting load time by 25% and improving UX for 1,000+ daily users",
        "Collaborated effectively with a cross-functional team, ensuring seamless integration of third-party services"
      ],
      current: true
    },
    {
      title: "Web Development Intern",
      company: "GAOTek Inc.",
      location: "Remote",
      duration: "Sep 2023 – Dec 2023",
      highlights: [
        "Developed 30+ responsive static web pages using HTML, CSS, and JavaScript, improving user engagement",
        "Crafted responsive, visually engaging web interfaces, increasing average time on product pages by 30%",
        "Resolved UI bugs across 15+ pages in collaboration with QA, improving cross-browser compatibility by 35%"
      ],
      current: false
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-black min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #64ffda, #00bcd4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            My professional journey as a Full Stack Developer, building scalable applications and delivering exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black hidden md:block ${
                  index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.3 }}
              ></motion.div>

              {/* Experience Card */}
              <motion.div
                className={`bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(100, 255, 218, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Current Badge */}
                {exp.current && (
                  <motion.div
                    className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.3 }}
                  >
                    Current Position
                  </motion.div>
                )}

                {/* Job Title */}
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.3 }}
                >
                  {exp.title}
                </motion.h3>

                {/* Company & Location */}
                <motion.div 
                  className="flex flex-col md:flex-row md:items-center mb-4 text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.3 }}
                >
                  <span className="text-lg font-semibold">{exp.company}</span>
                  <span className="hidden md:block mx-2">•</span>
                  <span className="text-gray-400">{exp.location}</span>
                </motion.div>

                {/* Duration */}
                <motion.p 
                  className="text-gray-400 mb-6 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.3 }}
                >
                  {exp.duration}
                </motion.p>

                {/* Highlights */}
                <motion.ul 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.3 }}
                >
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="flex items-start text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 1 + index * 0.3 + hIndex * 0.1,
                        duration: 0.5
                      }}
                    >
                      <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">▶</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;