"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Code } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: Wrench,
      title: "Mechanical Engineering",
      description: "CAD design, fabrication, mechanical systems integration",
    },
    {
      icon: Cpu,
      title: "Electronics",
      description: "Circuit design, embedded systems, sensor integration",
    },
    {
      icon: Code,
      title: "Software",
      description: "ROS2, Python, C++, control systems development",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Profile Image/Avatar Placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-white text-6xl font-bold">
                  {/* Placeholder - Replace with your actual photo */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-32 h-32 text-white opacity-50"
                    fill="currentColor"
                  >
                    <circle cx="50" cy="35" r="15" />
                    <path d="M 30 65 Q 30 50 50 50 Q 70 50 70 65 Q 70 80 50 90 Q 30 80 30 65" />
                  </svg>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-2 space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I&apos;m an engineering student with a passion for <strong className="text-gray-900 dark:text-white">robotics</strong> and 
                hands-on problem solving. My work lives at the intersection of mechanical design, 
                electronics, and software; where ideas become machines that actually work.
              </p>
              <p className="text-lg leading-relaxed">
                My core interests lie in <strong className="text-gray-900 dark:text-white">legged robots</strong> and{" "}
                <strong className="text-gray-900 dark:text-white">robotic prosthetics</strong>; 
                systems that require deep integration across disciplines. I believe in learning by building, 
                failing fast, and iterating until it works.
              </p>
              <p className="text-lg leading-relaxed">
                Whether it&apos;s designing a quadruped robot, programming control algorithms, or 
                fabricating mechanical assemblies, I love the challenge of bringing complex systems to life.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <skill.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
