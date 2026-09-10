"use client";

import React from "react";
import { SERVICES_LIST } from "@/data/portfolio-data";
import {
  AppWindow,
  Radio,
  Server,
  LayoutTemplate,
  Lock,
  Bot,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export function ServicesSection({ onOpenContact }: { onOpenContact?: () => void }) {
  const serviceIcons: Record<string, React.ReactNode> = {
    "saas-apps": <AppWindow className="w-5 h-5 text-amber-400" />,
    "realtime-systems": <Radio className="w-5 h-5 text-amber-400" />,
    "backend-apis": <Server className="w-5 h-5 text-amber-400" />,
    "frontend-engineering": <LayoutTemplate className="w-5 h-5 text-amber-400" />,
    "auth-security": <Lock className="w-5 h-5 text-amber-400" />,
    "ai-integrations": <Bot className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="services" className="py-20 md:py-32 border-b border-white/[0.08] bg-[#0c0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <span>07</span>
              <span>/</span>
              <span>SERVICES & CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
              What I Can Build For You
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mt-4 md:mt-0">
            Delivering high-performance, conversion-ready digital solutions engineered for speed, business longevity, and security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-[#111115] border border-white/[0.08] hover:border-amber-500/30 hover:bg-[#131318] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {serviceIcons[service.id] || <AppWindow className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs font-mono text-amber-400/90 mb-3">
                  {service.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 mb-4">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    }
                  }}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-md bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 group-hover:text-white transition-colors"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
