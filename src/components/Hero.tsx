"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CRTWarp from "@/components/CRTWarp";
import HeroGreeting from "@/components/HeroGreeting";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="h-screen w-full bg-black relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0" aria-hidden="true">
        <CRTWarp
          color="#819bc2"
          backgroundColor="#05010a"
          speed={0.2}
          curvature={0.25}
          scanlineStrength={0.25}
          scanlineFrequency={285}
          waveAmplitude={0.22}
          waveFrequency={4.1}
          bloom={2.15}
          bloomRadius={1}
          noise={0.11}
          vignette={0.69}
          brightness={1.25}
          pixelation={1}
          rgbShift={0.03}
          mouseReact
          mouseStrength={0.5}
          dpr={1}
          fps={30}
          paused={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <HeroGreeting />
        <div className="mt-28 flex w-full max-w-2xl flex-col items-center text-center sm:mt-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-gray-300 sm:text-xl md:text-2xl"
          >
            Engineering student specializing in robotics, mechanical design, and embedded systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 text-xs italic text-gray-400 sm:text-sm md:text-base font-mono"
          >
            Learn by building. Fail by doing. Fix by thinking.
          </motion.p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-10"
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
