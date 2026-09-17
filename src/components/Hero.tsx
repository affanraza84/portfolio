"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Activity,
  Globe,
} from "lucide-react";

export function Hero({ onOpenContact }: { onOpenContact?: () => void }) {
  const [inView, setInView] = useState(false);
  const [statFreelance, setStatFreelance] = useState(0);
  const [statInternship, setStatInternship] = useState(0);
  const [statRank, setStatRank] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const statsRef = useRef<HTMLDivElement>(null);

  // Live system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Metric count-up
  useEffect(() => {
    if (!inView) return;

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setStatFreelance(Math.round(eased * 4));
      setStatInternship(Math.round(eased * 6));
      setStatRank(Math.round(eased * 64));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D9D9D4] bg-swiss-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Technical Header Identifier */}
        <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-3 mb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#5F6368]">
            <span className="text-[#2457FF] font-bold">01</span>
            <span>/</span>
            <span>INTRODUCTION</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">SYS_REF: 2026.AR-01</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#5F6368]">
            <Activity className="w-3.5 h-3.5 text-[#2457FF]" />
            <span className="font-medium text-[#171717]">{currentTime || "LIVE"}</span>
          </div>
        </div>

        {/* 12-Column Engineering Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          {/* Left Column (8 cols): Primary Engineering Statement */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-6">
              Building digital products that are{" "}
              <span className="text-[#2457FF]">fast</span>,{" "}
              <span className="text-[#2457FF]">scalable</span>, and engineered to last.
            </h1>

            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#171717] hover:bg-[#2457FF] active:scale-[0.98] rounded-md transition-all duration-150 shadow-xs"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium tracking-wider uppercase text-[#171717] hover:text-[#2457FF] border border-[#D9D9D4] hover:border-[#2457FF] bg-white rounded-md transition-all duration-150"
              >
                <span>Technical Archive</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#5F6368]" />
              </a>

              {/* Social Direct Links */}
              <div className="flex items-center gap-1.5 pl-2 sm:border-l sm:border-[#D9D9D4] sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.04] rounded-md border border-transparent hover:border-[#D9D9D4] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.04] rounded-md border border-transparent hover:border-[#D9D9D4] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.04] rounded-md border border-transparent hover:border-[#D9D9D4] transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Technical Instrument & Metadata Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-lg bg-white border border-[#D9D9D4] shadow-xs">
              <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368]">
                  SYSTEM TELEMETRY
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2457FF]/10 text-[10px] font-mono text-[#2457FF] font-semibold">
                  ACTIVE
                </span>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#F0F0EB]">
                  <dt className="text-[#5F6368] uppercase">ROLE</dt>
                  <dd className="font-semibold text-[#171717]">Full-Stack Engineer</dd>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F0F0EB]">
                  <dt className="text-[#5F6368] uppercase">FOCUS</dt>
                  <dd className="font-medium text-[#171717]">Distributed Systems &bull; Next.js</dd>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F0F0EB]">
                  <dt className="text-[#5F6368] uppercase">LOCATION</dt>
                  <dd className="font-medium text-[#171717] flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#2457FF]" />
                    <span>India (UTC+5:30)</span>
                  </dd>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F0F0EB]">
                  <dt className="text-[#5F6368] uppercase">COORDINATES</dt>
                  <dd className="text-[#5F6368]">28.6139° N, 77.2090° E</dd>
                </div>
                <div className="flex justify-between items-center py-1">
                  <dt className="text-[#5F6368] uppercase">AVAILABILITY</dt>
                  <dd className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>Open to Opportunities</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Structured Credibility Strip with Count-Up */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#D9D9D4]"
        >
          <div className="p-4 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] font-medium">
                Engineering Focus
              </span>
              <Terminal className="w-3.5 h-3.5 text-[#2457FF]" />
            </div>
            <div className="text-sm font-bold text-[#171717]">Full-Stack Systems</div>
            <div className="text-xs text-[#5F6368] mt-1 font-mono">End-to-end APIs &bull; DBs &bull; Realtime</div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] font-medium">
                Client Delivery
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-sm font-bold text-[#171717]">
              {statFreelance} Freelance Projects
            </div>
            <div className="text-xs text-emerald-700 mt-1 font-mono font-medium">
              100% production completion rate
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] font-medium">
                Industry Experience
              </span>
              <Briefcase className="w-3.5 h-3.5 text-[#2457FF]" />
            </div>
            <div className="text-sm font-bold text-[#171717]">
              {statInternship} Months Internship
            </div>
            <div className="text-xs text-[#5F6368] mt-1 font-mono">Transit Terminal &bull; BinaryFlo</div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] font-medium">
                Open Source Impact
              </span>
              <Award className="w-3.5 h-3.5 text-[#2457FF]" />
            </div>
            <div className="text-sm font-bold text-[#171717]">Top 1% Contributor</div>
            <div className="text-xs text-[#5F6368] mt-1 font-mono">
              GSSoC &bull; SSoC &bull; Rank {statRank} Unvibe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
