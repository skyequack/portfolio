"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Silverhand: 3D Printed Hand Exoskeleton",
        description: "3-fingered exoskeleton for arthritis assistance, controlled by EMG electrodes",
        longDescription: "Developed a 3-fingered hand exoskeleton designed to assist individuals with arthritis. The device uses EMG electrodes to detect muscle signals, enabling intuitive control of finger movements. The exoskeleton provides mechanical assistance to improve grip strength and dexterity, helping users perform daily tasks with greater ease.",
        tags: ["Embedded", "Sensor Fusion", "C++", "Control"],
        image: "/api/placeholder/600/400",
        github: "https://github.com",
    },
    {
        id: 2,
        title: "Crabby",
        description: "12-DOF legged robot with inverse kinematics and gait planning",
        longDescription: "Designed and built a 12-DOF quadruped robot with custom inverse kinematics solver. Implemented multiple gait patterns including trot, walk, and crawl. Used ROS2 for control architecture and Gazebo for simulation.",
        tags: ["ROS2", "CAD", "Inverse Kinematics", "Embedded"],
        image: "/api/placeholder/600/400",
        github: "https://github.com",
    },
    {
        id: 3,
        title: "A.R.N.A.V. : Robotic Prosthetic Hand",
        description: "3D-printed prosthetic with EMG control and force feedback",
        longDescription: "Developed a low-cost 3D-printed prosthetic hand controlled by EMG signals. Integrated force sensors for grip control and haptic feedback system for user awareness.",
        tags: ["CAD", "EMG", "Arduino", "Signal Processing"],
        image: "/api/placeholder/600/400",
        github: "https://github.com",
    },
    {
        id: 4,
        title: "SLAM Navigation Bot",
        description: "Autonomous mobile robot with LiDAR-based SLAM",
        longDescription: "Built an autonomous navigation system using ROS2 Nav2 stack. Implemented SLAM with RPLiDAR for real-time mapping and localization in unknown environments.",
        tags: ["ROS2", "SLAM", "LiDAR", "Python"],
        image: "/api/placeholder/600/400",
        github: "https://github.com",
    },
    {
        id: 5,
        title: "Robotic Arm Manipulator",
        description: "6-DOF robotic arm with computer vision for object manipulation",
        longDescription: "Designed and fabricated a 6-DOF robotic arm with integrated computer vision for pick-and-place tasks. Implemented trajectory planning and collision avoidance algorithms.",
        tags: ["Computer Vision", "CAD", "ROS2", "OpenCV"],
        image: "/api/placeholder/600/400",
        github: "https://github.com",
        demo: "https://demo.com",
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

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A selection of robots and systems I&apos;ve built
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-20 h-20"
                      fill="currentColor"
                    >
                      <rect x="30" y="40" width="40" height="35" rx="2" />
                      <circle cx="42" cy="55" r="4" />
                      <circle cx="58" cy="55" r="4" />
                    </svg>
                  </div>
                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-white text-sm px-4 text-center">
                      {project.longDescription}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-mono rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
