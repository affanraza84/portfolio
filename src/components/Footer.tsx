"use client";

import React from "react";
import { Logo } from "@/components/Logo";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { ArrowUp, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D9D9D4] bg-[#F5F4EF] pt-12 pb-24 md:pb-12 text-[#5F6368] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copy */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Logo size="sm" />
            <span className="hidden sm:inline text-[#D9D9D4]">|</span>
            <span className="text-[#5F6368] text-[11px]">
              &copy; {currentYear} &bull; Engineered with Next.js, TypeScript &amp; Swiss Precision System
            </span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#5F6368] hover:text-[#2457FF] transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#5F6368] hover:text-[#2457FF] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#5F6368] hover:text-[#2457FF] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#E8E8E3] border border-[#D9D9D4] text-[#171717] hover:text-[#2457FF] transition-colors text-[11px] font-semibold"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#2457FF]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
