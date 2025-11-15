"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, FlaskConical, Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  type: "work" | "competition" | "research";
  title: string;
  organization: string;
  duration: string;
  location?: string;
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
    location: "National Competition",
    description: "National-level robotics competition focusing on autonomous navigation and task completion",
    highlights: [
      "Collaborated with a team of 4 to design autonomous navigation and manipulation systems",
      "Developed autonomous navigation system using computer vision",
      "Implemented pick-and-place manipulation with custom gripper design",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Robotics Engineering Intern",
    organization: "Orangewood Labs",
    duration: "Jun 2024 - Jul 2024",
    location: "Noida, India",
    description: "Worked on developing LLM-based control systems for industrial robotic arms",
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
    location: "Manipal, India",
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
    duration: "2024",
    location: "Noida, India",
    description: "International robotics competition with emphasis on mechanical design",
    highlights: [
      "Designed and fabricated competition robot within 3 months",
      "Collaborated with mechanical subsystem team of 6 members",
      "Secured 21st place in national selection round",
    ],
  },
  {
    id: 5,
    type: "work",
    title: "IIoT Intern",
    organization: "Obeikan Flexible and Film",
    duration: "Aug 2023 - Jul 2023",
    location: "Industrial Plant",
    description: "Developed automations for factory monitoring and real-time data visualization",
      highlights: [
        "Automated factory data collection and monitoring workflows",
        "Developed real-time dashboards for production metrics visualization",
        "Integrated sensor networks for live equipment status tracking",
      ],
  },
];

const iconMap = {
  work: Briefcase,
  competition: Trophy,
  research: FlaskConical,
};

const colorMap = {
  work: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    icon: "bg-blue-500",
    accent: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    glow: "from-blue-500/20 to-cyan-500/20",
  },
  competition: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    icon: "bg-gradient-to-br from-amber-500 to-orange-500",
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
    glow: "from-amber-500/20 to-orange-500/20",
  },
  research: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    icon: "bg-gradient-to-br from-purple-500 to-pink-500",
    accent: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
    glow: "from-purple-500/20 to-pink-500/20",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
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
              Experience
            </motion.h2>
            <motion.div 
              className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Competitions, internships, and research
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.type];
                const colors = colorMap[exp.type];
                
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-16 sm:pl-24 group"
                  >
                    {/* Icon with glow effect */}
                    <div className="absolute left-0 md:left-4 z-10">
                      <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${colors.glow} rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                    </div>

                    {/* Content Card */}
                    <motion.div 
                      className={`relative bg-white dark:bg-gray-900 p-5 sm:p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border ${colors.border} group-hover:border-opacity-60`}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Subtle gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                              {exp.title}
                            </h3>
                            <p className={`font-semibold ${colors.accent} text-base sm:text-lg mb-2`}>
                              {exp.organization}
                            </p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2.5">
                          {exp.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm text-gray-700 dark:text-gray-300 group/item"
                            >
                              <span className={`${colors.accent} mr-3 mt-0.5 font-bold text-lg group-hover/item:scale-125 transition-transform`}>▹</span>
                              <span className="leading-relaxed">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
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
