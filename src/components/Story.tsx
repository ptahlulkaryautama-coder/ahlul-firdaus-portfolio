"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Factory, Layers, Cpu } from "lucide-react";

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
                  <span>About Me // 09</span>
                </span>
                <span className="font-mono text-[9px] text-cream-dark/40 tracking-wider block pt-1">
                  OPERATOR TO DIGITAL SYSTEMS
                </span>
              </div>
              
              {/* Meta details */}
              <div className="pt-6 border-t border-graphite/40 space-y-3 font-mono text-[11px] text-cream-dark/70">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <Factory className="w-4 h-4 text-gold-muted shrink-0" />
                  <span>15+ Years Operational &amp; Project Background</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <MapPin className="w-4 h-4 text-gold-muted shrink-0" />
                  <span>Based in Batam, Indonesia</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <Layers className="w-4 h-4 text-gold-muted shrink-0" />
                  <span>Modern Web Stack (Next.js, React, Tailwind)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card border border-graphite/40">
                  <Cpu className="w-4 h-4 text-gold-muted shrink-0" />
                  <span>AI-Assisted Development Workflow</span>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="md:col-span-8 space-y-8">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-cream-dark/85 text-base md:text-lg leading-relaxed font-sans"
              >
                <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl tracking-tight text-cream">
                  I Build from an <span className="gradient-gold-text">Operator&apos;s Perspective</span>
                </h3>
                
                <p>
                  I spent more than 15 years in manufacturing, operations, project delivery, and process improvement. In those environments, you quickly learn that systems succeed or fail based on clarity, reliability, and whether people can actually do their work without friction.
                </p>
                
                <p>
                  Today, I bring that operational background into digital products. Whether building a business website, a community portal, an internal reporting tool, or a product prototype, I start from the real-world workflow—not assumptions.
                </p>
                
                <p>
                  Based in Batam, Indonesia, I combine modern web development (Next.js, TypeScript, Tailwind) with AI-assisted build workflows to deliver focused, usable digital systems faster and more thoughtfully.
                </p>
              </motion.div>

              {/* Quote block */}
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card border-l-4 border-gold-muted p-6 rounded-r-2xl shadow-lg"
              >
                <p className="font-serif text-base md:text-lg text-cream italic leading-relaxed">
                  “A digital tool succeeds when the underlying workflow is clear, reliable, and straightforward for the people who use it.”
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
