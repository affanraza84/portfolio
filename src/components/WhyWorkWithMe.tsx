"use client";

import React from "react";
import { WHY_WORK_WITH_ME } from "@/data/portfolio-data";
import { CheckCircle2, ShieldCheck, MessageSquare, Code, Layers } from "lucide-react";

export function WhyWorkWithMe() {
  const highlightIcons = [
    <Layers key="1" className="w-4.5 h-4.5 text-[#2457FF]" />,
    <Code key="2" className="w-4.5 h-4.5 text-[#2457FF]" />,
    <ShieldCheck key="3" className="w-4.5 h-4.5 text-[#2457FF]" />,
    <MessageSquare key="4" className="w-4.5 h-4.5 text-[#2457FF]" />,
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">08</span>
              <span>/</span>
              <span>VALUE PROPOSITION &amp; STANDARDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Why Work With Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mt-4 md:mt-0 font-normal leading-relaxed">
            An engineer who treats your codebase, architecture, and business goals with the rigor and ownership of a technical co-founder.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-all flex flex-col group shadow-xs"
            >
              <div className="w-9 h-9 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-center mb-6 group-hover:border-[#2457FF] transition-colors shrink-0">
                {highlightIcons[idx] || <CheckCircle2 className="w-4.5 h-4.5 text-[#2457FF]" />}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2 group-hover:text-[#2457FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#5F6368] leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
