"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  FolderGit2,
  Cpu,
  GitPullRequest,
  Briefcase,
  Boxes,
  Mail,
} from "lucide-react";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { name: "Work", href: "#work", id: "work", icon: FolderGit2 },
  { name: "Expertise", href: "#expertise", id: "expertise", icon: Cpu },
  { name: "Open Source", href: "#open-source", id: "open-source", icon: GitPullRequest },
  { name: "Experience", href: "#experience", id: "experience", icon: Briefcase },
  { name: "Services", href: "#services", id: "services", icon: Boxes },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
];

export function Header({ onOpenContact }: { onOpenContact?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links (md and larger screens) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs uppercase tracking-wider font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-md transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTA (Desktop & Mobile) */}
            <div className="flex items-center">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-md shadow-sm transition-all"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Smartphone Bottom Navigation Dock (Mobile & Small Screens) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-3 inset-x-2 sm:inset-x-4 z-50 md:hidden"
      >
        <div className="max-w-md mx-auto rounded-2xl bg-[#0c0c12]/92 backdrop-blur-2xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.85)] p-1.5">
          <div className="grid grid-cols-7 gap-0.5 items-center">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.id === "contact" && onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    }
                  }}
                  className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? "bg-amber-400/15 text-amber-300 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                  title={link.name}
                >
                  {/* Active Indicator Pip */}
                  {isActive && (
                    <span className="absolute -top-1 w-3 h-0.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                  )}

                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? "scale-110 text-amber-400" : "group-hover:scale-105"
                    }`}
                  />
                  <span
                    className={`text-[9px] font-mono tracking-tighter mt-1 truncate max-w-full leading-none ${
                      isActive ? "font-bold text-amber-300" : "text-zinc-400"
                    }`}
                  >
                    {link.name === "Architecture"
                      ? "Arch"
                      : link.name === "Open Source"
                      ? "OSS"
                      : link.name === "Experience"
                      ? "Exp"
                      : link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
