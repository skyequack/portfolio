/**
 * Sample data structures for easy customization
 * Copy these templates and fill with your actual information
 */

import React from "react";

// ============================================
// PROJECTS DATA STRUCTURE
// ============================================

export interface Project {
  id: number;
  title: string;
  description: string;              // Short description (1 line)
  longDescription: string;          // Detailed description (shows on hover)
  tags: string[];                   // Technology tags
  image: string;                    // Path to image in /public folder
  github?: string;                  // Optional GitHub link
  demo?: string;                    // Optional demo/video link
}

// Example Project:
export const exampleProject: Project = {
  id: 1,
  title: "Quadruped Robot",
  description: "12-DOF legged robot with inverse kinematics",
  longDescription: "Designed and built a 12-DOF quadruped robot with custom inverse kinematics solver and multiple gait patterns.",
  tags: ["ROS2", "CAD", "Python", "Embedded"],
  image: "/projects/quadruped.jpg",
  github: "https://github.com/yourusername/quadruped",
  demo: "https://youtube.com/watch?v=...",
};

// ============================================
// EXPERIENCE DATA STRUCTURE
// ============================================

export interface Experience {
  id: number;
  type: "work" | "competition" | "research";
  title: string;                    // Job title or competition name
  organization: string;             // Company/university/event
  duration: string;                 // "Jan 2023 - Jun 2023" or "2023"
  description: string;              // One sentence overview
  highlights: string[];             // 3-5 bullet points of achievements
}

// Example Experience:
export const exampleExperience: Experience = {
  id: 1,
  type: "competition",
  title: "e-Yantra Robotics Competition",
  organization: "IIT Bombay",
  duration: "2023 - 2024",
  description: "National robotics competition focusing on autonomous navigation",
  highlights: [
    "Reached national finals among 500+ teams",
    "Developed autonomous navigation using computer vision",
    "Implemented custom gripper mechanism",
  ],
};

// ============================================
// SKILLS DATA STRUCTURE
// ============================================

export interface Skill {
  icon: React.ComponentType<{ className?: string }>;  // Lucide React icon component
  title: string;
  description: string;
}

// Available Lucide Icons for skills:
// Wrench, Cpu, Code, Zap, Settings, Brain, Target, etc.
// Import from: import { Wrench } from "lucide-react";

// ============================================
// CONTACT INFORMATION
// ============================================

export const contactInfo = {
  email: "your.email@example.com",
  github: {
    url: "https://github.com/yourusername",
    username: "@yourusername",
  },
  linkedin: {
    url: "https://linkedin.com/in/yourprofile",
    username: "/in/yourprofile",
  },
  twitter: {
    url: "https://twitter.com/yourhandle",  // Optional
    username: "@yourhandle",
  },
};

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo = {
  name: "Your Name",
  tagline: "I build machines that move.",
  bio: [
    "I'm an engineering student with a passion for robotics and hands-on problem solving.",
    "My work lives at the intersection of mechanical design, electronics, and software.",
    "My core interests lie in legged robots and robotic prosthetics.",
  ],
  avatar: "/avatar.jpg",            // Your photo
};

// ============================================
// METADATA (for SEO)
// ============================================

export const metadata = {
  title: "Your Name | Robotics Engineer",
  description: "Engineering student specializing in robotics, mechanical design, and embedded systems.",
  keywords: ["robotics", "engineering", "mechanical", "electronics", "software"],
  author: "Your Name",
  siteUrl: "https://yourportfolio.com",
};

// ============================================
// PROJECT TAGS REFERENCE
// ============================================

// Common tags you might use (feel free to add your own):
export const commonTags = [
  // Software
  "ROS2", "Python", "C++", "JavaScript", "TypeScript",
  "Computer Vision", "OpenCV", "Machine Learning", "AI",
  "Embedded", "Arduino", "ESP32", "Raspberry Pi",
  
  // Mechanical
  "CAD", "SolidWorks", "Fusion 360", "3D Printing",
  "CNC", "Fabrication", "Mechanical Design",
  
  // Electronics
  "PCB Design", "KiCad", "Circuit Design", "Sensors",
  "Motor Control", "Power Systems",
  
  // Robotics Specific
  "SLAM", "Navigation", "Path Planning", "Inverse Kinematics",
  "Control Systems", "PID", "Sensor Fusion", "LiDAR",
  "Quadruped", "Manipulator", "Mobile Robot",
  
  // Tools & Frameworks
  "Gazebo", "RViz", "Linux", "Git", "Docker",
];

// ============================================
// SAMPLE PROJECTS ARRAY
// ============================================

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Your Project 1",
    description: "Short one-line description",
    longDescription: "Longer description that appears on hover. Explain what you built, technologies used, and key achievements.",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/projects/project1.jpg",
    github: "https://github.com/yourusername/project1",
  },
  // Add more projects...
];

// ============================================
// SAMPLE EXPERIENCES ARRAY
// ============================================

export const sampleExperiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Your Internship Title",
    organization: "Company Name",
    duration: "Jun 2024 - Aug 2024",
    description: "Brief description of the role",
    highlights: [
      "Achievement 1 with measurable impact",
      "Achievement 2 with specific technology",
      "Achievement 3 with results",
    ],
  },
  // Add more experiences...
];

// ============================================
// HOW TO USE THIS FILE
// ============================================

/*
1. Copy this file to create your data file:
   src/data/portfolio-data.ts

2. Fill in your actual information

3. Import in components:
   import { sampleProjects } from "@/data/portfolio-data";

4. Replace the hardcoded data in:
   - Projects.tsx (projects array)
   - Experience.tsx (experiences array)
   - About.tsx (skills array)
   - Contact.tsx (contactInfo)
   - layout.tsx (metadata)

5. Update the arrays with your real data

Example in Projects.tsx:
import { sampleProjects } from "@/data/portfolio-data";

export default function Projects() {
  return (
    <div>
      {sampleProjects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
*/

// ============================================
// IMAGE GUIDELINES
// ============================================

/*
Project Images:
- Recommended size: 1200x800px (3:2 aspect ratio)
- Format: JPG or PNG
- Optimize for web (keep under 500KB per image)
- Location: public/projects/

Avatar/Profile:
- Recommended size: 500x500px (square)
- Format: JPG or PNG
- Professional or casual photo that represents you
- Location: public/avatar.jpg

Image Optimization Tools:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim (Mac): https://imageoptim.com
*/
