"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Anchor, MapPin, Sparkles, Compass } from "lucide-react";

export default function Story() {
  return (
    <section id="biography" className="py-24 md:py-32 bg-deep-black relative overflow-hidden border-t border-graphite/40">
      {/* Background subtle grid lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-graphite/30 hidden md:block"></div>
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-graphite/30 hidden md:block"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-graphite/60 shadow-2xl relative overflow-hidden">
          
          {/* Subtle ambient light orb */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold-muted/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Label Panel */}
            <div className="md:col-span-4 space-y-5">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted glass-badge px-3 py-1 rounded-full flex items-center gap-1.5 w-fit font-bold">
                  <Sparkles className="w-3 h-3 text-gold-muted" />
                  <span>Biography // 06</span>
                </span>
                <span className="font-mono text-[9px] text-cream-dark/40 tracking-wider block pt-1">
                  NARRATIVE FOUNDATION
                </span>
              </div>
              
              {/* Meta details */}
              <div className="pt-6 border-t border-graphite/40 space-y-3 font-mono text-[11px] text-cream-dark/70">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <MapPin className="w-4 h-4 text-gold-muted" />
                  <span>Based in Batam, Indonesia</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <Anchor className="w-4 h-4 text-gold-muted" />
                  <span>Global Export Mindset</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <Compass className="w-4 h-4 text-gold-muted" />
                  <span>Full-Stack Systems Thinker</span>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="md:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-cream-dark/85 text-base md:text-lg leading-relaxed font-sans"
              >
                <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl tracking-tight text-cream">
                  Operating at the Intersection of <span className="gradient-gold-text">Commerce and Software Architecture</span>
                </h3>
                
                <p>
                  My journey began with a core insight: <strong className="text-cream">beautiful design is incomplete if the underlying logic fails.</strong> I watched organizations invest in aesthetic storefronts that broke under high-density data workloads, cross-border customs requirements, or complex user access levels.
                </p>
                
                <p>
                  I set out to bridge this gap. By combining product strategy with production-ready code, I build interfaces and backend workflows that move business forward. Whether engineering <strong className="text-cream">Origin Of Indonesia (OOI)</strong> to link local agricultural producers with global freight buyers, or creating resident management portals for <strong className="text-cream">CGV10</strong>, I approach every project with end-to-end architectural rigor.
                </p>
                
                <p>
                  My methodology is transparent and quantifiable: document database schemas, eliminate friction, and deliver high-performance compilation speeds.
                </p>
              </motion.div>

              {/* Quote block */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card border-l-4 border-gold-muted p-6 rounded-r-2xl shadow-lg"
              >
                <p className="font-serif text-base md:text-lg text-cream italic leading-relaxed">
                  “A dashboard is not just a collection of widgets. It is the nervous system of an enterprise — fast, dense, clear, and resilient.”
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
