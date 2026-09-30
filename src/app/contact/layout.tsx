import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Omer | Robotics Engineer",
  description: "Get in touch about robotics projects, research, or collaboration.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
