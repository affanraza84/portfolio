"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { SelectedWork } from "@/components/SelectedWork";
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

  return (
    <div className="min-h-screen bg-[#F5F4EF] text-[#171717] flex flex-col font-sans selection:bg-[#2457FF]/15 selection:text-[#171717] overflow-x-hidden w-full max-w-full">
      {/* Sticky Top Navigation */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full flex flex-col overflow-x-hidden">
        <Hero onOpenContact={handleOpenContact} />
        <Positioning />
        <SelectedWork />
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
