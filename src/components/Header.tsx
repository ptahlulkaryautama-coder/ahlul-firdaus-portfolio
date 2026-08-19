"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, Sparkles, Search } from "lucide-react";
import AccentSwitcher from "./AccentSwitcher";
import Logo from "./Logo";

export default function Header() {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const navLinks = [
    { name: "Identity", href: "/#identity" },
    { name: "Selected Work", href: "/#work" },
    { name: "Templates", href: "/templates" },
    { name: "Logo Studio", href: "/logo" },
    { name: "Services", href: "/#services" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Artifacts", href: "/#artifacts" },
    { name: "Writings", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-deep-black/80 border-b border-graphite/60 shadow-2xl py-0"
          : "backdrop-blur-md bg-deep-black/40 border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo and Subtitle */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-gold-muted rounded-md px-2 py-1"
        >
          <div className="relative w-9 h-9 rounded-lg bg-graphite/60 border border-graphite-dark flex items-center justify-center overflow-hidden shadow-inner group-hover:border-gold-muted/50 transition-colors duration-300">
            <div className="absolute inset-0 bg-gold-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Logo size={24} animateMode="draw" hoverMode="lift" className="relative z-20" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold tracking-wider text-sm md:text-base text-cream group-hover:text-gold-muted transition-colors duration-300 flex items-center gap-1.5">
              Ahlul Firdaus
              <Sparkles className="w-3 h-3 text-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="font-mono text-[9px] text-cream-dark/40 tracking-widest">
              SYSTEMS ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 px-6 py-2 rounded-full glass-card border border-graphite/50 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-mono tracking-wider text-cream-dark/70 hover:text-cream transition-colors duration-200 uppercase relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-muted to-cream transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Timezone Heartbeat & CTA */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] text-cream-dark/80 tracking-wider">
              BTH: {time || "00:00:00"}
            </span>
          </div>
          <button
            onClick={handleOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-graphite/60 text-cream-dark/70 hover:text-cream hover:border-gold-muted/40 transition-colors font-mono text-[10px]"
            title="Open Command Palette (Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-gold-muted" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-graphite/80 border border-graphite-dark text-[9px] text-gold-muted">⌘K</kbd>
          </button>
          <AccentSwitcher />
          <a
            href="#contact"
            className="shimmer-button px-5 py-2.5 bg-cream text-deep-black font-sans text-xs tracking-wider rounded-lg hover:bg-gold-muted hover:shadow-lg transition-all duration-300 font-bold focus-visible:ring-2 focus-visible:ring-gold-muted flex items-center gap-2"
          >
            <span>Inquire Project</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-mono text-[9px] text-cream-dark/80">
              BTH: {time ? time.split(":").slice(0,2).join(":") : "00:00"}
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-card text-cream hover:text-gold-muted transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-graphite/60 bg-deep-black/95 backdrop-blur-2xl absolute top-20 left-0 right-0 py-6 px-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono tracking-wider text-cream-dark/90 hover:text-gold-muted transition-colors duration-200 uppercase py-1.5 border-b border-graphite/30"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 bg-cream text-deep-black font-sans text-xs tracking-wider rounded-lg hover:bg-gold-muted transition-colors duration-300 font-bold mt-2"
            >
              Inquire Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
