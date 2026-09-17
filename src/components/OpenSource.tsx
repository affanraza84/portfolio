"use client";

import React from "react";
import { OPEN_SOURCE_RECOGNITIONS } from "@/data/portfolio-data";
import { Award, GitPullRequest, Users, CheckCircle2 } from "lucide-react";

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">05</span>
              <span>/</span>
              <span>TECHNICAL DEPTH &amp; OPEN SOURCE RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Open Source Impact &amp; Evidence
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mt-4 md:mt-0 font-normal leading-relaxed">
            Demonstrated technical excellence in distributed systems, asynchronous PR review cycles, and large-scale codebase contributions.
          </p>
        </div>

        {/* Recognitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPEN_SOURCE_RECOGNITIONS.map((recog, idx) => (
            <div
              key={recog.program}
              className="p-6 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Top Badge & Tier */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2457FF]/10 text-[#2457FF] text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{recog.badge}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#5F6368] font-bold">
                    INDEX 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171717] mb-1 group-hover:text-[#2457FF] transition-colors">
                  {recog.program}
                </h3>
                <div className="text-xs font-mono text-[#2457FF] font-semibold mb-3">
                  {recog.title}
                </div>

                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-5 font-sans">
                  {recog.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-3 border-t border-[#D9D9D4]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] block mb-1 font-semibold">
                    VERIFIED CONTRIBUTIONS:
                  </span>
                  {recog.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-[#171717]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Credibility Callout */}
        <div className="mt-6 p-5 rounded-lg bg-white border border-[#D9D9D4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-center shrink-0">
              <GitPullRequest className="w-4.5 h-4.5 text-[#2457FF]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#171717]">
                Distributed Collaboration &amp; Strict Git Architecture
              </h4>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Experienced in asynchronous RFC discussions, semantic versioning, linear commit trees, and zero-downtime merge strategies.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F5F4EF] border border-[#D9D9D4] text-xs font-mono text-[#171717] shrink-0 font-medium">
            <Users className="w-3.5 h-3.5 text-[#2457FF]" />
            <span>Community Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
