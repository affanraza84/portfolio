"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { SelectedWork } from "@/components/SelectedWork";
import { FlagshipCaseStudy } from "@/components/FlagshipCaseStudy";
import { TechnicalMatrix } from "@/components/TechnicalMatrix";
import { OpenSource } from "@/components/OpenSource";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  const handleScrollToCaseStudy = () => {
    const el = document.getElementById("case-study");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f8fafc] flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200 overflow-x-hidden w-full max-w-full">
      {/* Sticky Top Navigation */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full flex flex-col overflow-x-hidden">
        <Hero onOpenContact={handleOpenContact} />
        <Positioning />
        <SelectedWork onSelectCaseStudy={handleScrollToCaseStudy} />
        <FlagshipCaseStudy />
        <TechnicalMatrix />
        <OpenSource />
        <ExperienceTimeline />
        <ServicesSection onOpenContact={handleOpenContact} />
        <WhyWorkWithMe />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fast Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}
