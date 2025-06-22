'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = {
  Frontend: [
    { name: "React.js", icon: "/skills/react.svg" },
    { name: "Next.js", icon: "/skills/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "TypeScript", icon: "/skills/typescript.svg" },
    { name: "HTML5", icon: "/skills/html5.svg" },
    { name: "CSS3", icon: "/skills/css3.svg" },
    { name: "Framer Motion", icon: "/skills/framer.svg" },
  ],
  Backend: [
    { name: "Node.js", icon: "/skills/nodedotjs.svg" },
    { name: "Express.js", icon: "/skills/express.svg" },
    { name: "Next.js", icon: "/skills/nextjs.svg" },
  ],
  DevOps: [
    { name: "Git", icon: "/skills/git.svg" },
    { name: "Docker", icon: "/skills/docker.svg" },
    { name: "GitHub Actions", icon: "/skills/githubactions.svg" },
  ],
  DataBase: [
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "MySQL", icon: "/skills/mysql.svg" },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20  overflow-hidden  text-white w-full">
      {/* Gradient background overlays */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-color-dodge filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-color-dodge filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-teal-300 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={item}
          className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-12"
        />

        <div className="flex flex-col gap-16">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={item}>
              <h3 className="text-2xl font-bold text-green-300 mb-4 pl-10">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-10 gap-2">
                {items.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center text-center p-2 cursor-pointer group"
                  >
                    <div className="w-16 h-16 relative mb-3 p-3 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={icon}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {name}
                    </span>
                    
                    
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
