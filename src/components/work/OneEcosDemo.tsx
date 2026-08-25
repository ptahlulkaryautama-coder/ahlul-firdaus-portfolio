"use client";

import React, { useState } from "react";
import { 
  ShoppingCart, 
  ShoppingBag, 
  Factory, 
  Truck, 
  FileText, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  BarChart2, 
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Users,
  AlertTriangle,
  Check,
  Bot,
  ExternalLink
} from "lucide-react";

interface WorkflowModule {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: any;
  actions: string[];
  metrics: string;
  color: string;
}

const WORKFLOW_MODULES: WorkflowModule[] = [
  {
    id: "inquiry",
    name: "Inquiry & RFQ",
    subtitle: "Capture | Scope | Evaluate",
    description: "Centralized inquiry ingestion across buyer portals, email RFQs, and sales channels into a unified pre-sale pipeline.",
    icon: Users,
    actions: ["Omnichannel RFQ Capture", "Automated Spec Evaluation", "Feasibility Scoring"],
    metrics: "1,450 Inquiries Ingested",
    color: "from-purple-500/20 to-cyan-500/20 text-purple-400 border-purple-500/40"
  },
  {
    id: "quotation",
    name: "Quotation & Pricing",
    subtitle: "Calculate | Approve | Send",
    description: "Dynamic BOM pricing engine, cost markup calculation, multi-currency quote generation, and instant client sign-off.",
    icon: FileText,
    actions: ["BOM Pricing Calculation", "Margin & Markup Audit", "Instant Client Sign-off"],
    metrics: "94.2% Quote Acceptance",
    color: "from-indigo-500/20 to-cyan-500/20 text-indigo-400 border-indigo-500/40"
  },
  {
    id: "sales",
    name: "Sales Order (Center)",
    subtitle: "Validate | Confirm | Center of Truth",
    description: "The core anchor of OneEcos. Sales Order acts as single source of truth driving downstream Procurement, Production, and Logistics.",
    icon: ShoppingCart,
    actions: ["Single Source of Truth", "Credit Check", "Automated Downstream Sync"],
    metrics: "1,246 Orders (+12.5%)",
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40"
  },
  {
    id: "procurement",
    name: "Procurement",
    subtitle: "Source | Order | Manage",
    description: "Raw material vendor sourcing, Purchase Order auto-generation, lead-time optimization, and supplier performance tracking.",
    icon: ShoppingBag,
    actions: ["Vendor PO Generation", "BOM Material Scoping", "Supplier Lead-Time Sync"],
    metrics: "99.2% Material Availability",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/40"
  },
  {
    id: "manufacturing",
    name: "Production",
    subtitle: "Plan | Produce | Monitor",
    description: "Shop floor work order scheduling, real-time machine telemetry, quality control audits, and yield monitoring.",
    icon: Factory,
    actions: ["Work Order Scheduling", "Quality Batch Audit", "OEE Telemetry Track"],
    metrics: "98.4% Production Yield",
    color: "from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/40"
  },
  {
    id: "shipment",
    name: "Shipment & Freight",
    subtitle: "Pack | Dispatch | Track",
    description: "Container packing optimization, carrier dispatch, bill of lading generation, and live vessel GPS tracking.",
    icon: Truck,
    actions: ["Container Load Planning", "Carrier Dispatch", "Live Vessel & GPS Sync"],
    metrics: "982 Active Shipments (+8.7%)",
    color: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/40"
  },
  {
    id: "invoice",
    name: "Invoice & Billing",
    subtitle: "Bill | Reconcile | Send",
    description: "Automated B2B invoicing, multi-currency tax reconciliation, and automated dispatch via client portal.",
    icon: FileText,
    actions: ["Automated Tax Invoicing", "Multi-Currency Matching", "Dispatch & Receipt Sync"],
    metrics: "96.4% On-Time Billing",
    color: "from-emerald-500/20 to-cyan-500/20 text-emerald-400 border-emerald-500/40"
  },
  {
    id: "payment",
    name: "Payment Collection",
    subtitle: "Collect | Match | Settle",
    description: "Automated payment collection, Virtual Account & Escrow matching, ledger posting, and cash settlement.",
    icon: CreditCard,
    actions: ["Escrow Fund Release", "VA / Wire Matching", "General Ledger Posting"],
    metrics: "$8.42M Collected (+15.3%)",
    color: "from-cyan-500/20 to-emerald-500/20 text-cyan-300 border-cyan-400/50"
  }
];

export default function OneEcosDemo() {
  const [selectedModuleId, setSelectedModuleId] = useState<string>("sales");
  const [activeStageTab, setActiveStageTab] = useState<"fundamental" | "enterprise">("fundamental");

  const selectedModule = WORKFLOW_MODULES.find((m) => m.id === selectedModuleId) || WORKFLOW_MODULES[2];

  return (
    <div className="w-full bg-[#040C16] text-cream rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl mt-6 font-sans">
      
      {/* Top Banner & Core Philosophy */}
      <div className="bg-gradient-to-r from-[#06182B] via-[#0B253D] to-[#06182B] p-5 sm:p-6 border-b border-cyan-500/30">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/oneecos-logo.png"
              alt="OneEcos Logo"
              className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-cream tracking-tight">
                  OneEcos <span className="text-cyan-400 font-light">Business Operating System</span>
                </h3>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> A Fundamental Stage
                </span>
                <span className="bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-semibold flex items-center gap-1">
                  <Bot className="w-3 h-3 text-purple-400" /> Enterprise Stage (In Dev)
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-300/90 mt-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-semibold text-cream">People Execute. OneEcos Connects. Business Scales.</span>
              </p>
              <p className="text-[11px] font-mono text-cream-dark/60 mt-0.5">
                From many handoffs to one connected transaction flow.
              </p>
            </div>
          </div>

          {/* High-Level Ecosystem Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:w-auto font-mono text-center">
            <div className="bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
              <div className="text-[9px] text-cyan-300/60 uppercase">Active Orders</div>
              <div className="text-xs font-bold text-cream">1,246 <span className="text-emerald-400 text-[10px]">↑12.5%</span></div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
              <div className="text-[9px] text-cyan-300/60 uppercase">Shipments</div>
              <div className="text-xs font-bold text-cream">982 <span className="text-emerald-400 text-[10px]">↑8.7%</span></div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
              <div className="text-[9px] text-cyan-300/60 uppercase">On-Time</div>
              <div className="text-xs font-bold text-cream">96.4% <span className="text-emerald-400 text-[10px]">↑3.1%</span></div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
              <div className="text-[9px] text-cyan-300/60 uppercase">Collected</div>
              <div className="text-xs font-bold text-emerald-400">$8.42M <span className="text-emerald-400 text-[10px]">↑15.3%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Playground */}
      <div className="p-5 sm:p-6 space-y-6">

        {/* Stage Roadmap Selector: Fundamental Stage vs Enterprise Stage */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-cyan-950/30 border border-cyan-500/20 p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cream">
              Select Product Roadmap Stage:
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto font-mono text-xs">
            <button
              onClick={() => setActiveStageTab("fundamental")}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg border font-semibold transition-all flex items-center justify-center gap-2 ${
                activeStageTab === "fundamental"
                  ? "bg-cyan-500/20 border-cyan-400 text-cream shadow-md shadow-cyan-500/10"
                  : "bg-cyan-950/20 border-cyan-500/20 text-cream-dark/60 hover:text-cream"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>A Fundamental Stage (Live)</span>
            </button>
            <button
              onClick={() => setActiveStageTab("enterprise")}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg border font-semibold transition-all flex items-center justify-center gap-2 ${
                activeStageTab === "enterprise"
                  ? "bg-purple-500/20 border-purple-400 text-cream shadow-md shadow-purple-500/10"
                  : "bg-cyan-950/20 border-cyan-500/20 text-cream-dark/60 hover:text-cream"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>OneEcos Enterprise Stage (In Dev)</span>
            </button>
          </div>
        </div>

        {/* Stage Context Banner */}
        {activeStageTab === "fundamental" ? (
          <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-xl text-xs space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>A Fundamental Stage — Core Transaction Flow Engine</span>
            </div>
            <p className="text-cream-dark/80 leading-relaxed">
              Connects the 8 core operational steps into a single Order-to-Cash pipeline with the Sales Order as the single source of truth. Cuts manual handoffs from 18+ to 5 and duplicate entries from 8+ down to 1 core entry.
            </p>
          </div>
        ) : (
          <div className="bg-purple-950/30 border border-purple-500/30 p-4 rounded-xl text-xs space-y-1">
            <div className="flex items-center gap-2 text-purple-300 font-mono font-bold uppercase">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>OneEcos Enterprise Stage — System-Wide Automation &amp; AI Intelligence</span>
            </div>
            <p className="text-cream-dark/80 leading-relaxed">
              Expands Fundamental Stage with Real-Time AI Insights, automated workflow triggers, multi-entity compliance audit trails, predictive bottleneck alerts, and deep ERP integration.
            </p>
          </div>
        )}

        {/* Transformation Comparison: Before OneEcos vs With OneEcos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          
          {/* Before OneEcos */}
          <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
              <span className="bg-rose-500/20 text-rose-400 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3 text-rose-400" /> Before OneEcos
              </span>
              <span className="text-[10px] text-rose-300/70">People Coordinate the Business</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-rose-950/40 p-2 rounded border border-rose-500/20">
                <div className="text-rose-400 font-bold text-sm">12-14</div>
                <div className="text-cream-dark/60 text-[9px]">Touched Functions</div>
              </div>
              <div className="bg-rose-950/40 p-2 rounded border border-rose-500/20">
                <div className="text-rose-400 font-bold text-sm">18+</div>
                <div className="text-cream-dark/60 text-[9px]">Manual Handoffs</div>
              </div>
              <div className="bg-rose-950/40 p-2 rounded border border-rose-500/20">
                <div className="text-rose-400 font-bold text-sm">8+</div>
                <div className="text-cream-dark/60 text-[9px]">Duplicate Entries</div>
              </div>
            </div>

            <div className="text-[11px] text-cream-dark/70 space-y-1">
              <div className="flex items-center gap-1.5 text-rose-300/80">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                10+ Manual Status Inquiries &amp; 12+ Follow-up emails
              </div>
              <div className="flex items-center gap-1.5 text-rose-300/80">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                5-10 Disconnected systems &amp; spreadsheets involved
              </div>
            </div>

            <div className="p-2 bg-rose-950/40 border border-rose-500/30 rounded text-[10px] text-rose-300 leading-tight">
              <strong>Result:</strong> High coordination cost, delays, errors, and exploding operational headcount as business grows.
            </div>
          </div>

          {/* With OneEcos */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" /> With OneEcos
              </span>
              <span className="text-[10px] text-emerald-300/70">The System Coordinates the Business</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-emerald-950/40 p-2 rounded border border-emerald-500/20">
                <div className="text-emerald-400 font-bold text-sm">7</div>
                <div className="text-cream-dark/60 text-[9px]">Touched Functions</div>
              </div>
              <div className="bg-emerald-950/40 p-2 rounded border border-emerald-500/20">
                <div className="text-emerald-400 font-bold text-sm">5</div>
                <div className="text-cream-dark/60 text-[9px]">Manual Handoffs</div>
              </div>
              <div className="bg-emerald-950/40 p-2 rounded border border-emerald-500/20">
                <div className="text-emerald-400 font-bold text-sm">1</div>
                <div className="text-cream-dark/60 text-[9px]">Core Entry (No Dups)</div>
              </div>
            </div>

            <div className="text-[11px] text-cream-dark/70 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-300/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                2 Real-Time Status Inquiries &amp; 3 Automated Follow-ups
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                1 Integrated System with Real-Time Telemetry
              </div>
            </div>

            <div className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded text-[10px] text-emerald-300 leading-tight">
              <strong>Result:</strong> Lower coordination cost, faster cycle, fewer errors, and higher capacity without adding headcount.
            </div>
          </div>

        </div>

        {/* 8-Phase Order-to-Cash Transaction Flow Visualizer */}
        <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>One Transaction Flow (Sales Order as Center)</span>
            </span>
            <span className="text-[10px] font-mono text-cream-dark/50 hidden sm:inline">
              Click node to inspect operational telemetry
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center font-mono">
            {WORKFLOW_MODULES.map((step) => {
              const StepIcon = step.icon;
              const isSelected = selectedModuleId === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedModuleId(step.id)}
                  className={`p-2.5 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                    isSelected
                      ? "bg-cyan-500/20 border-cyan-400 text-cream shadow-lg shadow-cyan-500/10 scale-[1.02]"
                      : "bg-cyan-950/20 border-cyan-500/20 text-cream-dark/60 hover:border-cyan-500/40 hover:text-cream"
                  }`}
                >
                  <StepIcon className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-400" : "text-cream-dark/50"}`} />
                  <span className="text-[10px] font-semibold truncate w-full">{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Deep-Dive Inspector */}
        <div className="bg-gradient-to-r from-[#08223B] to-[#041527] border border-cyan-500/30 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                Node Inspector // {selectedModule.name}
              </span>
              <h5 className="text-base font-bold text-cream mt-0.5">
                {selectedModule.name}: {selectedModule.subtitle}
              </h5>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-3 py-1 rounded-full w-fit font-semibold">
              {selectedModule.metrics}
            </span>
          </div>

          <p className="text-xs text-cream-dark/80 mb-4 leading-relaxed">
            {selectedModule.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {selectedModule.actions.map((act, i) => (
              <div key={i} className="bg-cyan-950/50 border border-cyan-500/20 px-3 py-2 rounded-lg text-xs font-mono text-cyan-200 flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Value Pillars Bottom Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 pt-2 border-t border-cyan-500/20 font-mono text-[10px]">
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">AUDIT TRAIL</div>
              <div className="text-[9px] text-cream-dark/50">Full Compliance</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <Cloud className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">REAL-TIME VISIBILITY</div>
              <div className="text-[9px] text-cream-dark/50">End-to-End Tracking</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">WORKFLOW ALERTS</div>
              <div className="text-[9px] text-cream-dark/50">Automated Triggers</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <BarChart2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">AI POWERED INSIGHTS</div>
              <div className="text-[9px] text-cream-dark/50">Next Best Action</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 col-span-2 sm:col-span-1">
            <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">INTEGRATED DATA</div>
              <div className="text-[9px] text-cream-dark/50">One Source of Truth</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
