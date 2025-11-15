"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Silverhand: Hand Exoskeleton",
        description: "3-fingered exoskeleton for arthritis assistance, controlled by EMG electrodes",
        longDescription: "Developed a 3-fingered hand exoskeleton designed to assist individuals with arthritis. The device uses EMG electrodes to detect muscle signals, enabling intuitive control of finger movements. The exoskeleton provides mechanical assistance to improve grip strength and dexterity, helping users perform daily tasks with greater ease.",
        tags: ["Embedded", "Sensor Fusion", "C++", "Control"],
        image: "/images/silverhand.jpeg",
        github: "https://github.com",

    },
    {
        id: 2,
        title: "Crabby",
        description: "12-DOF legged robot with inverse kinematics and gait planning",
        longDescription: "Designed and built a 12-DOF quadruped robot with custom inverse kinematics solver. Implemented multiple gait patterns including trot, walk, and crawl. Used ROS2 for control architecture and Gazebo for simulation.",
        tags: ["ROS2", "CAD", "Inverse Kinematics"],
        image: "/images/crabby.jpeg",
        github: "https://github.com",

    },
    {
        id: 3,
        title: "A.R.N.A.V. : Robotic Prosthetic Hand",
        description: "3D-printed prosthetic with EMG control and force feedback",
        longDescription: "Developed a low-cost 3D-printed prosthetic hand controlled by EMG signals. Integrated force sensors for grip control and haptic feedback system for user awareness.",
        tags: ["CAD", "EMG", "Arduino", "Signal Processing"],
        image: "https://cdn.sanity.io/images/6nd5koax/production/5bdf975cf1cd40e11b9f13a17ebde2a1864cfdd8-829x912.jpg?fit=max&auto=format",
        github: "https://github.com",

    },
    {
        id: 4,
        title: "RoboSoccer",
        description: "Remote-controlled soccer robots for Technoxian 2023 - 2nd Runner Up",
        longDescription: "Designed and built three specialized remote-controlled robots for competitive soccer: Bull Bot for heavy defending, Striker Bot with plunger for agile shooting, and Goalkeeper Bot with 3-wheel omni drive for holonomic movement. Competed at Technoxian 2023 and secured 2nd Runner Up position.",
        tags: ["Omni Drive", "RoboSoccer", "Remote Control", "Competition"],
        image: "/images/robosoccer.jpeg",
        github: "https://github.com",
    },
    {
        id: 5,
        title: "Peeker",
        description: "Compact surveillance robot with continuous track drive and self-righting mechanism",
        longDescription: "Peeker is a compact and mobile robotic system equipped with continuous track drive technology, specifically designed for surveillance and scouting purposes. Its portability is enhanced by its lightweight design, while its sturdy construction ensures durability, enabling it to endure rough handling, such as throws and drops. Notably, Peeker introduces an innovative 'flipping mechanism,' enabling the robot to autonomously correct itself in the event of overturning.",
        tags: ["Surveillance", "Track Drive", "Autonomous", "Durability"],
        image: "/images/peeker.png",
        github: "https://github.com",
    },
    {
        id: 6,
        title: "Balance Bot",
        description: "Self-balancing robot with PID control and MPU6050",
        longDescription: "Two-wheeled self-balancing robot using MPU6050 IMU and custom PID controller. Real-time system identification and tuning for optimal balance performance.",
        tags: ["Control Systems", "PID", "Embedded", "Arduino"],
        image: "/api/placeholder/600/400",
    },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Stars Background */}
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.5}
      />
      
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <motion.div 
              className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-base sm:text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A selection of robots and systems I&apos;ve built
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                {/* Glow effect on hover - more prominent on mobile */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[20px] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 rounded-[18px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/50 group-hover:border-blue-500/50 backdrop-blur-sm">
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
                      className="absolute top-3 right-3 z-20"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                        <span className="text-sm">⭐</span>
                        <span>Featured</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Project Image with enhanced mobile experience */}
                  <div className="relative h-52 sm:h-56 md:h-60 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating action button - desktop only */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className={`hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-gray-900 dark:text-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
                        hoveredProject === project.id ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                      }`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Info className="w-6 h-6" />
                    </motion.button>

                    {/* Title overlay on image - mobile optimized */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg line-clamp-2 mb-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Content - cleaner mobile layout */}
                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                      {project.description}
                    </p>

                    {/* Tags - more compact on mobile */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.08 + tagIndex * 0.05 }}
                          className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-[11px] sm:text-xs font-medium rounded-lg border border-blue-500/30 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 bg-gray-700/50 text-gray-400 text-[11px] sm:text-xs font-medium rounded-lg border border-gray-600/30">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action buttons - better mobile touch targets */}
                    <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-gray-700/50">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium border border-gray-600/30 hover:border-gray-500"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 px-3 py-2 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium border border-blue-500/50 hover:border-blue-400"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </motion.a>
                      )}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 px-3 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium border border-purple-500/50 hover:border-purple-400 ml-auto"
                      >
                        <Info className="w-4 h-4" />
                        <span className="hidden sm:inline">Details</span>
                        <span className="sm:hidden">More</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal for project details */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-3xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-t-2 sm:border border-gray-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag indicator for mobile */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
            </div>

            <div className="relative h-56 sm:h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2.5 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl mb-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>
            
            <div className="p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs sm:text-sm font-medium rounded-lg border border-blue-500/30 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {selectedProject.github && (
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base border border-white/10 hover:border-white/30 shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                )}
                {selectedProject.demo && (
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base border border-blue-500/50 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
