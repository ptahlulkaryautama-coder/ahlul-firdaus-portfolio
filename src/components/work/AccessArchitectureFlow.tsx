"use client";

import React, { useState } from "react";
import {
  UserCheck,
  ShieldCheck,
  Globe,
  Layers,
  Info,
  Sparkles,
  ArrowRight,
  MousePointerClick,
  Activity
} from "lucide-react";

export default function AccessArchitectureFlow() {
  const [activeTrack, setActiveTrack] = useState<"all" | "resident" | "admin" | "public">("all");

  const isHighlighted = (track: "resident" | "admin" | "public") => {
    return activeTrack === "all" || activeTrack === track;
  };

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
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
        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(16, 185, 129, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.9));
          }
        }
        .flow-animated-emerald {
          stroke-dasharray: 6 6;
          animation: flowDash 0.85s linear infinite;
        }
        .flow-animated-amber {
          stroke-dasharray: 6 6;
          animation: flowDash 0.85s linear infinite;
        }
        .flow-animated-teal {
          stroke-dasharray: 6 6;
          animation: flowDash 0.85s linear infinite;
        }
      `}</style>

      {/* Blueprint Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80 relative z-10">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-teal-400 uppercase font-bold block mb-1">
            Visual Information Architecture
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>6. Access &amp; Information Flow Architecture</span>
          </h3>
        </div>

        {/* Filter / Track Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTrack("all")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeTrack === "all"
                ? "bg-slate-800 text-white font-bold shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All Tracks
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack("resident")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTrack === "resident"
                ? "bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold shadow"
                : "text-slate-400 hover:text-emerald-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Resident
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack("admin")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTrack === "admin"
                ? "bg-amber-950 border border-amber-500/50 text-amber-300 font-bold shadow"
                : "text-slate-400 hover:text-amber-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Admin
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack("public")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTrack === "public"
                ? "bg-teal-950 border border-teal-500/50 text-teal-300 font-bold shadow"
                : "text-slate-400 hover:text-teal-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Public
          </button>
        </div>
      </div>

      {/* GRAPHICAL FLOW CHART CANVAS (DESKTOP & TABLET) */}
      <div className="hidden lg:block relative w-full overflow-hidden my-2">
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-auto"
          style={{ minHeight: "380px" }}
        >
          <defs>
            {/* Arrowhead Markers with Glow */}
            <marker
              id="arrow-emerald"
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
              id="arrow-amber"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 L 3.5 6 z" fill="#f59e0b" />
            </marker>

            <marker
              id="arrow-teal"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 L 3.5 6 z" fill="#14b8a6" />
            </marker>

            <marker
              id="arrow-dimmed"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#334155" />
            </marker>

            {/* Glowing Linear Gradients for Connectors (using userSpaceOnUse so horizontal lines render correctly) */}
            <linearGradient id="flow-emerald-1" gradientUnits="userSpaceOnUse" x1="230" y1="65" x2="340" y2="65">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="flow-emerald-2" gradientUnits="userSpaceOnUse" x1="550" y1="65" x2="670" y2="85">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="flow-amber-1" gradientUnits="userSpaceOnUse" x1="230" y1="200" x2="340" y2="200">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <linearGradient id="flow-amber-2a" gradientUnits="userSpaceOnUse" x1="550" y1="190" x2="670" y2="115">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <linearGradient id="flow-amber-2b" gradientUnits="userSpaceOnUse" x1="550" y1="210" x2="670" y2="285">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <linearGradient id="flow-teal-1" gradientUnits="userSpaceOnUse" x1="230" y1="335" x2="340" y2="335">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>

            <linearGradient id="flow-teal-2" gradientUnits="userSpaceOnUse" x1="550" y1="335" x2="670" y2="315">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>

            {/* Glow filters */}
            <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ================= SVG CONNECTOR LINES & ANIMATED FLOWS ================= */}

          {/* 1. TRACK RESIDENT (Col 1 -> Col 2): (x=230, y=65) -> (x=335, y=65) */}
          <path
            d="M 230 65 L 335 65"
            fill="none"
            stroke={isHighlighted("resident") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 230 65 L 335 65"
            fill="none"
            stroke={isHighlighted("resident") ? "url(#flow-emerald-1)" : "#334155"}
            strokeWidth={isHighlighted("resident") ? "3" : "1.5"}
            markerEnd={isHighlighted("resident") ? "url(#arrow-emerald)" : "url(#arrow-dimmed)"}
            className={isHighlighted("resident") ? "flow-animated-emerald" : ""}
          />

          {/* 2. TRACK RESIDENT (Col 2 -> Col 3): (x=550, y=65) -> (x=665, y=85) */}
          <path
            d="M 550 65 C 600 65, 615 85, 665 85"
            fill="none"
            stroke={isHighlighted("resident") ? "#064e3b" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 550 65 C 600 65, 615 85, 665 85"
            fill="none"
            stroke={isHighlighted("resident") ? "url(#flow-emerald-2)" : "#334155"}
            strokeWidth={isHighlighted("resident") ? "3" : "1.5"}
            markerEnd={isHighlighted("resident") ? "url(#arrow-emerald)" : "url(#arrow-dimmed)"}
            className={isHighlighted("resident") ? "flow-animated-emerald" : ""}
          />

          {/* 3. TRACK ADMIN (Col 1 -> Col 2): (x=230, y=200) -> (x=335, y=200) */}
          <path
            d="M 230 200 L 335 200"
            fill="none"
            stroke={isHighlighted("admin") ? "#78350f" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 230 200 L 335 200"
            fill="none"
            stroke={isHighlighted("admin") ? "url(#flow-amber-1)" : "#334155"}
            strokeWidth={isHighlighted("admin") ? "3" : "1.5"}
            markerEnd={isHighlighted("admin") ? "url(#arrow-amber)" : "url(#arrow-dimmed)"}
            className={isHighlighted("admin") ? "flow-animated-amber" : ""}
          />

          {/* 4. TRACK ADMIN (Branch Up, Col 2 -> Col 3): (x=550, y=190) -> (x=665, y=115) */}
          <path
            d="M 550 190 C 600 190, 615 115, 665 115"
            fill="none"
            stroke={isHighlighted("admin") ? "#78350f" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 550 190 C 600 190, 615 115, 665 115"
            fill="none"
            stroke={isHighlighted("admin") ? "url(#flow-amber-2a)" : "#334155"}
            strokeWidth={isHighlighted("admin") ? "3" : "1.5"}
            markerEnd={isHighlighted("admin") ? "url(#arrow-amber)" : "url(#arrow-dimmed)"}
            className={isHighlighted("admin") ? "flow-animated-amber" : ""}
          />

          {/* 5. TRACK ADMIN (Branch Down, Col 2 -> Col 3): (x=550, y=210) -> (x=665, y=285) */}
          <path
            d="M 550 210 C 600 210, 615 285, 665 285"
            fill="none"
            stroke={isHighlighted("admin") ? "#78350f" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 550 210 C 600 210, 615 285, 665 285"
            fill="none"
            stroke={isHighlighted("admin") ? "url(#flow-amber-2b)" : "#334155"}
            strokeWidth={isHighlighted("admin") ? "3" : "1.5"}
            markerEnd={isHighlighted("admin") ? "url(#arrow-amber)" : "url(#arrow-dimmed)"}
            className={isHighlighted("admin") ? "flow-animated-amber" : ""}
          />

          {/* 6. TRACK PUBLIC (Col 1 -> Col 2): (x=230, y=335) -> (x=335, y=335) */}
          <path
            d="M 230 335 L 335 335"
            fill="none"
            stroke={isHighlighted("public") ? "#134e4a" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 230 335 L 335 335"
            fill="none"
            stroke={isHighlighted("public") ? "url(#flow-teal-1)" : "#334155"}
            strokeWidth={isHighlighted("public") ? "3" : "1.5"}
            markerEnd={isHighlighted("public") ? "url(#arrow-teal)" : "url(#arrow-dimmed)"}
            className={isHighlighted("public") ? "flow-animated-teal" : ""}
          />

          {/* 7. TRACK PUBLIC (Col 2 -> Col 3): (x=550, y=335) -> (x=665, y=315) */}
          <path
            d="M 550 335 C 600 335, 615 315, 665 315"
            fill="none"
            stroke={isHighlighted("public") ? "#134e4a" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 550 335 C 600 335, 615 315, 665 315"
            fill="none"
            stroke={isHighlighted("public") ? "url(#flow-teal-2)" : "#334155"}
            strokeWidth={isHighlighted("public") ? "3" : "1.5"}
            markerEnd={isHighlighted("public") ? "url(#arrow-teal)" : "url(#arrow-dimmed)"}
            className={isHighlighted("public") ? "flow-animated-teal" : ""}
          />

          {/* ================= FLOWCHART NODES (CARDS) ================= */}

          {/* COLUMN 1: ACTORS (x=20 to x=230, width=210) */}
          {/* Node 1: Registered Resident */}
          <foreignObject x="20" y="25" width="210" height="80">
            <div
              onClick={() => setActiveTrack(activeTrack === "resident" ? "all" : "resident")}
              className={`w-full h-full rounded-2xl p-3.5 border flex items-center gap-3 cursor-pointer transition-all ${
                isHighlighted("resident")
                  ? "bg-slate-900/95 border-emerald-500/60 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-500/30"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block">
                  Role // Warga
                </span>
                <div className="text-xs font-bold text-white leading-tight">Registered Resident</div>
              </div>
            </div>
          </foreignObject>

          {/* Node 2: Authorized Admin */}
          <foreignObject x="20" y="160" width="210" height="80">
            <div
              onClick={() => setActiveTrack(activeTrack === "admin" ? "all" : "admin")}
              className={`w-full h-full rounded-2xl p-3.5 border flex items-center gap-3 cursor-pointer transition-all ${
                isHighlighted("admin")
                  ? "bg-slate-900/95 border-amber-500/60 shadow-lg shadow-amber-950/60 ring-1 ring-amber-500/30"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block">
                  Role // Pengurus
                </span>
                <div className="text-xs font-bold text-white leading-tight">Authorized Admin</div>
              </div>
            </div>
          </foreignObject>

          {/* Node 3: Public Visitor */}
          <foreignObject x="20" y="295" width="210" height="80">
            <div
              onClick={() => setActiveTrack(activeTrack === "public" ? "all" : "public")}
              className={`w-full h-full rounded-2xl p-3.5 border flex items-center gap-3 cursor-pointer transition-all ${
                isHighlighted("public")
                  ? "bg-slate-900/95 border-teal-500/60 shadow-lg shadow-teal-950/60 ring-1 ring-teal-500/30"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-teal-400 font-bold block">
                  Role // Umum
                </span>
                <div className="text-xs font-bold text-white leading-tight">Public Visitor</div>
              </div>
            </div>
          </foreignObject>

          {/* COLUMN 2: WORKSPACES / ENTRY PORTALS (x=340 to x=550, width=210) */}
          {/* Node 4: Personal Portal */}
          <foreignObject x="340" y="25" width="210" height="80">
            <div
              className={`w-full h-full rounded-2xl p-3.5 border flex flex-col justify-center transition-all ${
                isHighlighted("resident")
                  ? "bg-slate-900/95 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Personal Portal</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1">
                Personalized Resident Workspace
              </p>
            </div>
          </foreignObject>

          {/* Node 5: Operations Dashboard */}
          <foreignObject x="340" y="160" width="210" height="80">
            <div
              className={`w-full h-full rounded-2xl p-3.5 border flex flex-col justify-center transition-all ${
                isHighlighted("admin")
                  ? "bg-slate-900/95 border-amber-500/50 shadow-md ring-1 ring-amber-500/20"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Operations Dashboard</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1">
                Admin Review &amp; Moderation
              </p>
            </div>
          </foreignObject>

          {/* Node 6: Public Portal */}
          <foreignObject x="340" y="295" width="210" height="80">
            <div
              className={`w-full h-full rounded-2xl p-3.5 border flex flex-col justify-center transition-all ${
                isHighlighted("public")
                  ? "bg-slate-900/95 border-teal-500/50 shadow-md ring-1 ring-teal-500/20"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Public Portal</span>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1">
                Open Community Reference
              </p>
            </div>
          </foreignObject>

          {/* COLUMN 3: DESTINATION DOMAINS (x=670 to x=970, width=300) */}
          {/* Node 7: Services, Finance & PALUGADA */}
          <foreignObject x="670" y="45" width="300" height="110">
            <div
              className={`w-full h-full rounded-2xl p-4 border flex flex-col justify-between transition-all ${
                isHighlighted("resident") || isHighlighted("admin")
                  ? "bg-gradient-to-br from-emerald-950/70 via-slate-900/95 to-slate-900 border-emerald-500/60 shadow-xl"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                <h4 className="text-xs sm:text-sm font-extrabold text-white">
                  Services, Finance &amp; PALUGADA
                </h4>
              </div>
              <p className="text-[10.5px] text-slate-300 leading-snug">
                Layanan Warga, Kas RT Transparan, &amp; Direktori UMKM Lokal
              </p>
              <div className="flex items-center gap-2 text-[9.5px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
                <span className="text-emerald-400 font-bold">Warga Akses</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">Admin Review</span>
              </div>
            </div>
          </foreignObject>

          {/* Node 8: Community Information */}
          <foreignObject x="670" y="245" width="300" height="110">
            <div
              className={`w-full h-full rounded-2xl p-4 border flex flex-col justify-between transition-all ${
                isHighlighted("public") || isHighlighted("admin")
                  ? "bg-gradient-to-br from-teal-950/70 via-slate-900/95 to-slate-900 border-teal-500/60 shadow-xl"
                  : "bg-slate-950/70 border-slate-800 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-400 shrink-0" />
                <h4 className="text-xs sm:text-sm font-extrabold text-white">
                  Community Information
                </h4>
              </div>
              <p className="text-[10.5px] text-slate-300 leading-snug">
                Warta RT Resmi, Agenda Kegiatan Lingkungan &amp; Kontak Pengurus
              </p>
              <div className="flex items-center gap-2 text-[9.5px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
                <span className="text-teal-400 font-bold">Publik Akses</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">Admin Publish</span>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* MOBILE RESPONSIVE VISUAL FLOWCHART CARDS */}
      <div className="lg:hidden space-y-4">
        {/* Track 1: Resident */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/40 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" />
              1. Registered Resident Pathway
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Registered Resident</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              <span>Personal Portal</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/30 text-slate-200">
              <strong className="text-white block mb-0.5">Services, Finance &amp; PALUGADA</strong>
              <span className="text-[11px] text-slate-400">Layanan Warga, Kas RT &amp; Lapak UMKM</span>
            </div>
          </div>
        </div>

        {/* Track 2: Admin */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/40 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              2. Authorized Admin Pathway (Branching)
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Authorized Admin</span>
              <ArrowRight className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300">
              <span>Operations Dashboard</span>
              <ArrowRight className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-500/30 text-slate-200">
                <span className="text-[11px] font-bold text-white block">Services, Finance &amp; PALUGADA</span>
                <span className="text-[10px] text-slate-400">Review &amp; Verifikasi</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-500/30 text-slate-200">
                <span className="text-[11px] font-bold text-white block">Community Information</span>
                <span className="text-[10px] text-slate-400">Penerbitan Warta RT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Track 3: Public */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/40 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-xs font-bold text-teal-400 flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              3. Public Visitor Pathway
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Public Visitor</span>
              <ArrowRight className="w-4 h-4 text-teal-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-teal-950/60 border border-teal-500/30 text-teal-300">
              <span>Public Portal</span>
              <ArrowRight className="w-4 h-4 text-teal-400 animate-pulse" />
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-teal-500/30 text-slate-200">
              <strong className="text-white block mb-0.5">Community Information</strong>
              <span className="text-[11px] text-slate-400">Warta RT &amp; Informasi Lingkungan Terbuka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Explanatory Legend Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Live Running Strips: Garis beranimasi menunjukkan arah aliran data &amp; hak akses sistem.</span>
        </div>
        <div className="text-[10px] text-slate-500">
          RT 010 / RW 021 • Cipta Green Ville
        </div>
      </div>
    </div>
  );
}
