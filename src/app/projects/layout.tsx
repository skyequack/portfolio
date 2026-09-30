import type { Metadata } from "next";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

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
  return <div className={vt323.variable}>{children}</div>;
}
