"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, CheckCircle2, Users, Target } from "lucide-react";
import { systemContexts } from "../data/testimonials";
import Link from "next/link";

const accentMap: Record<string, { badge: string; ring: string; dot: string; iconBg: string }> = {
  purple: {
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    ring: "ring-purple-500/40",
    dot: "bg-purple-400",
    iconBg: "bg-purple-950/80 text-purple-300 border-purple-500/40",
  },
  gold: {
    badge: "bg-gold-muted/10 border-gold-muted/30 text-gold-muted",
    ring: "ring-gold-muted/40",
    dot: "bg-gold-muted",
    iconBg: "bg-gold-muted/10 text-gold-muted border-gold-muted/40",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    ring: "ring-emerald-500/40",
    dot: "bg-emerald-400",
    iconBg: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
  },
  cyan: {
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    ring: "ring-cyan-500/40",
    dot: "bg-cyan-400",
    iconBg: "bg-cyan-950/80 text-cyan-300 border-cyan-500/40",
  },
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + systemContexts.length) % systemContexts.length);
  };

  const item = systemContexts[active];
  const accent = accentMap[item.accentColor] ?? accentMap.gold;

  return (
    <section id="testimonials" className="py-24 bg-deep-black relative overflow-hidden border-t border-graphite/40">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-muted/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Context // 08</span>
          </span>
          <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            Who Each System Is Designed For
          </h2>
          <p className="text-cream-dark/70 text-sm leading-relaxed font-sans">
            Clear context on the operational challenges explored, the target users served, and the core workflows structured across each project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Context Card */}
          <div className="lg:col-span-8">
            <div className={`glass-card rounded-3xl p-8 md:p-10 border border-graphite/60 ring-1 ${accent.ring} shadow-2xl relative overflow-hidden min-h-[340px]`}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Category & Project Title */}
                  <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-graphite/40">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${accent.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                      {item.category}
                    </span>
                    <Link
                      href={`/work/${item.projectId}`}
                      className="flex items-center gap-1.5 font-mono text-[10px] text-cream-dark/60 hover:text-gold-muted transition-colors uppercase tracking-wider font-bold"
                    >
                      View Full Case Study
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* System Name */}
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-cream">
                    {item.project}
                  </h3>

                  {/* Designed For */}
                  <div className="p-4 rounded-xl glass-card border border-graphite/50 space-y-1.5">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gold-muted font-bold">
                      <Users className="w-3.5 h-3.5" />
                      <span>Designed For</span>
                    </div>
                    <p className="text-cream text-xs md:text-sm font-medium leading-relaxed font-sans">
                      {item.designedFor}
                    </p>
                  </div>

                  {/* Operational Problem Solved */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-cream-dark/60 font-semibold">
                      <Target className="w-3.5 h-3.5 text-gold-muted" />
                      <span>Operational Problem Addressed</span>
                    </div>
                    <p className="text-cream-dark/85 text-xs md:text-sm leading-relaxed font-sans">
                      {item.problemSolved}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-wider font-semibold">
                      Structured Capabilities:
                    </div>
                    <div className="space-y-1.5">
                      {item.keyCapabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-cream-dark/80 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                {systemContexts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-2 bg-gold-muted" : "w-2 h-2 bg-graphite hover:bg-cream-dark/40"}`}
                    aria-label={`System ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  className="p-2 rounded-xl glass-card border border-graphite/60 hover:border-gold-muted/50 text-cream-dark hover:text-gold-muted transition-all"
                  aria-label="Previous System"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="p-2 rounded-xl glass-card border border-graphite/60 hover:border-gold-muted/50 text-cream-dark hover:text-gold-muted transition-all"
                  aria-label="Next System"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side List: All 6 Systems */}
          <div className="lg:col-span-4 space-y-2.5">
            {systemContexts.map((sys, i) => {
              const a = accentMap[sys.accentColor] ?? accentMap.gold;
              const isSelected = i === active;
              return (
                <button
                  key={sys.id}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? `glass-card border-graphite/80 ring-1 ${a.ring} bg-gold-muted/5`
                      : "border-graphite/40 hover:border-graphite/70 bg-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="font-sans font-bold text-cream text-xs truncate">{sys.project}</div>
                      <div className={`font-mono text-[9px] uppercase tracking-wider truncate mt-0.5 ${isSelected ? "text-gold-muted" : "text-cream-dark/40"}`}>
                        {sys.category}
                      </div>
                    </div>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? a.dot : "bg-graphite"}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
