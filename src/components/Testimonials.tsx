"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from "lucide-react";
import { testimonials } from "../data/testimonials";
import Link from "next/link";

const accentMap: Record<string, { badge: string; ring: string; dot: string; avatar: string }> = {
  purple: {
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    ring: "ring-purple-500/40",
    dot: "bg-purple-400",
    avatar: "bg-purple-950/80 text-purple-300 border-purple-500/40",
  },
  gold: {
    badge: "bg-gold-muted/10 border-gold-muted/30 text-gold-muted",
    ring: "ring-gold-muted/40",
    dot: "bg-gold-muted",
    avatar: "bg-gold-muted/10 text-gold-muted border-gold-muted/40",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    ring: "ring-emerald-500/40",
    dot: "bg-emerald-400",
    avatar: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
  },
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[active];
  const accent = accentMap[t.accentColor] ?? accentMap.gold;

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
            <span>Client Voices // 08</span>
          </span>
          <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            What Operators Say
          </h2>
          <p className="text-cream-dark/70 text-sm leading-relaxed">
            Real feedback from community managers, export operators, and project partners who use the systems daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Quote Card */}
          <div className="lg:col-span-8">
            <div className={`glass-card rounded-3xl p-8 md:p-12 border border-graphite/60 ring-1 ${accent.ring} shadow-2xl relative overflow-hidden min-h-[280px]`}>
              {/* Large decorative quote */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-cream-dark/5" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {/* Project badge */}
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-6 ${accent.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    {t.project}
                  </span>

                  {/* Quote text */}
                  <blockquote className="text-cream/90 text-lg md:text-xl leading-relaxed font-sans mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono font-black text-sm shrink-0 ${accent.avatar}`}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-sans font-bold text-cream text-sm">{t.name}</div>
                        <div className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-wider">{t.role}</div>
                      </div>
                    </div>
                    <Link
                      href={`/work/${t.projectId}`}
                      className="flex items-center gap-1.5 font-mono text-[10px] text-cream-dark/50 hover:text-gold-muted transition-colors uppercase tracking-wider"
                    >
                      View Case Study
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-2 bg-gold-muted" : "w-2 h-2 bg-graphite hover:bg-cream-dark/40"}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  className="p-2 rounded-xl glass-card border border-graphite/60 hover:border-gold-muted/50 text-cream-dark hover:text-gold-muted transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="p-2 rounded-xl glass-card border border-graphite/60 hover:border-gold-muted/50 text-cream-dark hover:text-gold-muted transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side: All testimonials mini list */}
          <div className="lg:col-span-4 space-y-3">
            {testimonials.map((item, i) => {
              const a = accentMap[item.accentColor] ?? accentMap.gold;
              return (
                <button
                  key={item.id}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    i === active
                      ? `glass-card border-graphite/80 ring-1 ${a.ring}`
                      : "border-graphite/40 hover:border-graphite/70 bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono font-black text-xs shrink-0 ${a.avatar}`}>
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-sans font-bold text-cream text-xs truncate">{item.name}</div>
                      <div className={`font-mono text-[9px] uppercase tracking-wider truncate ${i === active ? "text-gold-muted" : "text-cream-dark/40"}`}>
                        {item.project}
                      </div>
                    </div>
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
