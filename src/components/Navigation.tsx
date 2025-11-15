"use client";

import { Home, User, Briefcase, Award, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Experience", url: "#experience", icon: Award },
  { name: "Contact", url: "#contact", icon: Mail },
];

export default function Navigation() {
  return <NavBar items={navItems} />;
}
