"use client";

import React from "react";
import { Search, Compass, Palette, Code, CheckCircle, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface MethodStep {
  num: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
}

export default function BuildMethod() {
  const steps: MethodStep[] = [
    {
      num: "01",
      title: "Clarify",
      subtitle: "DECONSTRUCT GOALS",
      icon: <Search className="w-4 h-4" />,
      description: "Deconstruct the business problem. Eliminate fuzzy assumptions. Lock quantitative objectives, functional boundaries, and target specifications."
    },
    {
      num: "02",
      title: "Structure",
      subtitle: "LOGIC ARCHITECTURE",
      icon: <Compass className="w-4 h-4" />,
      description: "Draft database relations, API schemas, transactional user flows, and logistics structures. Ensure compliance before writing lines of code."
    },
    {
      num: "03",
      title: "Design",
      subtitle: "HIGH-FIDELITY INTERFACE",
      icon: <Palette className="w-4 h-4" />,
      description: "Translate architectures into sleek dark-luxury interfaces. Prioritize typography hierarchy, metric densities, and user interaction clarity."
    },
    {
      num: "04",
      title: "Build",
      subtitle: "HIGH-SPEED CODING",
      icon: <Code className="w-4 h-4" />,
      description: "Program utilizing premium Next.js and Tailwind CSS frameworks. Build clean, reusable components integrated with robust state-sync engines."
    },
    {
      num: "05",
      title: "Validate",
      subtitle: "STRESS TESTING",
      icon: <CheckCircle className="w-4 h-4" />,
      description: "Audit compilation integrity, responsiveness, accessibility parameters, load-speed metrics, and operational edge-case behaviors."
    },
    {
      num: "06",
      title: "Launch",
      subtitle: "DEPLOY & ACTIVATE",
      icon: <Rocket className="w-4 h-4" />,
      description: "Deploy to globally optimized CDN architectures, hook up automated monitoring integrations, transfer project control keys, and sync active operations."
    }
  ];

  return (
    <section id="method" className="py-24 bg-deep-black border-y border-graphite/40 relative dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Process // 03</span>
          </span>
          <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            Repeatable Build Methodology
          </h2>
          <p className="text-cream-dark/75 text-sm leading-relaxed font-sans">
            How raw concepts transform into resilient digital products. Each stage acts as an operational check-gate to eliminate project risk, maintain velocity, and guarantee visual and technical excellence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group glass-card rounded-2xl p-7 transition-all duration-300 relative overflow-hidden focus-visible:outline-2 focus-visible:outline-gold-muted"
              tabIndex={0}
            >
              {/* Top gradient highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-muted/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number and Icon Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-gold-muted glass-badge px-2.5 py-1 rounded-full">
                  STEP {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl glass-card border border-graphite/60 flex items-center justify-center text-cream-dark group-hover:text-gold-muted group-hover:border-gold-muted/40 transition-colors duration-300 shadow-md">
                  {step.icon}
                </div>
              </div>

              {/* Text metadata */}
              <div className="space-y-2">
                <div className="font-mono text-[9px] text-cream-dark/40 tracking-widest font-semibold uppercase">
                  {step.subtitle}
                </div>
                <h3 className="font-sans font-bold text-lg text-cream group-hover:text-gold-muted transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-cream-dark/75 text-xs md:text-sm leading-relaxed font-sans pt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
