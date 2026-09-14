"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Terminal,
  Cpu,
  Layers,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award,
  ExternalLink,
  Code2,
  Database,
  ShieldCheck,
  Server,
  Copy,
  Check
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "projects" | "skills" | "services">("summary");
  const [copied, setCopied] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `AHLUL FIRDAUS
Digital Systems Architect & Full-Stack Engineer
Location: Batam, Kepulauan Riau, Indonesia (GMT+7)
Email: ahlul.firdaus@gmail.com | Phone/WhatsApp: +62 812-9125-4064 | Web: https://ahlulfirdaus.com

==================================================
EXECUTIVE SUMMARY
==================================================
Digital Systems Architect & Full-Stack Engineer with extensive experience engineering high-performance web applications, B2B export transaction platforms, neighborhood governance ledgers, and operational SaaS cockpits. Specializes in end-to-end strategy, database design, Escrow transaction engines, PWA systems, and high-density UI/UX.

==================================================
CORE COMPETENCIES
==================================================
• Systems Architecture: B2B Escrow Engines, Multi-tier SaaS Architecture, Database Schemas, API Webhooks.
• Modern Frontend: Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, PWA.
• Backend & Database: Node.js, GraphQL, REST APIs, PostgreSQL, Supabase, Prisma ORM, AWS S3.
• Business & Security: Customs API Integrations, Payment Gateways (QRIS/Bank), Hardware Grading Algorithms.

==================================================
KEY ARCHITECTED SYSTEMS & PROJECTS
==================================================
1. OOI — Origin Of Indonesia (B2B Export Platform & Commodity Catalog)
   • Built B2B export showcase platform presenting Indonesian origin commodities to global buyers.
   • Standardized technical specifications, origin traceability, packaging standards, and sample-request funnels.
   • Tech Stack: Next.js, TypeScript, Tailwind CSS, Netlify, GitHub.

2. CGV10 Portal Warga (Digital Community Ecosystem — portalwargacgv.id)
   • Centralized community information hub for 500+ residents of RT 010 / RW 021.
   • Implemented official announcements, pengurus directory, transparent Kas RT reporting, and PALUGADA resident marketplace.
   • Tech Stack: Next.js, Supabase, TypeScript, Tailwind CSS, Vercel.

3. Masjid Al-Ikhlas Digital Presence (alikhlascgv.vercel.app)
   • Centralized digital hub providing Batam prayer timetables with live countdown clock.
   • Integrated transparent weekly Infaq/Sedekah financial reports and digital QRIS donation channels.
   • Tech Stack: Next.js, HTML5, Tailwind CSS, JavaScript, Vercel.

4. OneEcos Business Operating System (Order-to-Cash Engine)
   • Unified end-to-end commercial transaction flow (RFQ -> Quote -> Sales Order -> Procurement -> Production -> Logistics -> Invoicing -> Payment).
   • Single-source-of-truth architecture reducing manual handoffs and eliminating redundant data entry.
   • Tech Stack: React, TypeScript, Recharts, Framer Motion, Tailwind CSS.

5. PT. Corum — Industrial Sustainability Reporting System (SRP2026)
   • Consolidated 23 environmental, operational, and social parameters across 7 factory departments.
   • Engineered client-side JSON data interchange with print-ready audit PDF export engine.
   • Tech Stack: HTML5, JavaScript (ES6+), Chart.js, Tailwind CSS, CSS Print Engine.

6. Sakku 2.0 — Privacy-First Wealth OS (sakku.ahlulfirdaus.com)
   • Local-First PWA financial operating system with zero-knowledge device storage (100% data sovereignty).
   • Features conversational Indonesian 'Catat Cepat' parser, envelope budgeting, and multi-wallet Net Worth telemetry.
   • Tech Stack: Next.js, React 19, TypeScript, Tailwind CSS, Recharts, LocalStorage, PWA.

==================================================
ENGAGEMENT MODELS
==================================================
• System Audit & Consultation: IDR 7.5M ($500) | 3-5 days
• Full B2B / SaaS Ecosystem Build: IDR 25M ($1,800) | 3-6 weeks
• Fractional CTO Retainer: IDR 15M/month ($1,000/mo)

==================================================
CONTACT & PORTFOLIO
==================================================
Website: https://ahlulfirdaus.com
WhatsApp: +62 812-9125-4064
Email: ahlul.firdaus@gmail.com
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

  const handleCopyText = () => {
    const text = `AHLUL FIRDAUS — Digital Systems Architect & Full-Stack Builder
Email: ahlul.firdaus@gmail.com | WhatsApp: +62 812-9125-4064 | Web: https://ahlulfirdaus.com

EXECUTIVE SUMMARY:
Digital Systems Architect & Full-Stack Engineer with extensive experience engineering high-performance web applications, B2B export transaction platforms (OOI), neighborhood governance ledgers (CGV10), and operational SaaS cockpits (OneEcos). Specializes in database design, Escrow engines, PWA systems, and high-density UI/UX.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-deep-black/80 backdrop-blur-xl z-[101]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-[102] w-full max-w-4xl max-h-[90vh] bg-deep-black/95 border border-graphite-dark/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col glass-card text-cream"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-6 border-b border-graphite/60 bg-graphite-dark/60 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold-muted/10 border border-gold-muted/30 text-gold-muted">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-sans font-extrabold text-lg md:text-xl text-cream tracking-tight">
                      Ahlul Firdaus
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] uppercase tracking-wider">
                      Verified Resume
                    </span>
                  </div>
                  <p className="font-mono text-xs text-gold-muted tracking-wider">
                    Digital Systems Architect & Full-Stack Builder • Batam, ID (GMT+7)
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handleCopyText}
                  className="px-3 py-2 glass-card hover:bg-gold-muted/10 text-cream-dark hover:text-gold-muted rounded-lg font-mono text-xs transition-colors flex items-center gap-1.5"
                  title="Copy executive summary snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
                <button
                  onClick={handleDownloadText}
                  className="px-3.5 py-2 glass-card hover:bg-gold-muted/10 hover:border-gold-muted/40 text-cream-dark hover:text-gold-muted rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-1.5"
                  title="Download Plaintext Technical CV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span> CV
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 bg-cream text-deep-black hover:bg-gold-muted rounded-lg font-sans font-bold text-xs transition-all duration-200 flex items-center gap-1.5 shadow-md"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 glass-card hover:bg-graphite text-cream-dark hover:text-cream rounded-lg transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 px-6 pt-4 border-b border-graphite/40 bg-graphite/20 overflow-x-auto no-scrollbar">
              {[
                { id: "summary", label: "Executive Summary", icon: Terminal },
                { id: "projects", label: "Systems & Projects", icon: Layers },
                { id: "skills", label: "Tech Stack & Skills", icon: Cpu },
                { id: "services", label: "Engagement Models", icon: Award },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 border-b-2 flex items-center gap-2 whitespace-nowrap ${
                      isActive
                        ? "border-gold-muted text-gold-muted font-bold bg-gold-muted/5 rounded-t-lg"
                        : "border-transparent text-cream-dark/60 hover:text-cream hover:border-graphite"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gold-muted" : "text-cream-dark/50"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
              
              {/* Tab 1: Executive Summary */}
              {activeTab === "summary" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="glass-card p-6 rounded-xl border border-graphite/60 space-y-4">
                    <h4 className="font-mono text-xs text-gold-muted uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-muted" />
                      <span>Professional Profile</span>
                    </h4>
                    <p className="text-sm text-cream-dark/90 leading-relaxed font-sans">
                      I am <strong className="text-cream">Ahlul Firdaus</strong>, a <strong className="text-gold-muted">Digital Systems Architect & Full-Stack Builder</strong> based in Batam, Indonesia. I specialize in designing and engineering custom software ecosystems from strategic architecture blueprint to high-fidelity deployment.
                    </p>
                    <p className="text-sm text-cream-dark/90 leading-relaxed font-sans">
                      My experience spans building B2B export escrow systems, community governance PWA portals, high-density operational SaaS dashboards, transparent public ledgers, and sub-second headless storefronts.
                    </p>
                  </div>

                  {/* Contact Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3.5 glass-card rounded-xl border border-graphite/50 space-y-1">
                      <div className="flex items-center gap-2 text-gold-muted font-mono text-[10px] uppercase">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Location</span>
                      </div>
                      <div className="text-xs font-bold text-cream">Batam, Kepri, ID</div>
                      <div className="text-[10px] text-cream-dark/50 font-mono">GMT+7 (WIB)</div>
                    </div>

                    <div className="p-3.5 glass-card rounded-xl border border-graphite/50 space-y-1">
                      <div className="flex items-center gap-2 text-gold-muted font-mono text-[10px] uppercase">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </div>
                      <div className="text-xs font-bold text-cream truncate">ahlul.firdaus@gmail.com</div>
                      <div className="text-[10px] text-cream-dark/50 font-mono">Primary Contact</div>
                    </div>

                    <div className="p-3.5 glass-card rounded-xl border border-graphite/50 space-y-1">
                      <div className="flex items-center gap-2 text-gold-muted font-mono text-[10px] uppercase">
                        <Phone className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </div>
                      <div className="text-xs font-bold text-cream">+62 812-9125-4064</div>
                      <div className="text-[10px] text-cream-dark/50 font-mono">Fast Response</div>
                    </div>

                    <div className="p-3.5 glass-card rounded-xl border border-graphite/50 space-y-1">
                      <div className="flex items-center gap-2 text-gold-muted font-mono text-[10px] uppercase">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Website</span>
                      </div>
                      <div className="text-xs font-bold text-cream">ahlulfirdaus.com</div>
                      <div className="text-[10px] text-cream-dark/50 font-mono">Live Portfolio</div>
                    </div>
                  </div>

                  {/* Architectural Philosophy */}
                  <div className="p-5 glass-card rounded-xl border border-graphite/60 space-y-3">
                    <h5 className="font-mono text-xs text-cream uppercase tracking-wider font-bold">
                      Architectural Philosophy
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-gold-muted flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Clean Domain Design</span>
                        </div>
                        <p className="text-[11px] text-cream-dark/70 leading-normal">
                          Model exact real-world business constraints into domain logic & clean database schemas before coding.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-gold-muted flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Sub-Second Velocity</span>
                        </div>
                        <p className="text-[11px] text-cream-dark/70 leading-normal">
                          LCP &lt; 0.8s loading benchmarks with Next.js Turbopack, SSR caching, and asset optimization.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-gold-muted flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Zero-Downtime Reliability</span>
                        </div>
                        <p className="text-[11px] text-cream-dark/70 leading-normal">
                          Fail-safe error fallbacks, lazy API client initialization, and type-checked payload contracts.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Systems & Projects */}
              {activeTab === "projects" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {[
                    {
                      name: "OOI — Origin Of Indonesia",
                      tag: "B2B Export Platform & Commodity Catalog",
                      desc: "Founder-led B2B showcase platform presenting premium Indonesian origin commodities to global importers with standardized technical specs and sample-request workflows.",
                      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify", "GitHub"],
                      badge: "B2B Export"
                    },
                    {
                      name: "CGV10 Portal Warga",
                      tag: "Digital Community System — portalwargacgv.id",
                      desc: "Centralized community hub for 500+ residents of RT 010 / RW 021 with official notices, pengurus directory, transparent Kas RT balance, and PALUGADA resident marketplace.",
                      stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
                      badge: "Live Project"
                    },
                    {
                      name: "Masjid Al-Ikhlas Digital Presence",
                      tag: "Public Info & Transparency Hub — alikhlascgv.vercel.app",
                      desc: "Mosque portal featuring real-time Batam prayer schedule sync, live prayer countdown clock, weekly transparent Infaq financial reporting, and QRIS donation guide.",
                      stack: ["Next.js", "HTML5", "Tailwind CSS", "JavaScript", "Vercel"],
                      badge: "Live Project"
                    },
                    {
                      name: "OneEcos Business Operating System",
                      tag: "Unified Order-to-Cash Transaction Engine",
                      desc: "Business operating system eliminating manual coordination across 8 transaction phases (RFQ -> Quote -> Sales Order -> Procurement -> Production -> Logistics -> Invoicing -> Payment).",
                      stack: ["React", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS"],
                      badge: "A Fundamental Stage"
                    },
                    {
                      name: "PT. Corum — Sustainability Reporting System",
                      tag: "Industrial ESG & Plant Compliance Dashboard",
                      desc: "Consolidated 23 critical environmental and operational parameters across 7 factory departments with offline-first client-side JSON interchange and PDF audit generation.",
                      stack: ["HTML5", "JavaScript (ES6+)", "Chart.js", "Tailwind CSS", "CSS Print"],
                      badge: "Live Project"
                    },
                    {
                      name: "Sakku 2.0 — Privacy-First Wealth OS",
                      tag: "Local-First PWA — sakku.ahlulfirdaus.com",
                      desc: "Zero-knowledge personal & family financial operating system featuring natural-language 'Catat Cepat' parsing, envelope budgeting, and multi-account Net Worth tracking.",
                      stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "PWA"],
                      badge: "Live Project"
                    }
                  ].map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-5 glass-card rounded-xl border border-graphite/60 hover:border-gold-muted/40 transition-colors space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <h5 className="font-sans font-bold text-cream text-base">{proj.name}</h5>
                          <span className="px-2 py-0.5 rounded-md bg-gold-muted/10 border border-gold-muted/30 text-gold-muted font-mono text-[9px]">
                            {proj.badge}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-gold-muted">{proj.tag}</span>
                      </div>
                      <p className="text-xs text-cream-dark/80 font-sans leading-relaxed">{proj.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.stack.map((st, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-graphite-dark/80 text-cream-dark/70 font-mono text-[10px] border border-graphite/50"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Tab 3: Tech Stack & Skills */}
              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="p-5 glass-card rounded-xl border border-graphite/60 space-y-3">
                    <div className="flex items-center gap-2 text-gold-muted font-mono text-xs uppercase font-bold">
                      <Code2 className="w-4 h-4" />
                      <span>Frontend & Engineering</span>
                    </div>
                    <ul className="space-y-2 text-xs text-cream-dark/85 font-sans">
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Next.js 16 (Turbopack, SSR, SSG)</span>
                        <span className="font-mono text-[10px] text-emerald-400">Expert</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>React 19 & Client/Server Components</span>
                        <span className="font-mono text-[10px] text-emerald-400">Expert</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>TypeScript & Type Safety</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Tailwind CSS v4 & Glassmorphism UI</span>
                        <span className="font-mono text-[10px] text-emerald-400">Expert</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Progressive Web Apps (PWA)</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 glass-card rounded-xl border border-graphite/60 space-y-3">
                    <div className="flex items-center gap-2 text-gold-muted font-mono text-xs uppercase font-bold">
                      <Database className="w-4 h-4" />
                      <span>Backend & Database</span>
                    </div>
                    <ul className="space-y-2 text-xs text-cream-dark/85 font-sans">
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Node.js & Express REST APIs</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>PostgreSQL & Supabase BaaS</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>GraphQL Query Architectures</span>
                        <span className="font-mono text-[10px] text-emerald-400">Proficient</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Prisma ORM Data Modeling</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Resend Email API & Webhook Listeners</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 glass-card rounded-xl border border-graphite/60 space-y-3">
                    <div className="flex items-center gap-2 text-gold-muted font-mono text-xs uppercase font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Architecture & Business Domain</span>
                    </div>
                    <ul className="space-y-2 text-xs text-cream-dark/85 font-sans">
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Automated B2B Escrow Logic</span>
                        <span className="font-mono text-[10px] text-emerald-400">Specialist</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Customs API Documentation Sync</span>
                        <span className="font-mono text-[10px] text-emerald-400">Specialist</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>QRIS & Bank Gateway Integration</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Algorithmic Valuation Models</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 glass-card rounded-xl border border-graphite/60 space-y-3">
                    <div className="flex items-center gap-2 text-gold-muted font-mono text-xs uppercase font-bold">
                      <Server className="w-4 h-4" />
                      <span>Infrastructure & Hosting</span>
                    </div>
                    <ul className="space-y-2 text-xs text-cream-dark/85 font-sans">
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Vercel Edge Network Deployment</span>
                        <span className="font-mono text-[10px] text-emerald-400">Expert</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>AWS S3 Asset Management</span>
                        <span className="font-mono text-[10px] text-emerald-400">Proficient</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-graphite/40 pb-1.5">
                        <span>Git, GitHub Actions & CI/CD</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Netlify Static & Edge Hosting</span>
                        <span className="font-mono text-[10px] text-emerald-400">Advanced</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Engagement Models */}
              {activeTab === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 glass-card rounded-xl border border-graphite/60 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-widest block">Option 01</span>
                        <h5 className="font-sans font-bold text-cream text-lg">System Audit & Blueprint</h5>
                        <div className="font-mono text-gold-muted font-bold text-sm">Rp 7.5M / $500</div>
                        <p className="text-xs text-cream-dark/70 font-sans leading-relaxed pt-2">
                          Comprehensive analysis of existing legacy codebases, security bottlenecks, and database schemas. Delivered as an actionable 3-5 day architectural blueprint.
                        </p>
                      </div>
                      <a
                        href="#contact"
                        onClick={onClose}
                        className="w-full py-2.5 glass-card hover:border-gold-muted text-center text-xs font-mono uppercase tracking-wider text-cream hover:text-gold-muted rounded-lg transition-colors"
                      >
                        Request Audit
                      </a>
                    </div>

                    <div className="p-5 glass-card rounded-xl border border-gold-muted/50 bg-gold-muted/5 flex flex-col justify-between space-y-4 relative">
                      <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-gold-muted text-deep-black font-mono text-[9px] uppercase font-bold">
                        Most Requested
                      </span>
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] text-gold-muted uppercase tracking-widest block">Option 02</span>
                        <h5 className="font-sans font-bold text-cream text-lg">Full Ecosystem Build</h5>
                        <div className="font-mono text-gold-muted font-bold text-sm">Rp 25M / $1,800</div>
                        <p className="text-xs text-cream-dark/80 font-sans leading-relaxed pt-2">
                          End-to-end strategy, custom database architecture, payment gateway integration (QRIS/Escrow), and production deployment in 3–6 weeks with 30-day warranty.
                        </p>
                      </div>
                      <a
                        href="#contact"
                        onClick={onClose}
                        className="w-full py-2.5 bg-cream hover:bg-gold-muted text-deep-black text-center text-xs font-sans font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md"
                      >
                        Inquire Build
                      </a>
                    </div>

                    <div className="p-5 glass-card rounded-xl border border-graphite/60 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-widest block">Option 03</span>
                        <h5 className="font-sans font-bold text-cream text-lg">Fractional CTO Retainer</h5>
                        <div className="font-mono text-gold-muted font-bold text-sm">Rp 15M/mo / $1,000/mo</div>
                        <p className="text-xs text-cream-dark/70 font-sans leading-relaxed pt-2">
                          Ongoing weekly architectural guidance, code reviews, and technology advisory for growing enterprises without full-time executive overhead.
                        </p>
                      </div>
                      <a
                        href="#contact"
                        onClick={onClose}
                        className="w-full py-2.5 glass-card hover:border-gold-muted text-center text-xs font-mono uppercase tracking-wider text-cream hover:text-gold-muted rounded-lg transition-colors"
                      >
                        Retain Advisor
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-graphite/60 bg-graphite-dark/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-cream-dark/60">
              <div>Press <kbd className="px-1.5 py-0.5 rounded bg-graphite border border-graphite-dark text-[10px] text-cream">ESC</kbd> or click backdrop to exit viewer</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/6281291254064"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-muted transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>+62 812-9125-4064</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
