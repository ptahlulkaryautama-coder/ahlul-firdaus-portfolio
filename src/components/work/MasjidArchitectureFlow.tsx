"use client";

import React, { useState } from "react";
import {
  Users,
  ShieldCheck,
  Building2,
  Clock,
  BookOpen,
  Radio,
  FileCheck2,
  Activity,
  ArrowRight
} from "lucide-react";

export default function MasjidArchitectureFlow() {
  const [activeTrack, setActiveTrack] = useState<"all" | "jamaah" | "dkm">("all");

  const isHighlighted = (track: "jamaah" | "dkm") => {
    return activeTrack === "all" || activeTrack === track;
  };

  return (
    <div className="w-full bg-[#08120B] rounded-2xl border border-[#0E3828] p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
      {/* Dynamic Keyframes for Hardware-Accelerated Flow Strips */}
      <style jsx>{`
        @keyframes flowDash {
          from {
            stroke-dashoffset: 24;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flow-animated-emerald {
          stroke-dasharray: 6 6;
          animation: flowDash 0.85s linear infinite;
        }
        .flow-animated-gold {
          stroke-dasharray: 6 6;
          animation: flowDash 0.85s linear infinite;
        }
      `}</style>

      {/* Islamic Geometric Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C9A55A 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#0E3828]/80 relative z-10">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#C9A55A] uppercase font-bold block mb-1">
            Visual Information &amp; Stewardship Architecture
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>Community Information &amp; DKM Stewardship Flow</span>
          </h3>
        </div>

        {/* Filter / Track Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-[#050D07] border border-[#0E3828] rounded-xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTrack("all")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeTrack === "all"
                ? "bg-[#0E3828] text-[#C9A55A] font-bold shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All Tracks
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack("jamaah")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTrack === "jamaah"
                ? "bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold shadow"
                : "text-slate-400 hover:text-emerald-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Jamaah
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack("dkm")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTrack === "dkm"
                ? "bg-amber-950 border border-[#C9A55A]/50 text-[#C9A55A] font-bold shadow"
                : "text-slate-400 hover:text-[#C9A55A]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A]" />
            DKM
          </button>
        </div>
      </div>

      {/* GRAPHICAL FLOW CHART CANVAS (DESKTOP & TABLET) */}
      <div className="hidden lg:block relative w-full overflow-hidden my-2">
        <svg
          viewBox="0 0 1000 420"
          className="w-full h-auto"
          style={{ minHeight: "400px" }}
        >
          <defs>
            {/* Arrowhead Markers */}
            <marker
              id="arrow-masjid-emerald"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 L 3.5 6 z" fill="#10b981" />
            </marker>

            <marker
              id="arrow-masjid-gold"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 L 3.5 6 z" fill="#C9A55A" />
            </marker>

            <marker
              id="arrow-masjid-dimmed"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#1e293b" />
            </marker>

            {/* Glowing Linear Gradients for Connectors */}
            <linearGradient id="flow-masjid-emerald-1" gradientUnits="userSpaceOnUse" x1="220" y1="85" x2="340" y2="85">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="flow-masjid-gold-1" gradientUnits="userSpaceOnUse" x1="220" y1="290" x2="340" y2="290">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#C9A55A" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>

            {/* Branches: Hub to Destination Modules */}
            <linearGradient id="flow-branch-1" gradientUnits="userSpaceOnUse" x1="560" y1="75" x2="680" y2="45">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="flow-branch-2" gradientUnits="userSpaceOnUse" x1="560" y1="85" x2="680" y2="145">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="flow-branch-3" gradientUnits="userSpaceOnUse" x1="560" y1="95" x2="680" y2="245">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="flow-branch-4" gradientUnits="userSpaceOnUse" x1="560" y1="105" x2="680" y2="345">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            {/* DKM Feedback Line: Admin Engine -> Digital Hub */}
            <linearGradient id="flow-dkm-feedback" gradientUnits="userSpaceOnUse" x1="450" y1="240" x2="450" y2="140">
              <stop offset="0%" stopColor="#C9A55A" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* ================= SVG CONNECTOR LINES & ANIMATED FLOWS ================= */}

          {/* 1. TRACK JAMAAH (Col 1 -> Col 2): (x=220, y=85) -> (x=335, y=85) */}
          <path
            d="M 220 85 L 335 85"
            fill="none"
            stroke={isHighlighted("jamaah") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 220 85 L 335 85"
            fill="none"
            stroke={isHighlighted("jamaah") ? "url(#flow-masjid-emerald-1)" : "#334155"}
            strokeWidth={isHighlighted("jamaah") ? "3" : "1.5"}
            markerEnd={isHighlighted("jamaah") ? "url(#arrow-masjid-emerald)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("jamaah") ? "flow-animated-emerald" : ""}
          />

          {/* 2. TRACK DKM (Col 1 -> Col 2): (x=220, y=290) -> (x=335, y=290) */}
          <path
            d="M 220 290 L 335 290"
            fill="none"
            stroke={isHighlighted("dkm") ? "#78350f" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 220 290 L 335 290"
            fill="none"
            stroke={isHighlighted("dkm") ? "url(#flow-masjid-gold-1)" : "#334155"}
            strokeWidth={isHighlighted("dkm") ? "3" : "1.5"}
            markerEnd={isHighlighted("dkm") ? "url(#arrow-masjid-gold)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("dkm") ? "flow-animated-gold" : ""}
          />

          {/* 3. DKM VERIFIED RECONCILIATION -> DIGITAL HUB (Col 2 Bottom to Col 2 Top) */}
          <path
            d="M 450 240 L 450 140"
            fill="none"
            stroke={isHighlighted("dkm") ? "#78350f" : "#1e293b"}
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <path
            d="M 450 240 L 450 140"
            fill="none"
            stroke={isHighlighted("dkm") ? "url(#flow-dkm-feedback)" : "#334155"}
            strokeWidth={isHighlighted("dkm") ? "2.5" : "1.5"}
            markerEnd={isHighlighted("dkm") ? "url(#arrow-masjid-gold)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("dkm") ? "flow-animated-gold" : ""}
          />

          {/* 4. HUB TO DESTINATIONS (Col 2 -> Col 3) */}
          {/* 4a. Prayer & Countdown */}
          <path
            d="M 560 70 C 610 70, 620 45, 675 45"
            fill="none"
            stroke={isHighlighted("jamaah") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 560 70 C 610 70, 620 45, 675 45"
            fill="none"
            stroke={isHighlighted("jamaah") ? "url(#flow-branch-1)" : "#334155"}
            strokeWidth={isHighlighted("jamaah") ? "3" : "1.5"}
            markerEnd={isHighlighted("jamaah") ? "url(#arrow-masjid-emerald)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("jamaah") ? "flow-animated-emerald" : ""}
          />

          {/* 4b. Programs, Agenda & TPQ */}
          <path
            d="M 560 85 C 610 85, 620 145, 675 145"
            fill="none"
            stroke={isHighlighted("jamaah") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 560 85 C 610 85, 620 145, 675 145"
            fill="none"
            stroke={isHighlighted("jamaah") ? "url(#flow-branch-2)" : "#334155"}
            strokeWidth={isHighlighted("jamaah") ? "3" : "1.5"}
            markerEnd={isHighlighted("jamaah") ? "url(#arrow-masjid-emerald)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("jamaah") ? "flow-animated-emerald" : ""}
          />

          {/* 4c. Media & Knowledge Hub */}
          <path
            d="M 560 95 C 610 95, 620 245, 675 245"
            fill="none"
            stroke={isHighlighted("jamaah") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 560 95 C 610 95, 620 245, 675 245"
            fill="none"
            stroke={isHighlighted("jamaah") ? "url(#flow-branch-3)" : "#334155"}
            strokeWidth={isHighlighted("jamaah") ? "3" : "1.5"}
            markerEnd={isHighlighted("jamaah") ? "url(#arrow-masjid-emerald)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("jamaah") ? "flow-animated-emerald" : ""}
          />

          {/* 4d. Transparency & Infaq Support */}
          <path
            d="M 560 105 C 610 105, 620 345, 675 345"
            fill="none"
            stroke={isHighlighted("jamaah") || isHighlighted("dkm") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 560 105 C 610 105, 620 345, 675 345"
            fill="none"
            stroke={isHighlighted("jamaah") || isHighlighted("dkm") ? "url(#flow-branch-4)" : "#334155"}
            strokeWidth={isHighlighted("jamaah") || isHighlighted("dkm") ? "3" : "1.5"}
            markerEnd={isHighlighted("jamaah") || isHighlighted("dkm") ? "url(#arrow-masjid-emerald)" : "url(#arrow-masjid-dimmed)"}
            className={isHighlighted("jamaah") || isHighlighted("dkm") ? "flow-animated-emerald" : ""}
          />

          {/* ================= FLOWCHART NODES (CARDS) ================= */}

          {/* COLUMN 1: ACTORS & STAKEHOLDERS (x=20 to x=220, width=200) */}
          {/* Node 1: Jamaah & Community */}
          <foreignObject x="20" y="35" width="200" height="95">
            <div
              onClick={() => setActiveTrack(activeTrack === "jamaah" ? "all" : "jamaah")}
              className={`w-full h-full rounded-2xl p-3.5 border flex items-center gap-3 cursor-pointer transition-all ${
                isHighlighted("jamaah")
                  ? "bg-[#0E3828]/90 border-emerald-500/60 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-500/30"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block">
                  Audience // Public
                </span>
                <div className="text-xs font-bold text-white leading-tight">Jamaah &amp; Community</div>
                <span className="text-[9px] text-slate-300 block mt-0.5">Warga, TPQ &amp; Donatur</span>
              </div>
            </div>
          </foreignObject>

          {/* Node 2: DKM & Administrators */}
          <foreignObject x="20" y="240" width="200" height="95">
            <div
              onClick={() => setActiveTrack(activeTrack === "dkm" ? "all" : "dkm")}
              className={`w-full h-full rounded-2xl p-3.5 border flex items-center gap-3 cursor-pointer transition-all ${
                isHighlighted("dkm")
                  ? "bg-[#162719]/90 border-[#C9A55A]/60 shadow-lg shadow-amber-950/60 ring-1 ring-[#C9A55A]/30"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-[#C9A55A]/10 border border-[#C9A55A]/30 text-[#C9A55A] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-[#C9A55A] font-bold block">
                  Stewardship // DKM
                </span>
                <div className="text-xs font-bold text-white leading-tight">DKM &amp; Admins</div>
                <span className="text-[9px] text-slate-300 block mt-0.5">Pengurus &amp; Keuangan</span>
              </div>
            </div>
          </foreignObject>

          {/* COLUMN 2: ENGINES & PORTALS (x=340 to x=560, width=220) */}
          {/* Node 3: Masjid Digital Hub */}
          <foreignObject x="340" y="35" width="220" height="95">
            <div
              className={`w-full h-full rounded-2xl p-3.5 border flex flex-col justify-between transition-all ${
                isHighlighted("jamaah")
                  ? "bg-[#0E3828]/95 border-emerald-500/60 shadow-md ring-1 ring-emerald-500/20"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Masjid Digital Hub</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[9.5px] text-slate-300 font-mono leading-tight">
                Unified Public Gateway &amp; Installable PWA Experience
              </p>
              <div className="text-[8.5px] font-mono text-emerald-300/80">
                Worship • Education • Media • Infaq
              </div>
            </div>
          </foreignObject>

          {/* Node 4: Authorized Admin & Finance Engine */}
          <foreignObject x="340" y="240" width="220" height="95">
            <div
              className={`w-full h-full rounded-2xl p-3.5 border flex flex-col justify-between transition-all ${
                isHighlighted("dkm")
                  ? "bg-[#142618]/95 border-[#C9A55A]/60 shadow-md ring-1 ring-[#C9A55A]/20"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-[#C9A55A]" />
                  <span className="text-xs font-bold text-white">Admin &amp; Finance Engine</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#C9A55A] animate-pulse" />
              </div>
              <p className="text-[9.5px] text-slate-300 font-mono leading-tight">
                Protected Cash Ledger, Reconciliation &amp; Content Management
              </p>
              <div className="text-[8.5px] font-mono text-[#C9A55A]/90">
                Verified Stewardship → Public Broadcast
              </div>
            </div>
          </foreignObject>

          {/* COLUMN 3: DESTINATION MODULES (x=680 to x=980, width=300) */}
          {/* Node 5: Dynamic Prayer & Batam Schedule */}
          <foreignObject x="680" y="10" width="300" height="70">
            <div
              className={`w-full h-full rounded-xl p-3 border flex items-center justify-between transition-all ${
                isHighlighted("jamaah")
                  ? "bg-slate-900/90 border-emerald-500/50 shadow-md"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Worship &amp; Prayer Schedule</h4>
                  <span className="text-[9.5px] text-slate-400 block font-mono">
                    Jadwal Sholat Batam &amp; Live Adhan Countdown
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Dynamic
              </span>
            </div>
          </foreignObject>

          {/* Node 6: Programs, Agenda & TPQ */}
          <foreignObject x="680" y="110" width="300" height="70">
            <div
              className={`w-full h-full rounded-xl p-3 border flex items-center justify-between transition-all ${
                isHighlighted("jamaah")
                  ? "bg-slate-900/90 border-emerald-500/50 shadow-md"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">TPQ &amp; Program Hub</h4>
                  <span className="text-[9.5px] text-slate-400 block font-mono">
                    TPQ Al-Mardhotillah, Kajian &amp; Agenda Bulanan
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Education
              </span>
            </div>
          </foreignObject>

          {/* Node 7: Media & Islamic Knowledge */}
          <foreignObject x="680" y="210" width="300" height="70">
            <div
              className={`w-full h-full rounded-xl p-3 border flex items-center justify-between transition-all ${
                isHighlighted("jamaah")
                  ? "bg-slate-900/90 border-emerald-500/50 shadow-md"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Media Hub &amp; Warta Masjid</h4>
                  <span className="text-[9.5px] text-slate-400 block font-mono">
                    Buletin Khutbah, Rekaman Kajian &amp; Berita DKM
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Knowledge
              </span>
            </div>
          </foreignObject>

          {/* Node 8: Transparency, Kas & Infaq Support */}
          <foreignObject x="680" y="310" width="300" height="70">
            <div
              className={`w-full h-full rounded-xl p-3 border flex items-center justify-between transition-all ${
                isHighlighted("jamaah") || isHighlighted("dkm")
                  ? "bg-slate-900/90 border-[#C9A55A]/50 shadow-md"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#C9A55A]/10 text-[#C9A55A]">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Transparency &amp; Infaq Guidance</h4>
                  <span className="text-[9.5px] text-slate-400 block font-mono">
                    Ringkasan Kas Terbuka &amp; Panduan Infaq QRIS
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-[#C9A55A] bg-amber-950/80 px-2 py-0.5 rounded border border-[#C9A55A]/30">
                Stewardship
              </span>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* MOBILE RESPONSIVE VISUAL FLOWCHART CARDS */}
      <div className="lg:hidden space-y-4">
        {/* Track 1: Jamaah */}
        <div className="p-4 rounded-2xl bg-[#0C1810] border border-emerald-500/40 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#0E3828]">
            <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              1. Jamaah &amp; Community Pathway
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Jamaah &amp; TPQ Families</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              <span>Masjid Digital Hub (PWA)</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-slate-200">
                <span className="font-bold text-white block">Worship &amp; Prayer</span>
                <span className="text-[10px] text-slate-400">Jadwal Sholat &amp; Countdown</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-slate-200">
                <span className="font-bold text-white block">TPQ &amp; Programs</span>
                <span className="text-[10px] text-slate-400">Kajian &amp; Agenda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Track 2: DKM */}
        <div className="p-4 rounded-2xl bg-[#0C1810] border border-[#C9A55A]/40 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#0E3828]">
            <span className="font-mono text-xs font-bold text-[#C9A55A] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              2. DKM Stewardship &amp; Operations Pathway
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Authorized DKM Administrators</span>
              <ArrowRight className="w-4 h-4 text-[#C9A55A] animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-950/60 border border-[#C9A55A]/30 text-[#C9A55A]">
              <span>Admin &amp; Finance Engine</span>
              <ArrowRight className="w-4 h-4 text-[#C9A55A] animate-pulse" />
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-[#C9A55A]/30 text-slate-200">
              <strong className="text-white block mb-0.5">Verified Public Stewardship</strong>
              <span className="text-[11px] text-slate-400">
                Buku Kas Masjid, Rekonsiliasi &amp; Publikasi Warta Resmi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Explanatory Legend Footer */}
      <div className="mt-5 pt-3.5 border-t border-[#0E3828]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Live Running Strips: Garis beranimasi menunjukkan alur informasi jamaah &amp; tata kelola DKM.</span>
        </div>
        <div className="text-[10px] text-slate-500">
          Masjid Al Ikhlas • Cipta Greenville Batam
        </div>
      </div>
    </div>
  );
}
