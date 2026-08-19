"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, CheckCircle2, Sparkles, Cpu, Layers } from "lucide-react";

export default function Identity() {
  return (
    <section id="identity" className="py-24 md:py-32 bg-deep-black relative overflow-hidden">
      {/* Decorative subtle grid line overlays */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-graphite/30 hidden md:block"></div>
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-graphite/30 hidden md:block"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-graphite/60 shadow-2xl relative overflow-hidden">
          
          {/* Ambient inner glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold-muted/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Label */}
            <div className="md:col-span-3 flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
              <span className="px-2.5 py-1 rounded-full glass-badge font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5">
                <Quote className="w-3 h-3 text-gold-muted" />
                <span>Core Position</span>
              </span>
              <span className="font-mono text-[9px] text-cream-dark/40 tracking-wider">
                PHILOSOPHY // 01
              </span>
            </div>

            {/* Statement */}
            <div className="md:col-span-9 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-cream leading-tight tracking-tight">
                  “I do not only build websites. <span className="gradient-gold-text">I engineer operational products</span> that give businesses clarity.”
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-cream-dark/85 text-base md:text-lg leading-relaxed max-w-2xl font-sans"
              >
                With over 20 years of leadership experience in manufacturing, quality, and operational management, I bridge real-world business workflows with modern web technology — translating complex operational requirements into clear, credible, and user-friendly digital tools.
              </motion.p>

              {/* Micro grid data indicators */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-graphite/40"
              >
                <div className="p-4 rounded-xl glass-card border border-graphite/40 hover:border-gold-muted/30 transition-colors">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-gold-muted uppercase tracking-wider mb-1">
                    <Cpu className="w-3 h-3" />
                    <span>Domain Mastery</span>
                  </div>
                  <div className="text-xs font-bold text-cream tracking-wide">20+ Yrs Ops &amp; Quality</div>
                </div>

                <div className="p-4 rounded-xl glass-card border border-graphite/40 hover:border-gold-muted/30 transition-colors">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-gold-muted uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Product Architecture</span>
                  </div>
                  <div className="text-xs font-bold text-cream tracking-wide">Clean System Design</div>
                </div>

                <div className="p-4 rounded-xl glass-card border border-graphite/40 hover:border-gold-muted/30 transition-colors">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-gold-muted uppercase tracking-wider mb-1">
                    <Layers className="w-3 h-3" />
                    <span>Delivery</span>
                  </div>
                  <div className="text-xs font-bold text-cream tracking-wide">Strategy to Handover</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
