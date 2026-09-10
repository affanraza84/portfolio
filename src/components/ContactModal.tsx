"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { X, Mail, Copy, Check, Send, Sparkles, Loader2, AlertCircle } from "lucide-react";

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setSent(true);
    } catch (err: unknown) {
      console.error("Modal submission error:", err);
      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${formData.name} (${formData.projectType})`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\n\nMessage:\n${formData.message}`
      );
      setErrorMessage("Falling back to mail client...");
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#111116] border border-white/[0.12] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Direct Connection</span>
          </div>
          <h3 className="text-xl font-bold text-white">Let&apos;s Work Together</h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Information will be saved directly and notified to my inbox.
          </p>
        </div>

        {/* Quick Email Row */}
        <div className="p-3.5 rounded-lg bg-[#0c0c0f] border border-white/[0.06] flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-hidden">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-mono text-white truncate">
              {PERSONAL_INFO.email}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-zinc-300 flex items-center gap-1 shrink-0 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-zinc-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">
              Inquiry Successfully Sent!
            </h4>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              Saved to database and notified to affanraza8081@gmail.com. I will get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 rounded bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {errorMessage && (
              <div className="p-2.5 rounded bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Name *
              </label>
              <input
                type="text"
                required
                placeholder="Alex Miller"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0c0c0f] border border-white/[0.08] text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0c0c0f] border border-white/[0.08] text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Project Scope / Role
              </label>
              <input
                type="text"
                placeholder="e.g. Next.js SaaS MVP or Full-Stack Role"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0c0c0f] border border-white/[0.08] text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Message *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell me a bit about what you're building..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0c0c0f] border border-white/[0.08] text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-75 font-semibold text-xs uppercase tracking-wider transition-colors mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
