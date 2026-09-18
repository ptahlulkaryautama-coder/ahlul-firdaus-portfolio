"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Download,
  Upload,
  Printer,
  BarChart2,
  Layers,
  ShieldCheck,
  Zap,
  Droplets,
  Container,
  Truck,
  Edit3,
  HelpCircle
} from "lucide-react";

export type SectionStatus = "complete" | "inprogress" | "notstarted";

interface PrototypeSection {
  id: string;
  code: string;
  name: string;
  dept: "Facilities" | "EHS" | "Finance" | "HR" | "Procurement" | "QA/QC" | "Production";
  owner: string;
  status: SectionStatus;
  sampleValue: string;
  unit?: string;
  notes: string;
}

const initialSections: PrototypeSection[] = [
  // Finance
  { id: "revenue", code: "FIN-01", name: "Periodic Financial Scope", dept: "Finance", owner: "Finance Lead", status: "complete", sampleValue: "Sample Financial Index (Anonymized)", notes: "Consolidated financial baseline for reporting scope." },
  { id: "purchases", code: "FIN-02", name: "Operational Purchases", dept: "Finance", owner: "Procurement / Finance", status: "inprogress", sampleValue: "Sample Expense Allocation", notes: "Breakdown of operating vs capital expenditures." },

  // Facilities & Production (Energy, Water, Fuel, Material)
  { id: "electricity", code: "FAC-01", name: "Electricity Consumption", dept: "Facilities", owner: "Facilities PIC", status: "complete", sampleValue: "1,450,000", unit: "kWh", notes: "Utility meter records across plant facilities." },
  { id: "water", code: "FAC-02", name: "Water Withdrawal & Discharge", dept: "Facilities", owner: "Facilities PIC", status: "complete", sampleValue: "1,050", unit: "m³", notes: "Municipal supply and recycled process water." },
  { id: "diesel", code: "PRD-01", name: "Forklift Diesel Fuel", dept: "Production", owner: "Plant Operations", status: "complete", sampleValue: "2,200", unit: "Liters", notes: "Internal material handling fuel logs." },
  { id: "rawmat", code: "PRD-02", name: "Raw Resin Consumption", dept: "Production", owner: "Plant Operations", status: "complete", sampleValue: "420.5", unit: "MT", notes: "Production line material intake." },
  { id: "gas", code: "FAC-03", name: "LPG / Natural Gas Utility", dept: "Facilities", owner: "Facilities PIC", status: "inprogress", sampleValue: "340", unit: "kg", notes: "Canteen and secondary utility supply." },
  { id: "solar", code: "FAC-04", name: "Renewable Energy Assessment", dept: "Facilities", owner: "Facilities PIC", status: "notstarted", sampleValue: "Pending Study", notes: "Rooftop solar feasibility review." },

  // EHS (Environment, Health & Safety)
  { id: "watertype", code: "EHS-01", name: "Water Quality & Discharge Type", dept: "EHS", owner: "EHS Officer", status: "complete", sampleValue: "Treated & Monitored", notes: "Effluent standards compliance logs." },
  { id: "wastecompliance", code: "EHS-02", name: "Scheduled Waste Management", dept: "EHS", owner: "EHS Officer", status: "inprogress", sampleValue: "Licensed Handler Active", notes: "Storage, manifest, and certified disposal." },
  { id: "solidwaste", code: "EHS-03", name: "Non-Hazardous Solid Waste", dept: "EHS", owner: "EHS Officer", status: "complete", sampleValue: "18.4", unit: "Tons", notes: "Recycled scrap and general waste diversion." },
  { id: "she", code: "EHS-04", name: "Safety Incidents & LTIR", dept: "EHS", owner: "EHS Officer", status: "complete", sampleValue: "0 Major Incidents", notes: "Lost-time injury frequency monitoring." },

  // HR & Governance
  { id: "hranalysis", code: "HR-01", name: "Workforce Demographics", dept: "HR", owner: "HR Team", status: "complete", sampleValue: "Gender & Age Distribution", notes: "Full employee demographic breakdown." },
  { id: "staffturnover", code: "HR-02", name: "Turnover & Retention", dept: "HR", owner: "HR Team", status: "complete", sampleValue: "Annual Retention Ratio", notes: "Tenure tracking across operational roles." },
  { id: "anticorruption", code: "HR-03", name: "Anti-Corruption Training", dept: "HR", owner: "Compliance PIC", status: "complete", sampleValue: "100% Core Staff Covered", notes: "Annual governance refresher sessions." },
  { id: "antibribery", code: "HR-04", name: "Anti-Bribery Policy Statement", dept: "HR", owner: "Compliance PIC", status: "inprogress", sampleValue: "Policy Review Draft", notes: "Internal compliance sign-off in review." },
  { id: "humanrights", code: "HR-05", name: "Human Rights & Labor Standards", dept: "HR", owner: "HR Team", status: "complete", sampleValue: "Zero Non-Compliance", notes: "Fair wages and safe working hours audit." },

  // Procurement & Quality
  { id: "suppliercode", code: "PRC-01", name: "Supplier Code of Conduct", dept: "Procurement", owner: "Procurement Lead", status: "complete", sampleValue: "Signed by Tier-1 Vendors", notes: "Environmental & labor clauses acknowledged." },
  { id: "localtier", code: "PRC-02", name: "Local Sourcing Proportion", dept: "Procurement", owner: "Procurement Lead", status: "inprogress", sampleValue: "62% Domestic Vendors", notes: "Domestic vs imported spend share." },
  { id: "productsafety", code: "QA-01", name: "Product Safety & Quality QA", dept: "QA/QC", owner: "QA/QC Manager", status: "complete", sampleValue: "100% Batch Inspection Pass", notes: "Customer specification compliance." },
  { id: "packagingrecycle", code: "QA-02", name: "Packaging Recyclability", dept: "QA/QC", owner: "QA/QC Team", status: "inprogress", sampleValue: "Corrugated & Recycled Film", notes: "Secondary packaging sustainability review." },
  { id: "dataprivacy", code: "IT-01", name: "Customer Data Protection", dept: "QA/QC", owner: "IT / Systems PIC", status: "complete", sampleValue: "0 Data Breach Incidents", notes: "System access control and privacy logs." },
  { id: "grievancemech", code: "HR-06", name: "Whistleblower & Grievance", dept: "HR", owner: "HR & Legal", status: "complete", sampleValue: "Confidential Channel Active", notes: "Worker feedback and dispute resolution." }
];

export default function CorumDemo() {
  const [sections, setSections] = useState<PrototypeSection[]>(initialSections);
  const [activeTab, setActiveTab] = useState<"overview" | "reported" | "trends" | "fillin">("overview");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [editingId, setEditingId] = useState<string>("electricity");
  const [editValue, setEditValue] = useState<string>("1,450,000");
  const [editStatus, setEditStatus] = useState<SectionStatus>("complete");
  const [notification, setNotification] = useState<string | null>(null);

  const departments = ["All", "Facilities", "EHS", "Production", "HR", "Procurement", "QA/QC", "Finance"];

  const filteredSections =
    selectedDept === "All"
      ? sections
      : sections.filter((s) => s.dept === selectedDept);

  const completeCount = sections.filter((s) => s.status === "complete").length;
  const inProgressCount = sections.filter((s) => s.status === "inprogress").length;
  const notStartedCount = sections.filter((s) => s.status === "notstarted").length;
  const totalSections = sections.length;
  const completionRate = Math.round((completeCount / totalSections) * 100);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleExportJSON = () => {
    const payload = {
      template: "PT. Corum Sustainability Reporting Package (SRP2026)",
      exportTimestamp: new Date().toISOString(),
      summary: {
        totalSections,
        complete: completeCount,
        inProgress: inProgressCount,
        notStarted: notStartedCount,
        completionRate: `${completionRate}%`
      },
      sections: sections.map((s) => ({
        code: s.code,
        name: s.name,
        department: s.dept,
        owner: s.owner,
        status: s.status,
        sampleValue: s.sampleValue,
        unit: s.unit || null,
        notes: s.notes
      }))
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `corum-srp2026-progress-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast("⬇ Exported progress JSON file to your downloads.");
  };

  const handleImportMerge = () => {
    // Simulate importing an external JSON file and merging statuses
    setSections((prev) =>
      prev.map((s) => ({
        ...s,
        status: s.status === "notstarted" ? "inprogress" : s.status
      }))
    );
    showToast("⬆ Simulated JSON merge: Inactive sections updated to In Progress.");
  };

  const handlePrintPDF = () => {
    showToast("🖨 Print preview ready. Prototype uses browser @media print formatting.");
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setSections((prev) =>
      prev.map((s) =>
        s.id === editingId
          ? { ...s, sampleValue: editValue, status: editStatus }
          : s
      )
    );
    showToast(`Saved updates for section ${editingId.toUpperCase()}.`);
  };

  const selectedEditingSection = sections.find((s) => s.id === editingId) || sections[0];

  return (
    <div className="w-full rounded-3xl glass-card border border-emerald-500/30 bg-gradient-to-br from-[#07130E] via-deep-black to-[#0A1A12] p-5 sm:p-7 shadow-2xl text-cream font-sans">
      {/* Privacy Notice Banner */}
      <div className="mb-6 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-slate-300 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
        <p className="leading-relaxed">
          <strong className="text-white">Privacy Disclosure:</strong> Interface shown with anonymized sample data. Company figures, personnel information, and internal reporting details are not disclosed.
        </p>
      </div>

      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-emerald-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-emerald-400">
            <Building2 className="w-4 h-4" />
            <span>PT. CORUM — SUSTAINABILITY REPORTING TEMPLATE</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              HTML/JS Prototype
            </span>
          </div>
          <h3 className="font-sans font-black text-xl sm:text-2xl text-cream">
            Browser-Based Reporting &amp; Data-Entry Template
          </h3>
          <p className="text-cream-dark/70 text-xs md:text-sm mt-0.5">
            Turning a complex sustainability workbook into a clearer, guided reporting workflow across 23 sections.
          </p>
        </div>

        {/* Global Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={handleExportJSON}
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gold-muted/15 border border-gold-muted/30 text-gold-muted hover:bg-gold-muted/25 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
            title="Download JSON data package locally"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>
          <button
            onClick={handleImportMerge}
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/60 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
            title="Simulate importing department JSON file"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import JSON</span>
          </button>
          <button
            onClick={handlePrintPDF}
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
            title="Simulate print to PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="my-3 p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-400/50 text-xs font-mono text-emerald-200 flex items-center justify-between"
          >
            <span>{notification}</span>
            <button onClick={() => setNotification(null)} className="text-emerald-400 hover:text-white font-bold ml-3">✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab Navigation (4 Views matching prototype) */}
      <div className="flex items-center gap-2 border-b border-emerald-950 pt-4 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "overview"
              ? "bg-emerald-500/25 border border-emerald-500/60 text-emerald-300"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>1. Overview</span>
        </button>
        <button
          onClick={() => setActiveTab("reported")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "reported"
              ? "bg-emerald-500/25 border border-emerald-500/60 text-emerald-300"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>2. Already Reported</span>
        </button>
        <button
          onClick={() => setActiveTab("trends")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "trends"
              ? "bg-emerald-500/25 border border-emerald-500/60 text-emerald-300"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
          }`}
        >
          <BarChart2 className="w-3.5 h-3.5" />
          <span>3. Data Trends</span>
        </button>
        <button
          onClick={() => setActiveTab("fillin")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "fillin"
              ? "bg-emerald-500/25 border border-emerald-500/60 text-emerald-300"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>4. Fill In Data</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === "overview" && (
        <div className="space-y-6 pt-5">
          {/* Progress Overview KPI Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-1">
              <div className="text-[10px] text-cream-dark/60 uppercase">Reporting Progress</div>
              <div className="text-2xl font-bold text-emerald-400">{completionRate}%</div>
              <div className="text-[9px] text-cream-dark/60">{completeCount} of {totalSections} Completed</div>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/20 space-y-1">
              <div className="text-[10px] text-cream-dark/60 uppercase">Complete (Green)</div>
              <div className="text-2xl font-bold text-emerald-300">{completeCount}</div>
              <div className="text-[9px] text-cream-dark/60">Ready for consolidation</div>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/20 space-y-1">
              <div className="text-[10px] text-cream-dark/60 uppercase">In Progress (Amber)</div>
              <div className="text-2xl font-bold text-amber-300">{inProgressCount}</div>
              <div className="text-[9px] text-cream-dark/60">Awaiting department input</div>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 border border-rose-500/20 space-y-1">
              <div className="text-[10px] text-cream-dark/60 uppercase">Not Started (Red)</div>
              <div className="text-2xl font-bold text-rose-300">{notStartedCount}</div>
              <div className="text-[9px] text-cream-dark/60">Action required</div>
            </div>
          </div>

          {/* Department Completion Status Bars */}
          <div className="p-5 rounded-2xl bg-black/40 border border-emerald-950 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-300 font-bold border-b border-emerald-950 pb-2">
              <span>Departmental Reporting Status</span>
              <span className="text-emerald-400 font-normal text-[11px]">7 Tracked Domains</span>
            </div>
            {departments.filter((d) => d !== "All").map((dept) => {
              const deptSections = sections.filter((s) => s.dept === dept);
              const deptComplete = deptSections.filter((s) => s.status === "complete").length;
              const deptPct = Math.round((deptComplete / deptSections.length) * 100) || 0;

              return (
                <div key={dept} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-300 font-medium">{dept}</span>
                    <span className="text-slate-400">{deptComplete}/{deptSections.length} sections ({deptPct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-400 transition-all duration-500" style={{ width: `${deptPct}%` }} />
                    <div className="bg-slate-800 flex-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prototype Architecture Notes */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
            <h5 className="font-bold text-white flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
              Prototype Scope &amp; Workflow
            </h5>
            <p className="leading-relaxed">
              This prototype models a standalone client-side reporting package. It replaces chaotic spreadsheet forwards with clear departmental ownership. Data is persisted in your browser&apos;s local storage and consolidated manually via JSON file export/import.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: ALREADY REPORTED (List of tracked sections) */}
      {activeTab === "reported" && (
        <div className="space-y-4 pt-5">
          {/* Department Filter Bar */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                    selectedDept === dept
                      ? "bg-emerald-500/25 border border-emerald-500/60 text-emerald-300"
                      : "bg-black/40 border border-graphite/40 text-slate-400 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <span className="font-mono text-xs text-slate-400">
              {filteredSections.length} Sections Listed
            </span>
          </div>

          {/* Section Table / Cards */}
          <div className="space-y-2.5">
            {filteredSections.map((sec) => (
              <div
                key={sec.id}
                className="p-3.5 rounded-xl bg-black/60 border border-emerald-950 hover:border-emerald-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-300 font-bold">
                      {sec.code}
                    </span>
                    <span className="text-slate-400">{sec.dept}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">Owner: {sec.owner}</span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">{sec.name}</h4>
                  <p className="text-xs text-slate-400">{sec.notes}</p>
                </div>

                <div className="flex sm:flex-col sm:items-end justify-between items-center gap-1.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-900">
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                      sec.status === "complete"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : sec.status === "inprogress"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    }`}
                  >
                    {sec.status === "complete" ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : sec.status === "inprogress" ? (
                      <Clock className="w-3 h-3 text-amber-400" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 text-rose-400" />
                    )}
                    {sec.status === "complete" ? "Complete" : sec.status === "inprogress" ? "In Progress" : "Not Started"}
                  </span>
                  <span className="font-mono text-xs text-gold-muted font-bold">
                    {sec.sampleValue} {sec.unit || ""}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: DATA TRENDS */}
      {activeTab === "trends" && (
        <div className="space-y-6 pt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Trend Card 1: Electricity */}
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-emerald-950 pb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">Electricity Trend (Sample Data)</span>
                </div>
                <span className="text-[10px] text-emerald-400">Monthly kWh Index</span>
              </div>
              <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2 bg-slate-950/60 rounded-xl border border-slate-900">
                {[
                  { m: "Jan", v: 75, val: "1.45M" },
                  { m: "Feb", v: 80, val: "1.52M" },
                  { m: "Mar", v: 72, val: "1.41M" },
                  { m: "Apr", v: 85, val: "1.58M" },
                  { m: "May", v: 78, val: "1.49M" },
                  { m: "Jun", v: 82, val: "1.54M" }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-[9px] text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                    <div className="w-full bg-emerald-500/40 group-hover:bg-emerald-400 rounded-t transition-all duration-300" style={{ height: `${bar.v}%` }} />
                    <span className="text-[9px] text-slate-400">{bar.m}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Sample monthly utility consumption trend visualized client-side via Chart.js component wrapper.
              </p>
            </div>

            {/* Trend Card 2: Water */}
            <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white">Water Consumption Trend</span>
                </div>
                <span className="text-[10px] text-cyan-400">Monthly m³ Index</span>
              </div>
              <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2 bg-slate-950/60 rounded-xl border border-slate-900">
                {[
                  { m: "Jan", v: 65, val: "980" },
                  { m: "Feb", v: 70, val: "1,050" },
                  { m: "Mar", v: 62, val: "940" },
                  { m: "Apr", v: 78, val: "1,120" },
                  { m: "May", v: 74, val: "1,080" },
                  { m: "Jun", v: 69, val: "1,020" }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-[9px] text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                    <div className="w-full bg-cyan-500/40 group-hover:bg-cyan-400 rounded-t transition-all duration-300" style={{ height: `${bar.v}%` }} />
                    <span className="text-[9px] text-slate-400">{bar.m}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Sample municipal supply withdrawal and recycled process water metrics.
              </p>
            </div>

            {/* Trend Card 3: Raw Resin MT */}
            <div className="p-4 rounded-2xl bg-black/60 border border-gold-muted/30 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <div className="flex items-center gap-2">
                  <Container className="w-4 h-4 text-gold-muted" />
                  <span className="font-bold text-white">Raw Resin Material Input</span>
                </div>
                <span className="text-[10px] text-gold-muted">Metric Tons</span>
              </div>
              <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2 bg-slate-950/60 rounded-xl border border-slate-900">
                {[
                  { m: "Jan", v: 80, val: "420" },
                  { m: "Feb", v: 75, val: "395" },
                  { m: "Mar", v: 88, val: "450" },
                  { m: "Apr", v: 82, val: "430" },
                  { m: "May", v: 90, val: "465" },
                  { m: "Jun", v: 85, val: "440" }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-[9px] text-gold-muted opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                    <div className="w-full bg-gold-muted/40 group-hover:bg-gold-muted rounded-t transition-all duration-300" style={{ height: `${bar.v}%` }} />
                    <span className="text-[9px] text-slate-400">{bar.m}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Manufacturing input metrics for production throughput evaluation.
              </p>
            </div>

            {/* Trend Card 4: Forklift Fuel */}
            <div className="p-4 rounded-2xl bg-black/60 border border-purple-500/30 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-purple-400" />
                  <span className="font-bold text-white">Internal Transport Diesel</span>
                </div>
                <span className="text-[10px] text-purple-400">Liters</span>
              </div>
              <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2 bg-slate-950/60 rounded-xl border border-slate-900">
                {[
                  { m: "Jan", v: 70, val: "2.1k" },
                  { m: "Feb", v: 73, val: "2.2k" },
                  { m: "Mar", v: 68, val: "2.0k" },
                  { m: "Apr", v: 75, val: "2.3k" },
                  { m: "May", v: 72, val: "2.2k" },
                  { m: "Jun", v: 70, val: "2.1k" }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-[9px] text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                    <div className="w-full bg-purple-500/40 group-hover:bg-purple-400 rounded-t transition-all duration-300" style={{ height: `${bar.v}%` }} />
                    <span className="text-[9px] text-slate-400">{bar.m}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Forklift and on-site logistics operational fuel burn metrics.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FILL IN DATA (Interactive Form) */}
      {activeTab === "fillin" && (
        <div className="space-y-6 pt-5">
          <form onSubmit={handleSaveEdit} className="p-5 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-4">
            <div className="border-b border-emerald-950 pb-3">
              <h4 className="font-sans font-bold text-base text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-emerald-400" />
                <span>Department Data-Entry Simulator</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Simulate how a department owner inputs metrics, updates section status, and persists data in their browser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Select Section */}
              <div className="space-y-1.5 font-mono text-xs">
                <label className="text-slate-300 font-bold">Select Tracked Section</label>
                <select
                  value={editingId}
                  onChange={(e) => {
                    const nextId = e.target.value;
                    setEditingId(nextId);
                    const found = sections.find((s) => s.id === nextId);
                    if (found) {
                      setEditValue(found.sampleValue);
                      setEditStatus(found.status);
                    }
                  }}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                >
                  {sections.map((s) => (
                    <option key={s.id} value={s.id}>
                      [{s.code}] {s.name} ({s.dept})
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Selector */}
              <div className="space-y-1.5 font-mono text-xs">
                <label className="text-slate-300 font-bold">Completion Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as SectionStatus)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="notstarted">Not Started (Red)</option>
                  <option value="inprogress">In Progress (Amber)</option>
                  <option value="complete">Complete (Green)</option>
                </select>
              </div>

              {/* Sample Value Input */}
              <div className="space-y-1.5 font-mono text-xs md:col-span-2">
                <label className="text-slate-300 font-bold">
                  Sample Data Entry / Notes {selectedEditingSection.unit ? `(${selectedEditingSection.unit})` : ""}
                </label>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                  placeholder="Enter sample metric or qualitative response..."
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400">
                Department: <strong className="text-slate-200">{selectedEditingSection.dept}</strong> · Owner: <strong className="text-slate-200">{selectedEditingSection.owner}</strong>
              </span>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Save Section Update</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
