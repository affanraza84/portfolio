"use client";

import React from "react";
import { WHY_WORK_WITH_ME } from "@/data/portfolio-data";
import { CheckCircle2, ShieldCheck, MessageSquare, Code, Layers } from "lucide-react";

export function WhyWorkWithMe() {
  const highlightIcons = [
    <Layers key="1" className="w-5 h-5 text-amber-400" />,
    <Code key="2" className="w-5 h-5 text-amber-400" />,
    <ShieldCheck key="3" className="w-5 h-5 text-amber-400" />,
    <MessageSquare key="4" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>08</span>
              <span>/</span>
              <span>VALUE PROPOSITION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
              Why Work With Me
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mt-4 md:mt-0">
            A developer who treats your codebase and business objectives with the same level of care as a technical co-founder.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#111115] border border-white/[0.08] hover:border-white/[0.18] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6">
                {highlightIcons[idx] || <CheckCircle2 className="w-5 h-5 text-amber-400" />}
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
