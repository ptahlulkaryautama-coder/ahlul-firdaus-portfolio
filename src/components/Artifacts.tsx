"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderOpen, Check, Copy, FileText, Database, ShieldAlert, Cpu, ExternalLink, Sparkles, Terminal } from "lucide-react";
import { artifacts, Artifact } from "../data/artifacts";
import GitHubActivity from "./GitHubActivity";

export default function Artifacts() {
  const [activeArtifact, setActiveArtifact] = useState<Artifact>(artifacts[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeArtifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (category: Artifact["category"]) => {
    switch (category) {
      case "Blueprint":
        return <Cpu className="w-4 h-4" />;
      case "Database Schema":
        return <Database className="w-4 h-4" />;
      case "Prompt":
        return <FileText className="w-4 h-4" />;
      case "Launch Checklist":
        return <ShieldAlert className="w-4 h-4" />;
    }
  };

  return (
    <section id="artifacts" className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-graphite/40 pb-8 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>System Artifacts // 05</span>
            </span>
            <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream">
              Visible Project Blueprints
            </h2>
          </div>
          <p className="text-cream-dark/60 font-mono text-xs max-w-md leading-relaxed">
            Real configurations, database schemas, AI prompts, and launch roadbooks representing my operational execution methodology.
          </p>
        </div>

        {/* Console/Editor Window Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Sidebar File Navigation */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="glass-card border border-graphite/60 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 font-mono text-xs text-cream pb-3 border-b border-graphite/50 font-bold">
                <FolderOpen className="w-4 h-4 text-gold-muted" />
                <span>workspace_root / blueprints</span>
              </div>

              <div className="space-y-2">
                {artifacts.map((art) => {
                  const isActive = art.id === activeArtifact.id;
                  return (
                    <button
                      key={art.id}
                      onClick={() => setActiveArtifact(art)}
                      className={`w-full text-left p-3.5 rounded-xl font-mono text-xs flex items-center justify-between border transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-gold-muted ${
                        isActive
                          ? "bg-gold-muted/10 border-gold-muted/50 text-gold-muted font-bold shadow-md"
                          : "bg-graphite-dark/35 border-transparent text-cream-dark/80 hover:text-cream hover:bg-graphite/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isActive ? "text-gold-muted" : "text-cream-dark/40 group-hover:text-gold-muted"}>
                          {getIcon(art.category)}
                        </span>
                        <span className="truncate max-w-[180px]">{art.filename}</span>
                      </div>
                      <span className="text-[9px] text-cream-dark/40 group-hover:text-cream-dark/70 font-mono scale-95 shrink-0 uppercase tracking-wider">
                        {art.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Artifact description box */}
            <div className="glass-card border border-graphite/60 rounded-2xl p-6 space-y-2">
              <span className="font-mono text-[9px] text-gold-muted uppercase font-bold tracking-widest flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-gold-muted" />
                <span>File Context</span>
              </span>
              <h4 className="font-sans font-bold text-base text-cream">{activeArtifact.title}</h4>
              <p className="text-cream-dark/75 text-xs md:text-sm leading-relaxed font-sans pt-1">
                {activeArtifact.description}
              </p>
            </div>
          </div>

          {/* Right Side: High-fidelity Code Viewer */}
          <div className="lg:col-span-8 flex flex-col glass-card border border-graphite/60 rounded-2xl overflow-hidden shadow-2xl relative">
            
            {/* Header bar */}
            <div className="bg-graphite-dark/95 px-6 py-4 border-b border-graphite/80 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="font-mono text-xs text-cream-dark/60 tracking-wider font-semibold">
                  ~/blueprints/{activeArtifact.filename}
                </span>
              </div>
              
              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link
                  href={`/artifacts/${activeArtifact.id}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-badge font-mono text-[10px] text-gold-muted hover:text-cream transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Full Blueprint</span>
                </Link>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream text-deep-black font-mono text-[10px] font-bold hover:bg-gold-muted transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="flex-1 p-6 bg-graphite-dark/60 overflow-x-auto min-h-[340px] max-h-[520px]">
              <pre className="font-mono text-xs text-cream-dark/95 leading-relaxed selection:bg-gold-muted selection:text-deep-black">
                <code>{activeArtifact.content}</code>
              </pre>
            </div>

            {/* Footer status bar */}
            <div className="bg-graphite-dark/90 px-6 py-3 border-t border-graphite/80 flex items-center justify-between font-mono text-[10px] text-cream-dark/50 font-semibold">
              <span>LINES: {activeArtifact.content.split("\n").length}</span>
              <span>ENCODING: UTF-8 // {activeArtifact.language.toUpperCase()}</span>
            </div>

          </div>

        </div>

        {/* Live GitHub Activity Stream */}
        <div className="mt-12">
          <GitHubActivity />
        </div>

      </div>
    </section>
  );
}
