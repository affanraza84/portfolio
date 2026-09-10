"use client";

import React from "react";
import { EXPERIENCE_HISTORY } from "@/data/portfolio-data";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-32 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>06</span>
              <span>/</span>
              <span>PROFESSIONAL INDUSTRY EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
              Engineering Track Record
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mt-4 md:mt-0">
            Real-world software engineering experience working within agile engineering teams on live production systems.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8">
          {EXPERIENCE_HISTORY.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#111115] border border-white/[0.08] hover:border-white/[0.16] transition-all"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  {exp.company && (
                    <div className="text-sm sm:text-base font-semibold text-zinc-300">
                      {exp.company}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Duration: {exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {/* Core Responsibilities Grid */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Core Engineering Responsibilities & Impact:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-lg bg-[#0c0c0f] border border-white/[0.04] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applied Technologies */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 mr-2">
                  Applied Tech:
                </span>
                {exp.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
