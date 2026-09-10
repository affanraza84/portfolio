"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolio-data";
import { GitHubIcon } from "@/components/SocialIcons";
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
} from "lucide-react";

export function SelectedWork() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    FEATURED_PROJECTS[0]?.id || null
  );

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-20 md:py-32 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>02</span>
              <span>/</span>
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
              Featured Systems & Applications
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mt-4 md:mt-0">
            Production-grade real-time systems and architecture engineered for high concurrency, ultra-low latency, and scale.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-10">
          {FEATURED_PROJECTS.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;
            const isFlagship = project.id === "realtime-chat-platform";

            return (
              <div
                key={project.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isFlagship
                    ? "bg-[#111115] border-amber-500/30 hover:border-amber-500/50 shadow-lg shadow-amber-950/10"
                    : "bg-[#101014] border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {/* Top Banner / Meta Header */}
                <div className="p-6 sm:p-8 border-b border-white/[0.06]">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-zinc-300">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-medium">
                        {project.category}
                      </span>
                      {isFlagship && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                          ★ Flagship Project
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-md transition-colors"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-950 bg-white hover:bg-zinc-200 font-medium rounded-md transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl">
                    {project.tagline}
                  </p>
                </div>

                {/* Main Content Details Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Problem & Solution */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                        The Problem & Challenge
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed bg-[#0c0c0f] p-4 rounded-lg border border-white/[0.05]">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                        Engineered Solution
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed bg-[#0c0c0f] p-4 rounded-lg border border-white/[0.05]">
                        {project.solution}
                      </p>
                    </div>

                    {/* My Direct Contribution */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        My Direct Engineering Contribution
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed italic border-l-2 border-amber-500/50 pl-3">
                        &ldquo;{project.myRole}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Features & Tech Matrix */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-amber-400" />
                        Core Features & Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {project.keyFeatures.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-amber-400" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:border-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collapsible Architecture Specs Drawer */}
                {project.architectureHighlights && (
                  <div className="border-t border-white/[0.06] bg-[#0c0c10] px-6 py-3 sm:px-8">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-zinc-200 py-1"
                    >
                      <span className="flex items-center gap-2 uppercase tracking-wider">
                        {isExpanded ? "Hide" : "Show"} Engineering & Performance Highlights
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="py-4 space-y-3 animate-in fade-in duration-200 border-t border-white/[0.04] mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-[11px] font-mono text-zinc-400 uppercase">
                              Architectural Safeguards:
                            </span>
                            <ul className="mt-1.5 space-y-1">
                              {project.architectureHighlights.map((arch, aIdx) => (
                                <li
                                  key={aIdx}
                                  className="text-xs text-zinc-300 flex items-start gap-1.5"
                                >
                                  <span className="text-amber-400">▹</span>
                                  <span>{arch}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {project.metricsOrHighlights && (
                            <div>
                              <span className="text-[11px] font-mono text-zinc-400 uppercase">
                                Verified Capabilities:
                              </span>
                              <ul className="mt-1.5 space-y-1">
                                {project.metricsOrHighlights.map((metric, mIdx) => (
                                  <li
                                    key={mIdx}
                                    className="text-xs text-zinc-300 flex items-start gap-1.5"
                                  >
                                    <span className="text-emerald-400">✓</span>
                                    <span>{metric}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
