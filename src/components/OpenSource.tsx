"use client";

import React from "react";
import { OPEN_SOURCE_RECOGNITIONS } from "@/data/portfolio-data";
import { Award, GitPullRequest, Users, CheckCircle2 } from "lucide-react";

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 md:py-32 border-b border-white/[0.08] bg-[#0c0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>05</span>
              <span>/</span>
              <span>OPEN SOURCE IMPACT & CREDIBILITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
              Global Open Source Recognition
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mt-4 md:mt-0">
            Demonstrated mastery in real-world distributed collaboration, resolving critical issues, and maintaining high codebase standards.
          </p>
        </div>

        {/* Recognitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPEN_SOURCE_RECOGNITIONS.map((recog, idx) => (
            <div
              key={recog.program}
              className="p-6 sm:p-7 rounded-xl bg-[#111115] border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-black/40"
            >
              <div>
                {/* Top Badge & Tier */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                    <Award className="w-3.5 h-3.5" />
                    <span>{recog.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    PROGRAM 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {recog.program}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mb-4">
                  {recog.title}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {recog.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Key Contributions &amp; Standards:
                  </span>
                  {recog.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Credibility Callout */}
        <div className="mt-8 p-6 rounded-xl bg-[#111115] border border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
              <GitPullRequest className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Distributed Team Collaboration & Strict Git Standards
              </h4>
              <p className="text-xs text-zinc-400">
                Experienced in asynchronous PR discussions, semantic versioning, clean commit histories, and resolving complex merge conflicts.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 shrink-0">
            <Users className="w-3.5 h-3.5 text-zinc-400" />
            <span>Community Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
