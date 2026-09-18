"use client";

import React from "react";
import Link from "next/link";
import { Globe, LayoutDashboard, GitMerge, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatIBuild() {
  const solutions = [
    {
      id: "websites-portals",
      title: "Business Websites & Portals",
      icon: Globe,
      description:
        "Clear digital experiences for businesses, communities, organizations, and service providers that need information, services, and workflows in one accessible place.",
      examples: [
        "Business & organization websites",
        "Customer or member portals",
        "Community & resident platforms",
        "Service and information hubs",
      ],
    },
    {
      id: "dashboards-tools",
      title: "Dashboards & Internal Tools",
      icon: LayoutDashboard,
      description:
        "Practical tools for reporting, administration, finance, progress monitoring, and operational visibility.",
      examples: [
        "Reporting dashboards",
        "Admin interfaces & directories",
        "Finance & transparency tools",
        "Operational trackers & ledgers",
      ],
    },
    {
      id: "workflow-improvement",
      title: "Workflow Improvement",
      icon: GitMerge,
      description:
        "Turn spreadsheets, chat-based coordination, repetitive reporting, and manual follow-ups into a more structured digital process.",
      examples: [
        "Workflow & bottleneck review",
        "Information architecture design",
        "Data-entry & ESG templates",
        "Focused functional MVPs",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-deep-black border-t border-graphite/40 relative dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRACTICAL DIGITAL SOLUTIONS // 01</span>
          </span>
          <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            What I Help You Build
          </h2>
          <p className="text-cream-dark/75 text-base md:text-lg leading-relaxed font-sans">
            Digital products shaped around the way your business or organization actually works—not around unnecessary technical complexity.
          </p>
        </div>

        {/* 3 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-7 md:p-8 border border-graphite/60 flex flex-col justify-between hover:border-gold-muted/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-gold-muted/5"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center text-gold-muted mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-sans font-extrabold text-xl text-cream group-hover:text-gold-muted transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-cream-dark/75 text-sm leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-graphite/40 space-y-2.5">
                  <span className="font-mono text-[10px] text-gold-muted/80 uppercase tracking-wider font-semibold block">
                    Typical Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-cream-dark/85 font-sans">
                    {item.examples.map((ex, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting CTA Strip */}
        <div className="p-6 md:p-8 rounded-2xl glass-card border border-gold-muted/30 bg-gold-muted/5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-sans font-bold text-base md:text-lg text-cream">
              Not sure what you need? Start with the workflow you use today.
            </h4>
            <p className="text-cream-dark/70 text-xs md:text-sm font-sans mt-1">
              You don&apos;t need technical specs. We can deconstruct the current spreadsheet or manual process together.
            </p>
          </div>
          <Link
            href="#contact"
            className="shimmer-button px-6 py-3 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider uppercase rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0 shadow-lg"
          >
            <span>Discuss Your Workflow</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
