"use client";

import { motion, useReducedMotion } from "framer-motion";
import CRTWarp from "@/components/CRTWarp";
import CyNav from "@/components/cy/CyNav";
import CyFooter from "@/components/cy/CyFooter";

interface CyPageProps {
  path: string;
  title: string;
  intro: string;
  stats?: { label: string; value: string }[];
  children: React.ReactNode;
}

/** Shared shell for every non-hero page: scanlines, nav, CRT header band, footer. */
export default function CyPage({ path, title, intro, stats, children }: CyPageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <main className="cy">
      <div className="cy-scan" aria-hidden="true" />
      <CyNav />

      <section className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-40">
        <div
          className="absolute inset-0 opacity-60"
          style={{ maskImage: "linear-gradient(to bottom, #000 30%, transparent 100%)" }}
          aria-hidden="true"
        >
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
            brightness={0.9}
            pixelation={1}
            rgbShift={0.03}
            mouseReact={false}
            dpr={1}
            fps={24}
            paused={!!reduceMotion}
          />
        </div>
        <div className="cy-grid" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5 font-mono text-xs text-[var(--cy-dim)] sm:text-sm"
          >
            <span className="text-[var(--cy-steel)]">omer@lab</span>:~$ {path}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="cy-title text-6xl font-medium leading-none tracking-tight text-white sm:text-8xl md:text-9xl"
          >
            {title}
            <span className="cy-blink text-[var(--cy-steel)]">_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid gap-6 border-t border-[var(--cy-line)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <p className="max-w-2xl text-base text-gray-300 sm:text-lg">{intro}</p>
            {stats && (
              <dl className="cy-pixel flex gap-8 text-2xl text-[var(--cy-steel)]">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--cy-dim)]">
                      {s.label}
                    </dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </motion.div>
        </div>
      </section>

      {children}

      <CyFooter />
    </main>
  );
}
