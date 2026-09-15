"use client";

import React from "react";
import Image from "next/image";
import { 
  Building2, 
  CheckCircle2, 
  Clock,
  Sparkles,
  ShoppingBag,
  Users
} from "lucide-react";

interface ProjectThumbnailProps {
  projectId: string;
  projectName: string;
  category: string;
}

export default function ProjectThumbnail({ projectId }: ProjectThumbnailProps) {
  switch (projectId) {
    case "ooi":
      return (
        <div className="w-full h-44 rounded-xl border border-amber-900/30 relative overflow-hidden bg-[#FBF7F0] group-hover:border-[#8B263E]/50 transition-colors">
          <Image
            src="/screenshots/ooi-portfolio-thumbnail-v2.png"
            alt="OOI Origin of Indonesia premium food marketplace and global sourcing platform"
            fill
            unoptimized
            priority
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "cgv10":
      return (
        <div className="w-full h-44 rounded-xl border border-emerald-900/30 relative overflow-hidden bg-slate-950 group-hover:border-emerald-500/50 transition-colors">
          <Image
            src="/Image/project/cgv10/portal-warga-cgv-thumbnail-v2.png"
            alt="Portal Warga CGV integrated residential community platform with resident services, local marketplace, financial transparency, and admin operations"
            fill
            unoptimized
            priority
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "masjid-al-ikhlas":
      return (
        <div className="w-full h-44 rounded-xl border border-emerald-900/40 relative overflow-hidden bg-slate-950 group-hover:border-emerald-500/50 transition-colors">
          <Image
            src="/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-thumbnail-v3-official-logo.png"
            alt="Masjid Al Ikhlas digital mosque and community ecosystem with prayer times, TPQ education, programs, and financial transparency"
            fill
            unoptimized
            priority
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "oneecos":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#061525] via-[#040D18] to-[#0A223B] border border-cyan-500/30 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-400/60 transition-colors">
          <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/oneecos-logo.png" alt="OneEcos Logo" className="w-3.5 h-3.5 object-contain" />
              <span className="font-mono text-[9px] text-cyan-300 uppercase tracking-wider font-bold">OneEcos OS</span>
            </div>
            <span className="font-mono text-[8.5px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
              A Fundamental Stage
            </span>
          </div>

          {/* Connected Transaction Flow Pipeline */}
          <div className="relative z-10 my-auto bg-cyan-950/40 border border-cyan-500/25 p-2 rounded-lg space-y-1">
            <div className="text-[7.5px] font-mono text-cyan-300/80 uppercase text-center font-semibold tracking-wider">
              Connected Order-to-Cash Transaction Flow
            </div>
            <div className="flex items-center justify-between text-[7.5px] font-mono font-bold text-cream gap-0.5 overflow-x-auto">
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1 py-0.5 rounded text-cyan-200 text-[7px] shrink-0">RFQ</span>
              <span className="text-cyan-400 text-[7px]">→</span>
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1 py-0.5 rounded text-cyan-200 text-[7px] shrink-0">Quote</span>
              <span className="text-cyan-400 text-[7px]">→</span>
              <span className="bg-cyan-950 border border-cyan-400 px-1 py-0.5 rounded text-cyan-300 font-extrabold text-[7px] shrink-0">Sales Order</span>
              <span className="text-cyan-400 text-[7px]">→</span>
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1 py-0.5 rounded text-cyan-200 text-[7px] shrink-0">Procure</span>
              <span className="text-cyan-400 text-[7px]">→</span>
              <span className="bg-emerald-900/50 border border-emerald-500/40 px-1 py-0.5 rounded text-emerald-300 text-[7px] shrink-0">Billing</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[8.5px] font-mono text-cream-dark/70 pt-1.5 border-t border-cyan-900/40">
            <span className="text-cream-dark/80 font-medium truncate">People Execute. OneEcos Connects.</span>
            <span className="text-cyan-400 font-bold shrink-0">Zero Handoff Loss</span>
          </div>
        </div>
      );

    case "corum":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0A1813] via-[#050C0A] to-[#122B20] border border-emerald-500/30 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/50 transition-colors">
          <div className="absolute left-10 top-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span className="font-mono text-[9px] text-emerald-300 uppercase tracking-wider font-bold">Industrial ESG Audit</span>
            </div>
            <span className="font-mono text-[8.5px] text-gold-muted bg-gold-muted/10 px-2 py-0.5 rounded border border-gold-muted/30 font-semibold">
              SRP2026 Package
            </span>
          </div>

          {/* ESG Metric Indicator Matrix */}
          <div className="relative z-10 bg-graphite-dark/90 border border-emerald-500/30 p-2 rounded-lg my-auto space-y-1">
            <div className="flex items-center justify-between font-mono text-[9px]">
              <span className="text-cream font-bold">23 Compliance Parameters</span>
              <span className="text-emerald-400 font-bold">7 Dept PICs</span>
            </div>
            <div className="w-full h-1.5 bg-graphite rounded-full overflow-hidden flex gap-0.5">
              <div className="h-full bg-emerald-400 w-[55%]" />
              <div className="h-full bg-gold-muted w-[30%]" />
              <div className="h-full bg-blue-400 w-[15%]" />
            </div>
            <div className="flex justify-between font-mono text-[7.5px] text-cream-dark/60">
              <span>Electricity kWh · Water m³ · Waste</span>
              <span className="text-gold-muted">PDF Export</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[8.5px] font-mono text-cream-dark/60 pt-1.5 border-t border-graphite/40">
            <span>Offline-First JSON Sync</span>
            <span className="text-emerald-400 font-bold">Live Production</span>
          </div>
        </div>
      );

    case "sakku":
    case "rumah-ringkas":
    default:
      return (
        <div className="w-full h-44 rounded-xl border border-teal-500/30 relative overflow-hidden bg-slate-950 group-hover:border-teal-400/60 transition-colors">
          <Image
            src="/screenshots/sakkupreview.png"
            alt="Sakku 2.0 — Privacy-First Personal & Family Wealth OS"
            fill
            unoptimized
            priority
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );
  }
}
