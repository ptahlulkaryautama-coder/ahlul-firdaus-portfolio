import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Identity from "../components/Identity";
import SelectedWork from "../components/SelectedWork";
import ServicesSection from "../components/ServicesSection";
import BuildMethod from "../components/BuildMethod";
import Capabilities from "../components/Capabilities";
import Artifacts from "../components/Artifacts";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

const ArchitectureVisualizer = dynamic(
  () => import("../components/ArchitectureVisualizer")
);

const Testimonials = dynamic(() => import("../components/Testimonials"));
const WritingsPreview = dynamic(() => import("../components/WritingsPreview"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Identity />
        <SelectedWork />
        
        {/* Interactive System Architecture Playground Section */}
        <section id="architecture" className="py-20 bg-deep-black border-t border-graphite/40 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-muted font-bold block mb-2">
                System Blueprint Playground // 02.5
              </span>
              <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl text-cream mb-3">
                Live Interactive System Architecture
              </h2>
              <p className="text-cream-dark/75 text-sm md:text-base leading-relaxed">
                Explore real-time node flows, multi-party escrow state triggers, Supabase edge sync, and analytics data streams. Click any node to inspect technical specifications or hit <strong>Run Simulation</strong> to watch live payload execution.
              </p>
            </div>
            <ArchitectureVisualizer defaultPreset="ooi" />
          </div>
        </section>

        <ServicesSection />
        <FAQSection />
        <BuildMethod />
        <Capabilities />
        <Artifacts />
        <Story />
        <Testimonials />
        <WritingsPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

