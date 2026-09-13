import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Omer | Robotics Engineer",
  description:
    "A curated collection of robotics systems and projects spanning mechanical engineering, embedded systems, and software development.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
