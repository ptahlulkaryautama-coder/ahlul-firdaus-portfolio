"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Network, Shield, Settings, Activity, Sparkles, Layers, FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden dot-grid">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      {/* Dynamic ambient glowing background mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/60 to-deep-black z-10 pointer-events-none" />
      
      {/* Animated glowing ambient light orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-radial from-gold-muted/20 via-gold-muted/5 to-transparent blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-radial from-amber-600/15 via-gold-dark/5 to-transparent blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Modern Bold Sans-Serif Hero Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-gold-muted font-mono text-[10px] uppercase tracking-wider mb-6 shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-gold-muted" />
            <span>Digital Product Architect &amp; Systems Specialist</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-cream">
              Ahlul Firdaus
            </h1>
            <p className="font-mono text-xs text-gold-muted mt-1 uppercase tracking-widest flex items-center gap-2 flex-wrap">
              <span>Operational Systems Architect</span> • <span>20+ Yrs Industrial Background</span> • <span>Full-Stack Engineer</span>
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] mb-6"
          >
            I build <span className="gradient-gold-text">operational products</span><br />
            that give businesses clarity.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-cream-dark/85 leading-relaxed font-sans max-w-xl mb-8"
          >
            Designing &amp; engineering premium websites, operational dashboards, and digital systems for businesses that need clarity, credibility, and room to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#work"
              className="shimmer-button px-6 py-3.5 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-gold-muted/20 group"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#artifacts"
              className="px-6 py-3.5 glass-card text-cream hover:border-gold-muted/50 font-sans text-xs tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Layers className="w-4 h-4 text-gold-muted group-hover:rotate-12 transition-transform" />
              <span>Inspect Architecture Artifacts</span>
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-6 py-3.5 glass-card text-cream hover:text-gold-muted hover:border-gold-muted/50 font-sans text-xs tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-gold-muted group-hover:scale-110 transition-transform" />
              <span>View Resume / CV</span>
            </button>
          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-graphite/40 w-full max-w-lg"
          >
            <div>
              <div className="font-sans font-extrabold text-2xl text-gold-muted">20+ Yrs</div>
              <div className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-wider mt-0.5">Ops &amp; Quality Background</div>
            </div>
            <div>
              <div className="font-sans font-extrabold text-2xl text-cream">6+</div>
              <div className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-wider mt-0.5">Built Ecosystems</div>
            </div>
            <div>
              <div className="font-sans font-extrabold text-2xl text-cream">100%</div>
              <div className="font-mono text-[10px] text-cream-dark/50 uppercase tracking-wider mt-0.5">Execution Fidelity</div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Clean, grounded visual overview with interactive glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-md glass-card rounded-2xl overflow-hidden shadow-2xl relative group border border-graphite/80 hover:border-gold-muted/40 transition-all duration-500">
            
            {/* Top window bar */}
            <div className="bg-graphite-dark/90 px-5 py-3 border-b border-graphite/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-gold-muted animate-pulse" />
                <span className="font-mono text-[9px] text-cream-dark/60 tracking-wider uppercase">ARCHITECT COCKPIT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
              </div>
            </div>

            {/* Content details */}
            <div className="p-6 space-y-6">
              
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] text-gold-muted uppercase tracking-widest block font-semibold">Active Focus</span>
                <p className="text-xs text-cream font-medium leading-relaxed">
                  Engineered custom B2B trade pipelines, neighborhood community ledgers, and high-density SaaS management tools.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="space-y-3 pt-3 border-t border-graphite/40">
                <span className="font-mono text-[9px] text-cream-dark/40 uppercase tracking-wider block">Operational Focus</span>
                
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="flex items-center gap-3 p-3 rounded-xl glass-card hover:bg-graphite/60 transition-all duration-300 group/item">
                    <div className="p-2 rounded-lg bg-gold-muted/10 border border-gold-muted/20 text-gold-muted group-hover/item:scale-110 transition-transform">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cream flex items-center gap-2">
                        <span>Transaction Ecosystems</span>
                        <Sparkles className="w-3 h-3 text-gold-muted opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[9px] text-cream-dark/50 font-mono">B2B Trade, Customs documentation, escrow flows.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl glass-card hover:bg-graphite/60 transition-all duration-300 group/item">
                    <div className="p-2 rounded-lg bg-gold-muted/10 border border-gold-muted/20 text-gold-muted group-hover/item:scale-110 transition-transform">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cream flex items-center gap-2">
                        <span>Community Governance</span>
                        <Sparkles className="w-3 h-3 text-gold-muted opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[9px] text-cream-dark/50 font-mono">Neighborhood ledger management, entry security systems.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl glass-card hover:bg-graphite/60 transition-all duration-300 group/item">
                    <div className="p-2 rounded-lg bg-gold-muted/10 border border-gold-muted/20 text-gold-muted group-hover/item:scale-110 transition-transform">
                      <Settings className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cream flex items-center gap-2">
                        <span>Modular SaaS Architectures</span>
                        <Sparkles className="w-3 h-3 text-gold-muted opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[9px] text-cream-dark/50 font-mono">High-density visual layouts, API sync pipelines.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographical heartbeat */}
              <div className="pt-3 border-t border-graphite/40 flex items-center justify-between text-[10px] font-mono text-cream-dark/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  OPERATING FROM:
                </span>
                <span className="text-cream font-bold">BATAM (GMT+7)</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
