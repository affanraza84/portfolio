"use client";

import React from "react";
import { PHILOSOPHY_PILLARS } from "@/data/portfolio-data";
import { Boxes, Server, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function Positioning() {
  const iconMap: Record<string, React.ReactNode> = {
    Boxes: <Boxes className="w-5 h-5 text-amber-400" />,
    Server: <Server className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08] bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Numbering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>01</span>
              <span>/</span>
              <span>ENGINEERING PHILOSOPHY & POSITIONING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
              &ldquo;I don’t just build interfaces. I build reliable digital products — from the first line of code to deployment.&rdquo;
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs mt-4 md:mt-0 font-normal">
            Bridging client business objectives with solid architectural integrity, clean abstractions, and sub-second performance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-lg bg-[#111115] border border-white/[0.07] hover:border-white/[0.16] hover:bg-[#141419] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:border-amber-500/40 transition-colors">
                  {iconMap[pillar.icon] || <Zap className="w-5 h-5 text-amber-400" />}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Production Standard</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
