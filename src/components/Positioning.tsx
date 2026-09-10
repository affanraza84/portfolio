import React from "react";
import { PHILOSOPHY_PILLARS } from "@/data/portfolio-data";
import { Boxes, Server, ShieldCheck, Zap } from "lucide-react";

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>01</span>
              <span>/</span>
              <span>ENGINEERING PHILOSOPHY &amp; POSITIONING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
              &ldquo;I don’t just build interfaces. I build reliable digital products — from the first line of code to deployment.&rdquo;
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs mt-4 md:mt-0 font-normal leading-relaxed">
            Bridging client business objectives with solid architectural integrity, clean abstractions, and sub-second performance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-xl bg-[#111115] border border-white/[0.07] hover:border-white/[0.16] hover:bg-[#141419] transition-all flex flex-col group shadow-sm hover:shadow-lg hover:shadow-black/40"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-colors shrink-0">
                {iconMap[pillar.icon] || <Zap className="w-5 h-5 text-amber-400" />}
              </div>

              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-xs font-mono text-zinc-500 font-semibold">0{idx + 1}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
