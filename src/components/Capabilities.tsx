"use client";

import React from "react";
import { ChevronRight, Activity, Globe, Heart, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Capability {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  points: string[];
  focusArea: string;
}

export default function Capabilities() {
  const capabilities: Capability[] = [
    {
      title: "Strategy & Architecture",
      subtitle: "PRODUCT DESIGN SYSTEM",
      icon: <Activity className="w-5 h-5 text-gold-muted" />,
      points: [
        "Product roadmap engineering",
        "B2B marketplace structures",
        "Compliance & trade assessment",
        "Technical stack feasibility checks"
      ],
      focusArea: "Risk Mitigation"
    },
    {
      title: "Digital Product Builder",
      subtitle: "HIGH-SPEED PRODUCTION",
      icon: <Zap className="w-5 h-5 text-gold-muted" />,
      points: [
        "Next.js App Router engineering",
        "Tailwind CSS styling & visual polish",
        "PostgreSQL & Supabase schemas",
        "Framer Motion micro-animations"
      ],
      focusArea: "Code Performance"
    },
    {
      title: "Operations & Automation",
      subtitle: "WORKFLOW SIMPLIFICATION",
      icon: <ShieldCheck className="w-5 h-5 text-gold-muted" />,
      points: [
        "API integration architecture",
        "Custom automation scripts",
        "Resident & gate portal interfaces",
        "Automated status communications"
      ],
      focusArea: "Process Efficiency"
    },
    {
      title: "Brand & Content System",
      subtitle: "EDITORIAL CONVERSION",
      icon: <Heart className="w-5 h-5 text-gold-muted" />,
      points: [
        "Comprehensive brand guidelines",
        "High-density dashboard layouts",
        "Structured typography hierarchies",
        "Modular storefront component kits"
      ],
      focusArea: "Visual Consistency"
    },
    {
      title: "Export Thinking",
      subtitle: "B2B GLOBAL LOGISTICS",
      icon: <Globe className="w-5 h-5 text-gold-muted" />,
      points: [
        "International bulk cargo tracking",
        "Digital customs documentation structures",
        "B2B commodity transactions design",
        "Supplier inventory aggregation"
      ],
      focusArea: "Cross-Border Logic"
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-graphite/40 pb-8 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Capabilities // 04</span>
            </span>
            <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream">
              Founder Capabilities System
            </h2>
          </div>
          <p className="text-cream-dark/60 font-mono text-xs max-w-md leading-relaxed">
            A combined capability engine focusing on technology execution, product strategy, brand systems, and export logistics.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-gold-muted relative overflow-hidden"
              tabIndex={0}
            >
              {/* Top gradient glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-muted/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-cream-dark/40 tracking-wider font-semibold uppercase">
                      {cap.subtitle}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-cream group-hover:text-gold-muted transition-colors duration-200 mt-1">
                      {cap.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl glass-card border border-graphite/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {cap.icon}
                  </div>
                </div>

                {/* Checklist points */}
                <ul className="space-y-3 pt-2">
                  {cap.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2.5 text-xs md:text-sm text-cream-dark/80 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-gold-muted shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="font-sans">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus Area label */}
              <div className="mt-8 pt-4 border-t border-graphite/40 flex items-center justify-between text-[10px] font-mono">
                <span className="text-cream-dark/40 uppercase">CORE VALUE //</span>
                <span className="text-gold-muted font-bold tracking-wider glass-badge px-2.5 py-0.5 rounded-full">
                  {cap.focusArea}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
