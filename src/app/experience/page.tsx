"use client";

import { motion } from "framer-motion";
import CyPage from "@/components/cy/CyPage";

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

const typeTag = { work: "WORK", competition: "COMP", research: "RSCH" } as const;
const pad = (n: number) => String(n).padStart(2, "0");

export default function ExperiencePage() {
  return (
    <CyPage
      path="cat ./experience.log"
      title="experience"
      intro="Internships, research, and robotics competitions. Most of what I know came from building something that broke."
      stats={[{ label: "records", value: pad(experiences.length) }]}
    >
      <section className="relative px-4 pb-24 sm:px-6">
        <ol className="relative mx-auto max-w-4xl space-y-10 pl-8 sm:pl-10">
          <span className="cy-rail" aria-hidden="true" />
          {experiences.map((e, i) => (
            <motion.li
              key={e.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative"
            >
              <span
                className="absolute -left-8 top-3 h-[15px] w-[15px] border border-[var(--cy-steel)] bg-[var(--cy-bg)] sm:-left-10"
                aria-hidden="true"
              >
                <span className="absolute inset-[3px] bg-[var(--cy-steel)]" />
              </span>

              <div className="cy-frame">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--cy-line)] px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--cy-dim)]">
                  <span className="flex items-center gap-3">
                    <span className="cy-pixel text-xl leading-none text-[var(--cy-steel)]">{pad(e.id)}</span>
                    <span>[{typeTag[e.type]}]</span>
                  </span>
                  <span>
                    {e.duration}
                    {e.location && <> · {e.location}</>}
                  </span>
                </div>

                <div className="space-y-4 p-4 sm:p-6">
                  <div>
                    <h2 className="text-xl font-medium text-white sm:text-2xl">{e.title}</h2>
                    <p className="mt-1 font-mono text-sm text-[var(--cy-steel)]">@ {e.organization}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{e.description}</p>
                  <ul className="space-y-1.5 text-sm text-[var(--cy-dim)]">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="font-mono text-[var(--cy-steel)]" aria-hidden="true">
                          &gt;
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>
    </CyPage>
  );
}
