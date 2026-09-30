"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { title: "Mechanical", detail: "CAD design, fabrication, mechanical systems integration" },
  { title: "Electronics", detail: "Circuit design, embedded systems, sensor integration" },
  { title: "Software", detail: "ROS2, Python, C++, control systems development" },
];

const focus = [
  { title: "Legged robotics", detail: "Quadruped locomotion, gait planning, dynamic control" },
  { title: "Prosthetics", detail: "EMG control, human-machine interfaces, assistive devices" },
  { title: "System integration", detail: "Multi-disciplinary systems, hardware-software co-design" },
];

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
};

function Hl({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--cy-steel)]">{children}</span>;
}

export default function About() {
  return (
    <section id="about" className="cy relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="cy-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <motion.p {...reveal} className="mb-5 font-mono text-xs text-[var(--cy-dim)] sm:text-sm">
          <span className="text-[var(--cy-steel)]">omer@lab</span>:~$ cat ./about.txt
        </motion.p>
        <motion.h2
          {...reveal}
          className="cy-title mb-12 text-5xl font-medium leading-none tracking-tight text-white sm:text-7xl"
        >
          about<span className="cy-blink text-[var(--cy-steel)]">_</span>
        </motion.h2>

        <div className="grid gap-10 border-t border-[var(--cy-line)] pt-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <motion.div {...reveal} className="mx-auto w-full max-w-[320px]">
            <div className="cy-frame">
              <div className="border-b border-[var(--cy-line)] px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--cy-dim)]">
                id_card.png
              </div>
              <div className="cy-shot relative aspect-square overflow-hidden">
                <Image src="/images/me.png" alt="Portrait of Omer" fill sizes="320px" className="object-cover" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            <motion.p {...reveal}>
              I&apos;m an engineering student with a passion for <Hl>robotics</Hl> and hands-on problem
              solving. My work lives at the intersection of mechanical design, electronics, and software,
              where ideas become machines.
            </motion.p>
            <motion.p {...reveal}>
              My core interests are <Hl>legged robots</Hl> and <Hl>robotic prosthetics</Hl>: systems that
              need deep integration across disciplines. I believe in learning by building, failing fast,
              and iterating until it works.
            </motion.p>
            <motion.p {...reveal}>
              Whether it&apos;s designing a quadruped, programming control algorithms, or fabricating
              mechanical assemblies, I like bringing complex systems to life.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            { heading: "> skills", items: skills },
            { heading: "> focus", items: focus },
          ].map((group) => (
            <motion.div key={group.heading} {...reveal} className="cy-frame">
              <p className="border-b border-[var(--cy-line)] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[var(--cy-steel)]">
                {group.heading}
              </p>
              <ul className="divide-y divide-[var(--cy-line)]">
                {group.items.map((it) => (
                  <li key={it.title} className="px-5 py-4">
                    <p className="font-medium text-white">{it.title}</p>
                    <p className="mt-1 text-sm text-[var(--cy-dim)]">{it.detail}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
