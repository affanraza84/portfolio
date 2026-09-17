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
    "saas-apps": <AppWindow className="w-4.5 h-4.5 text-[#2457FF]" />,
    "realtime-systems": <Radio className="w-4.5 h-4.5 text-[#2457FF]" />,
    "backend-apis": <Server className="w-4.5 h-4.5 text-[#2457FF]" />,
    "frontend-engineering": <LayoutTemplate className="w-4.5 h-4.5 text-[#2457FF]" />,
    "auth-security": <Lock className="w-4.5 h-4.5 text-[#2457FF]" />,
    "ai-integrations": <Bot className="w-4.5 h-4.5 text-[#2457FF]" />,
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#D9D9D4] bg-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-3">
              <span className="text-[#2457FF] font-bold">07</span>
              <span>/</span>
              <span>SERVICES &amp; CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Engineered Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mt-4 md:mt-0 font-normal leading-relaxed">
            Delivering high-performance, conversion-ready digital solutions engineered for speed, business longevity, and security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-lg bg-white border border-[#D9D9D4] hover:border-[#2457FF] transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-center group-hover:border-[#2457FF] transition-colors">
                    {serviceIcons[service.id] || <AppWindow className="w-4.5 h-4.5 text-[#2457FF]" />}
                  </div>
                  <span className="text-[10px] font-mono text-[#5F6368] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-1 group-hover:text-[#2457FF] transition-colors">
                  {service.title}
                </h3>
                <div className="text-[11px] font-mono text-[#2457FF] font-semibold mb-3">
                  {service.subtitle}
                </div>

                <p className="text-xs text-[#5F6368] leading-relaxed mb-5 font-sans">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-[#D9D9D4]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] block mb-1 font-semibold">
                    KEY DELIVERABLES:
                  </span>
                  {service.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-[#171717]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-3 border-t border-[#D9D9D4] flex flex-wrap gap-1.5 mb-4">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F4EF] border border-[#D9D9D4] text-[#171717]"
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
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-md bg-[#F5F4EF] hover:bg-[#171717] hover:text-white border border-[#D9D9D4] text-xs font-mono text-[#171717] font-semibold transition-all duration-150"
                >
                  <span>Inquire About Service</span>
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
