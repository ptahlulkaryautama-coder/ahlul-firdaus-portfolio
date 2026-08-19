"use client";

import React from "react";
import { Cpu, ArrowUp, Sparkles, ShieldCheck, Download } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    const resumeText = `AHLUL FIRDAUS
Operational Systems Architect & Full-Stack Engineer
Email: ahlulfirdaus.official@gmail.com | Phone/WhatsApp: +62 812-9125-4064
Website: https://ahlulfirdaus.com

==================================================
EXECUTIVE SUMMARY
==================================================
Senior Systems Builder & Product Architect with 20+ years of operational leadership experience across manufacturing, quality assurance, and software systems engineering. Specialized in building high-density SaaS dashboards, B2B export platforms, community governance systems, and operational workflow tools.

==================================================
CORE CAPABILITIES
==================================================
• Operational Systems Architecture & Digital Workflow Optimization
• Full-Stack Web Development (Next.js, React, TypeScript, Node.js, PostgreSQL)
• High-Density UI/UX & Information Design
• Escrow Payment & Trade Compliance Workflows (BPOM, Halal, HACCP data readiness)
• Estate Governance & Community Digital Systems

==================================================
FEATURED PROJECTS & ECOSYSTEMS
==================================================
1. OOI — Origin Of Indonesia (B2B Export Ecosystem)
   • B2B transactional platform connecting Indonesian producers with global buyers.
   • Features Escrow milestone payments, container freight calculators, and customs readiness workflows.

2. CGV10 Portal Warga (Residential Management Platform)
   • Integrated neighborhood management system linking 500+ households with security gate checkpoints.
   • PWA with QR-code visitor verification and transparent accounting ledgers.

3. Masjid Al Ikhlas Digital Presence (Community Philanthropy Hub)
   • Live digital presence featuring weekly transparent financial disbursement ledgers.

4. OneEcos (High-Density SaaS Cockpit)
   • Operations dashboard consolidating multi-channel business metrics with real-time threshold alerts.

==================================================
ENGAGEMENT MODELS
==================================================
• Digital Product Discovery & Advisory: Rp 4,500,000 ($300) | 3-5 days
• Custom Business Website / MVP: Rp 15,000,000 ($1,000) | 3-6 weeks
• Product Support Retainer: Rp 4,500,000/mo ($300/mo) | Monthly

==================================================
CONTACT INFORMATION
==================================================
Website: https://ahlulfirdaus.com
Email: ahlulfirdaus.official@gmail.com
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
            <span className="text-cream-dark/30 block font-semibold">PERFORMANCE TARGET:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              LCP &lt; 0.8S
            </span>
          </div>
        </div>

        {/* Right Side: Scroll back and operational triggers */}
        <div className="flex items-center justify-between md:justify-end gap-5">
          <a
            href="mailto:ahlulfirdaus.official@gmail.com"
            className="font-mono text-[10px] text-cream-dark/70 hover:text-gold-muted tracking-wider uppercase transition-colors glass-badge px-3 py-1.5 rounded-lg font-bold"
          >
            ahlulfirdaus.official@gmail.com
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
