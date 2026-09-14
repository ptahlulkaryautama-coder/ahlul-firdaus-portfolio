"use client";

import React from "react";
import { 
  Globe, 
  Building2, 
  QrCode, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  Sparkles,
  ShoppingBag,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Wallet,
  FileSpreadsheet,
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
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0D1812] via-[#060D08] to-[#122218] border border-emerald-500/25 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/50 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(#C9A55A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-gold-muted/10 rounded-full blur-2xl group-hover:bg-gold-muted/20 transition-all duration-500" />
          
          {/* Header Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-md">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span className="font-mono text-[9px] text-emerald-300 uppercase tracking-wider font-bold">Indonesian B2B Export</span>
            </div>
            <span className="font-mono text-[8.5px] text-gold-muted bg-gold-muted/10 border border-gold-muted/30 px-2 py-0.5 rounded font-semibold">
              Commodity Catalog
            </span>
          </div>

          {/* Commodity Showcase Card Preview */}
          <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
            <div className="bg-graphite-dark/90 border border-emerald-500/20 rounded-lg p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[7.5px] font-mono uppercase text-emerald-400 font-bold">Spices & Crops</span>
                <span className="text-[7px] font-mono text-cream-dark/50">HS 0901</span>
              </div>
              <div className="text-[10px] font-bold text-cream font-mono mt-0.5 truncate">Sumatra Arabica G1</div>
              <div className="text-[7.5px] font-mono text-gold-muted mt-1 flex items-center gap-1">
                <span>MOQ: 1x20&apos; FCL</span>
              </div>
            </div>

            <div className="bg-graphite-dark/90 border border-gold-muted/20 rounded-lg p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[7.5px] font-mono uppercase text-gold-muted font-bold">Coconut Derivatives</span>
                <span className="text-[7px] font-mono text-cream-dark/50">HS 4402</span>
              </div>
              <div className="text-[10px] font-bold text-cream font-mono mt-0.5 truncate">Shisha Charcoal Briquettes</div>
              <div className="text-[7.5px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                <span>Direct RFQ Ready</span>
              </div>
            </div>
          </div>

          {/* Footer Metrics */}
          <div className="relative z-10 flex items-center justify-between text-[8.5px] font-mono text-cream-dark/60 pt-1.5 border-t border-graphite/40">
            <span className="flex items-center gap-1 text-gold-muted font-medium">
              <CheckCircle2 className="w-2.5 h-2.5" /> Sample Request Funnel
            </span>
            <span className="text-emerald-400 font-bold">ooindonesia.com</span>
          </div>
        </div>
      );

    case "cgv10":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#10141e] via-[#090c14] to-[#151d2c] border border-blue-500/25 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-blue-400/50 transition-colors">
          <div className="absolute -left-6 -bottom-6 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-blue-950/70 border border-blue-500/40 px-2 py-0.5 rounded-md">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="font-mono text-[9px] text-blue-300 uppercase tracking-wider font-bold">RT 010 / RW 021 Hub</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[8.5px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Portal
            </div>
          </div>

          {/* Community Interface Grid: Kas RT & PALUGADA */}
          <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
            <div className="bg-graphite-dark/90 border border-blue-500/25 p-2 rounded-lg">
              <div className="flex items-center justify-between font-mono text-[7.5px] text-cream-dark/60">
                <span>Kas RT Warga</span>
                <span className="text-emerald-400 font-bold">100% Terbuka</span>
              </div>
              <div className="text-[10px] font-bold text-cream font-mono mt-1">Laporan Bulanan</div>
              <div className="text-[7.5px] font-mono text-blue-300 mt-0.5">Iuran &amp; Pengeluaran</div>
            </div>

            <div className="bg-graphite-dark/90 border border-amber-500/25 p-2 rounded-lg">
              <div className="flex items-center justify-between font-mono text-[7.5px] text-amber-400 font-bold">
                <span className="flex items-center gap-1"><ShoppingBag className="w-2.5 h-2.5" /> PALUGADA</span>
                <span className="text-[7px] text-cream-dark/50">UMKM</span>
              </div>
              <div className="text-[10px] font-bold text-cream font-mono mt-1">Pasar Warga</div>
              <div className="text-[7.5px] font-mono text-amber-300 mt-0.5">Kuliner, Jasa &amp; Usaha</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[8.5px] font-mono text-cream-dark/60 pt-1.5 border-t border-graphite/40">
            <span className="text-blue-300">Pengumuman &amp; Kontak RT</span>
            <span className="text-emerald-400 font-bold">portalwargacgv.id</span>
          </div>
        </div>
      );

    case "masjid-al-ikhlas":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0B1A14] via-[#060F0C] to-[#142B21] border border-emerald-500/30 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/50 transition-colors">
          <div className="absolute right-0 top-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-gold-muted/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-md">
              <Building2 className="w-3 h-3 text-gold-muted" />
              <span className="font-mono text-[9px] text-gold-muted uppercase tracking-wider font-bold">Masjid Al Ikhlas CGV</span>
            </div>
            <span className="font-mono text-[8.5px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
              Live &amp; Deployed
            </span>
          </div>

          {/* Batam Prayer Countdown & Transparent Kas */}
          <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
            <div className="bg-graphite-dark/90 border border-emerald-500/30 p-2 rounded-lg">
              <div className="flex items-center justify-between font-mono text-[7.5px] text-gold-muted font-bold">
                <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> Jadwal Batam</span>
              </div>
              <div className="text-[10px] font-bold text-cream font-mono mt-1 flex items-center justify-between">
                <span>Maghrib</span>
                <span className="text-emerald-400">18:16</span>
              </div>
              <div className="text-[7.5px] font-mono text-cream-dark/50 mt-0.5">Countdown Otomatis</div>
            </div>

            <div className="bg-graphite-dark/90 border border-gold-muted/25 p-2 rounded-lg">
              <div className="flex items-center justify-between font-mono text-[7.5px] text-cream-dark/60">
                <span>Kas &amp; Infaq</span>
                <span className="text-gold-muted font-bold">QRIS</span>
              </div>
              <div className="text-[10px] font-bold text-cream font-mono mt-1">Laporan Terbuka</div>
              <div className="text-[7.5px] font-mono text-emerald-400 mt-0.5">Audit Transparan</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[8.5px] font-mono text-cream-dark/60 pt-1.5 border-t border-graphite/40">
            <span className="text-gold-muted flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Agenda Kajian &amp; TPQ
            </span>
            <span className="text-emerald-400 font-bold">alikhlascgv.vercel.app</span>
          </div>
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
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0B1516] via-[#050C0C] to-[#122222] border border-teal-500/30 p-3.5 relative overflow-hidden flex flex-col justify-between group-hover:border-teal-400/60 transition-colors">
          <div className="absolute right-0 bottom-0 w-36 h-36 bg-teal-500/15 rounded-full blur-2xl group-hover:bg-teal-400/25 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-teal-950/80 border border-teal-500/40 px-2 py-0.5 rounded-md">
              <Sparkles className="w-3 h-3 text-teal-400" />
              <span className="font-mono text-[9px] text-teal-300 uppercase tracking-wider font-bold">Sakku 2.0 OS</span>
            </div>
            <span className="font-mono text-[8.5px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">
              Live &amp; Deployed
            </span>
          </div>

          {/* Quick Entry & Wealth Preview */}
          <div className="relative z-10 bg-graphite-dark/90 border border-teal-500/30 p-2 rounded-lg my-auto space-y-1">
            <div className="flex items-center justify-between font-mono text-[8px]">
              <span className="text-teal-300 font-bold">Catat Cepat Parser</span>
              <span className="text-gold-muted">Amplop Budget</span>
            </div>
            <div className="bg-teal-950/40 border border-teal-500/20 rounded px-1.5 py-0.5 font-mono text-[8px] text-cream-dark/80 truncate">
              &gt; &quot;Makan siang 25rb pakai GoPay&quot;
            </div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-cream-dark/60">
              <span>BCA · GoPay · Jago Sync</span>
              <span className="text-teal-400">100% Local Storage</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[8.5px] font-mono text-cream-dark/60 pt-1.5 border-t border-graphite/40">
            <span>Zero-Knowledge Privacy</span>
            <span className="text-teal-400 font-bold">sakku.ahlulfirdaus.com</span>
          </div>
        </div>
      );
  }
}
