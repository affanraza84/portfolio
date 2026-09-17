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
            ? "bg-[#F5F4EF]/90 backdrop-blur-md border-b border-[#D9D9D4] shadow-xs py-2 md:py-3"
            : "bg-transparent border-b border-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & System Status */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="#"
                className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457FF] rounded-md"
              >
                <Logo size="md" />
              </a>

              {/* Status Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/80 border border-[#D9D9D4] text-[10px] font-mono tracking-wider text-[#5F6368]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>STATUS: AVAILABLE</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs uppercase tracking-widest font-mono transition-colors duration-150 rounded-md ${
                      isActive
                        ? "text-[#171717] font-semibold bg-white border border-[#D9D9D4]"
                        : "text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.03]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#2457FF] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#2457FF] active:scale-[0.98] rounded-md transition-all duration-150 shadow-xs"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Dock */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-3 inset-x-2 sm:inset-x-4 z-50 md:hidden"
      >
        <div className="max-w-md mx-auto rounded-xl bg-white/95 backdrop-blur-xl border border-[#D9D9D4] shadow-lg p-1.5">
          <div className="grid grid-cols-6 gap-0.5 items-center">
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
                  className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-lg transition-all duration-150 group relative ${
                    isActive
                      ? "bg-[#F5F4EF] text-[#2457FF] border border-[#D9D9D4]"
                      : "text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.03]"
                  }`}
                  title={link.name}
                >
                  {isActive && (
                    <span className="absolute -top-1 w-3 h-[2px] rounded-full bg-[#2457FF]" />
                  )}

                  <Icon
                    className={`w-4 h-4 transition-transform duration-150 ${
                      isActive ? "scale-110 text-[#2457FF]" : "group-hover:scale-105"
                    }`}
                  />
                  <span
                    className={`text-[9px] font-mono tracking-tighter mt-1 truncate max-w-full leading-none ${
                      isActive ? "font-bold text-[#171717]" : "text-[#5F6368]"
                    }`}
                  >
                    {link.name === "Open Source"
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
