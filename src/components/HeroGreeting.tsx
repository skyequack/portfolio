"use client";

import { useEffect, useState } from "react";
import AsciiStar from "@/components/AsciiStar";

const fonts = [
  'var(--font-space-grotesk), sans-serif',
  'Georgia, serif',
  'var(--font-jetbrains-mono), monospace',
  'Arial, sans-serif',
  '"Times New Roman", serif',
  '"Courier New", monospace',
];

export default function HeroGreeting() {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFontIndex((index) => (index + 1) % fonts.length);
    }, 500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <h1 className="flex w-full items-baseline justify-center gap-[0.3em] whitespace-nowrap text-center text-3xl font-medium leading-[1.3] text-white sm:text-4xl md:text-5xl">
      <span>hi! I&apos;m</span>
      <span className="relative isolate inline-block text-[#9aa7b5]">
        <AsciiStar />
        <span
          className="relative z-10 inline-block whitespace-nowrap"
          style={{ fontFamily: fonts[fontIndex], textShadow: "0 1px 5px #05010a" }}
        >
          omer
        </span>
      </span>
    </h1>
  );
}
