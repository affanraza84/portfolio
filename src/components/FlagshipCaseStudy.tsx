"use client";

import React, { useState } from "react";
import { FLAGSHIP_CASE_STUDY } from "@/data/portfolio-data";
import {
  ShieldAlert,
  Zap,
  Layers,
  CheckCircle,
  HelpCircle,
  GitBranch,
  Lock,
} from "lucide-react";

export function FlagshipCaseStudy() {
  const [activeTab, setActiveTab] = useState<
    "architecture" | "decisions" | "security" | "performance" | "challenges"
  >("architecture");

  const study = FLAGSHIP_CASE_STUDY;

  return (
    <section
      id="case-study"
      className="py-20 md:py-32 border-b border-white/[0.08] bg-[#0c0c10] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            <span>03</span>
            <span>/</span>
            <span>SYSTEM ARCHITECTURE DEEP DIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {study.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            {study.subtitle}
          </p>
        </div>

        {/* Overview & High-Level Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-6 bg-[#111115] border border-white/[0.08] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>The Engineering Hurdle</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Bidirectional Concurrency & Latency Bottlenecks
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#111115] border border-amber-500/30 rounded-xl p-6 sm:p-8 shadow-md shadow-amber-950/20">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>The Architectural Solution</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Decoupled WebSocket Broker & In-Memory Volatile Layer
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Interactive Tab Navigation for Technical Deep-Dive */}
        <div className="bg-[#111116] border border-white/[0.09] rounded-xl overflow-hidden">
          {/* Tab Navigation Bar */}
          <div className="flex flex-wrap border-b border-white/[0.08] bg-[#0e0e12]">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "architecture"
                  ? "border-amber-400 text-white bg-white/[0.04]"
                  : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>System Topology</span>
            </button>

            <button
              onClick={() => setActiveTab("decisions")}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "decisions"
                  ? "border-amber-400 text-white bg-white/[0.04]"
                  : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              <GitBranch className="w-4 h-4 text-amber-400" />
              <span>Key Decisions</span>
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "security"
                  ? "border-amber-400 text-white bg-white/[0.04]"
                  : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Security Defenses</span>
            </button>

            <button
              onClick={() => setActiveTab("performance")}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "performance"
                  ? "border-amber-400 text-white bg-white/[0.04]"
                  : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Performance Tuning</span>
            </button>

            <button
              onClick={() => setActiveTab("challenges")}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "challenges"
                  ? "border-amber-400 text-white bg-white/[0.04]"
                  : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Challenges & Outcome</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-8">
            {/* 1. Topology & Components */}
            {activeTab === "architecture" && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {study.architecture.title}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {study.architecture.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-amber-400/90">
                    5 Distinct Subsystems
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {study.architecture.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-[#0e0e12] border border-white/[0.06] hover:border-white/[0.15] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-zinc-500">
                          NODE 0{idx + 1}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300">
                          {comp.tech}
                        </span>
                      </div>
                      <h5 className="text-sm font-semibold text-white mb-1.5">
                        {comp.name}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {comp.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Key Technical Decisions */}
            {activeTab === "decisions" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                {study.keyDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-[#0e0e12] border border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
                  >
                    <div className="lg:col-span-4">
                      <div className="text-xs font-mono text-amber-400 mb-1">
                        DECISION 0{idx + 1}
                      </div>
                      <h5 className="text-sm font-bold text-white">
                        {item.decision}
                      </h5>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                        Technical Rationale:
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
                        Measurable Impact:
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. Security Defenses */}
            {activeTab === "security" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.securityMeasures.map((measure, idx) => {
                    const [title, detail] = measure.split(": ");
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-lg bg-[#0e0e12] border border-white/[0.06] flex items-start gap-3.5"
                      >
                        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-1">
                            {title}
                          </h5>
                          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. Performance Tuning */}
            {activeTab === "performance" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.performanceOptimizations.map((opt, idx) => {
                    const [title, detail] = opt.split(": ");
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-lg bg-[#0e0e12] border border-white/[0.06] flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                            <Zap className="w-4 h-4 text-emerald-400" />
                          </div>
                          <h5 className="text-sm font-semibold text-white mb-2">
                            {title}
                          </h5>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. Challenges & Outcome */}
            {activeTab === "challenges" && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    Edge Case Mitigation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.challenges.map((c, idx) => {
                      const [title, detail] = c.split(": ");
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-[#0e0e12] border border-white/[0.06]"
                        >
                          <span className="text-xs font-mono text-amber-400 uppercase block mb-1">
                            {title}
                          </span>
                          <p className="text-xs sm:text-sm text-zinc-300">
                            {detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Engineering Outcome</span>
                  </div>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {study.outcome}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
