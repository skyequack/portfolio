"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Code, Zap, Brain, Workflow } from "lucide-react";
import Image from "next/image";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function About() {
  const skills = [
    {
      icon: Wrench,
      title: "Mechanical Engineering",
      description: "CAD design, fabrication, mechanical systems integration",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: Cpu,
      title: "Electronics",
      description: "Circuit design, embedded systems, sensor integration",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Code,
      title: "Software",
      description: "ROS2, Python, C++, control systems development",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  const specializations = [
    {
      icon: Zap,
      title: "Legged Robotics",
      description: "Quadruped locomotion, gait planning, dynamic control",
    },
    {
      icon: Brain,
      title: "Prosthetics",
      description: "EMG control, human-machine interfaces, assistive devices",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Multi-disciplinary systems, hardware-software co-design",
    },
  ];

  return (
    
    <section id="about" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <BGPattern variant="diagonal-stripes" mask="fade-edges" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
      
          {/* Section Header */}
          <div className="mb-12 sm:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Profile Image */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl max-w-[240px] sm:max-w-[380px] mx-auto group">
                <div/>
                <Image
                  src="/images/me.png"
                  alt="Profile picture"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800" />
              </div>
            </motion.div>

            {/* About Text */}
            <div className="lg:col-span-3 space-y-5 text-gray-700 dark:text-gray-300">
              <motion.p 
                className="text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                I&apos;m an engineering student with a passion for{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">robotics</span> and 
                hands-on problem solving. My work lives at the intersection of mechanical design, 
                electronics, and software; where ideas become machines.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My core interests lie in{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">legged robots</span> and{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">robotic prosthetics</span>;
                systems that require deep integration across disciplines. I believe in learning by building, 
                failing fast, and iterating until it works.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Whether it&apos;s designing a quadruped robot, programming control algorithms, or 
                fabricating mechanical assemblies, I love the challenge of bringing complex systems to life.
              </motion.p>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                
              </motion.div>
            </div>
          </div>

          {/* Skills & Expertise Section - Redesigned */}
          <div className="space-y-8 sm:space-y-12">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                Skills & Expertise
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4" />
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Multidisciplinary expertise across mechanical, electrical, and software systems
              </p>
            </motion.div>
            
            {/* Core Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Hover Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`} />
                  
                  {/* Card Content */}
                  <div className="relative h-full bg-white dark:bg-gray-900/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-xl">
                    {/* Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 ${skill.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <skill.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${skill.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {skill.title}
                        </h4>
                        <div className={`h-0.5 w-12 bg-gradient-to-r ${skill.color} rounded-full`} />
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-2xl" />
              
              <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">                  
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      Research Focus
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {specializations.map((spec, index) => (
                    <motion.div
                      key={spec.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="group p-4 bg-white dark:bg-gray-900/80 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-shrink-0 w-9 h-9 bg-blue-50 dark:bg-blue-950/30 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                          <spec.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {spec.title}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-12">
                        {spec.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
