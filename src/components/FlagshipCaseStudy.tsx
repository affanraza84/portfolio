"use client";

import React, { useState } from "react";
import { FLAGSHIP_CASE_STUDY } from "@/data/portfolio-data";
import { GitHubIcon } from "@/components/SocialIcons";
import {
  ShieldAlert,
  Zap,
  Layers,
  CheckCircle,
  HelpCircle,
  GitBranch,
  Lock,
  ExternalLink,
} from "lucide-react";

export function FlagshipCaseStudy() {
  const [activeTab, setActiveTab] = useState<
    "architecture" | "decisions" | "security" | "performance" | "challenges"
  >("architecture");

  const study = FLAGSHIP_CASE_STUDY;

  return (
    <section
      id="case-study"
      className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#D9D9D4] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">04</span>
              <span>/</span>
              <span>TECHNICAL INVESTIGATION &amp; ARCHITECTURE DEEP DIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] mb-2">
              {study.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] max-w-3xl leading-relaxed font-normal">
              {study.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-[#171717] hover:text-[#2457FF] bg-white hover:bg-[#F5F4EF] border border-[#D9D9D4] rounded-md transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold text-white bg-[#2457FF] hover:bg-[#1E40AF] rounded-md transition-colors shadow-xs"
              >
                <span>Live Deploy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Narrative Dual Problem & Solution Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-6 bg-white border border-[#D9D9D4] rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#5F6368] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>THE ENGINEERING BOTTLENECK</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2">
              Bidirectional Concurrency &amp; Latency Overhead
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed font-sans font-normal">
              {study.problem}
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#2457FF] rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#2457FF] uppercase tracking-widest mb-3 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>THE ARCHITECTURAL SOLUTION</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2">
              Decoupled WebSocket Broker &amp; In-Memory Volatile Layer
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed font-sans font-normal">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Interactive Technical Investigation Tabs */}
        <div className="bg-white border border-[#D9D9D4] rounded-lg overflow-hidden shadow-xs">
          {/* Tab Navigation Bar */}
          <div className="flex flex-wrap border-b border-[#D9D9D4] bg-[#FAFAF7]">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 sm:px-6 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "architecture"
                  ? "border-[#2457FF] text-[#171717] bg-white font-bold"
                  : "border-transparent text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.02]"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>System Topology</span>
            </button>

            <button
              onClick={() => setActiveTab("decisions")}
              className={`px-4 sm:px-6 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "decisions"
                  ? "border-[#2457FF] text-[#171717] bg-white font-bold"
                  : "border-transparent text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.02]"
              }`}
            >
              <GitBranch className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>Key Decisions</span>
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 sm:px-6 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "security"
                  ? "border-[#2457FF] text-[#171717] bg-white font-bold"
                  : "border-transparent text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.02]"
              }`}
            >
              <Lock className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>Security Defenses</span>
            </button>

            <button
              onClick={() => setActiveTab("performance")}
              className={`px-4 sm:px-6 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "performance"
                  ? "border-[#2457FF] text-[#171717] bg-white font-bold"
                  : "border-transparent text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.02]"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>Performance Tuning</span>
            </button>

            <button
              onClick={() => setActiveTab("challenges")}
              className={`px-4 sm:px-6 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "challenges"
                  ? "border-[#2457FF] text-[#171717] bg-white font-bold"
                  : "border-transparent text-[#5F6368] hover:text-[#171717] hover:bg-black/[0.02]"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>Challenges &amp; Outcome</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-8">
            {/* 1. Topology & Components */}
            {activeTab === "architecture" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9D9D4]">
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">
                      {study.architecture.title}
                    </h4>
                    <p className="text-xs text-[#5F6368]">
                      {study.architecture.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#2457FF] font-semibold">
                    5 Distinct Subsystems
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {study.architecture.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] hover:border-[#2457FF] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-[#5F6368]">
                          NODE 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#171717] border border-[#D9D9D4]">
                          {comp.tech}
                        </span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#171717] mb-1">
                        {comp.name}
                      </h5>
                      <p className="text-xs text-[#5F6368] leading-relaxed font-sans">
                        {comp.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Key Decisions */}
            {activeTab === "decisions" && (
              <div className="space-y-4">
                {study.keyDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
                  >
                    <div className="lg:col-span-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#2457FF] font-semibold mb-1">
                        DECISION 0{idx + 1}
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#171717]">
                        {item.decision}
                      </h5>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] block mb-1">
                        Technical Rationale:
                      </span>
                      <p className="text-xs text-[#5F6368] leading-relaxed font-sans">
                        {item.rationale}
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 block mb-1 font-semibold">
                        Measurable Impact:
                      </span>
                      <p className="text-xs text-[#171717] leading-relaxed font-sans font-medium">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. Security Defenses */}
            {activeTab === "security" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.securityMeasures.map((measure, idx) => {
                    const [title, detail] = measure.split(": ");
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-start gap-3.5"
                      >
                        <ShieldAlert className="w-4.5 h-4.5 text-[#2457FF] shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-[#171717] mb-1">
                            {title}
                          </h5>
                          <p className="text-xs text-[#5F6368] leading-relaxed font-sans">
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
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.performanceOptimizations.map((opt, idx) => {
                    const [title, detail] = opt.split(": ");
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-7 h-7 rounded bg-[#2457FF]/10 border border-[#2457FF]/20 flex items-center justify-center mb-3">
                            <Zap className="w-3.5 h-3.5 text-[#2457FF]" />
                          </div>
                          <h5 className="text-xs sm:text-sm font-bold text-[#171717] mb-1.5">
                            {title}
                          </h5>
                          <p className="text-xs text-[#5F6368] leading-relaxed font-sans">
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
              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
                    Edge Case Mitigation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.challenges.map((c, idx) => {
                      const [title, detail] = c.split(": ");
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-md bg-[#F5F4EF] border border-[#D9D9D4]"
                        >
                          <span className="text-[10px] font-mono text-[#2457FF] uppercase tracking-widest block mb-1 font-semibold">
                            {title}
                          </span>
                          <p className="text-xs text-[#5F6368] font-sans leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-[#FAFAF7] border border-emerald-600/30">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700 uppercase tracking-widest mb-2 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Engineering Verification &amp; Outcome</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#171717] leading-relaxed font-medium">
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
