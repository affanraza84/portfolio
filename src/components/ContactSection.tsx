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
      // If network fails, construct mailto as direct instant backup
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
    <section id="contact" className="py-20 md:py-32 bg-[#0c0c10] relative">
      {/* Background Subtle Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
          <span>09</span>
          <span>/</span>
          <span>INITIATE ENGAGEMENT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call to Action & Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                Have a project in mind?
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
                Let&apos;s turn your idea into a fast, scalable, and polished digital product. Whether you need an MVP built from scratch, backend infrastructure scaled, or complex real-time systems engineered.
              </p>
            </div>

            {/* Quick Email Copy Box */}
            <div className="p-5 rounded-xl bg-[#111115] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-400">
                    Direct Email Address
                  </div>
                  <div className="text-sm font-semibold text-white font-mono">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-200 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-mono font-semibold transition-colors"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#111115] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Timezone & Response</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  IST (UTC+5:30) / Global Remote
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Average response under 12 hours
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#111115] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Current Status</span>
                </div>
                <div className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for New Projects</span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Freelance, contract, or full-time roles
                </div>
              </div>
            </div>

            {/* Social Proof Channels */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Project Inquiry Form */}
          <div className="lg:col-span-6 bg-[#111115] border border-white/[0.09] rounded-2xl p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-white/[0.06]">
              <h3 className="text-lg font-bold text-white mb-1">
                Start a Conversation
              </h3>
              <p className="text-xs text-zinc-400">
                Inquiry details are saved directly and sent to my inbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Inquiry Received!
                </h4>
                <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formState.name}</strong>. Your message has been saved and forwarded to{" "}
                  <span className="font-mono text-amber-300">affanraza8081@gmail.com</span>. I will review and reply within 12 hours.
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
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0c0f] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0c0f] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Project / Inquiry Type
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) =>
                      setFormState({ ...formState, projectType: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0c0f] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App</option>
                    <option value="SaaS Architecture & MVP">SaaS Architecture & MVP</option>
                    <option value="Real-Time Application">Real-Time Messaging / Sockets</option>
                    <option value="Backend APIs & Microservices">Backend APIs & Infrastructure</option>
                    <option value="Frontend Engineering (Next.js/React)">Frontend Engineering (Next.js/React)</option>
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0c0f] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-75 font-semibold text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.99]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving & Notifying...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
