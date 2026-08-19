"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Layers,
  Filter,
  CheckCircle2,
  ExternalLink,
  Download,
  Building2,
  HardHat,
  Home,
  Truck,
  Building,
  Zap,
  MessageSquare,
  ShieldCheck,
  Cpu,
  FileText,
  X,
  Play,
  Calculator,
  MapPin,
  Check,
  ChevronRight
} from "lucide-react";
import { templateKits, TemplateKit } from "../../data/templates";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TemplatesStudioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDemoTemplate, setActiveDemoTemplate] = useState<TemplateKit | null>(null);

  const categories = [
    "All",
    "Industrial & Manufacturing",
    "Construction & EPC",
    "Real Estate & Property",
    "Logistics & Freight",
    "Corporate & Holding"
  ];

  const filteredKits = selectedCategory === "All"
    ? templateKits
    : templateKits.filter((t) => t.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Industrial & Manufacturing":
        return Building2;
      case "Construction & EPC":
        return HardHat;
      case "Real Estate & Property":
        return Home;
      case "Logistics & Freight":
        return Truck;
      case "Corporate & Holding":
        return Building;
      default:
        return Layers;
    }
  };

  return (
    <div className="min-h-screen bg-deep-black text-cream font-sans overflow-x-hidden dot-grid relative flex flex-col">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/70 to-deep-black z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-radial from-gold-muted/5 via-gold-muted/1 to-transparent blur-[160px] pointer-events-none z-0" />

      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-20 w-full">
        {/* Top Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gold-muted hover:text-cream transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Systems Portfolio</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-graphite/60 pb-8 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Templates & System Kits // 05</span>
            </span>
            <h1 className="font-sans font-black tracking-tight text-3xl md:text-5xl text-cream">
              Industrial, Construction & Property System Kits
            </h1>
          </div>
          <p className="text-cream-dark/65 font-mono text-xs max-w-lg leading-relaxed">
            Production-ready web starters and corporate website kits engineered for manufacturing plants, construction contractors, property developers, and logistics operators.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-gold-muted shrink-0 mr-1" />
          {categories.map((cat) => {
            const IconComp = getCategoryIcon(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 shrink-0 flex items-center gap-2 ${
                  selectedCategory === cat
                    ? "bg-gold-muted text-deep-black font-bold shadow-lg shadow-gold-muted/20"
                    : "glass-card text-cream-dark/70 hover:text-cream hover:border-gold-muted/30"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredKits.map((kit, index) => {
              const CategoryIcon = getCategoryIcon(kit.category);
              return (
                <motion.div
                  key={kit.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card rounded-2xl p-7 border border-graphite/80 flex flex-col justify-between relative overflow-hidden group hover:border-gold-muted/50 transition-all duration-300"
                >
                  {/* Glowing Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-muted/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Full Page Website Mockup Header */}
                    <div
                      onClick={() => setActiveDemoTemplate(kit)}
                      className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden mb-6 border border-graphite/80 group-hover:border-gold-muted/50 cursor-pointer bg-graphite-dark"
                    >
                      <img
                        src={kit.previewImage}
                        alt={kit.name}
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:object-bottom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80" />

                      {/* Hover Overlay Badge */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-deep-black/60 backdrop-blur-xs">
                        <span className="px-4 py-2 rounded-full bg-gold-muted text-deep-black font-sans font-bold text-xs flex items-center gap-2 shadow-2xl">
                          <Play className="w-3.5 h-3.5 fill-deep-black" />
                          <span>Preview Full Website Layout</span>
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded bg-deep-black/80 backdrop-blur-md border border-graphite/80 font-mono text-[9px] text-cream-dark/80">
                          {kit.specs.pageCount}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-deep-black/80 backdrop-blur-md border border-graphite/80 font-mono text-[9px] text-gold-muted font-bold">
                          Full-Height Design
                        </span>
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gold-muted/10 border border-gold-muted/30 text-gold-muted font-mono text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <CategoryIcon className="w-3 h-3" />
                        {kit.badge}
                      </span>
                      <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {kit.specs.speedScore}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-sans font-extrabold text-xl md:text-2xl text-cream tracking-tight group-hover:text-gold-muted transition-colors">
                      {kit.name}
                    </h3>
                    <p className="font-sans text-xs text-cream-dark/70 mt-2 leading-relaxed">
                      {kit.description}
                    </p>

                    {/* Target Audience Box */}
                    <div className="mt-4 p-3 rounded-xl bg-graphite-dark/60 border border-graphite/60 font-mono text-[10px] text-cream-dark/60">
                      <span className="text-gold-muted font-semibold uppercase block mb-0.5">Ideal Target Market:</span>
                      <span>{kit.idealFor}</span>
                    </div>

                    {/* Features List */}
                    <div className="mt-5 space-y-2">
                      <span className="font-mono text-[9px] text-cream-dark/40 uppercase tracking-widest font-bold block">
                        KEY INCLUDED MODULES & CAPABILITIES:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {kit.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-sans text-cream-dark/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-muted shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {kit.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-graphite-dark border border-graphite/80 text-cream-dark/60 font-mono text-[9px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-8 pt-5 border-t border-graphite/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveDemoTemplate(kit)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl glass-card hover:bg-gold-muted/10 border border-graphite/80 hover:border-gold-muted/40 text-cream font-mono text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 text-gold-muted fill-gold-muted" />
                      <span>Live Interactive Demo</span>
                    </button>

                    <a
                      href={`https://wa.me/6282283549457?text=Hello%20Ahlul,%20I%20am%20interested%20in%20deploying/customizing%20the%20${encodeURIComponent(kit.name)}%20template%20for%20my%20business.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cream hover:bg-gold-muted text-deep-black font-sans font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire / Deploy Kit</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom B2B Architecture Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-card border border-graphite/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-r from-emerald-950/20 via-deep-black to-gold-muted/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-muted/10 border border-gold-muted/40 flex items-center justify-center text-gold-muted shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-xl text-cream">
                Need a Custom Industrial Web Platform or ERP Portal?
              </h4>
              <p className="text-cream-dark/70 text-xs mt-1 max-w-xl">
                We engineer bespoke industrial company profiles, multi-plant dashboards, and custom construction tender portals tailored to your enterprise operations.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6282283549457?text=Hello%20Ahlul,%20I%20need%20a%20custom%20industrial/construction%20web%20architecture."
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button px-6 py-3.5 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0"
          >
            <span>Consult Custom Build</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </main>

      {/* Interactive Demo Viewport Modal */}
      <AnimatePresence>
        {activeDemoTemplate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDemoTemplate(null)}
              className="fixed inset-0 bg-deep-black/85 backdrop-blur-xl z-[101]"
            />

            {/* Simulated Browser Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-[102] w-full max-w-5xl max-h-[85vh] bg-[#0A0D0A] border border-graphite/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Browser Header Bar */}
              <div className="bg-graphite-dark/90 px-4 py-3 border-b border-graphite/60 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="ml-4 px-3 py-1 rounded-md bg-graphite border border-graphite-dark text-[10px] font-mono text-cream-dark/60 flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>https://preview.ahlulfirdaus.com/templates/{activeDemoTemplate.id}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-gold-muted uppercase font-bold tracking-wider hidden sm:inline">
                    LIVE SIMULATION VIEWPORT
                  </span>
                  <button
                    onClick={() => setActiveDemoTemplate(null)}
                    className="p-1 rounded-lg text-cream-dark/50 hover:text-cream hover:bg-graphite"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Demo Viewport Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar bg-deep-black">
                {/* Simulated Hero Navbar */}
                <div className="flex items-center justify-between pb-4 border-b border-graphite/60">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gold-muted/20 border border-gold-muted/50 flex items-center justify-center text-gold-muted font-bold font-mono text-xs">
                      {activeDemoTemplate.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-bold text-sm text-cream font-sans">{activeDemoTemplate.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-cream-dark/60 hidden sm:flex">
                    <span>Capabilities</span>
                    <span>Equipment / Fleet</span>
                    <span>Projects</span>
                    <span>Certifications</span>
                    <span className="px-3 py-1 rounded-full bg-gold-muted text-deep-black font-bold">RFQ Portal</span>
                  </div>
                </div>

                {/* Full-Height Visual Website Mockup Preview Banner */}
                <div className="w-full rounded-2xl overflow-hidden border border-graphite/80 glass-card bg-graphite-dark space-y-3 p-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-cream-dark/60 border-b border-graphite/60 pb-2">
                    <span className="text-gold-muted font-bold uppercase">FULL WEBSITE DESIGN MOCKUP PREVIEW</span>
                    <span>SCROLL DOWN TO INSPECT FULL LAYOUT</span>
                  </div>
                  <div className="w-full max-h-[450px] overflow-y-auto rounded-xl border border-graphite/60 custom-scrollbar shadow-inner bg-black">
                    <img
                      src={activeDemoTemplate.previewImage}
                      alt={`${activeDemoTemplate.name} Full Preview`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Simulated Hero Banner */}
                <div className="p-8 rounded-2xl glass-card border border-graphite/80 relative overflow-hidden bg-gradient-to-r from-graphite-dark via-deep-black to-gold-muted/10">
                  <span className="font-mono text-[9px] text-gold-muted uppercase tracking-widest block mb-2 font-bold">
                    // OFFICIAL CORPORATE PROFILE PREVIEW
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-cream font-sans tracking-tight">
                    {activeDemoTemplate.tagline}
                  </h2>
                  <p className="text-xs text-cream-dark/70 mt-2 max-w-2xl leading-relaxed">
                    {activeDemoTemplate.description}
                  </p>
                </div>

                {/* Simulated Interactive Content Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl glass-card border border-graphite/60 space-y-2">
                    <div className="text-gold-muted font-mono text-[10px] uppercase font-bold">OPERATIONAL METRICS</div>
                    <div className="text-xl font-bold text-cream font-mono">ISO 9001:2015</div>
                    <div className="text-[10px] text-cream-dark/50">Audited & Certified Manufacturing Standards</div>
                  </div>
                  <div className="p-5 rounded-xl glass-card border border-graphite/60 space-y-2">
                    <div className="text-gold-muted font-mono text-[10px] uppercase font-bold">SITE / PLANT CAPACITY</div>
                    <div className="text-xl font-bold text-cream font-mono">15,000 m²</div>
                    <div className="text-[10px] text-cream-dark/50">Production Floor & Warehouse Footprint</div>
                  </div>
                  <div className="p-5 rounded-xl glass-card border border-graphite/60 space-y-2">
                    <div className="text-gold-muted font-mono text-[10px] uppercase font-bold">RFQ DISPATCH</div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">Direct API</div>
                    <div className="text-[10px] text-cream-dark/50">Instant Procurement & Quote Ingestion</div>
                  </div>
                </div>

                {/* Simulated Modules Checklist */}
                <div className="p-6 rounded-xl glass-card border border-graphite/60 space-y-4">
                  <h3 className="font-mono text-xs text-gold-muted uppercase font-bold tracking-wider">
                    MODULES & PAGES INCLUDED IN THIS STARTER KIT:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeDemoTemplate.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-cream font-sans">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry Footer inside Modal */}
                <div className="pt-4 border-t border-graphite/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="font-mono text-[10px] text-cream-dark/50">
                    STATUS: READY FOR INSTANT DEPLOYMENT & CUSTOMIZATION
                  </div>
                  <a
                    href={`https://wa.me/6282283549457?text=Hello%20Ahlul,%20I%20want%20to%20acquire/customize%20the%20${encodeURIComponent(activeDemoTemplate.name)}%20template.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-cream hover:bg-gold-muted text-deep-black font-sans font-bold text-xs tracking-wider transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Kit Deployment</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
