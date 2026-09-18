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
    label: "B2B Trade & Sourcing Platform",
    category: "type",
    basePoints: 100,
    description: "Catalog structure, buyer inquiry flows, product attributes",
  },
  {
    id: "saas-dashboard",
    label: "Operational Dashboard & Workspace",
    category: "type",
    basePoints: 75,
    description: "Activity tracking, guided actions, data-entry forms",
  },
  {
    id: "community-portal",
    label: "Residential / Community Portal",
    category: "type",
    basePoints: 60,
    description: "Resident directory, service requests, public notices",
  },
  {
    id: "custom-architecture",
    label: "Custom Digital Tool / MVP",
    category: "type",
    basePoints: 85,
    description: "Next.js / React implementation, custom data model",
  },
];

const DELIVERABLES: ServiceOption[] = [
  {
    id: "auth-rbac",
    label: "Role-Based Access (RBAC)",
    category: "deliverable",
    basePoints: 15,
    description: "Admin, Resident, Contributor & Public access levels",
  },
  {
    id: "payment-gateway",
    label: "Payment & Invoicing Integration",
    category: "deliverable",
    basePoints: 25,
    description: "Gateway integration evaluated per project compliance",
  },
  {
    id: "qr-scanner",
    label: "Pass & Verification Interface",
    category: "deliverable",
    basePoints: 20,
    description: "Mobile/tablet verification and pass generation",
  },
  {
    id: "analytics-webhooks",
    label: "Data Export & Reporting",
    category: "deliverable",
    basePoints: 25,
    description: "CSV / JSON / PDF generation and data tracking",
  },
  {
    id: "cms-i18n",
    label: "Multi-Language & Content Publishing",
    category: "deliverable",
    basePoints: 18,
    description: "Bilingual content presentation and news publishing",
  },
];

const TIMELINES: ServiceOption[] = [
  {
    id: "expedited",
    label: "Focused Sprint (2 – 4 Weeks)",
    category: "timeline",
    basePoints: 40,
    description: "Compact initial version with core essentials",
  },
  {
    id: "standard",
    label: "Standard Phased Build (4 – 8 Weeks)",
    category: "timeline",
    basePoints: 20,
    description: "Balanced milestones from discovery to launch",
  },
  {
    id: "enterprise",
    label: "Comprehensive Scope (2 – 3+ Months)",
    category: "timeline",
    basePoints: 10,
    description: "Multi-stage delivery with discovery & validation",
  },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>("saas-dashboard");
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    "auth-rbac",
    "analytics-webhooks",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");
  const [submitted, setSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (points > 140) return "$5,000 – $10,000+ (Est.)";
    if (points > 100) return "$3,000 – $5,000 (Est.)";
    return "$1,500 – $3,000 (Est.)";
  };

  const getEstDuration = () => {
    if (selectedTimeline === "expedited") return "2 – 4 Weeks (Est.)";
    if (selectedTimeline === "standard") return "4 – 8 Weeks (Est.)";
    return "2 – 3+ Months (Est.)";
  };

  const handleReset = () => {
    setSelectedType("saas-dashboard");
    setSelectedDeliverables(["auth-rbac", "analytics-webhooks"]);
    setSelectedTimeline("standard");
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail) return;

    setIsSubmitting(true);
    try {
      const deliverablesList = selectedDeliverables
        .map((id) => DELIVERABLES.find((d) => d.id === id)?.label)
        .filter(Boolean)
        .join(", ");

      const payload = {
        name: clientEmail.split("@")[0] || "Prospect Client",
        email: clientEmail,
        scope: typeObj?.label || "Custom Scope",
        message: `[Interactive Scope Estimator Request]
- Project Type: ${typeObj?.label}
- Estimated Investment Range: ${getEstBudget(totalPoints)}
- Target Timeline: ${getEstDuration()} (${timelineObj?.label})
- Selected Deliverables: ${deliverablesList}
- Total Architecture Score: ${totalPoints} pts`,
      };

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit estimate request:", err);
      // Still show submitted UI gracefully
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card border border-graphite/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-graphite/40">
        <div>
          <span className="text-xs font-mono text-gold-muted uppercase tracking-widest flex items-center gap-2 mb-1 font-bold">
            <Calculator className="w-4 h-4 text-gold-muted" />
            Interactive Scope &amp; Timeline Estimator
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-cream tracking-tight">
            Configure Project Parameters
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
              Select Core System Type
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
              Select Deliverables &amp; Workflows (Multi-Select)
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
              Target Delivery Pace
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
                  Preliminary Scope Estimate
                </span>
                <span className="text-[10px] font-mono text-emerald-400 glass-badge px-2.5 py-1 rounded-full font-bold">
                  Indicative Only
                </span>
              </div>

              {/* Price & Duration Big Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl glass-card border border-graphite/50">
                  <span className="text-[10px] font-mono text-cream-dark/50 uppercase block mb-1 flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-gold-muted" />
                    Est. Investment
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-gold-muted">
                    {getEstBudget(totalPoints)}
                  </span>
                </div>

                <div className="p-4 rounded-xl glass-card border border-graphite/50">
                  <span className="text-[10px] font-mono text-cream-dark/50 uppercase block mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-muted" />
                    Est. Timeline
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-cream">
                    {getEstDuration()}
                  </span>
                </div>
              </div>

              {/* Summary List */}
              <div className="mt-6 space-y-2 pt-4 border-t border-graphite/40">
                <span className="text-[11px] font-mono text-cream-dark/60 uppercase block font-semibold">
                  Selected Inclusions:
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

              {/* Disclaimer */}
              <div className="mt-4 p-3 rounded-lg bg-black/40 border border-graphite/40 text-[10px] text-cream-dark/60 leading-relaxed font-sans">
                Estimates are preliminary and indicative only. Final project scope and timeline depend on detailed discovery, required integrations, data structures, and feasibility review.
              </div>
            </div>

            {/* Submission Form */}
            {submitted ? (
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-xl text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-cream text-sm">
                  Scope Review Request Received!
                </h4>
                <p className="text-xs text-cream-dark/80 font-sans">
                  I will review your scope requirements and follow up at{" "}
                  <span className="text-gold-muted font-mono font-bold">{clientEmail}</span>{" "}
                  within 24-48 business hours with an initial evaluation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3 pt-4 border-t border-graphite/40"
              >
                <label className="text-[11px] font-mono text-cream-dark/60 block font-semibold">
                  Request an Initial Scope Review:
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
                    disabled={isSubmitting}
                    className="shimmer-button px-4 py-2.5 bg-cream hover:bg-gold-muted disabled:opacity-50 text-deep-black font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shrink-0 shadow-lg"
                  >
                    <span>{isSubmitting ? "Sending..." : "Request Review"}</span>
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
