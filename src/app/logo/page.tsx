"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, RefreshCw, Copy, Check, Sliders, Code, LayoutGrid, Info, Activity, Sparkles, Terminal, Download, Video, Image as ImageIcon, Box } from "lucide-react";
import Logo from "../../components/Logo";

export default function LogoPlayground() {
  const [variant, setVariant] = useState<"vector" | "video" | "png">("vector");
  const [animateMode, setAnimateMode] = useState<"draw" | "assemble" | "fold" | "glitch" | "hud">("draw");
  const [hoverMode, setHoverMode] = useState<"glow" | "lift" | "none">("glow");
  const [size, setSize] = useState<number>(240);
  const [accentColor, setAccentColor] = useState<string>("#C5A880"); // Gold default
  const [customTriangleColor, setCustomTriangleColor] = useState<string>("#F7F4EF");
  const [gridStyle, setGridStyle] = useState<"blueprint" | "dots" | "radar" | "clean">("blueprint");
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"svg" | "react">("svg");
  const [key, setKey] = useState<number>(0); // key to force re-mount and re-play animations

  // Replay animation by changing the key
  const replayAnimation = () => {
    setKey((prev) => prev + 1);
  };

  const handleCopyCode = () => {
    const code = activeTab === "svg" ? svgCode : reactCode;
    navigator.clipboard.writeText(code);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Raw SVG code representation
  const svgCode = `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Monogram A (Gold/Accent) -->
  <path 
    d="M 49,10 L 20,26.7 L 20,73.3 L 29,78.5 L 29,56 L 40,56 L 40,84.8 L 49,90 Z M 29,47 L 40,47 L 40,24.2 L 29,30.5 Z" 
    fill="${accentColor}" 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
  />
  <!-- Monogram F (Gold/Accent) -->
  <path 
    d="M 51,29.7 L 80,29.7 L 80,38.7 L 60,38.7 L 60,49.7 L 72,49.7 L 78,58.7 L 60,58.7 L 60,84.8 L 51,90 Z" 
    fill="${accentColor}" 
  />
  <!-- Top Fold Triangle (White/Cream) -->
  <path 
    d="M 51,10 L 80,26.7 L 51,26.7 Z" 
    fill="${customTriangleColor}" 
  />
</svg>`;

  // React Component representation
  const reactCode = `import React from "react";
import { motion } from "framer-motion";

export default function AHLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      {/* Letter A */}
      <motion.path
        d="M 49,10 L 20,26.7 L 20,73.3 L 29,78.5 L 29,56 L 40,56 L 40,84.8 L 49,90 Z M 29,47 L 40,47 L 40,24.2 L 29,30.5 Z"
        fill="${accentColor}"
        fillRule="evenodd"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 1 }}
        transition={{ pathLength: { duration: 1.2 }, fillOpacity: { delay: 1.0 } }}
      />
      {/* Letter F */}
      <motion.path
        d="M 51,29.7 L 80,29.7 L 80,38.7 L 60,38.7 L 60,49.7 L 72,49.7 L 78,58.7 L 60,58.7 L 60,84.8 L 51,90 Z"
        fill="${accentColor}"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 1 }}
        transition={{ pathLength: { delay: 0.3, duration: 1.2 }, fillOpacity: { delay: 1.2 } }}
      />
      {/* Top Fold */}
      <motion.path
        d="M 51,10 L 80,26.7 L 51,26.7 Z"
        fill="${customTriangleColor}"
        initial={{ rotateX: -90, opacity: 0, originY: 0.27 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.0 }}
      />
    </svg>
  );
}`;

  return (
    <div className="min-h-screen bg-deep-black text-cream font-sans overflow-x-hidden dot-grid relative pb-16">
      
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/60 to-deep-black z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-radial from-gold-muted/5 via-gold-muted/1 to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Header Bar */}
      <header className="border-b border-graphite/60 bg-deep-black/80 backdrop-blur-xl relative z-20 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="p-2 rounded-lg glass-card text-cream-dark hover:text-cream border border-graphite/80 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-gold-muted tracking-widest uppercase font-semibold">
                Design System // Identity Assets
              </span>
              <h1 className="font-sans font-black text-lg md:text-xl text-cream tracking-tight flex items-center gap-2">
                Monogram Vector Studio
                <Sparkles className="w-4 h-4 text-gold-muted" />
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge font-mono text-[10px] uppercase">
            <Activity className="w-3.5 h-3.5 text-gold-muted animate-pulse" />
            <span>RENDER ENGINE: v1.0.4</span>
          </div>
        </div>
      </header>

      {/* Core Cockpit Workspace */}
      <main className="max-w-7xl mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20">
        
        {/* LEFT COLUMN: Controls & Presets (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Asset Format Selector */}
          <div className="glass-card rounded-2xl p-5 border border-graphite/80 space-y-3">
            <h2 className="font-mono text-[10px] text-cream-dark/40 tracking-wider uppercase flex items-center gap-2">
              <Box className="w-3.5 h-3.5 text-gold-muted" />
              RENDER MODE / FORMAT
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "vector", label: "Vector SVG", icon: Sparkles },
                { id: "video", label: "Motion MP4", icon: Video },
                { id: "png", label: "Hi-Res PNG", icon: ImageIcon },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setVariant(item.id as any)}
                    className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-center font-mono text-[9px] transition-all ${
                      variant === item.id
                        ? "bg-gold-muted/15 border-gold-muted text-gold-muted font-bold shadow-lg"
                        : "bg-graphite-dark/40 border-graphite/60 text-cream-dark/60 hover:text-cream hover:border-graphite"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preset Selector */}
          <div className="glass-card rounded-2xl p-5 border border-graphite/80">
            <h2 className="font-mono text-[10px] text-cream-dark/40 tracking-wider uppercase mb-4 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-gold-muted" />
              ANIMATION PRESET
            </h2>
            
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: "draw", name: "Outline Vector Draw", desc: "Sequential path rendering & fill opacity blend." },
                { id: "assemble", name: "Coordinate Assembly", desc: "Pieces translate inward from off-screen anchors." },
                { id: "fold", name: "Perspective Page Fold", desc: "3D rotateX transition on the top-right triangle." },
                { id: "glitch", name: "Cyberpunk Glitch Loop", desc: "Rapid skew, translation, and color separations." },
                { id: "hud", name: "Target HUD Radar", desc: "Concentric active rings and coordinates sweep." },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setAnimateMode(item.id as any);
                    replayAnimation();
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 relative group/btn ${
                    animateMode === item.id 
                      ? "bg-gold-muted/10 border-gold-muted/50 text-cream" 
                      : "bg-graphite-dark/40 border-graphite/60 text-cream-dark/70 hover:border-graphite/90 hover:text-cream"
                  }`}
                >
                  {animateMode === item.id && (
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold-muted animate-ping" />
                  )}
                  <div className="text-xs font-bold font-sans">{item.name}</div>
                  <div className="text-[10px] text-cream-dark/45 mt-1 font-mono leading-tight">{item.desc}</div>
                </button>
              ))}
            </div>

            {/* Replay Button */}
            <button
              onClick={replayAnimation}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold transition-all duration-300"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>REPLAY ENTRANCE</span>
            </button>
          </div>

          {/* Style Modifiers */}
          <div className="glass-card rounded-2xl p-5 border border-graphite/80 space-y-5">
            <h2 className="font-mono text-[10px] text-cream-dark/40 tracking-wider uppercase flex items-center gap-2">
              <LayoutGrid className="w-3.5 h-3.5 text-gold-muted" />
              VISUAL CUSTOMIZATIONS
            </h2>

            {/* Hover Trigger Action */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cream-dark/50 uppercase block">Hover State Action</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "glow", label: "Neon Glow" },
                  { id: "lift", label: "3D Lift" },
                  { id: "none", label: "Static" }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setHoverMode(mode.id as any)}
                    className={`py-2 px-1 text-center font-mono text-[9px] rounded-lg border transition-colors ${
                      hoverMode === mode.id
                        ? "bg-gold-muted/10 border-gold-muted/40 text-gold-muted"
                        : "bg-graphite-dark/50 border-graphite/60 text-cream-dark/60 hover:text-cream"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scaler */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-cream-dark/50 uppercase">Logo Canvas Scale</span>
                <span className="text-gold-muted">{size}px</span>
              </div>
              <input
                type="range"
                min="100"
                max="360"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full h-1 bg-graphite rounded-lg appearance-none cursor-pointer accent-gold-muted"
              />
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono text-cream-dark/50 uppercase block">Accent Theme Mapping</label>
              <div className="flex items-center gap-2">
                {[
                  { color: "#C5A880", name: "Gold" },
                  { color: "#10B981", name: "Emerald" },
                  { color: "#3B82F6", name: "Blue" },
                  { color: "#EC4899", name: "Pink" },
                  { color: "#F59E0B", name: "Amber" }
                ].map((item) => (
                  <button
                    key={item.color}
                    onClick={() => setAccentColor(item.color)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      accentColor === item.color ? "scale-125 ring-2 ring-cream border-deep-black" : "opacity-70 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: item.color }}
                    title={item.name}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN: Live Interactive Viewport (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="glass-card rounded-2xl border border-graphite/80 overflow-hidden flex-1 flex flex-col">
            
            {/* Viewport bar */}
            <div className="bg-graphite-dark/80 px-5 py-3 border-b border-graphite/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-gold-muted" />
                <span className="font-mono text-[9px] text-cream-dark/60 tracking-wider uppercase">VIRTUAL INTERACTION CANVASES</span>
              </div>
              
              {/* Grid styles */}
              <div className="flex items-center gap-1">
                {[
                  { id: "blueprint", label: "Blueprint" },
                  { id: "dots", label: "Dots" },
                  { id: "radar", label: "Radar" },
                  { id: "clean", label: "Clean" }
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setGridStyle(style.id as any)}
                    className={`px-2 py-0.5 font-mono text-[8px] rounded transition-colors ${
                      gridStyle === style.id
                        ? "bg-cream text-deep-black font-semibold"
                        : "text-cream-dark/50 hover:text-cream"
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Grid Canvas Box */}
            <div className="flex-1 min-h-[380px] relative flex items-center justify-center p-8 bg-[#070707] transition-all duration-300">
              
              {/* Render dynamic background layers based on state */}
              {gridStyle === "blueprint" && (
                <div className="absolute inset-0 bg-[linear-gradient(rgba(197,168,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none">
                  {/* Center axes */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gold-muted/10" />
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gold-muted/10" />
                </div>
              )}

              {gridStyle === "dots" && (
                <div className="absolute inset-0 dark-dot-grid pointer-events-none" />
              )}

              {gridStyle === "radar" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[85%] aspect-square rounded-full border border-gold-muted/5 flex items-center justify-center">
                    <div className="w-[70%] aspect-square rounded-full border border-gold-muted/5 flex items-center justify-center">
                      <div className="w-[50%] aspect-square rounded-full border border-gold-muted/5" />
                    </div>
                  </div>
                  {/* Angle sweeps */}
                  <div className="absolute w-[90%] h-[1px] bg-gold-muted/3 rotate-30" />
                  <div className="absolute w-[90%] h-[1px] bg-gold-muted/3 -rotate-30" />
                </div>
              )}

              {/* Render Interactive Logo */}
              <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                <AnimatePresence mode="wait">
                  <Logo
                    key={`${variant}-${animateMode}-${key}-${accentColor}`}
                    size={size}
                    variant={variant}
                    animateMode={animateMode}
                    hoverMode={hoverMode}
                    color={accentColor}
                  />
                </AnimatePresence>
              </div>

              {/* Canvas Specs overlay */}
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-cream-dark/30 space-y-0.5">
                <div>FORMAT: <span className="text-gold-muted font-bold uppercase">{variant}</span></div>
                <div>ACCENT: <span style={{ color: accentColor }}>{accentColor}</span></div>
                <div>RENDER_MODE: Framer Motion v12</div>
              </div>

              {/* Right Coordinate Tooltip */}
              <div className="absolute top-4 right-4 font-mono text-[9px] text-cream-dark/30 text-right space-y-0.5">
                <div>X_LIMIT: 20-80</div>
                <div>Y_LIMIT: 10-90</div>
                <div>SYMMETRY: Vert. Center (50)</div>
              </div>
            </div>

            {/* Bottom active telemetry details */}
            <div className="border-t border-graphite/80 bg-graphite-dark/60 p-4 font-mono text-[10px] text-cream-dark/60 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE LOGO RENDER ({variant.toUpperCase()})
              </span>
              <span>PATH COUNT: 3 PIECES // GAP W: 2%</span>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Code View / Documentation (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Documentation / Design Spec */}
          <div className="glass-card rounded-2xl p-5 border border-graphite/80 space-y-3.5">
            <h2 className="font-mono text-[10px] text-cream-dark/40 tracking-wider uppercase flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-gold-muted" />
              DESIGN SPECS
            </h2>
            <div className="font-sans text-xs text-cream-dark/75 leading-relaxed space-y-2.5">
              <p>
                The monogram is constructed inside a vertically-elongated pointy-topped hexagon profile.
              </p>
              <ul className="list-disc list-inside space-y-1 font-mono text-[10px] text-cream-dark/60">
                <li>Left pillar forms <strong>"A"</strong>.</li>
                <li>Right pillar forms <strong>"F"</strong>.</li>
                <li>Top triangle completes the hex form.</li>
                <li>Diagonal angles set to 30° / 60°.</li>
                <li>Internal paths gap ratio is 9%.</li>
              </ul>
              <p>
                The top-right corner is colored in off-white (Cream) and designed to simulate a folded page or sheet to give the monogram depth.
              </p>

              <div className="pt-3 border-t border-graphite/60 space-y-2">
                <div className="font-mono text-[9px] text-gold-muted uppercase font-bold tracking-wider">OFFICIAL BRAND ASSETS</div>
                <div className="flex flex-col gap-2">
                  <a
                    href="/logo/af-monogram-alternate.png"
                    download
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-graphite-dark hover:bg-graphite border border-graphite/80 text-cream font-mono text-[10px] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-gold-muted" />
                      af-monogram-alternate.png
                    </span>
                    <Download className="w-3.5 h-3.5 text-cream-dark/60" />
                  </a>
                  <a
                    href="/logo/af-monogram-alternate.mp4"
                    download
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-graphite-dark hover:bg-graphite border border-graphite/80 text-cream font-mono text-[10px] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-gold-muted" />
                      af-monogram-alternate.mp4
                    </span>
                    <Download className="w-3.5 h-3.5 text-cream-dark/60" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Live Code Importer */}
          <div className="glass-card rounded-2xl border border-graphite/80 overflow-hidden flex flex-col">
            <div className="bg-graphite-dark/80 px-4 py-2.5 border-b border-graphite/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-gold-muted" />
                <span className="font-mono text-[9px] text-cream-dark/60 tracking-wider uppercase font-semibold">CODE SNIPPETS</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="p-1 rounded bg-graphite hover:bg-graphite-dark hover:text-gold-muted text-cream transition-colors flex items-center gap-1 font-mono text-[9px]"
                title="Copy active snippet"
              >
                {copiedText ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedText ? "Copied" : "Copy"}
              </button>
            </div>
            
            {/* Tab selection */}
            <div className="flex bg-graphite-dark/40 border-b border-graphite/60 text-[9px] font-mono">
              <button
                onClick={() => setActiveTab("svg")}
                className={`flex-1 py-1.5 text-center border-r border-graphite/60 transition-colors ${
                  activeTab === "svg" ? "bg-graphite-dark text-gold-muted font-bold" : "text-cream-dark/40 hover:text-cream"
                }`}
              >
                Raw SVG
              </button>
              <button
                onClick={() => setActiveTab("react")}
                className={`flex-1 py-1.5 text-center transition-colors ${
                  activeTab === "react" ? "bg-graphite-dark text-gold-muted font-bold" : "text-cream-dark/40 hover:text-cream"
                }`}
              >
                React Component
              </button>
            </div>

            {/* Code container */}
            <div className="p-3 bg-graphite-dark/85">
              <pre className="font-mono text-[9px] text-cream-dark/80 leading-relaxed overflow-x-auto max-h-[160px] custom-scrollbar select-all">
                <code>{activeTab === "svg" ? svgCode : reactCode}</code>
              </pre>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
