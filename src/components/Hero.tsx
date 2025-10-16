"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      {/* Animated Robot SVG - Optional minimal graphic */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="w-32 h-32 relative">
          {/* Modern robot icon with gear and mechanical details */}
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full text-blue-500 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Antenna */}
            <line x1="60" y1="15" x2="60" y2="25" />
            <circle cx="60" cy="12" r="3" fill="currentColor" />
            
            {/* Head */}
            <rect x="45" y="25" width="30" height="25" rx="3" fill="currentColor" fillOpacity="0.1" />
            <circle cx="53" cy="38" r="3" fill="currentColor" />
            <circle cx="67" cy="38" r="3" fill="currentColor" />
            <line x1="55" y1="44" x2="65" y2="44" strokeWidth="2.5" />
            
            {/* Body */}
            <rect x="40" y="50" width="40" height="35" rx="4" fill="currentColor" fillOpacity="0.1" />
            
            {/* Gear detail on body */}
            <circle cx="60" cy="67" r="8" />
            <circle cx="60" cy="67" r="5" fill="currentColor" fillOpacity="0.2" />
            {/* Gear teeth */}
            <line x1="60" y1="59" x2="60" y2="62" strokeWidth="2" />
            <line x1="60" y1="72" x2="60" y2="75" strokeWidth="2" />
            <line x1="52" y1="67" x2="55" y2="67" strokeWidth="2" />
            <line x1="65" y1="67" x2="68" y2="67" strokeWidth="2" />
            
            {/* Power indicator lights */}
            <circle cx="48" cy="58" r="2" fill="currentColor" />
            <circle cx="72" cy="58" r="2" fill="currentColor" />
            
            {/* Arms */}
            <rect x="28" y="55" width="12" height="5" rx="2" fill="currentColor" fillOpacity="0.1" />
            <rect x="25" y="60" width="6" height="18" rx="2" fill="currentColor" fillOpacity="0.1" />
            <circle cx="28" cy="78" r="4" fill="currentColor" fillOpacity="0.2" />
            
            <rect x="80" y="55" width="12" height="5" rx="2" fill="currentColor" fillOpacity="0.1" />
            <rect x="89" y="60" width="6" height="18" rx="2" fill="currentColor" fillOpacity="0.1" />
            <circle cx="92" cy="78" r="4" fill="currentColor" fillOpacity="0.2" />
            
            {/* Legs */}
            <rect x="47" y="85" width="8" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
            <rect x="44" y="105" width="14" height="5" rx="2" fill="currentColor" fillOpacity="0.2" />
            
            <rect x="65" y="85" width="8" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
            <rect x="62" y="105" width="14" height="5" rx="2" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-center mb-6 text-gray-900 dark:text-white"
      >
        I build machines that move.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center mb-4 max-w-2xl"
      >
        Engineering student specializing in robotics, mechanical design, and embedded systems.
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-sm md:text-base text-gray-500 dark:text-gray-500 text-center italic mb-12 font-mono"
      >
        Learn by building. Fail by doing. Fix by thinking.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={() => scrollToSection("projects")}
        className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        See My Work
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
