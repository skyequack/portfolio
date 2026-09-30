"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "home", href: "/" },
  { label: "about", href: "/#about" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "contact", href: "/contact" },
];

export default function CyNav() {
  const pathname = usePathname();
  const [aboutInView, setAboutInView] = useState(false);

  // On the home page, follow the scroll: past the middle of the viewport, "about" is current.
  useEffect(() => {
    if (pathname !== "/") return;
    const update = () => {
      const about = document.getElementById("about");
      setAboutInView(!!about && about.getBoundingClientRect().top <= window.innerHeight * 0.5);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const current = pathname === "/" ? (aboutInView ? "/#about" : "/") : pathname;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--cy-line)] bg-[#05010a]/70 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 font-mono text-xs uppercase tracking-widest sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-[var(--cy-steel)]">
          <span className="cy-blink h-2 w-2 bg-[var(--cy-hot)]" aria-hidden="true" />
          <span className="hidden sm:inline">omer://{pathname === "/" ? "home" : pathname.slice(1)}</span>
        </Link>
        <nav aria-label="Site" className="flex items-center gap-0.5 sm:gap-2">
          {links.map((l) => {
            const active = l.href === current;
            return active ? (
              <span
                key={l.href}
                aria-current="page"
                className="border border-[var(--cy-line-hi)] px-1.5 py-1 text-[var(--cy-ink)] sm:px-3"
              >
                {l.label}
              </span>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="px-1.5 py-1 text-[var(--cy-dim)] transition-colors hover:bg-[var(--cy-steel)] hover:text-[var(--cy-bg)] sm:px-3"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
