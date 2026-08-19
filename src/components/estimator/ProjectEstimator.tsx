"use client";

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Send,
  Clock,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

interface ServiceOption {
  id: string;
  label: string;
  category: "type" | "deliverable" | "timeline";
  basePoints: number;
  description: string;
}

const PROJECT_TYPES: ServiceOption[] = [
  {
    id: "b2b-platform",
    label: "B2B Export / Trade Ecosystem",
    category: "type",
    basePoints: 100,
    description: "Escrow payments, custom compliance, multi-vendor portal",
  },
  {
    id: "saas-dashboard",
    label: "High-Density SaaS Dashboard",
    category: "type",
    basePoints: 75,
    description: "Real-time metrics, Webhooks, custom charts & analytics",
  },
  {
    id: "community-portal",
    label: "Residential / Community Portal",
    category: "type",
    basePoints: 60,
    description: "Resident ledgers, visitor passes, automated invoicing",
  },
  {
    id: "custom-architecture",
    label: "Custom System Architecture & API",
    category: "type",
    basePoints: 85,
    description: "Microservices design, Supabase/PostgreSQL schema, DevOps",
  },
];

const DELIVERABLES: ServiceOption[] = [
  {
    id: "auth-rbac",
    label: "Role-Based Authentication (RBAC)",
    category: "deliverable",
    basePoints: 15,
    description: "Admin, Resident, Security & Guard access controls",
  },
  {
    id: "payment-gateway",
    label: "Stripe / Escrow Payment Gateway",
    category: "deliverable",
    basePoints: 25,
    description: "Automated billing, instant invoices & disbursements",
  },
  {
    id: "qr-scanner",
    label: "QR Scanner & Pass System",
    category: "deliverable",
    basePoints: 20,
    description: "Tablet-friendly visitor verification dashboard",
  },
  {
    id: "analytics-webhooks",
    label: "Webhook Ingestion & Data Pipelines",
    category: "deliverable",
    basePoints: 25,
    description: "Live payload parsing & real-time metric streams",
  },
  {
    id: "cms-i18n",
    label: "Multi-Language & Custom CMS",
    category: "deliverable",
    basePoints: 18,
    description: "Bilingual translation triggers & content management",
  },
];

const TIMELINES: ServiceOption[] = [
  {
    id: "expedited",
    label: "Rapid Delivery (2 - 4 Weeks)",
    category: "timeline",
    basePoints: 40,
    description: "High priority sprint focus",
  },
  {
    id: "standard",
    label: "Standard Timeline (6 - 8 Weeks)",
    category: "timeline",
    basePoints: 20,
    description: "Balanced iterative milestones",
  },
  {
    id: "enterprise",
    label: "Comprehensive Roadmap (3+ Months)",
    category: "timeline",
    basePoints: 10,
    description: "Full staging, automated QA, enterprise security",
  },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>("saas-dashboard");
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    "auth-rbac",
    "payment-gateway",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");
  const [submitted, setSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const toggleDeliverable = (id: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const typeObj = PROJECT_TYPES.find((p) => p.id === selectedType);
  const timelineObj = TIMELINES.find((t) => t.id === selectedTimeline);

  const totalPoints =
    (typeObj?.basePoints || 0) +
    (timelineObj?.basePoints || 0) +
    selectedDeliverables.reduce((acc, id) => {
      const item = DELIVERABLES.find((d) => d.id === id);
      return acc + (item?.basePoints || 0);
    }, 0);

  const getEstBudget = (points: number) => {
    if (points > 140) return "$8,000 – $15,000+";
    if (points > 100) return "$5,000 – $8,000";
    return "$2,500 – $5,000";
  };

  const getEstDuration = () => {
    if (selectedTimeline === "expedited") return "2 – 4 Weeks";
    if (selectedTimeline === "standard") return "6 – 8 Weeks";
    return "3+ Months";
  };

  const handleReset = () => {
    setSelectedType("saas-dashboard");
    setSelectedDeliverables(["auth-rbac", "payment-gateway"]);
    setSelectedTimeline("standard");
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="glass-card border border-graphite/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-graphite/40">
        <div>
          <span className="text-xs font-mono text-gold-muted uppercase tracking-widest flex items-center gap-2 mb-1 font-bold">
            <Calculator className="w-4 h-4 text-gold-muted" />
            Interactive Scope & Cost Estimator
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-cream tracking-tight">
            Configure Project Architecture
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono glass-card hover:border-gold-muted/40 text-cream-dark transition-all self-start md:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Choices
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Selection Columns */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Project Type */}
          <div>
            <label className="text-xs font-mono text-cream-dark/70 uppercase tracking-wider block mb-3 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gold-muted/20 text-gold-muted flex items-center justify-center text-[10px] font-bold">
                1
              </span>
              Select Core Architecture Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((type) => {
                const isSelected = type.id === selectedType;
                return (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-xl border transition-all text-xs font-sans flex flex-col justify-between ${
                      isSelected
                        ? "bg-gold-muted/10 border-gold-muted/60 text-cream shadow-lg shadow-gold-muted/10 font-bold"
                        : "glass-card border-graphite/80 text-cream-dark/70 hover:border-graphite/40 hover:text-cream"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-cream">
                        {type.label}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-gold-muted" />
                      )}
                    </div>
                    <p className="text-[11px] text-cream-dark/60 leading-snug font-normal">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: System Features / Deliverables */}
          <div>
            <label className="text-xs font-mono text-cream-dark/70 uppercase tracking-wider block mb-3 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gold-muted/20 text-gold-muted flex items-center justify-center text-[10px] font-bold">
                2
              </span>
              Select Module Deliverables (Multi-Select)
            </label>
            <div className="space-y-2.5">
              {DELIVERABLES.map((del) => {
                const isSelected = selectedDeliverables.includes(del.id);
                return (
                  <button
                    type="button"
                    key={del.id}
                    onClick={() => toggleDeliverable(del.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs flex items-center justify-between ${
                      isSelected
                        ? "bg-gold-muted/10 border-gold-muted/50 text-cream font-semibold"
                        : "glass-card border-graphite/80 text-cream-dark/70 hover:border-graphite/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-gold-muted border-gold-muted text-deep-black"
                            : "border-graphite"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="font-semibold text-cream block">
                          {del.label}
                        </span>
                        <span className="text-[11px] text-cream-dark/60 font-normal">
                          {del.description}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline */}
          <div>
            <label className="text-xs font-mono text-cream-dark/70 uppercase tracking-wider block mb-3 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gold-muted/20 text-gold-muted flex items-center justify-center text-[10px] font-bold">
                3
              </span>
              Target Execution Speed
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TIMELINES.map((tl) => {
                const isSelected = tl.id === selectedTimeline;
                return (
                  <button
                    type="button"
                    key={tl.id}
                    onClick={() => setSelectedTimeline(tl.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all text-xs ${
                      isSelected
                        ? "bg-gold-muted/10 border-gold-muted/60 text-cream font-bold"
                        : "glass-card border-graphite/80 text-cream-dark/70 hover:border-graphite/40"
                    }`}
                  >
                    <span className="font-bold text-cream block mb-1">
                      {tl.label}
                    </span>
                    <span className="text-[10px] text-cream-dark/60 block font-normal">
                      {tl.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Estimate Summary & Inquiry Box */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="glass-card border border-graphite/80 rounded-2xl p-6 flex-1 flex flex-col justify-between space-y-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-graphite/50">
                <span className="text-xs font-mono text-cream-dark/70 uppercase flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-gold-muted" />
                  Estimated Scope Metrics
                </span>
                <span className="text-[10px] font-mono text-emerald-400 glass-badge px-2.5 py-1 rounded-full font-bold">
                  Ready to Build
                </span>
              </div>

              {/* Price & Duration Big Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl glass-card border border-graphite/50">
                  <span className="text-[10px] font-mono text-cream-dark/50 uppercase block mb-1 flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-gold-muted" />
                    Est. Investment
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-gold-muted">
                    {getEstBudget(totalPoints)}
                  </span>
                </div>

                <div className="p-4 rounded-xl glass-card border border-graphite/50">
                  <span className="text-[10px] font-mono text-cream-dark/50 uppercase block mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-muted" />
                    Est. Timeline
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-cream">
                    {getEstDuration()}
                  </span>
                </div>
              </div>

              {/* Summary List */}
              <div className="mt-6 space-y-2 pt-4 border-t border-graphite/40">
                <span className="text-[11px] font-mono text-cream-dark/60 uppercase block font-semibold">
                  Included Specifications:
                </span>
                <div className="space-y-1.5 text-xs text-cream-dark/90 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-muted shrink-0" />
                    <span className="truncate font-bold text-cream">{typeObj?.label}</span>
                  </div>
                  {selectedDeliverables.map((id) => {
                    const item = DELIVERABLES.find((d) => d.id === id);
                    return (
                      <div key={id} className="flex items-center gap-2 pl-2">
                        <span className="w-1 h-1 rounded-full bg-gold-muted" />
                        <span className="truncate text-cream-dark/70">
                          {item?.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Submission Form */}
            {submitted ? (
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-xl text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-cream text-sm">
                  Estimate Request Received!
                </h4>
                <p className="text-xs text-cream-dark/80">
                  I will review your scope specifications and follow up at{" "}
                  <span className="text-gold-muted font-mono font-bold">{clientEmail}</span>{" "}
                  within 24 hours with a custom proposal.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3 pt-4 border-t border-graphite/40"
              >
                <label className="text-[11px] font-mono text-cream-dark/60 block font-semibold">
                  Get Official Proposal & Execution Plan:
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="flex-1 glass-input px-3.5 py-2.5 rounded-xl text-xs text-cream placeholder-cream-dark/30 font-mono outline-none"
                  />
                  <button
                    type="submit"
                    className="shimmer-button px-4 py-2.5 bg-cream hover:bg-gold-muted text-deep-black font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shrink-0 shadow-lg"
                  >
                    <span>Request Proposal</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
