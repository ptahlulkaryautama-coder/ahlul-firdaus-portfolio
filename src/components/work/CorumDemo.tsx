"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Download,
  Upload,
  Printer,
  BarChart2,
  Activity,
  Layers,
  Users,
  ShieldCheck,
  Zap,
  Droplets,
  Container,
  Truck
} from "lucide-react";

interface DeptSection {
  id: string;
  name: string;
  dept: "Facilities" | "EHS" | "Finance" | "HR" | "Procurement" | "QC" | "IT";
  pic: string;
  status: "Complete" | "In Progress" | "Not Started";
  result: string;
}

const initialSections: DeptSection[] = [
  { id: "revenue", name: "Monthly Revenue", dept: "Finance", pic: "Finance", status: "Complete", result: "Rp 28.9B YTD (Jan-Jun)" },
  { id: "purchases", name: "Monthly Purchases", dept: "Procurement", pic: "Procurement", status: "In Progress", result: "Rp 5.3B YTD" },
  { id: "electricity", name: "Electricity Consumption", dept: "Facilities", pic: "Facilities", status: "Complete", result: "1,585,020 kWh" },
  { id: "water", name: "Water Consumption", dept: "Facilities", pic: "Facilities", status: "Complete", result: "1,127 m³ Net" },
  { id: "diesel", name: "Forklift Diesel Fuel", dept: "Facilities", pic: "Production", status: "Complete", result: "2,175 Litres" },
  { id: "rawmat", name: "Raw Material - Resin", dept: "Facilities", pic: "Production", status: "Complete", result: "457.2 MT (Batam Plant)" },
  { id: "watertype", name: "Water Type Breakdown", dept: "EHS", pic: "EHS", status: "In Progress", result: "Harvest & Recycle Logged" },
  { id: "wastecompliance", name: "DOE Scheduled Waste", dept: "EHS", pic: "EHS", status: "In Progress", result: "Corrective Action Plan Active" },
  { id: "hranalysis", name: "Headcount Analysis", dept: "HR", pic: "HR", status: "Complete", result: "Full Male/Female Split" },
  { id: "anticorruption", name: "Anti-Corruption Training", dept: "HR", pic: "HR", status: "Complete", result: "100% Mgmt & Non-Mgmt" },
  { id: "antibribery", name: "Anti-Bribery Statement", dept: "HR", pic: "HR / Legal", status: "In Progress", result: "Signatures Collecting" },
  { id: "suppliercode", name: "Supplier Code of Conduct", dept: "Procurement", pic: "Procurement", status: "Complete", result: "All Key Vendors Signed" },
  { id: "dataprivacy", name: "Data Privacy & Complaints", dept: "IT", pic: "IT (Hanafiah)", status: "Complete", result: "0 Customer Incidents" }
];

export default function CorumDemo() {
  const [sections, setSections] = useState<DeptSection[]>(initialSections);
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    "[SYSTEM_INIT] Loaded PT. Corum SRP2026 Sustainability Package.",
    "[STATUS] 9 Complete, 4 In Progress, 0 Not Started."
  ]);
  const [activeTab, setActiveTab] = useState<"overview" | "sync" | "trends">("overview");

  const depts = ["All", "Facilities", "EHS", "HR", "Finance", "Procurement", "IT"];

  const filteredSections =
    selectedDept === "All"
      ? sections
      : sections.filter((s) => s.dept === selectedDept);

  const completedCount = sections.filter((s) => s.status === "Complete").length;
  const completionPct = Math.round((completedCount / sections.length) * 100);

  const handleExportJSON = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const log = `[EXPORT_JSON] Exported signed package 'corum-srp2026-${selectedDept.toLowerCase()}-${timestamp}.json' (${filteredSections.length} sections)`;
    setSimulatedLogs((prev) => [log, ...prev]);
  };

  const handleMergeData = () => {
    setSections((prev) =>
      prev.map((s) => ({
        ...s,
        status: "Complete"
      }))
    );
    const log = `[MERGE_ENGINE] Merged 7 department JSON payloads. Status: 100% COMPLETE (13/13 sections verified).`;
    setSimulatedLogs((prev) => [log, ...prev]);
  };

  const handleToggleStatus = (id: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: s.status === "Complete" ? "In Progress" : "Complete"
            }
          : s
      )
    );
  };

  return (
    <div className="w-full rounded-3xl glass-card border border-emerald-500/30 bg-gradient-to-br from-[#07130E] via-deep-black to-[#0A1A12] p-6 md:p-8 shadow-2xl text-cream font-sans">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-emerald-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-emerald-400">
            <Building2 className="w-4 h-4" />
            <span>PT. CORUM — SUSTAINABILITY REPORTING SYSTEM (SRP2026)</span>
          </div>
          <h3 className="font-sans font-black text-2xl text-cream">
            Industrial ESG &amp; Compliance Operations Cockpit
          </h3>
          <p className="text-cream-dark/70 text-xs md:text-sm mt-0.5">
            Consolidating multi-department environmental metrics for Batam manufacturing plant.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 self-start lg:self-center">
          <button
            onClick={handleExportJSON}
            className="px-3.5 py-2 rounded-xl bg-gold-muted/15 border border-gold-muted/30 text-gold-muted hover:bg-gold-muted/25 font-mono text-xs font-bold transition-all flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON Sync</span>
          </button>
          <button
            onClick={handleMergeData}
            className="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 font-mono text-xs font-bold transition-all flex items-center gap-2"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Merge 7 Depts</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/20 space-y-1">
          <div className="text-[10px] text-cream-dark/50 uppercase">Completion Rate</div>
          <div className="text-2xl font-bold text-emerald-400">{completionPct}%</div>
          <div className="text-[9px] text-cream-dark/60">{completedCount} of {sections.length} Sections Verified</div>
        </div>
        <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/20 space-y-1">
          <div className="text-[10px] text-cream-dark/50 uppercase">Net Electricity</div>
          <div className="text-2xl font-bold text-teal-300">1.58M kWh</div>
          <div className="text-[9px] text-cream-dark/60">0% Renewable (Grid Sync)</div>
        </div>
        <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/20 space-y-1">
          <div className="text-[10px] text-cream-dark/50 uppercase">Net Water Usage</div>
          <div className="text-2xl font-bold text-cyan-300">1,127 m³</div>
          <div className="text-[9px] text-cream-dark/60">Rainwater &amp; Recycle Logged</div>
        </div>
        <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/20 space-y-1">
          <div className="text-[10px] text-cream-dark/50 uppercase">Raw Resin Consumption</div>
          <div className="text-2xl font-bold text-gold-muted">457.2 MT</div>
          <div className="text-[9px] text-cream-dark/60">Batam Plant Production</div>
        </div>
      </div>

      {/* Department Filter Tabs */}
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="font-mono text-xs text-cream-dark/60 mr-2">Department:</span>
          {depts.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                selectedDept === dept
                  ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                  : "bg-black/40 border border-graphite/60 text-cream-dark/60 hover:text-cream"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="font-mono text-xs text-cream-dark/60">
          Showing {filteredSections.length} Sections
        </div>
      </div>

      {/* Main Grid: Section Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredSections.map((sec) => (
          <div
            key={sec.id}
            onClick={() => handleToggleStatus(sec.id)}
            className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
              sec.status === "Complete"
                ? "bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-400"
                : "bg-black/60 border-amber-500/40 hover:border-amber-400"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-black/60 border border-graphite/40 text-cream-dark/80 uppercase">
                {sec.dept}
              </span>
              <span
                className={`flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  sec.status === "Complete"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                }`}
              >
                {sec.status === "Complete" ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                )}
                {sec.status}
              </span>
            </div>

            <h4 className="font-sans font-bold text-sm text-cream mb-1">{sec.name}</h4>
            <p className="font-mono text-xs text-gold-muted font-semibold">{sec.result}</p>
            
            <div className="flex items-center justify-between text-[9px] font-mono text-cream-dark/50 mt-3 pt-2 border-t border-graphite/40">
              <span>PIC: {sec.pic}</span>
              <span className="text-emerald-400/80">Click to toggle status</span>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Output Log */}
      <div className="p-4 rounded-2xl bg-black/90 border border-graphite/80 font-mono text-xs space-y-2">
        <div className="flex items-center justify-between border-b border-graphite/60 pb-2 text-[11px] text-cream-dark/60">
          <span className="flex items-center gap-2 text-emerald-400 font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>OFFLINE_JSON_INTERCHANGE_STREAM</span>
          </span>
          <span>{simulatedLogs.length} Events</span>
        </div>
        <div className="max-h-24 overflow-y-auto space-y-1 text-[11px] text-cream-dark/80 pt-1">
          {simulatedLogs.map((log, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-gold-muted select-none">&gt;</span>
              <span className={log.includes("COMPLETE") || log.includes("VERIFIED") ? "text-emerald-400 font-bold" : ""}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
