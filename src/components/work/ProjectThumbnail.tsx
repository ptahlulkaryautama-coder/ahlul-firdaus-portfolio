"use client";

import React from "react";
import { 
  Globe, 
  ShieldCheck, 
  Building2, 
  BarChart3, 
  Laptop, 
  Sparkles, 
  QrCode, 
  TrendingUp, 
  CheckCircle2, 
  Clock 
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
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0D1812] via-[#060D08] to-[#122218] border border-emerald-500/20 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/40 transition-colors">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#C9A55A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-gold-muted/10 rounded-full blur-2xl group-hover:bg-gold-muted/20 transition-all duration-500" />
          
          {/* Header Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
              <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px] text-emerald-300 uppercase tracking-wider font-bold">Global B2B Route</span>
            </div>
            <span className="font-mono text-[9px] text-gold-muted/80 bg-gold-muted/10 border border-gold-muted/20 px-2 py-0.5 rounded">
              Escrow Secured
            </span>
          </div>

          {/* Visual Matrix Flow */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-auto">
            <div className="bg-graphite-dark/80 border border-graphite/60 rounded-lg p-2 text-center">
              <div className="text-[8px] font-mono text-cream-dark/50 uppercase">Producers</div>
              <div className="text-[11px] font-bold text-cream font-mono mt-0.5">ID Direct</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500/40 via-gold-muted to-emerald-500/40 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-muted animate-ping" />
              </div>
            </div>
            <div className="bg-graphite-dark/80 border border-graphite/60 rounded-lg p-2 text-center">
              <div className="text-[8px] font-mono text-cream-dark/50 uppercase">Buyers</div>
              <div className="text-[11px] font-bold text-emerald-400 font-mono mt-0.5">Global Freight</div>
            </div>
          </div>

          {/* Footer Metrics */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-cream-dark/60 pt-2 border-t border-graphite/40">
            <span className="flex items-center gap-1 text-gold-muted">
              <CheckCircle2 className="w-3 h-3" /> Custom Clearing Ready
            </span>
            <span>Container Logistics v2</span>
          </div>
        </div>
      );

    case "cgv10":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#121016] via-[#0A090D] to-[#1C1826] border border-purple-500/20 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/40 transition-colors">
          <div className="absolute -left-6 -bottom-6 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-mono text-[9px] text-purple-300 uppercase tracking-wider font-bold">Estate Security</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[9px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              500+ Homes
            </div>
          </div>

          {/* QR Pass Visual Element */}
          <div className="relative z-10 flex items-center gap-3 bg-graphite-dark/90 border border-purple-500/20 p-2.5 rounded-lg my-auto">
            <div className="bg-purple-950/80 p-2 rounded border border-purple-500/40 shrink-0">
              <QrCode className="w-6 h-6 text-purple-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-cream font-bold truncate">Gate Visitor Pass #8492</span>
                <span className="font-mono text-[8px] text-emerald-400 uppercase bg-emerald-950/60 px-1.5 py-0.5 rounded">Verified</span>
              </div>
              <p className="text-[9px] font-mono text-cream-dark/60 truncate mt-0.5">Automated Dues Ledger & Gate Control</p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-cream-dark/60 pt-2 border-t border-graphite/40">
            <span>Resident Billing Portal</span>
            <span className="text-purple-300 font-bold">QR Pass Active</span>
          </div>
        </div>
      );

    case "masjid-al-ikhlas":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0B1A14] via-[#060F0C] to-[#142B21] border border-emerald-500/25 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/40 transition-colors">
          <div className="absolute right-0 top-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-gold-muted/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1 rounded-md">
              <Building2 className="w-3.5 h-3.5 text-gold-muted" />
              <span className="font-mono text-[9px] text-gold-muted uppercase tracking-wider font-bold">Transparency Hub</span>
            </div>
            <span className="font-mono text-[9px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              Live & Deployed
            </span>
          </div>

          {/* Financial Ledger Progress Bar */}
          <div className="relative z-10 bg-graphite-dark/80 border border-emerald-500/20 p-2.5 rounded-lg my-auto space-y-1.5">
            <div className="flex items-center justify-between font-mono text-[9px]">
              <span className="text-cream-dark/80">Weekly Audit Ledger</span>
              <span className="text-gold-muted font-bold">100% Public</span>
            </div>
            <div className="w-full h-1.5 bg-graphite rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-gold-muted w-[88%]" />
            </div>
            <div className="flex justify-between font-mono text-[8px] text-cream-dark/50">
              <span>Disbursements Verified</span>
              <span className="text-emerald-400">Prayer Sync Active</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-cream-dark/60 pt-2 border-t border-graphite/40">
            <span className="text-gold-muted flex items-center gap-1">
              <Clock className="w-3 h-3" /> Batam Schedule Sync
            </span>
            <span>Digital Receipts</span>
          </div>
        </div>
      );

    case "oneecos":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#061525] via-[#040D18] to-[#0A223B] border border-cyan-500/30 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-400/60 transition-colors">
          <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-1 rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/oneecos-logo.png" alt="OneEcos Logo" className="w-4 h-4 object-contain" />
              <span className="font-mono text-[9px] text-cyan-300 uppercase tracking-wider font-bold">Business Ecosystem</span>
            </div>
            <span className="font-mono text-[9px] text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              Order-to-Cash
            </span>
          </div>

          {/* Order-to-Cash Pipeline Visualizer */}
          <div className="relative z-10 my-auto bg-cyan-950/40 border border-cyan-500/25 p-2 rounded-lg">
            <div className="text-[8px] font-mono text-cyan-300/70 uppercase mb-1 text-center font-semibold tracking-wider">
              Order to Cash Flow Pipeline
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono font-bold text-cream gap-0.5">
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded text-cyan-200 text-[8px]">Sales Order</span>
              <span className="text-cyan-400 text-[9px]">→</span>
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded text-cyan-200 text-[8px]">Mfg</span>
              <span className="text-cyan-400 text-[9px]">→</span>
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded text-cyan-200 text-[8px]">Shipment</span>
              <span className="text-cyan-400 text-[9px]">→</span>
              <span className="bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded text-cyan-200 text-[8px]">Invoice</span>
              <span className="text-cyan-400 text-[9px]">→</span>
              <span className="bg-emerald-900/50 border border-emerald-500/40 px-1.5 py-0.5 rounded text-emerald-300 text-[8px]">Payment</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-cream-dark/70 pt-2 border-t border-cyan-900/40">
            <span>Sales Order to Shipment to Payment</span>
            <span className="text-cyan-400 font-semibold">$8.42M Cash Flow</span>
          </div>
        </div>
      );

    case "corum":
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0A1813] via-[#050C0A] to-[#122B20] border border-emerald-500/30 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted/40 transition-colors">
          <div className="absolute left-10 top-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[9px] text-emerald-300 uppercase tracking-wider font-bold">Industrial ESG Audit</span>
            </div>
            <span className="font-mono text-[9px] text-gold-muted bg-gold-muted/10 px-2 py-0.5 rounded border border-gold-muted/30">
              SRP2026 Package
            </span>
          </div>

          {/* ESG Metric Indicator Matrix */}
          <div className="relative z-10 bg-graphite-dark/90 border border-emerald-500/30 p-2.5 rounded-lg my-auto space-y-1.5">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-cream font-bold">23 Compliance Sections</span>
              <span className="text-emerald-400 font-bold">7 Dept PIC Sync</span>
            </div>
            <div className="w-full h-1.5 bg-graphite rounded-full overflow-hidden flex gap-1">
              <div className="h-full bg-emerald-400 w-[60%]" />
              <div className="h-full bg-gold-muted w-[25%]" />
              <div className="h-full bg-graphite-dark w-[15%]" />
            </div>
            <div className="flex justify-between font-mono text-[8px] text-cream-dark/60">
              <span>kWh · m³ · MT · Waste</span>
              <span className="text-gold-muted">PDF Export Ready</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-cream-dark/60 pt-2 border-t border-graphite/40">
            <span>Offline-First JSON Interchange</span>
            <span className="text-emerald-400">Live Production</span>
          </div>
        </div>
      );

    case "rumah-ringkas":
    default:
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#121A16] via-[#090F0C] to-[#1C2C24] border border-teal-500/30 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-gold-muted transition-colors">
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl group-hover:bg-gold-muted/25 transition-all duration-500" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-teal-950/70 border border-teal-500/40 px-2.5 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-mono text-[9px] text-teal-300 uppercase tracking-wider font-bold">Family FinTech</span>
            </div>
            <span className="font-mono text-[9px] text-gold-muted bg-gold-muted/20 px-2 py-0.5 rounded font-bold">
              Envelope System
            </span>
          </div>

          {/* Quick Entry & Wealth Preview */}
          <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
            <div className="bg-graphite-dark/90 border border-teal-500/30 p-2 rounded-lg text-center">
              <div className="text-[8px] font-mono text-cream-dark/50 uppercase">Input Parser</div>
              <div className="text-[10px] font-bold text-teal-300 font-mono mt-0.5">Catat Cepat AI</div>
            </div>
            <div className="bg-graphite-dark/90 border border-gold-muted/30 p-2 rounded-lg text-center">
              <div className="text-[8px] font-mono text-cream-dark/50 uppercase">Wealth Hub</div>
              <div className="text-[10px] font-bold text-gold-muted font-mono mt-0.5">Net Worth Sync</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-cream-dark/60 pt-2 border-t border-graphite/40">
            <span>Multi-Account Aggregator</span>
            <span className="text-teal-400 font-bold">PWA Web App</span>
          </div>
        </div>
      );
  }
}

