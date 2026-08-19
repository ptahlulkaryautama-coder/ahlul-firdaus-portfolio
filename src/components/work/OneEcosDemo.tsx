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
  TrendingUp, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  BarChart2, 
  Globe,
  ArrowRight,
  Sparkles
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
    id: "sales",
    name: "Sales Order",
    subtitle: "Capture | Validate | Confirm",
    description: "Automated omnichannel order ingestion, customer validation, inventory allocation, and order confirmation.",
    icon: ShoppingCart,
    actions: ["Omnichannel Order Sync", "Credit Check", "Inventory Reservation"],
    metrics: "1,246 Orders (+12.5%)",
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40"
  },
  {
    id: "procurement",
    name: "Procurement",
    subtitle: "Source | Order | Manage",
    description: "Raw material vendor sourcing, Purchase Order generation, lead-time optimization, and supplier performance tracking.",
    icon: ShoppingBag,
    actions: ["Vendor PO Generation", "BOM Material Scoping", "Supplier Lead-Time Sync"],
    metrics: "99.2% Material Availability",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/40"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    subtitle: "Plan | Produce | Monitor",
    description: "Shop floor work order scheduling, real-time machine telemetry, quality control checks, and yield monitoring.",
    icon: Factory,
    actions: ["Work Order Scheduling", "Quality Batch Audit", "OEE Telemetry Track"],
    metrics: "98.4% Production Yield",
    color: "from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/40"
  },
  {
    id: "shipment",
    name: "Shipment",
    subtitle: "Pack | Ship | Track",
    description: "Container packing optimization, carrier dispatch, bill of lading generation, and global vessel tracking.",
    icon: Truck,
    actions: ["Container Load Planning", "Carrier Dispatch", "Live GPS & Vessel Sync"],
    metrics: "982 Active Shipments (+8.7%)",
    color: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/40"
  },
  {
    id: "invoice",
    name: "Invoice",
    subtitle: "Bill | Reconcile | Send",
    description: "Automated B2B invoicing, multi-currency VAT/tax reconciliation, and automated dispatch via customer portal.",
    icon: FileText,
    actions: ["Automated Tax Invoicing", "Multi-Currency Matching", "Dispatch & Receipt Sync"],
    metrics: "96.4% On-Time Billing",
    color: "from-emerald-500/20 to-cyan-500/20 text-emerald-400 border-emerald-500/40"
  },
  {
    id: "payment",
    name: "Payment",
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

  const selectedModule = WORKFLOW_MODULES.find((m) => m.id === selectedModuleId) || WORKFLOW_MODULES[0];

  return (
    <div className="w-full bg-[#040C16] text-cream rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl mt-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#06182B] via-[#0B253D] to-[#06182B] p-5 sm:p-6 border-b border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/oneecos-logo.png"
            alt="OneEcos Logo"
            className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-cream tracking-tight">
                OneEcos <span className="text-cyan-400 font-light">Business Ecosystem Platform</span>
              </h3>
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono px-2 py-0.5 rounded-full uppercase">
                Order to Cash
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-300/80 mt-0.5">
              Sales Order to Shipment to Payment Workflow Engine
            </p>
          </div>
        </div>

        {/* Ecosystem High-Level Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto font-mono text-center">
          <div className="bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
            <div className="text-[9px] text-cyan-300/60 uppercase">Orders</div>
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
            <div className="text-[9px] text-cyan-300/60 uppercase">Payment</div>
            <div className="text-xs font-bold text-emerald-400">$8.42M <span className="text-emerald-400 text-[10px]">↑15.3%</span></div>
          </div>
        </div>
      </div>

      {/* Main Workflow Interactive Playground */}
      <div className="p-6 space-y-6">
        {/* Order to Cash Pipeline Header */}
        <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Order to Cash Flow Pipeline</span>
            </span>
            <span className="text-[10px] font-mono text-cream-dark/50">Click any stage to inspect node specs</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center font-mono">
            {[
              { id: "sales", label: "1. Sales Order", icon: ShoppingCart },
              { id: "manufacturing", label: "2. Manufacturing", icon: Factory },
              { id: "shipment", label: "3. Shipment", icon: Truck },
              { id: "invoice", label: "4. Invoice", icon: FileText },
              { id: "payment", label: "5. Payment", icon: CreditCard },
            ].map((step) => {
              const StepIcon = step.icon;
              const isSelected = selectedModuleId === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedModuleId(step.id)}
                  className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-all ${
                    isSelected
                      ? "bg-cyan-500/20 border-cyan-400 text-cream shadow-lg shadow-cyan-500/10 scale-[1.02]"
                      : "bg-cyan-950/20 border-cyan-500/20 text-cream-dark/60 hover:border-cyan-500/40 hover:text-cream"
                  }`}
                >
                  <StepIcon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-cream-dark/50"}`} />
                  <span className="text-[11px] font-semibold">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Node Hexagonal Ecosystem Grid Explorer */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold font-sans text-cream">
              Hexagonal Ecosystem Modules (6 Core Operations)
            </h4>
            <span className="text-xs font-mono text-cyan-400">
              Active: {selectedModule.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {WORKFLOW_MODULES.map((module) => {
              const ModuleIcon = module.icon;
              const isSelected = selectedModuleId === module.id;

              return (
                <div
                  key={module.id}
                  onClick={() => setSelectedModuleId(module.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-cyan-950/60 to-blue-950/60 border-cyan-400 ring-1 ring-cyan-400/50 shadow-xl"
                      : "bg-cyan-950/20 border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-950/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${module.color}`}>
                        <ModuleIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-cream">{module.name}</h5>
                        <span className="text-[10px] font-mono text-cyan-300/70">{module.subtitle}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    )}
                  </div>

                  <p className="text-xs text-cream-dark/70 line-clamp-2 mb-3 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="text-[10px] font-mono bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded text-cyan-300 flex items-center justify-between">
                    <span>Live Output</span>
                    <span className="font-bold text-cream">{module.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Module Deep-Dive Inspector */}
        <div className="bg-gradient-to-r from-[#08223B] to-[#041527] border border-cyan-500/30 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/20 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                Module Inspector // {selectedModule.name}
              </span>
              <h5 className="text-base font-bold text-cream mt-0.5">
                {selectedModule.name}: {selectedModule.subtitle}
              </h5>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-3 py-1 rounded-full w-fit">
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
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-cyan-500/20 font-mono text-[10px]">
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">SECURE BY DESIGN</div>
              <div className="text-[9px] text-cream-dark/50">Enterprise security</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <Cloud className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">CLOUD NATIVE</div>
              <div className="text-[9px] text-cream-dark/50">Scalable & reliable</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">API-FIRST</div>
              <div className="text-[9px] text-cream-dark/50">Connect anything</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300">
            <BarChart2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">SMART ANALYTICS</div>
              <div className="text-[9px] text-cream-dark/50">Data-driven decisions</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 col-span-2 sm:col-span-1">
            <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cream">GLOBAL SCALE</div>
              <div className="text-[9px] text-cream-dark/50">Worldwide trade</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
