"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header({ onOpenContact }: { onOpenContact?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Architecture", href: "#case-study" },
    { name: "Expertise", href: "#expertise" },
    { name: "Open Source", href: "#open-source" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            <div className="w-8 h-8 rounded border border-white/20 bg-white/[0.04] flex items-center justify-center text-sm font-semibold tracking-wider text-white group-hover:border-amber-500/50 group-hover:text-amber-400 transition-colors">
              AR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-white/90">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs uppercase tracking-wider font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-md shadow-sm transition-all"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#09090b]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center gap-2 px-3 py-2 mb-4 rounded-md border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for select freelance & roles</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-white/[0.08]">
            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors shadow-sm"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
