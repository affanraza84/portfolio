"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export function TechnicalMatrix() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Engineering": <Code2 className="w-4 h-4 text-amber-400" />,
    "Backend & Systems": <Server className="w-4 h-4 text-amber-400" />,
    "Databases & Caching": <Database className="w-4 h-4 text-amber-400" />,
    "DevOps & Infrastructure": <Terminal className="w-4 h-4 text-amber-400" />,
    "Core Foundations & AI": <Cpu className="w-4 h-4 text-amber-400" />,
  };

  return (
    <section id="expertise" className="py-20 md:py-32 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>04</span>
              <span>/</span>
              <span>TECHNICAL COMPETENCY MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
              Core Technical Stack & Tooling
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mt-4 md:mt-0">
            A comprehensive, battle-tested stack honed through real-world applications, open-source repositories, and production systems.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className={`p-6 rounded-xl bg-[#111115] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between ${
                idx === 0 || idx === 1 ? "md:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {categoryIcons[cat.category] || <Code2 className="w-4 h-4 text-amber-400" />}
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill List with Contextual Notes */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#0c0c0f] border border-white/[0.04] flex items-center justify-between hover:border-white/[0.12] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        )}
                        <span className="text-xs sm:text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      {skill.note && (
                        <span className="text-[11px] font-mono text-zinc-500">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Production Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
