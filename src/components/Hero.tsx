"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Terminal,
  Award,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export function Hero({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-14 md:pt-32 md:pb-20 border-b border-white/[0.08] bg-grid-pattern overflow-hidden">
      {/* Subtle radial ambient glow behind typography */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Primary Confident Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Building digital products that are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              fast
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400">
              scalable
            </span>
            , and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              built to last
            </span>
            .
          </h1>

          {/* Editorial Supporting Copy */}
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed font-normal max-w-2xl mb-10">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-zinc-950 bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-md shadow-md transition-all"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide uppercase text-zinc-300 hover:text-white border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05] rounded-md transition-all"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 text-zinc-500 group-hover:text-white" />
            </a>

            {/* Social Direct Links */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-white/10 sm:ml-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md border border-transparent hover:border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md border border-transparent hover:border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md border border-transparent hover:border-white/10 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Structured Credibility Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-8 border-t border-white/[0.08]">
          <div className="p-4 rounded-lg bg-[#111115]/90 border border-white/[0.07] hover:border-white/[0.15] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                Engineering
              </span>
              <Terminal className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="text-sm font-semibold text-white">Full-Stack Developer</div>
            <div className="text-xs text-zinc-400 mt-1">End-to-end architecture &amp; APIs</div>
          </div>

          <div className="p-4 rounded-lg bg-[#111115]/90 border border-white/[0.07] hover:border-white/[0.15] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                Client Success
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-sm font-semibold text-white">4 Freelance Projects</div>
            <div className="text-xs text-emerald-400/90 mt-1 font-medium">Delivered with 100% full success</div>
          </div>

          <div className="p-4 rounded-lg bg-[#111115]/90 border border-white/[0.07] hover:border-white/[0.15] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                Industry
              </span>
              <Briefcase className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="text-sm font-semibold text-white">6 Months Internship</div>
            <div className="text-xs text-zinc-400 mt-1">Transit Terminal &amp; BinaryFlo</div>
          </div>

          <div className="p-4 rounded-lg bg-[#111115]/90 border border-white/[0.07] hover:border-white/[0.15] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                Open Source
              </span>
              <Award className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="text-sm font-semibold text-white">Top 1% Contributor</div>
            <div className="text-xs text-zinc-400 mt-1">GSSoC, SSoC &amp; Rank 64 UnvibeCode</div>
          </div>
        </div>
      </div>
    </section>
  );
}
