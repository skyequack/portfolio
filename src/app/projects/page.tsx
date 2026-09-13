"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Award, Code2, Cpu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Navigation from "@/components/Navigation";

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
  category: "mechanical" | "electronics" | "software" | "integration";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Silverhand: Hand Exoskeleton",
    description: "3-fingered exoskeleton for arthritis assistance, controlled by EMG electrodes",
    longDescription:
      "Developed a 3-fingered hand exoskeleton designed to assist individuals with arthritis. The device uses EMG electrodes to detect muscle signals, enabling intuitive control of finger movements. The exoskeleton provides mechanical assistance to improve grip strength and dexterity, helping users perform daily tasks with greater ease.",
    tags: ["Embedded", "Sensor Fusion", "C++", "Control"],
    image: "/images/silverhand.jpeg",
    github: "https://github.com",
    category: "integration",
    featured: true,
  },
  {
    id: 2,
    title: "Crabby",
    description: "12-DOF legged robot with inverse kinematics and gait planning",
    longDescription:
      "Designed and built a 12-DOF quadruped robot with custom inverse kinematics solver. Implemented multiple gait patterns including trot, walk, and crawl. Used ROS2 for control architecture and Gazebo for simulation.",
    tags: ["ROS2", "CAD", "Inverse Kinematics"],
    image: "/images/crabby.jpeg",
    github: "https://github.com",
    category: "mechanical",
  },
  {
    id: 3,
    title: "A.R.N.A.V.: Robotic Prosthetic Hand",
    description: "3D-printed prosthetic with EMG control and force feedback",
    longDescription:
      "Developed a low-cost 3D-printed prosthetic hand controlled by EMG signals. Integrated force sensors for grip control and haptic feedback system for user awareness.",
    tags: ["CAD", "EMG", "Arduino", "Signal Processing"],
    image: "https://cdn.sanity.io/images/6nd5koax/production/5bdf975cf1cd40e11b9f13a17ebde2a1864cfdd8-829x912.jpg?fit=max&auto=format",
    github: "https://github.com",
    category: "integration",
  },
  {
    id: 4,
    title: "RoboSoccer",
    description: "Remote-controlled soccer robots for Technoxian 2023 - 2nd Runner Up",
    longDescription:
      "Designed and built three specialized remote-controlled robots for competitive soccer: Bull Bot for heavy defending, Striker Bot with plunger for agile shooting, and Goalkeeper Bot with 3-wheel omni drive for holonomic movement. Competed at Technoxian 2023 and secured 2nd Runner Up position.",
    tags: ["Omni Drive", "RoboSoccer", "Remote Control", "Competition"],
    image: "/images/robosoccer.jpeg",
    github: "https://github.com",
    category: "mechanical",
  },
  {
    id: 5,
    title: "Peeker",
    description: "Compact surveillance robot with continuous track drive and self-righting mechanism",
    longDescription:
      "Peeker is a compact and mobile robotic system equipped with continuous track drive technology, specifically designed for surveillance and scouting purposes. Its portability is enhanced by its lightweight design, while its sturdy construction ensures durability, enabling it to endure rough handling, such as throws and drops. Notably, Peeker introduces an innovative 'flipping mechanism,' enabling the robot to autonomously correct itself in the event of overturning.",
    tags: ["Surveillance", "Track Drive", "Autonomous", "Durability"],
    image: "/images/peeker.png",
    github: "https://github.com",
    category: "mechanical",
  },
  {
    id: 6,
    title: "Balance Bot",
    description: "Self-balancing robot with PID control and MPU6050",
    longDescription:
      "Two-wheeled self-balancing robot using MPU6050 IMU and custom PID controller. Real-time system identification and tuning for optimal balance performance.",
    tags: ["Control Systems", "PID", "Embedded", "Arduino"],
    image: "/api/placeholder/600/400",
    category: "electronics",
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Code2 },
  { id: "mechanical", label: "Mechanical", icon: Cpu },
  { id: "electronics", label: "Electronics", icon: Zap },
  { id: "software", label: "Software", icon: Code2 },
  { id: "integration", label: "Full Stack", icon: Award },
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative min-h-screen py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background effects */}
        <StarsBackground
          starDensity={0.00015}
          allStarsTwinkle={true}
          twinkleProbability={0.7}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1.5}
        />

        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider uppercase"
              >
                Portfolio
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              My Projects
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl"
            >
              A curated collection of robotics systems and projects I&apos;ve designed and built, spanning mechanical engineering, embedded systems, and software development.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14 sm:mb-16"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 border border-cyan-400/50"
                        : "bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{category.label}</span>
                    <span className="sm:hidden">{category.label.split(" ")[0]}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative cursor-pointer h-full"
              >
                {/* Animated glow background - desktop only */}
                <motion.div
                  animate={{
                    opacity: hoveredProject === project.id ? 0.3 : 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl -z-10"
                />

                {/* Main card container */}
                <motion.div
                  className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden backdrop-blur-xl border border-gray-700/50 shadow-2xl transition-all duration-500"
                  animate={{
                    borderColor:
                      hoveredProject === project.id
                        ? "rgba(6, 182, 212, 0.5)"
                        : "rgba(55, 65, 81, 0.5)",
                  }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
                    >
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/30 backdrop-blur-sm">
                        <span className="text-sm">â­</span>
                        <span>Featured</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Image Section */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Floating info button - desktop */}
                    <motion.button
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8,
                        pointerEvents:
                          hoveredProject === project.id ? "auto" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-md text-gray-900 rounded-full shadow-2xl flex items-center justify-center font-bold text-xl border border-white/50 hover:bg-white transition-all"
                    >
                      +
                    </motion.button>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-2xl line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 flex flex-col gap-4 h-full">
                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-2 flex-shrink-0">
                      {project.description}
                    </p>

                    {/* Tgs */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex gap-3 pt-4 border-t border-gray-700/50 mt-auto ${project.github ? "grid-cols-2" : ""}`}>
                      <motion.button
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/20 border border-cyan-400/50"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">Details</span>
                      </motion.button>

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600 text-gray-200 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium border border-gray-600/50 hover:border-gray-500"
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => setSelectedProject(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-3xl sm:rounded-2xl w-full sm:max-w-3xl sm:max-h-[90vh] overflow-y-auto shadow-2xl border-t-2 sm:border border-gray-700/50 backdrop-blur-xl my-auto"
          >
            {/* Mobile drag indicator */}
            <div className="flex justify-center pt-3 pb-2 sm:hidden sticky top-0 bg-gray-900/50 backdrop-blur-sm">
              <div className="w-12 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* Close button */}
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-cyan-300 text-sm sm:text-base font-semibold">
                  {selectedProject.category.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Overview
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag: string, index: number) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm sm:text-base font-semibold rounded-lg border border-cyan-500/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className={`flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700/50 ${selectedProject.demo && selectedProject.github ? "sm:flex-row" : ""}`}>
                {selectedProject.github && (
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl transition-all duration-300 font-semibold border border-gray-600/50 hover:border-gray-500 shadow-lg ${selectedProject.demo ? "flex-1" : "flex-1 sm:flex-1"}`}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code on GitHub</span>
                  </motion.a>
                )}

                {selectedProject.demo && (
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 border border-cyan-400/50 hover:border-cyan-300/50"
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
    </main>
  );
}
