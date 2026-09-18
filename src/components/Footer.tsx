"use client";

import React from "react";
import { ArrowUp, Sparkles, Download } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    const resumeText = `AHLUL FIRDAUS
Operational Systems Builder & Product Specialist
Email: ahlul.firdaus@gmail.com | Phone/WhatsApp: +62 812-9125-4064
Website: https://ahlulfirdaus.com
Location: Batam, Kepulauan Riau, Indonesia (GMT+7)

==================================================
EXECUTIVE SUMMARY
==================================================
Operational Systems Builder with 15+ years of practical leadership across manufacturing operations, quality control, process improvement, and digital product workflows. Specializes in turning complex operational processes into clear web applications, internal dashboards, portals, and structured digital tools using modern web stacks and AI-assisted workflows.

==================================================
CORE CAPABILITIES
==================================================
• Operational Process Deconstruction & Workflow Structuring
• Modern Web Application Development (Next.js, React, TypeScript, Tailwind CSS)
• Database Modeling & Backend Integration (PostgreSQL, Supabase)
• Operations & Governance Dashboards (Internal Portals, Ledger Displays, Community Tools)
• B2B Catalog & Inquiry Workflow Design

==================================================
SELECTED SYSTEMS & PROJECTS
==================================================
1. OOI — Origin of Indonesia (Status: Founder-Led Product — Phase 1 Launch)
   • B2B showcase catalog platform connecting Indonesian producers with global commercial buyers.
   • Structured commodity specs, origin documentation funnels, and verified sample inquiry workflows.

2. CGV10 Portal Warga (Status: Live Product)
   • Centralized residential governance platform for 500+ households.
   • Integrated neighborhood announcements, pengurus directory, transparent Kas RT balance, and resident commerce directory.

3. Masjid Al-Ikhlas Digital Presence (Status: In Development)
   • Public community platform featuring Batam prayer schedule information and weekly financial disbursement transparency.

4. OneEcos — B2B Trade Operations System (Status: Active Prototype)
   • Connected operational workspace organizing buyers, quotes, orders, fulfillment, shipments, documents, and invoices into a unified trade workflow.

5. PT. Corum Sustainability Reporting Template (Status: Internal Template)
   • Browser-based ESG compliance reporting template structuring 23 sections across 7 departments with local persistence and print-to-PDF formatting.

6. Sakku 2.0 — Personal & Household Finance (Status: Live Product)
   • Local-first personal & household financial management PWA featuring rule-based conversational entry parsing and multi-wallet tracking.

==================================================
ENGAGEMENT MODELS (PRELIMINARY ESTIMATES)
==================================================
• Digital Product & Workflow Review: Rp 4,500,000 (~$300) | 3-5 days
• Business Website or Portal MVP: Rp 15,000,000 (~$1,000) | 3-6 weeks
• Ongoing Product Improvement: Rp 4,500,000/mo (~$300/mo) | Monthly retainer

==================================================
CONTACT INFORMATION
==================================================
Website: https://ahlulfirdaus.com
Email: ahlul.firdaus@gmail.com
WhatsApp: +62 812-9125-4064
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ahlul_Firdaus_Technical_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-deep-black border-t border-graphite/40 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8">
        
        {/* Left Side: Logo & Status */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg glass-card border border-gold-muted/30 flex items-center justify-center overflow-hidden">
              <Logo size={18} animateMode="draw" hoverMode="glow" className="relative z-10" />
            </div>
            <span className="font-sans font-extrabold tracking-wider text-sm text-cream uppercase flex items-center gap-1.5">
              Ahlul Firdaus
              <Sparkles className="w-3 h-3 text-gold-muted" />
            </span>
          </div>
          <p className="text-cream-dark/50 font-mono text-[10px] tracking-wider">
            © {new Date().getFullYear()} AHLUL FIRDAUS. CODES &amp; BLUEPRINTS MIT LICENSED.
          </p>
        </div>

        {/* Center: System statistics */}
        <div className="flex items-center gap-6 font-mono text-[10px] text-cream-dark/60 border-y border-graphite/40 py-3 md:py-0 md:border-none">
          <div className="space-y-0.5">
            <span className="text-cream-dark/30 block font-semibold">ENGINE:</span>
            <span className="text-cream-dark/80 font-bold">NEXT.JS 16 // TURBOPACK</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-cream-dark/30 block font-semibold">DESIGN SYSTEM:</span>
            <span className="text-cream-dark/80 font-bold">TAILWIND CSS V4</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-cream-dark/30 block font-semibold">ACCESSIBILITY:</span>
            <span className="text-cream-dark/80 font-bold">
              CONTINUOUSLY IMPROVED
            </span>
          </div>
        </div>

        {/* Right Side: Scroll back and operational triggers */}
        <div className="flex items-center justify-between md:justify-end gap-5">
          <a
            href="mailto:ahlul.firdaus@gmail.com"
            className="font-mono text-[10px] text-cream-dark/70 hover:text-gold-muted tracking-wider uppercase transition-colors glass-badge px-3 py-1.5 rounded-lg font-bold"
          >
            ahlul.firdaus@gmail.com
          </a>
          <button
            onClick={handleDownloadCV}
            className="font-mono text-[10px] text-cream-dark/70 hover:text-gold-muted tracking-wider uppercase transition-colors glass-badge px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3 h-3" />
            Download CV
          </button>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-card border border-graphite/60 text-cream-dark hover:text-gold-muted hover:border-gold-muted/50 hover:bg-gold-muted/10 transition-all duration-300 shadow-md group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
