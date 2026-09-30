"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CRTWarp from "@/components/CRTWarp";
import "./projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  category: "mechanical" | "electronics" | "software" | "integration";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Silverhand: Hand Exoskeleton",
    description: "3-fingered exoskeleton for arthritis assistance, controlled by EMG electrodes",
    longDescription:
      "Developed a 3-fingered hand exoskeleton designed to assist individuals with arthritis. The device uses EMG electrodes to detect muscle signals, enabling intuitive control of finger movements. The exoskeleton provides mechanical assistance to improve grip strength and dexterity, helping users perform daily tasks with greater ease.",
    tags: ["Embedded", "Sensor Fusion", "C++", "Control"],
    image: "/images/silverhand.jpeg",
    github: "https://github.com",
    category: "integration",
    featured: true,
  },
  {
    id: 2,
    title: "Crabby",
    description: "12-DOF legged robot with inverse kinematics and gait planning",
    longDescription:
      "Designed and built a 12-DOF quadruped robot with custom inverse kinematics solver. Implemented multiple gait patterns including trot, walk, and crawl. Used ROS2 for control architecture and Gazebo for simulation.",
    tags: ["ROS2", "CAD", "Inverse Kinematics"],
    image: "/images/crabby.jpeg",
    github: "https://github.com",
    category: "mechanical",
  },
  {
    id: 3,
    title: "A.R.N.A.V.: Robotic Prosthetic Hand",
    description: "3D-printed prosthetic with EMG control and force feedback",
    longDescription:
      "Developed a low-cost 3D-printed prosthetic hand controlled by EMG signals. Integrated force sensors for grip control and haptic feedback system for user awareness.",
    tags: ["CAD", "EMG", "Arduino", "Signal Processing"],
    image: "https://cdn.sanity.io/images/6nd5koax/production/5bdf975cf1cd40e11b9f13a17ebde2a1864cfdd8-829x912.jpg?fit=max&auto=format",
    github: "https://github.com",
    category: "integration",
  },
  {
    id: 4,
    title: "RoboSoccer",
    description: "Remote-controlled soccer robots for Technoxian 2023 - 2nd Runner Up",
    longDescription:
      "Designed and built three specialized remote-controlled robots for competitive soccer: Bull Bot for heavy defending, Striker Bot with plunger for agile shooting, and Goalkeeper Bot with 3-wheel omni drive for holonomic movement. Competed at Technoxian 2023 and secured 2nd Runner Up position.",
    tags: ["Omni Drive", "RoboSoccer", "Remote Control", "Competition"],
    image: "/images/robosoccer.jpeg",
    github: "https://github.com",
    category: "mechanical",
  },
  {
    id: 5,
    title: "Peeker",
    description: "Compact surveillance robot with continuous track drive and self-righting mechanism",
    longDescription:
      "Peeker is a compact and mobile robotic system equipped with continuous track drive technology, specifically designed for surveillance and scouting purposes. Its portability is enhanced by its lightweight design, while its sturdy construction ensures durability, enabling it to endure rough handling, such as throws and drops. Notably, Peeker introduces an innovative 'flipping mechanism,' enabling the robot to autonomously correct itself in the event of overturning.",
    tags: ["Surveillance", "Track Drive", "Autonomous", "Durability"],
    image: "/images/peeker.png",
    github: "https://github.com",
    category: "mechanical",
  },
  {
    id: 6,
    title: "Balance Bot",
    description: "Self-balancing robot with PID control and MPU6050",
    longDescription:
      "Two-wheeled self-balancing robot using MPU6050 IMU and custom PID controller. Real-time system identification and tuning for optimal balance performance.",
    tags: ["Control Systems", "PID", "Embedded", "Arduino"],
    category: "electronics",
  },
];

const categories = [
  { id: "all", label: "ALL" },
  { id: "mechanical", label: "MECH" },
  { id: "electronics", label: "ELEC" },
  { id: "software", label: "SOFT" },
  { id: "integration", label: "INTEG" },
] as const;

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/#about" },
  { label: "contact", href: "/#contact" },
];

const pad = (n: number) => String(n).padStart(2, "0");

function Shot({ project, sizes }: { project: Project; sizes: string }) {
  if (!project.image) {
    return (
      <div className="cy-nosignal absolute inset-0 flex items-center justify-center">
        <span className="cy-pixel cy-blink bg-black px-3 py-1 text-2xl text-[var(--cy-hot)]">
          NO SIGNAL
        </span>
      </div>
    );
  }
  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes={sizes}
      className="object-cover"
    />
  );
}

export default function ProjectsPage() {
  const reduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleCategories = useMemo(
    () =>
      categories
        .map((c) => ({
          ...c,
          count:
            c.id === "all"
              ? projects.length
              : projects.filter((p) => p.category === c.id).length,
        }))
        .filter((c) => c.count > 0),
    []
  );

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedProject]);

  return (
    <main className="cy">
      <div className="cy-scan" aria-hidden="true" />

      {/* System bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--cy-line)] bg-[#05010a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 font-mono text-xs uppercase tracking-widest sm:px-6">
          <span className="flex items-center gap-2 text-[var(--cy-steel)]">
            <span className="cy-blink h-2 w-2 bg-[var(--cy-hot)]" aria-hidden="true" />
            <span className="hidden sm:inline">omer://projects</span>
          </span>
          <nav aria-label="Site" className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2 py-1 text-[var(--cy-dim)] transition-colors hover:bg-[var(--cy-steel)] hover:text-[var(--cy-bg)] sm:px-3"
              >
                {l.label}
              </Link>
            ))}
            <span
              className="border border-[var(--cy-line-hi)] px-2 py-1 text-[var(--cy-ink)] sm:px-3"
              aria-current="page"
            >
              projects
            </span>
          </nav>
        </div>
      </header>

      {/* Header band: the hero's CRT, dimmed and faded out */}
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
            <span className="text-[var(--cy-steel)]">omer@lab</span>:~$ ls ./projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="cy-title text-6xl font-medium leading-none tracking-tight text-white sm:text-8xl md:text-9xl"
          >
            projects<span className="cy-blink text-[var(--cy-steel)]">_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid gap-6 border-t border-[var(--cy-line)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <p className="max-w-2xl text-base text-gray-300 sm:text-lg">
              Robots, prosthetics, and the boards that drive them. Mechanical design, embedded
              systems, and the software that ties them together.
            </p>
            <dl className="cy-pixel flex gap-8 text-2xl text-[var(--cy-steel)]">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--cy-dim)]">
                  entries
                </dt>
                <dd>{pad(projects.length)}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--cy-dim)]">
                  status
                </dt>
                <dd>ONLINE</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Filters */}
          <div
            role="tablist"
            aria-label="Filter projects"
            className="mb-10 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest"
          >
            <span className="mr-2 self-center text-[var(--cy-dim)]">filter:</span>
            {visibleCategories.map((c) => {
              const active = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`border px-3 py-2 transition-colors ${
                    active
                      ? "border-[var(--cy-steel)] bg-[var(--cy-steel)] text-[var(--cy-bg)]"
                      : "border-[var(--cy-line)] text-[var(--cy-steel)] hover:border-[var(--cy-line-hi)] hover:bg-[rgba(129,155,194,0.12)]"
                  }`}
                >
                  [{c.label}] <span className="opacity-70">{pad(c.count)}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div
            key={selectedCategory}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="cy-frame flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-[var(--cy-line)] px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--cy-dim)]">
                  <span className="cy-pixel text-xl leading-none text-[var(--cy-steel)]">
                    {pad(project.id)}
                  </span>
                  <span className="flex items-center gap-3">
                    {project.featured && <span className="text-[var(--cy-hot)]">priority</span>}
                    <span>{project.category}</span>
                  </span>
                </div>

                <div className="cy-shot relative aspect-[16/10] overflow-hidden">
                  <Shot
                    project={project}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
                  <h2 className="text-xl font-medium leading-snug text-white">{project.title}</h2>
                  <p className="text-sm leading-relaxed text-[var(--cy-dim)]">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--cy-steel)]">
                    {project.tags.slice(0, 3).map((t) => (
                      <li key={t}>[{t}]</li>
                    ))}
                    {project.tags.length > 3 && (
                      <li className="text-[var(--cy-dim)]">+{project.tags.length - 3}</li>
                    )}
                  </ul>

                  <div className="mt-auto flex gap-2 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="cy-btn cy-btn-solid flex-1"
                      aria-label={`Open ${project.title}`}
                    >
                      &gt; open_file
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cy-btn"
                        aria-label={`${project.title} source code`}
                      >
                        src ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-16 border-t border-[var(--cy-line)] pt-6 font-mono text-xs text-[var(--cy-dim)]">
            -- end of list: {pad(filteredProjects.length)} of {pad(projects.length)} entries.{" "}
            <Link href="/" className="text-[var(--cy-steel)] underline-offset-4 hover:underline">
              cd ~
            </Link>
          </p>
        </div>
      </section>

      {/* Detail window */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[70] flex items-end justify-center overflow-y-auto bg-black/90 p-0 sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="cy-frame my-auto max-h-[100dvh] w-full overflow-x-hidden overflow-y-auto sm:max-h-[90vh] sm:max-w-3xl"
              style={{ background: "#08040f" }}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--cy-line-hi)] bg-[#08040f] px-4 py-2 font-mono text-xs uppercase tracking-widest text-[var(--cy-steel)]">
                <span>project_{pad(selectedProject.id)}.exe</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border border-[var(--cy-line-hi)] px-2 py-1 transition-colors hover:bg-[var(--cy-hot)] hover:text-black"
                  aria-label="Close"
                  autoFocus
                >
                  [esc] x
                </button>
              </div>

              <div className="cy-shot relative aspect-[16/8] overflow-hidden">
                <Shot project={selectedProject} sizes="(min-width: 640px) 768px, 100vw" />
              </div>

              <div className="space-y-8 p-5 sm:p-8">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--cy-dim)]">
                    {selectedProject.category}
                    {selectedProject.featured && (
                      <span className="text-[var(--cy-hot)]"> {"//"} priority</span>
                    )}
                  </p>
                  <h2 className="cy-title text-3xl font-medium text-white sm:text-5xl">
                    {selectedProject.title}
                  </h2>
                </div>

                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--cy-steel)]">
                    &gt; overview
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--cy-steel)]">
                    &gt; stack
                  </h3>
                  <ul className="flex flex-wrap gap-2 font-mono text-sm">
                    {selectedProject.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-[var(--cy-line-hi)] px-3 py-1 text-[var(--cy-steel)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {(selectedProject.github || selectedProject.demo) && (
                  <div className="flex flex-col gap-3 border-t border-[var(--cy-line)] pt-6 sm:flex-row">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cy-btn cy-btn-solid flex-1 text-center"
                      >
                        view source ↗
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cy-btn flex-1 text-center"
                      >
                        live demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
