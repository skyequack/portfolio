"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useState } from "react";
import { Liquid } from '@/components/ui/button-1';

const COLORS = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};

export default function Hero() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="h-screen w-full bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Twinkling Stars Background */}
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.5}
      />
      
      {/* Radial gradient overlay - circular glow that stays spherical on mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_50%)]" />

      {/* Shooting Stars Effects */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Animated Robot SVG */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32">
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
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-4 sm:mb-6 text-white leading-tight whitespace-nowrap"
        >
          I build machines that move.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 text-center mb-3 sm:mb-4 max-w-2xl"
        >
          Engineering student specializing in robotics, mechanical design, and embedded systems.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-gray-400 text-center italic mb-8 sm:mb-12 font-mono"
        >
          Learn by building. Fail by doing. Fix by thinking.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <div 
            className="relative inline-block w-36 sm:w-48 md:w-56 h-[2.5em] sm:h-[2.7em] group cursor-pointer"
            onClick={() => scrollToSection("projects")}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {/* Outer glow layer */}
            <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
              <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Liquid isHovered={isButtonHovered} colors={COLORS} />
              </div>
            </div>
            
            {/* Dark shadow layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
            
            {/* Main button layer */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
              <span className="absolute inset-0 rounded-lg bg-black"></span>
              <Liquid isHovered={isButtonHovered} colors={COLORS} />
              
              {/* Overlay borders for depth */}
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'}`}
                ></span>
              ))}
              
              {/* Inner glow */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
            </div>
            
            {/* Interactive button overlay */}
            <button
              className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
              aria-label="See My Work"
              type="button"
            >
              <span className="flex items-center justify-center px-2 sm:px-4 gap-2 rounded-lg text-white text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                See My Work
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-30 left-1/2 -translate-x-1/2 cursor-pointer z-10"
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
