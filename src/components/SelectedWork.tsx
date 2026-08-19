"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Cpu, Layers, FileText, CheckCircle2, ExternalLink, Sparkles, Filter, Search, RotateCcw } from "lucide-react";
import { projects, Project } from "../data/projects";
import Cgv10Demo from "./work/Cgv10Demo";
import OoiDemo from "./work/OoiDemo";
import OneEcosDemo from "./work/OneEcosDemo";
import AlIkhlasDemo from "./work/AlIkhlasDemo";
import ProjectThumbnail from "./work/ProjectThumbnail";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<string>("All Stack");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Export Platform & Ecosystem", "Digital Community System", "SaaS Product System", "E-Commerce & Logistics", "Brand Strategy & Design"];
  const popularTechs = ["All Stack", "Next.js", "TypeScript", "Supabase", "Escrow", "PWA", "PostgreSQL"];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesTech = selectedTech === "All Stack" || (p.techStack && p.techStack.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase())));
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.techStack && p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesTech && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    if (status.includes("Live")) {
      return "bg-emerald-400 shadow-sm shadow-emerald-400/50";
    }
    if (status.includes("Active")) {
      return "bg-teal-400 shadow-sm shadow-teal-400/50";
    }
    if (status.includes("Concept") || status.includes("Proof")) {
      return "bg-amber-400 shadow-sm shadow-amber-400/50";
    }
    return "bg-cream-dark/40";
  };

  return (
    <section id="work" className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-graphite/40 pb-8 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work // 02</span>
            </span>
            <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream">
              Selected Work & Case Studies
            </h2>
          </div>
          <p className="text-cream-dark/60 font-mono text-xs max-w-md leading-relaxed">
            Live systems, export platforms, community software, and SaaS dashboards. Click any project to view full specifications.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Top Row: Category Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <Filter className="w-3.5 h-3.5 text-gold-muted shrink-0 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 shrink-0 ${
                    selectedCategory === cat
                      ? "bg-gold-muted text-deep-black font-bold shadow-lg shadow-gold-muted/20"
                      : "glass-card text-cream-dark/70 hover:text-cream hover:border-gold-muted/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative shrink-0 w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-gold-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search systems & stack..."
                className="w-full bg-graphite-dark/70 border border-graphite/80 focus:border-gold-muted/60 text-cream placeholder-cream-dark/40 font-mono text-[11px] rounded-full pl-9 pr-8 py-1.5 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cream-dark/50 hover:text-cream"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Tech Stack Filters & Telemetry Count */}
          <div className="flex items-center justify-between pt-2 border-t border-graphite/30 text-[10px] font-mono">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              <span className="text-cream-dark/40 uppercase tracking-widest shrink-0">Stack:</span>
              {popularTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-2.5 py-1 rounded-md border transition-colors shrink-0 ${
                    selectedTech === tech
                      ? "bg-gold-muted/20 border-gold-muted text-gold-muted font-bold"
                      : "bg-graphite-dark/40 border-graphite/60 text-cream-dark/50 hover:text-cream"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-cream-dark/50 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SHOWING {filteredProjects.length} OF {projects.length} SYSTEMS</span>
              {(selectedCategory !== "All" || selectedTech !== "All Stack" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedTech("All Stack");
                    setSearchQuery("");
                  }}
                  className="ml-2 px-2 py-0.5 rounded bg-graphite hover:bg-graphite-dark text-gold-muted flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveProject(project)}
                className="group glass-card rounded-2xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden focus-visible:outline-2 focus-visible:outline-gold-muted"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
              >
                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-muted/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Visual Project Thumbnail */}
                  <div className="mb-5 rounded-xl overflow-hidden shadow-lg shadow-black/40 group-hover:scale-[1.02] transition-transform duration-300">
                    <ProjectThumbnail
                      projectId={project.id}
                      projectName={project.name}
                      category={project.category}
                    />
                  </div>

                  {/* Header Elements */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="text-[9px] font-mono tracking-wider text-gold-muted uppercase glass-badge px-2.5 py-1 rounded-full font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${getStatusColor(project.statusBadge || project.status)}`}></span>
                      <span className="font-mono text-[9px] text-cream-dark/50 uppercase tracking-wider">
                        {project.statusBadge || project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-sans font-bold text-xl text-cream group-hover:text-gold-muted transition-colors duration-300 mb-2 flex items-center justify-between">
                    <span>{project.name}</span>
                  </h3>

                  {/* One Liner */}
                  <p className="text-cream-dark/80 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.oneLiner}
                  </p>

                  {/* Tech stack badge row */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="bg-graphite/60 border border-graphite-dark text-[9px] font-mono text-cream-dark/60 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[9px] font-mono text-gold-muted/80 self-center">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Triggers */}
                <div className="mt-6 pt-4 border-t border-graphite/40 flex items-center justify-between text-xs font-mono text-cream-dark/70">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    className="hover:text-gold-muted transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>Quick Spec</span>
                  </button>
                  <Link
                    href={`/work/${project.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-gold-muted hover:text-cream transition-colors group-hover:translate-x-0.5 transition-transform text-[11px] font-bold"
                  >
                    Full Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Sliding Modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md"
            />

            {/* Slide-over Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[620px] lg:w-[720px] glass-panel border-l border-graphite/80 z-50 shadow-2xl overflow-y-auto flex flex-col"
            >
              {/* Header Bar */}
              <div className="sticky top-0 bg-graphite-dark/95 backdrop-blur-xl px-8 py-5 border-b border-graphite/80 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-gold-muted/10 border border-gold-muted/20 text-gold-muted">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-cream-dark/70 tracking-wider">
                    SPECIFICATION PANEL // {activeProject.id.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-full glass-card text-cream-dark hover:text-cream hover:bg-gold-muted hover:text-deep-black transition-all duration-200"
                  aria-label="Close panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Panel Content */}
              <div className="px-8 py-8 space-y-8 flex-1">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-gold-muted uppercase glass-badge px-3 py-1 rounded-full font-bold">
                    {activeProject.category}
                  </span>
                  <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-cream mt-4 leading-tight">
                    {activeProject.name}
                  </h3>
                  <p className="text-cream-dark/85 text-xs md:text-sm mt-3 border-l-2 border-gold-muted/60 pl-4 py-1 italic font-serif">
                    “{activeProject.oneLiner}”
                  </p>
                  {activeProject.id === "cgv10" && (
                    <div className="mt-4">
                      <a
                        href="https://portalwargacgv.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-gold-muted hover:text-cream transition-colors font-mono uppercase tracking-wider glass-badge px-3 py-1.5 rounded-lg font-bold"
                      >
                        <span>Visit Live Portal</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Core Parameters Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 glass-card p-5 rounded-2xl border border-graphite/60 font-mono text-[11px] text-cream-dark/80">
                  <div className="space-y-1">
                    <span className="text-cream-dark/40 uppercase block text-[9px]">ROLE</span>
                    <span className="text-cream font-bold">{activeProject.role}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-cream-dark/40 uppercase block text-[9px]">TIMEFRAME</span>
                    <span className="text-cream font-bold">{activeProject.duration}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-cream-dark/40 uppercase block text-[9px]">STATUS</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${getStatusColor(activeProject.status)}`}></span>
                      <span className="text-cream font-bold">{activeProject.status}</span>
                    </div>
                  </div>
                  <div className="space-y-1 col-span-2 md:col-span-1">
                    <span className="text-cream-dark/40 uppercase block text-[9px]">TECH STACK</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {activeProject.techStack.map((tech) => (
                        <span key={tech} className="bg-graphite/80 border border-graphite/50 px-2 py-0.5 rounded text-[10px] text-cream-dark">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution Block */}
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl glass-card border border-graphite/50 space-y-2">
                    <h4 className="font-sans font-extrabold text-sm text-cream flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gold-muted" />
                      <span>THE CHALLENGE</span>
                    </h4>
                    <p className="text-cream-dark/85 text-xs md:text-sm leading-relaxed font-sans">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border border-graphite/50 space-y-2">
                    <h4 className="font-sans font-extrabold text-sm text-cream flex items-center gap-2">
                      <Layers className="w-4 h-4 text-gold-muted" />
                      <span>THE ARCHITECTURE SOLUTION</span>
                    </h4>
                    <p className="text-cream-dark/85 text-xs md:text-sm leading-relaxed font-sans">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="border-t border-graphite/40 pt-6 space-y-3">
                  <h4 className="font-mono text-[10px] text-cream-dark/40 uppercase tracking-wider">
                    OPERATIONAL DETAILS
                  </h4>
                  <p className="text-cream-dark/85 text-xs md:text-sm leading-relaxed font-sans">
                    {activeProject.longDescription}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] text-cream-dark/40 uppercase tracking-wider">
                    ENGINEERED SYSTEM DELIVERABLES
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {activeProject.keyDeliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 glass-card p-3.5 rounded-xl border border-graphite/60 text-cream-dark/95"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-muted mt-0.5 shrink-0" />
                        <span className="font-sans leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Demo for CGV10 */}
                {activeProject.id === "cgv10" && (
                  <div className="space-y-3 pt-6 border-t border-graphite/40">
                    <h4 className="font-mono text-[10px] text-cream-dark/40 uppercase tracking-wider">
                      Ecosystem Simulation (Warga Hub, Pengurus & TPQ)
                    </h4>
                    <Cgv10Demo />
                  </div>
                )}

                {/* Interactive Demo for OOI */}
                {activeProject.id === "ooi" && (
                  <div className="space-y-3 pt-6 border-t border-graphite/40">
                    <h4 className="font-mono text-[10px] text-cream-dark/40 uppercase tracking-wider">
                      B2B Trade Simulation (Escrow Calc, Customs & RFQ)
                    </h4>
                    <OoiDemo />
                  </div>
                )}

                {/* Interactive Demo for OneEcos */}
                {activeProject.id === "oneecos" && (
                  <div className="space-y-3 pt-6 border-t border-graphite/40">
                    <h4 className="font-mono text-[10px] text-cream-dark/40 uppercase tracking-wider">
                      SaaS Cockpit Simulation (Webhooks & Operations Matrix)
                    </h4>
                    <OneEcosDemo />
                  </div>
                )}

                {/* Interactive Demo for Masjid Al Ikhlas */}
                {activeProject.id === "masjid-al-ikhlas" && (
                  <div className="space-y-3 pt-6 border-t border-graphite/40">
                    <h4 className="font-mono text-[10px] text-cream-dark/40 uppercase tracking-wider">
                      Live Digital Ecosystem Simulation (Prayer Times, Transparency & Agenda)
                    </h4>
                    <AlIkhlasDemo />
                  </div>
                )}

                {/* Project Context Box */}
                {activeProject.context && (
                  <div className="glass-card border border-graphite/60 p-5 rounded-2xl space-y-2">
                    <div className="text-[10px] font-mono tracking-wider text-gold-muted uppercase font-bold">
                      PROJECT FOCUS CONTEXT
                    </div>
                    <p className="text-cream text-xs md:text-sm leading-relaxed font-sans">
                      {activeProject.context}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Action Bar */}
              <div className="sticky bottom-0 bg-graphite-dark/95 backdrop-blur-xl px-8 py-5 border-t border-graphite/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Link
                    href={`/work/${activeProject.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono text-gold-muted hover:text-cream transition-colors font-bold uppercase tracking-wider"
                  >
                    <span>Open Case Blueprint Page</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>

                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C9A55A] text-[#0C1810] font-sans text-xs font-bold hover:bg-[#F3EFE6] transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 bg-cream text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold hover:bg-gold-muted transition-colors duration-200"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
