"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";

export function TechnicalMatrix() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Engineering": <Code2 className="w-4 h-4 text-[#2457FF]" />,
    "Backend & Systems": <Server className="w-4 h-4 text-[#2457FF]" />,
    "Databases & Caching": <Database className="w-4 h-4 text-[#2457FF]" />,
    "DevOps & Infrastructure": <Terminal className="w-4 h-4 text-[#2457FF]" />,
    "Core Foundations & AI": <Cpu className="w-4 h-4 text-[#2457FF]" />,
  };

  return (
    <section id="expertise" className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">04</span>
              <span>/</span>
              <span>TECHNICAL COMPETENCY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Technical Stack &amp; Tooling
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mt-4 md:mt-0 font-normal leading-relaxed">
            A production-proven technology stack honed through distributed architecture, open-source development, and client deliverables.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-5 sm:p-6 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#D9D9D4]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-center">
                      {categoryIcons[cat.category] || <Code2 className="w-4 h-4 text-[#2457FF]" />}
                    </div>
                    <h3 className="text-sm font-bold text-[#171717] tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#5F6368] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#5F6368] mb-4 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Skill List with Technical Notes */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] hover:border-[#2457FF] transition-colors flex flex-col gap-0.5"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2457FF] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#171717] truncate">
                          {skill.name}
                        </span>
                      </div>
                      {skill.note && (
                        <p className="text-[11px] font-mono text-[#5F6368] pl-3.5 leading-snug">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
