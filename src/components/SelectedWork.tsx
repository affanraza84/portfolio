"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolio-data";
import { GitHubIcon } from "@/components/SocialIcons";
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function SelectedWork() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const flagshipProjects = FEATURED_PROJECTS.filter((p) => p.isFeatured !== false);
  const catalogProjects = FEATURED_PROJECTS.filter((p) => p.isFeatured === false);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">03</span>
              <span>/</span>
              <span>TECHNICAL ARCHIVE &amp; SYSTEMS INDEX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Engineered Systems &amp; Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6368] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Index of production-grade distributed architectures, real-time engines, and precision full-stack applications.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED PROJECTS HEROIC TREATMENT */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {flagshipProjects.map((project) => {
            return (
              <div key={project.id} className="bg-white rounded-lg border border-[#2457FF] shadow-xs overflow-hidden transition-all duration-300">
                {/* Top Bar */}
                <div className="p-6 sm:p-8 lg:p-10 border-b border-[#D9D9D4] bg-[#FAFAF7]">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#2457FF]/10 text-[#2457FF] border border-[#2457FF]/20">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#171717] hover:text-[#2457FF] bg-white hover:bg-[#F5F4EF] border border-[#D9D9D4] rounded-md transition-colors"
                          >
                            <GitHubIcon className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-[#2457FF] hover:bg-[#1E40AF] rounded-md transition-colors shadow-xs"
                          >
                            <span>Live Deploy</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed max-w-3xl font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Flagship Technical Architecture Grid */}
                  <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left col: Problem & Solution breakdown */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          The Architectural Challenge
                        </h4>
                        <p className="text-xs sm:text-sm text-[#171717] leading-relaxed bg-[#F5F4EF] p-4 rounded-md border border-[#D9D9D4]">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Engineered Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-[#171717] leading-relaxed bg-[#F5F4EF] p-4 rounded-md border border-[#D9D9D4]">
                          {project.solution}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#D9D9D4]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#2457FF] font-semibold block mb-1">
                          ROLE &amp; RESPONSIBILITY
                        </span>
                        <p className="text-xs text-[#171717] font-medium leading-relaxed">
                          {project.myRole}
                        </p>
                      </div>
                    </div>

                    {/* Right col: Features, Tech stack, Verified metrics */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-[#2457FF]" />
                          Engineered Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#171717]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-2.5 flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-[#2457FF]" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#F5F4EF] border border-[#D9D9D4] text-[#171717]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.metricsOrHighlights && (
                        <div className="p-4 rounded-md bg-[#FAFAF7] border border-[#D9D9D4]">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] block mb-2 font-semibold">
                            TELEMETRY &amp; OUTCOMES
                          </span>
                          <ul className="space-y-1.5">
                            {project.metricsOrHighlights.map((metric, mIdx) => (
                              <li key={mIdx} className="text-xs text-[#171717] font-mono flex items-start gap-2">
                                <span className="text-[#2457FF] font-bold">↳</span>
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        {/* ========================================================================= */}
        {/* TECHNICAL ARCHIVE CATALOG INDEX (Tabular Swiss Grid Rows for non-flagship) */}
        {/* ========================================================================= */}
        {catalogProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-4 pb-2 border-b border-[#D9D9D4]">
              <span>CATALOG ENTRIES 0{flagshipProjects.length + 1} &ndash; 0{FEATURED_PROJECTS.length}</span>
              <span>SPECIFICATION &amp; REPO INDEX</span>
            </div>

            <div className="divide-y divide-[#D9D9D4] border-y border-[#D9D9D4]">
              {catalogProjects.map((project, idx) => {
                const isExpanded = expandedProjectId === project.id;
                const catalogNum = String(flagshipProjects.length + idx + 1).padStart(2, "0");

                return (
                  <div
                    key={project.id}
                    className="group py-6 md:py-8 transition-colors duration-200 hover:bg-white/60 px-2 sm:px-4 rounded-md"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                      {/* Index Number & Category */}
                      <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between gap-1">
                        <span className="font-mono text-xs font-bold text-[#5F6368] group-hover:text-[#2457FF] transition-colors">
                          SYS / {catalogNum}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] px-2 py-0.5 rounded bg-black/[0.04]">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="lg:col-span-5">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-[#171717] group-hover:text-[#2457FF] transition-colors">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-[#5F6368] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#5F6368] mt-1.5 leading-relaxed font-normal">
                          {project.tagline}
                        </p>

                        {/* Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#D9D9D4] text-[#171717]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Role / Contribution Summary */}
                      <div className="lg:col-span-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] block mb-1">
                          ROLE / ARCHITECTURE
                        </span>
                        <p className="text-xs text-[#171717] leading-relaxed">
                          {project.myRole}
                        </p>
                      </div>

                      {/* Actions & Drawer Toggle */}
                      <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between gap-2.5">
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 text-[#5F6368] hover:text-[#171717] hover:bg-white rounded-md border border-[#D9D9D4] transition-colors"
                              title="View Source"
                            >
                              <GitHubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono text-white bg-[#171717] hover:bg-[#2457FF] rounded-md transition-colors"
                              title="Live Demo"
                            >
                              <span>Live</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5F6368] hover:text-[#2457FF] transition-colors"
                        >
                          <span>{isExpanded ? "Less Specs" : "Specs"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Technical Details Drawer */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-[#D9D9D4] bg-white p-5 rounded-lg border shadow-xs animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <span className="text-[10px] font-mono text-[#5F6368] uppercase tracking-widest block mb-2 font-semibold">
                              PROBLEM &amp; OBJECTIVE:
                            </span>
                            <p className="text-xs text-[#171717] leading-relaxed mb-4 bg-[#F5F4EF] p-3 rounded border border-[#D9D9D4]">
                              {project.problem}
                            </p>

                            <span className="text-[10px] font-mono text-[#5F6368] uppercase tracking-widest block mb-2 font-semibold">
                              ENGINEERED SOLUTION:
                            </span>
                            <p className="text-xs text-[#171717] leading-relaxed bg-[#F5F4EF] p-3 rounded border border-[#D9D9D4]">
                              {project.solution}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <span className="text-[10px] font-mono text-[#5F6368] uppercase tracking-widest block mb-2 font-semibold">
                                CORE CAPABILITIES:
                              </span>
                              <ul className="space-y-1.5">
                                {project.keyFeatures.map((feat, fIdx) => (
                                  <li key={fIdx} className="text-xs text-[#171717] flex items-start gap-2">
                                    <span className="text-[#2457FF] font-bold">▹</span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {project.architectureHighlights && (
                              <div>
                                <span className="text-[10px] font-mono text-[#5F6368] uppercase tracking-widest block mb-2 font-semibold">
                                  ARCHITECTURE SAFEGUARDS:
                                </span>
                                <ul className="space-y-1.5">
                                  {project.architectureHighlights.map((arch, aIdx) => (
                                    <li key={aIdx} className="text-xs text-[#5F6368] flex items-start gap-2 font-mono">
                                      <span className="text-emerald-600">✓</span>
                                      <span>{arch}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
