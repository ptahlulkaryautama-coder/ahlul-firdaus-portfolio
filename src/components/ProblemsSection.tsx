"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileSpreadsheet, EyeOff, Users, CopyX, AlertTriangle, Layers, Lightbulb, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemsSection() {
  const problems = [
    {
      icon: MessageCircle,
      text: "Information is scattered across WhatsApp, spreadsheets, and individual files.",
    },
    {
      icon: FileSpreadsheet,
      text: "Reports are repetitive, slow to prepare, or difficult to consolidate.",
    },
    {
      icon: EyeOff,
      text: "Teams cannot easily see what is complete, delayed, or still waiting.",
    },
    {
      icon: Users,
      text: "Customers or members struggle to find the information or service they need.",
    },
    {
      icon: AlertTriangle,
      text: "Administrative work depends too heavily on one person's memory.",
    },
    {
      icon: CopyX,
      text: "The same data has to be re-entered in several different places.",
    },
    {
      icon: Layers,
      text: "An existing website or internal tool has become confusing to use.",
    },
    {
      icon: Lightbulb,
      text: "You have a product idea but need help turning it into a realistic first version.",
    },
  ];

  return (
    <section id="problems" className="py-24 bg-[#080E0A] border-t border-graphite/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START WITH THE PROBLEM // 02</span>
          </span>
          <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            Does Any of This Feel Familiar?
          </h2>
          <p className="text-cream-dark/75 text-base md:text-lg leading-relaxed font-sans">
            You do not need to arrive with a technical specification. A useful project can begin with a recurring problem, an existing spreadsheet, or a process that has become difficult to manage.
          </p>
        </div>

        {/* 8 Scannable Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card p-5 rounded-2xl border border-graphite/60 hover:border-gold-muted/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="w-9 h-9 rounded-xl bg-graphite-dark/80 border border-graphite/60 flex items-center justify-center text-gold-muted mb-4 group-hover:border-gold-muted/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-cream-dark/85 text-xs md:text-sm font-sans leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="glass-card border border-graphite/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-graphite-dark/40">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center text-gold-muted shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base text-cream">
                Show me how the work happens today. We can identify a practical improvement from there.
              </h4>
              <p className="text-cream-dark/70 text-xs md:text-sm font-sans mt-1">
                Not every problem requires custom software. A structured review, a simpler website, an internal reporting template, or a workflow adjustment may be all you need.
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className="shimmer-button px-5 py-2.5 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs uppercase tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Discuss Your Workflow</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
