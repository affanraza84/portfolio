"use client";

import React from "react";
import { EXPERIENCE_HISTORY } from "@/data/portfolio-data";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">06</span>
              <span>/</span>
              <span>PROFESSIONAL TIMELINE &amp; RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Engineering Track Record
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mt-4 md:mt-0 font-normal leading-relaxed">
            Real-world software engineering experience working within agile engineering teams on live production systems.
          </p>
        </div>

        {/* Technical Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#D9D9D4] space-y-12">
          {EXPERIENCE_HISTORY.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#D9D9D4] group-hover:border-[#2457FF] group-hover:bg-[#2457FF] transition-all" />

              <div className="p-6 sm:p-8 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-all shadow-xs">
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#D9D9D4] mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#2457FF]/10 text-[#2457FF]">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-[#171717]">
                        {exp.role}
                      </h3>
                    </div>
                    {exp.company && (
                      <div className="text-xs sm:text-sm font-semibold text-[#5F6368]">
                        {exp.company}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#5F6368]">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F5F4EF] border border-[#D9D9D4]">
                      <Calendar className="w-3.5 h-3.5 text-[#2457FF]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F5F4EF] border border-[#D9D9D4]">
                      <MapPin className="w-3.5 h-3.5 text-[#5F6368]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-5 font-normal">
                  {exp.summary}
                </p>

                {/* Core Responsibilities Grid */}
                <div className="mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] block mb-2 font-semibold">
                    RESPONSIBILITIES &amp; DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-[#171717] leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Tech */}
                <div className="pt-3 border-t border-[#D9D9D4] flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mr-2">
                    APPLIED TECH:
                  </span>
                  {exp.skillsApplied.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F4EF] border border-[#D9D9D4] text-[#171717]"
                    >
                      {skill}
                    </span>
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
