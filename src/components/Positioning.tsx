import React from "react";
import { PHILOSOPHY_PILLARS } from "@/data/portfolio-data";
import { Boxes, Server, ShieldCheck, Zap } from "lucide-react";

export function Positioning() {
  const iconMap: Record<string, React.ReactNode> = {
    Boxes: <Boxes className="w-4.5 h-4.5 text-[#2457FF]" />,
    Server: <Server className="w-4.5 h-4.5 text-[#2457FF]" />,
    ShieldCheck: <ShieldCheck className="w-4.5 h-4.5 text-[#2457FF]" />,
    Zap: <Zap className="w-4.5 h-4.5 text-[#2457FF]" />,
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Swiss Engineering Numbering */}
        <div className="mb-14 pb-8 border-b border-[#D9D9D4]">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-4">
            <span className="text-[#2457FF] font-bold">02</span>
            <span>/</span>
            <span>CORE ARCHITECTURE &amp; METHODOLOGY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 border-l-2 border-[#2457FF] pl-6 sm:pl-8 py-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171717] leading-[1.25]">
                Engineering reliable digital products &mdash; from first architectural blueprint to sub-second production deployment.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pt-2">
              <p className="text-sm text-[#5F6368] font-normal leading-relaxed font-sans">
                Bridging ambitious technical requirements with maintainable codebases, distributed resilience, and precision user interactions.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] hover:shadow-xs transition-all flex flex-col group"
            >
              <div className="w-9 h-9 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-center mb-6 group-hover:border-[#2457FF] transition-colors shrink-0">
                {iconMap[pillar.icon] || <Zap className="w-4.5 h-4.5 text-[#2457FF]" />}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono text-[#5F6368] font-semibold">0{idx + 1}</span>
                <h3 className="text-sm font-bold text-[#171717] group-hover:text-[#2457FF] transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs text-[#5F6368] leading-relaxed font-sans font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
