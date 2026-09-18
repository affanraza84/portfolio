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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-lg bg-white border border-[#D9D9D4] p-6 sm:p-8 shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5F6368] hover:text-[#171717] rounded-md hover:bg-black/4 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2457FF]/10 text-[#2457FF] text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
            <Sparkles className="w-3 h-3" />
            <span>DIRECT TELEMETRY INQUIRY</span>
          </div>
          <h3 className="text-2xl font-bold text-[#171717]">Let&apos;s Work Together</h3>
          <p className="text-xs text-[#5F6368] mt-1 font-sans">
            Inquiry will be saved directly and notified to my inbox.
          </p>
        </div>

        {/* Quick Email Row */}
        <div className="p-3 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 overflow-hidden">
            <Mail className="w-4 h-4 text-[#2457FF] shrink-0" />
            <span className="text-xs font-mono text-[#171717] font-semibold truncate">
              {PERSONAL_INFO.email}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded bg-white hover:bg-[#E8E8E3] border border-[#D9D9D4] text-xs font-mono text-[#171717] flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#5F6368]" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#171717]">
              Inquiry Dispatched!
            </h4>
            <p className="text-xs text-[#5F6368] max-w-xs mx-auto font-sans leading-relaxed">
              Saved and notified to affanraza8081@gmail.com. I will get back to you promptly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 rounded-md bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2457FF]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {errorMessage && (
              <div className="p-2.5 rounded bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1 font-semibold">
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
                className="w-full px-3 py-2 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1 font-semibold">
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
                className="w-full px-3 py-2 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1 font-semibold">
                Project Scope / Role
              </label>
              <input
                type="text"
                placeholder="e.g. Next.js SaaS MVP or Full-Stack Role"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#5F6368] mb-1 font-semibold">
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
                className="w-full px-3 py-2 rounded-md bg-[#F5F4EF] border border-[#D9D9D4] text-xs sm:text-sm text-[#171717] focus:outline-none focus:border-[#2457FF] focus:ring-1 focus:ring-[#2457FF] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#171717] text-white hover:bg-[#2457FF] disabled:opacity-75 font-semibold text-xs uppercase tracking-wider transition-colors mt-2"
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
