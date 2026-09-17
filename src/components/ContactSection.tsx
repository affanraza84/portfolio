"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  Send,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      const subject = encodeURIComponent(
        `Project Inquiry: ${formState.projectType} from ${formState.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\n\nMessage:\n${formState.message}`
      );
      setErrorMessage(
        "Could not submit via API directly. You can send it directly via your mail client below."
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F4EF] border-b border-[#D9D9D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#5F6368] mb-6">
          <span className="text-[#2457FF] font-bold">09</span>
          <span>/</span>
          <span>INITIATE ENGAGEMENT &amp; CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] mb-3 leading-[1.12]">
                Have a project or opportunity?
              </h2>
              <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed max-w-xl font-normal">
                Let&apos;s build a fast, scalable, and engineered digital product. Whether you need a full-stack system from ground zero, distributed backend infrastructure, or real-time capabilities.
              </p>
            </div>

            {/* Quick Email Copy Box */}
            <div className="p-5 rounded-lg bg-white border border-[#D9D9D4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-[#2457FF]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368]">
                    DIRECT EMAIL
                  </div>
                  <div className="text-sm font-bold text-[#171717] font-mono">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F5F4EF] hover:bg-[#E8E8E3] border border-[#D9D9D4] text-xs font-mono text-[#171717] transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5F6368]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#171717] text-white hover:bg-[#2457FF] text-xs font-mono font-semibold transition-colors shadow-xs"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability & Telemetry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white border border-[#D9D9D4] shadow-xs">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#2457FF]" />
                  <span>TIMEZONE &amp; RESPONSE</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#171717]">
                  IST (UTC+5:30) / Remote
                </div>
                <div className="text-[11px] text-[#5F6368] mt-1 font-mono">
                  Response SLA: Under 12 hours
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#D9D9D4] shadow-xs">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SYSTEM STATUS</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Available for Engagement</span>
                </div>
                <div className="text-[11px] text-[#5F6368] mt-1 font-mono">
                  Freelance &bull; Contract &bull; Full-Time
                </div>
              </div>
            </div>

            {/* Social Proof Channels */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] font-mono text-[#5F6368] uppercase tracking-widest mr-1">
                VERIFY:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#F5F4EF] border border-[#D9D9D4] text-xs font-mono text-[#171717] transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#F5F4EF] border border-[#D9D9D4] text-xs font-mono text-[#171717] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#D9D9D4] rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="mb-6 pb-4 border-b border-[#D9D9D4]">
              <h3 className="text-xl font-bold text-[#171717] mb-1">
                Start a Conversation
              </h3>
              <p className="text-xs text-[#5F6368]">
                Inquiry details are saved securely and delivered directly to inbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-lg bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#171717]">
                  Inquiry Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#171717]">{formState.name}</strong>. Your telemetry was forwarded to{" "}
                  <span className="font-mono text-[#2457FF]">affanraza8081@gmail.com</span>. I will review and reply promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      projectType: "Full-Stack Web App",
                      message: "",
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#2457FF] hover:underline pt-2 font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-md bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Miller"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] placeholder-[#8C9097] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] placeholder-[#8C9097] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1.5 font-semibold">
                    Project / Inquiry Type
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) =>
                      setFormState({ ...formState, projectType: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App</option>
                    <option value="SaaS Architecture & MVP">SaaS Architecture &amp; MVP</option>
                    <option value="Real-Time Application">Real-Time Messaging / Sockets</option>
                    <option value="Backend APIs & Microservices">Backend APIs &amp; Infrastructure</option>
                    <option value="Frontend Engineering (Next.js/React)">Frontend Engineering (Next.js/React)</option>
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1.5 font-semibold">
                    Project Overview / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product vision, timeline, or key technical requirements..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] placeholder-[#8C9097] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#171717] text-white hover:bg-[#2457FF] disabled:opacity-75 font-semibold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-[0.99]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving &amp; Notifying...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Project Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
