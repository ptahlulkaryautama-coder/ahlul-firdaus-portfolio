import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatIBuild from "../components/WhatIBuild";
import ProblemsSection from "../components/ProblemsSection";
import SelectedWork from "../components/SelectedWork";
import ServicesSection from "../components/ServicesSection";
import BuildMethod from "../components/BuildMethod";
import Story from "../components/Story";
import Testimonials from "../components/Testimonials";
import WritingsPreview from "../components/WritingsPreview";
import FAQSection from "../components/FAQSection";
import IndonesianSection from "../components/IndonesianSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Terminal } from "lucide-react";

// Dynamically import heavy below-the-fold technical visualizers & blueprints
const ArchitectureVisualizer = dynamic(
  () => import("../components/ArchitectureVisualizer"),
  {
    loading: () => (
      <div className="w-full h-96 rounded-3xl glass-card border border-graphite/60 flex items-center justify-center font-mono text-xs text-cream-dark/40 animate-pulse">
        Loading System Topology Simulator...
      </div>
    ),
  }
);

const Artifacts = dynamic(() => import("../components/Artifacts"), {
  loading: () => (
    <div className="w-full h-80 rounded-3xl glass-card border border-graphite/60 flex items-center justify-center font-mono text-xs text-cream-dark/40 animate-pulse">
      Loading System Blueprints &amp; Schemas...
    </div>
  ),
});

const Capabilities = dynamic(() => import("../components/Capabilities"), {
  loading: () => (
    <div className="w-full h-64 rounded-3xl glass-card border border-graphite/60 flex items-center justify-center font-mono text-xs text-cream-dark/40 animate-pulse">
      Loading Engineering Capabilities...
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What I Help You Build */}
        <WhatIBuild />

        {/* 3. Problems I Can Help Simplify */}
        <ProblemsSection />

        {/* 4. Selected Work & Case Studies */}
        <SelectedWork />

        {/* 5. Ways I Can Help */}
        <ServicesSection />

        {/* 6. How I Work */}
        <BuildMethod />

        {/* 7. Technical Architecture & Artifacts — For Technical Reviewers */}
        <section id="technical" className="py-20 bg-deep-black border-t border-graphite/40 relative">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-muted font-bold flex items-center gap-2 mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Deep Technical Architecture // 08</span>
              </span>
              <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
                For Technical Reviewers
              </h2>
              <p className="text-cream-dark/75 text-sm md:text-base leading-relaxed font-sans">
                These interactive visualizers and technical artifacts demonstrate the underlying architecture, data models, and specifications behind the systems.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-graphite/60">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4 border-b border-graphite/40 pb-4">
                <div>
                  <span className="font-mono text-[10px] text-gold-muted uppercase tracking-wider font-semibold">
                    Interactive Topology
                  </span>
                  <h3 className="font-sans font-bold text-xl text-cream mt-1">
                    System Architecture Simulation
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-cream-dark/50 bg-graphite-dark/60 px-3 py-1 rounded-full border border-graphite/50">
                  Node state flow &amp; data model inspector
                </span>
              </div>
              <ArchitectureVisualizer defaultPreset="ooi" />
            </div>
          </div>

          <Artifacts />
          <Capabilities />
        </section>

        {/* 8. Biography / Story */}
        <Story />

        {/* 9. Project Context (Who These Systems Are Designed For) */}
        <Testimonials />

        {/* 10. Writings & Articles */}
        <WritingsPreview />

        {/* 11. FAQ & Process Clarity */}
        <FAQSection />

        {/* 12. Indonesian Client Section */}
        <IndonesianSection />

        {/* 13. Contact & Project Estimator */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

