"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, FlaskConical } from "lucide-react";

interface Experience {
  id: number;
  type: "work" | "competition" | "research";
  title: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    type: "competition",
    title: "e-Yantra Robotics Competition",
    organization: "IIT Bombay",
    duration: "2023 - 2024",
    description: "National-level robotics competition focusing on autonomous navigation and task completion",
    highlights: [
      "Reached national finals among 500+ teams",
      "Developed autonomous navigation system using computer vision",
      "Implemented pick-and-place manipulation with custom gripper design",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Robotics Engineering Intern",
    organization: "Tech Robotics Lab",
    duration: "Summer 2023",
    description: "Worked on developing control systems for industrial robotic arms",
    highlights: [
      "Implemented trajectory planning algorithms in ROS2",
      "Reduced motion planning time by 40% using optimized algorithms",
      "Collaborated with mechanical team on gripper integration",
    ],
  },
  {
    id: 3,
    type: "research",
    title: "Undergraduate Research Assistant",
    organization: "University Robotics Lab",
    duration: "2023 - Present",
    description: "Research on locomotion strategies for quadruped robots on uneven terrain",
    highlights: [
      "Developed simulation environment in Gazebo for gait testing",
      "Implemented reinforcement learning for adaptive gait generation",
      "Co-authored paper on terrain-adaptive locomotion (under review)",
    ],
  },
  {
    id: 4,
    type: "competition",
    title: "ABU Robocon",
    organization: "Asia-Pacific Robot Contest",
    duration: "2023",
    description: "International robotics competition with emphasis on mechanical design",
    highlights: [
      "Designed and fabricated competition robot within 3 months",
      "Led mechanical subsystem team of 6 members",
      "Secured 2nd place in national selection round",
    ],
  },
  {
    id: 5,
    type: "work",
    title: "Embedded Systems Developer",
    organization: "Innovation Lab",
    duration: "Jan 2023 - Jun 2023",
    description: "Developed embedded systems for IoT and robotics applications",
    highlights: [
      "Created firmware for ESP32-based robot controller",
      "Implemented real-time sensor fusion algorithms",
      "Designed PCBs for motor driver and sensor interfaces",
    ],
  },
];

const iconMap = {
  work: Briefcase,
  competition: Trophy,
  research: FlaskConical,
};

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Competitions, internships, and research
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-blue-500/30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.type];
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-16 md:pl-24"
                  >
                    {/* Icon */}
                    <div className="absolute left-0 md:left-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-wrap items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {exp.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-blue-500 mr-2">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
