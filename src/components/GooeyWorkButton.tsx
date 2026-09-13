"use client";

import { useId, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Liquid } from "liquid-gooey";
import { ArrowUpRight } from "lucide-react";
import "./GooeyWorkButton.css";

export default function GooeyWorkButton() {
  const gradientId = `gooey-silver-${useId().replace(/:/g, "")}`;
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reducedMotion = useReducedMotion();
  const open = !reducedMotion && (hovered || focused || pressed);

  return (
    <div
      className="gooey-work relative h-24 w-72 max-w-full"
      data-open={open}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setHovered(true);
      }}
      onPointerLeave={() => { setHovered(false); setPressed(false); }}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#e4edf8" />
            <stop offset="24%" stopColor="#93a9c1" />
            <stop offset="48%" stopColor="#405771" />
            <stop offset="65%" stopColor="#25374d" />
            <stop offset="100%" stopColor="#788ea7" />
          </linearGradient>
        </defs>
      </svg>
      <Liquid
        blur={6}
        contrast={18}
        fill={`url(#${gradientId})`}
        shadow="0 5px 20px rgba(129,155,194,0.22)"
        className="relative h-full w-full"
      >
        {[-1, 1].map((direction) => (
          <Liquid.Item
            key={direction}
            effect="morph"
            x={open ? direction * 108 : direction * 64}
            y={open ? direction * 12 : 0}
            transition={reducedMotion ? { duration: 0 } : "bouncy"}
            className="pointer-events-none absolute left-[calc(50%-18px)] top-[30px]"
          >
            <span aria-hidden="true" className="gooey-work-droplet block h-9 w-9 rounded-full" />
          </Liquid.Item>
        ))}
        <Liquid.Item className="absolute left-[calc(50%-90px)] top-6">
          <button
            type="button"
            onClick={() => document.getElementById("projects")?.scrollIntoView({
              behavior: reducedMotion ? "instant" : "smooth",
            })}
            className="gooey-work-button relative flex h-12 w-[180px] cursor-pointer items-center justify-center gap-3 rounded-full text-sm font-semibold tracking-wide text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>See My Work</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </Liquid.Item>
      </Liquid>
    </div>
  );
}
