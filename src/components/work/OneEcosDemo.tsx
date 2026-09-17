"use client";

import React, { useState } from "react";
import { 
  Users,
  Package,
  FileText,
  ShoppingCart,
  Wrench,
  Ship,
  FileCheck,
  CreditCard,
  BellRing,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Eye,
  Check,
  ChevronRight,
  Info
} from "lucide-react";

interface WorkflowStep {
  id: string;
  stepNumber: number;
  name: string;
  shortName: string;
  stage: "Commercial" | "Execution" | "Logistics" | "Finance";
  icon: React.ComponentType<{ className?: string }>;
  recordSample: string;
  summary: string;
  details: { label: string; value: string }[];
  nextAction: string;
  readinessGate: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "buyer",
    stepNumber: 1,
    name: "Buyer Account",
    shortName: "Buyer",
    stage: "Commercial",
    icon: Users,
    recordSample: "Al-Noor Trading UAE",
    summary: "Record verified commercial account, key contacts, destination market (Dubai / Jebel Ali), and commercial terms.",
    details: [
      { label: "Account ID", value: "BYR-2026-001" },
      { label: "Market", value: "United Arab Emirates (UAE)" },
      { label: "Payment Terms", value: "30% DP, 70% against BL copy" },
      { label: "Status", value: "Active Verified Account" }
    ],
    nextAction: "Generate quotation based on requested SKU catalog and target volume.",
    readinessGate: "Commercial KYC & Tax ID verified"
  },
  {
    id: "product",
    stepNumber: 2,
    name: "Product Specifications",
    shortName: "Product",
    stage: "Commercial",
    icon: Package,
    recordSample: "Organic Coconut Sugar 25kg Bulk",
    summary: "Maintain SKU attributes, MOQ, carton dimensions, net/gross weight, CBM factors, lead-time, and reference pricing.",
    details: [
      { label: "SKU Code", value: "SKU-OCS-25KG" },
      { label: "Packaging", value: "25kg Multi-wall Kraft Bag" },
      { label: "Volume & Weight", value: "0.045 CBM / bag · 25.5 kg GW" },
      { label: "Certifications", value: "USDA Organic, Halal, HACCP" }
    ],
    nextAction: "Calculate container loading plan (FCL 20ft vs 40ft HC).",
    readinessGate: "Export specification & shelf-life confirmed"
  },
  {
    id: "quote",
    stepNumber: 3,
    name: "Quotation & Costing",
    shortName: "Quote",
    stage: "Commercial",
    icon: FileText,
    recordSample: "QT-2026-001 (FOB Batam)",
    summary: "Prepare structured offer lines using verified product records, freight assumptions, and agreed commercial margins.",
    details: [
      { label: "Quote Number", value: "QT-2026-001" },
      { label: "Incoterm", value: "FOB Port of Batam (FTZ Hub)" },
      { label: "Total Quantity", value: "18,000 kg (720 bags / 1x20' FCL)" },
      { label: "Validity", value: "14 Calendar Days" }
    ],
    nextAction: "Issue quotation to buyer for commercial review and sign-off.",
    readinessGate: "Margin audit & currency conversion checked"
  },
  {
    id: "sales-order",
    stepNumber: 4,
    name: "Sales Order",
    shortName: "Sales Order",
    stage: "Commercial",
    icon: ShoppingCart,
    recordSample: "SO-2026-001 (Confirmed)",
    summary: "Confirm accepted commercial record and lock specifications to link all downstream fulfillment, procurement, and shipping.",
    details: [
      { label: "Order Reference", value: "SO-2026-001" },
      { label: "Buyer PO Number", value: "PO-ALNOOR-8821" },
      { label: "Deposit Received", value: "30% Down Payment Confirmed" },
      { label: "Target ETD", value: "18 Business Days" }
    ],
    nextAction: "Trigger Work Order for production batch scheduling and raw material check.",
    readinessGate: "Down-payment logged & order locked"
  },
  {
    id: "work-order",
    stepNumber: 5,
    name: "Work Order & Execution",
    shortName: "Work Order",
    stage: "Execution",
    icon: Wrench,
    recordSample: "WO-2026-001 (Processing)",
    summary: "Coordinate product or raw material readiness, batch labeling, packaging inspection, and quality gate sign-offs.",
    details: [
      { label: "Work Order ID", value: "WO-2026-001" },
      { label: "Batch Lot", value: "LOT-202603-A" },
      { label: "QC Inspection", value: "Moisture < 2.0% (Passed)" },
      { label: "Packing Status", value: "720 / 720 Bags palletized" }
    ],
    nextAction: "Book freight forwarder container dispatch and fumigation schedule.",
    readinessGate: "Final QC inspection sign-off"
  },
  {
    id: "shipment",
    stepNumber: 6,
    name: "Shipment & Dispatch",
    shortName: "Shipment",
    stage: "Logistics",
    icon: Ship,
    recordSample: "EXP-2026-001 (Vessel Booked)",
    summary: "Track dispatch milestones, carrier routing, container seal numbers, ETD from origin port, and estimated arrival.",
    details: [
      { label: "Shipment ID", value: "EXP-2026-001" },
      { label: "Container / Seal", value: "MSKU-492104-2 / SL-88192" },
      { label: "Port Route", value: "Batam FTZ → Jebel Ali Port, UAE" },
      { label: "Vessel / Voyage", value: "Feeder V.021W → Mother Vessel" }
    ],
    nextAction: "Generate and review export document set preview.",
    readinessGate: "Customs declaration draft completed"
  },
  {
    id: "documents",
    stepNumber: 7,
    name: "Export Documents",
    shortName: "Documents",
    stage: "Logistics",
    icon: FileCheck,
    recordSample: "Docs Package (3 Records)",
    summary: "Prepare or preview relevant trade-document records: Commercial Invoice, Packing List, and Certificate of Origin drafts.",
    details: [
      { label: "Commercial Invoice", value: "CI-EXP-2026-001 (Generated)" },
      { label: "Packing List", value: "PL-EXP-2026-001 (Verified 720 pkgs)" },
      { label: "Cert of Origin", value: "Form D / COO Draft Ready" },
      { label: "Bill of Lading", value: "Draft BL reviewed with carrier" }
    ],
    nextAction: "Issue commercial invoice to buyer and monitor balance collection milestone.",
    readinessGate: "Document set cross-verified against SO"
  },
  {
    id: "invoice",
    stepNumber: 8,
    name: "Commercial Invoice",
    shortName: "Invoice",
    stage: "Finance",
    icon: FileText,
    recordSample: "INV-2026-001 (Pending Balance)",
    summary: "Record billing milestones, track down payment deduction, and issue final balance invoice upon vessel departure.",
    details: [
      { label: "Invoice Number", value: "INV-2026-001" },
      { label: "Total Amount", value: "Sample Commercial Record" },
      { label: "30% DP Applied", value: "Paid at Order Confirmation" },
      { label: "70% Balance", value: "Due within 7 days of BL copy" }
    ],
    nextAction: "Track collection timeline against document release.",
    readinessGate: "Accounting ledger balance reconciled"
  },
  {
    id: "collection",
    stepNumber: 9,
    name: "Payment & Collection",
    shortName: "Collection",
    stage: "Finance",
    icon: CreditCard,
    recordSample: "Collection Follow-Up",
    summary: "Highlight due or overdue follow-up actions and trigger final trade completion upon wire confirmation.",
    details: [
      { label: "Payment Status", value: "Pending 70% Wire Transfer" },
      { label: "Follow-Up Trigger", value: "Follow-up email scheduled (D+3)" },
      { label: "Document Release", value: "Original BL release upon settlement" },
      { label: "Trade Lifecycle", value: "9 / 9 Phases Connected" }
    ],
    nextAction: "Release original BL documents upon bank wire receipt and close order lifecycle.",
    readinessGate: "Final cash settlement verified"
  }
];

export default function OneEcosDemo() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default to Sales Order
  const [workspaceMode, setWorkspaceMode] = useState<"operator" | "executive">("operator");

  const currentStep = WORKFLOW_STEPS[activeStepIndex];

  return (
    <div className="w-full bg-[#030814] text-cream rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl mt-6 font-sans">
      
      {/* Top Brand & Philosophy Header */}
      <div className="bg-gradient-to-r from-[#07111f] via-[#0b1c33] to-[#07111f] p-5 sm:p-6 border-b border-cyan-500/30">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-xl bg-slate-950/80 border border-cyan-400/40 p-1.5 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Image/project/oneecos/oneecos-mark.png"
                alt="OneEcos Mark"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight flex items-center gap-2">
                  <span>OneEcos</span>
                  <span className="text-cyan-400 text-sm sm:text-base font-normal">
                    — B2B Trade Operations System
                  </span>
                </h3>
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Operational Prototype
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-200/90 mt-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-semibold text-white">People Execute. OneEcos Connects. Business Scales.</span>
              </p>
              <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                From scattered records to one connected trade workflow.
              </p>
            </div>
          </div>

          {/* Workspace Mode Switcher */}
          <div className="flex items-center bg-slate-950/90 border border-cyan-500/30 p-1 rounded-xl font-mono text-xs w-full sm:w-auto self-stretch sm:self-auto">
            <button
              onClick={() => setWorkspaceMode("operator")}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 ${
                workspaceMode === "operator"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Simple Daily Workspace</span>
            </button>
            <button
              onClick={() => setWorkspaceMode("executive")}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 ${
                workspaceMode === "executive"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Executive Command Center</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mandatory Sample Data Disclosure */}
      <div className="bg-slate-950/90 border-b border-cyan-500/20 px-5 py-2.5 text-[11px] font-mono text-slate-400 flex items-center gap-2">
        <Info className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>
          <strong className="text-slate-200">Sample Workspace Data:</strong> Interface figures and records shown below demonstrate workflow behavior and do not represent audited customer volume or financial performance.
        </span>
      </div>

      {/* Interactive Mode Content */}
      <div className="p-5 sm:p-6 space-y-6">

        {/* WORKSPACE MODE 1: SIMPLE DAILY WORKSPACE (Operator Flow) */}
        {workspaceMode === "operator" && (
          <div className="space-y-6">
            
            {/* Operator Header & Context */}
            <div className="bg-[#07111f]/90 border border-cyan-500/20 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-0.5">
                  Operator Sequence // Daily Workflow Execution
                </span>
                <h4 className="text-base font-bold text-white">
                  Current Active Order: <span className="text-cyan-300">SO-2026-001 (Al-Noor Trading UAE)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  Follow the connected chain below to inspect or advance each trade milestone.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 disabled:opacity-30 hover:bg-slate-800 transition-colors"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))}
                  disabled={activeStepIndex === WORKFLOW_STEPS.length - 1}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 hover:bg-cyan-500/30 transition-colors flex items-center gap-1.5 font-bold"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 9-Step Connected Chain Visualizer */}
            <div className="bg-[#07111f]/50 border border-cyan-500/20 rounded-xl p-4 overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-between">
                <span>Connected 9-Step Trade Workflow Chain</span>
                <span className="text-cyan-400 font-bold">Step {activeStepIndex + 1} of 9</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isSelected = activeStepIndex === idx;
                  const isPast = activeStepIndex > idx;

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all duration-200 min-h-[78px] ${
                        isSelected
                          ? "bg-cyan-500/20 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.03]"
                          : isPast
                          ? "bg-emerald-950/20 border-emerald-500/30 text-slate-300 hover:border-emerald-500/60"
                          : "bg-slate-950/50 border-slate-800 text-slate-400 hover:border-cyan-500/40 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-cyan-300" : isPast ? "text-emerald-400" : "text-slate-500"}`}>
                          0{step.stepNumber}
                        </span>
                        {isPast ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <StepIcon className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-300" : "text-slate-500"}`} />
                        )}
                      </div>
                      <div className="text-[11px] font-bold truncate leading-tight text-slate-200">
                        {step.shortName}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400 truncate mt-0.5">
                        {step.stage}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Record Inspector */}
            <div className="bg-gradient-to-r from-[#071527] to-[#040e1a] border border-cyan-500/30 rounded-xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/20 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                    <currentStep.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                      Phase 0{currentStep.stepNumber} · {currentStep.stage} Layer
                    </span>
                    <h5 className="text-base sm:text-lg font-bold text-white">
                      {currentStep.name} — <span className="text-cyan-300">{currentStep.recordSample}</span>
                    </h5>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border border-cyan-500/30 text-cyan-300">
                    Gate: {currentStep.readinessGate}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {currentStep.summary}
              </p>

              {/* Record Spec Key-Value Pairs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                {currentStep.details.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/70 border border-cyan-500/20 p-3 rounded-lg font-mono text-xs">
                    <span className="text-[10px] text-slate-400 uppercase block mb-0.5">{item.label}</span>
                    <span className="text-slate-100 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Guided Next Action Box */}
              <div className="mt-4 p-3.5 rounded-lg bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan-200">
                  <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">Recommended Next Action:</strong> {currentStep.nextAction}
                  </span>
                </div>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                  className="px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shrink-0 transition-colors hidden sm:block"
                >
                  Advance Flow
                </button>
              </div>
            </div>

          </div>
        )}

        {/* WORKSPACE MODE 2: EXECUTIVE COMMAND CENTER (Founder / Leadership View) */}
        {workspaceMode === "executive" && (
          <div className="space-y-6">
            
            {/* Daily Operational Brief Banner */}
            <div className="bg-[#07111f]/90 border border-cyan-500/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    Executive Daily Brief &amp; Attention Triggers
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  Rule-Based Decision Support
                </span>
              </div>

              {/* Attention Trigger Pills */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Buyer Inactivity Trigger</span>
                  </div>
                  <p className="text-[11px] text-amber-200/80">
                    3 buyers silent 30+ days (Halal Mart Singapore +2 others). Follow-up prompt suggested.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-rose-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Payment Exception</span>
                  </div>
                  <p className="text-[11px] text-rose-200/80">
                    1 invoice balance pending milestone confirmation (EXP-2026-001). Balance follow-up due.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                    <Ship className="w-3.5 h-3.5" />
                    <span>Logistics Gate Alert</span>
                  </div>
                  <p className="text-[11px] text-cyan-200/80">
                    Shipment EXP-2026-001 ready for customs PEB declaration &amp; draft COO review.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Work & Linked Chain Map */}
            <div className="bg-[#07111f]/50 border border-cyan-500/20 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                    Operational Context
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Live Linked Record Chain (Sample Prototype Session)
                  </h4>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full font-semibold">
                  Chain Status: 100% Linked
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20">
                  <span className="text-[9px] text-slate-400 block">1. BUYER</span>
                  <span className="font-bold text-slate-100 text-[11px] truncate block">Al-Noor Trading</span>
                  <span className="text-[9px] text-emerald-400">Verified</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20">
                  <span className="text-[9px] text-slate-400 block">2. QUOTE</span>
                  <span className="font-bold text-slate-100 text-[11px] truncate block">QT-2026-001</span>
                  <span className="text-[9px] text-emerald-400">Accepted</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20">
                  <span className="text-[9px] text-slate-400 block">3. SALES ORDER</span>
                  <span className="font-bold text-cyan-300 text-[11px] truncate block">SO-2026-001</span>
                  <span className="text-[9px] text-emerald-400">Active Center</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20">
                  <span className="text-[9px] text-slate-400 block">4. WORK ORDER</span>
                  <span className="font-bold text-slate-100 text-[11px] truncate block">WO-2026-001</span>
                  <span className="text-[9px] text-emerald-400">QC Passed</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20">
                  <span className="text-[9px] text-slate-400 block">5. SHIPMENT</span>
                  <span className="font-bold text-slate-100 text-[11px] truncate block">EXP-2026-001</span>
                  <span className="text-[9px] text-cyan-400">Vessel Booked</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20">
                  <span className="text-[9px] text-slate-400 block">6. DOCUMENTS</span>
                  <span className="font-bold text-slate-100 text-[11px] truncate block">3 Trade Docs</span>
                  <span className="text-[9px] text-cyan-400">Generated</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20 col-span-2 sm:col-span-1">
                  <span className="text-[9px] text-slate-400 block">7. INVOICE</span>
                  <span className="font-bold text-slate-100 text-[11px] truncate block">INV-2026-001</span>
                  <span className="text-[9px] text-amber-400">Pending Wire</span>
                </div>
              </div>
            </div>

            {/* Rule-Based Decision Support & Future Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Rule-Based Decision Support (Current Prototype)</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Attention triggers on buyer inactivity, overdue invoices, and unconfirmed departures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>CBM and pallet volume estimators for FCL 20ft / 40ft container optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Guided next-step prompts based on current milestone readiness gates</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/20 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 font-bold">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>Planned Backend &amp; Multi-User Roadmap</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>PostgreSQL database &amp; Supabase auth migration (planned)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>Role-Based Access Control (Owner, Sales Ops, Operations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>Automated export-document templating &amp; multi-user audit trails</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* Bottom Philosophy Bar */}
        <div className="pt-4 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Operational Prototype · B2B Trade Workflow Engine</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-cyan-300/80 bg-slate-950/80 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Private Business System · Architecture Showcase</span>
          </div>
        </div>

      </div>
    </div>
  );
}
