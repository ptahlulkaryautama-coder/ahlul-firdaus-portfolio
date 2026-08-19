"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles, Clock, ArrowRight, ShieldCheck, Calendar } from "lucide-react";
import { serviceTiers } from "../data/services";

export default function ServicesSection() {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");

  return (
    <section id="services" className="py-24 bg-deep-black border-t border-graphite/40 relative">
      {/* Glow ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-gold-muted/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engagement Models // 04</span>
            </span>
            <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
              Services &amp; Architecture Tiers
            </h2>
            <p className="text-cream-dark/75 text-sm leading-relaxed font-sans">
              Clear scope, transparent pricing, and predictable timelines. Choose between advisory, full system execution, or ongoing fractional CTO leadership.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl glass-card border border-graphite/60 shrink-0 font-mono text-xs">
            <button
              onClick={() => setCurrency("IDR")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === "IDR"
                  ? "bg-gold-muted text-deep-black font-bold shadow-md"
                  : "text-cream-dark/60 hover:text-cream"
              }`}
            >
              IDR (Rupiah)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === "USD"
                  ? "bg-gold-muted text-deep-black font-bold shadow-md"
                  : "text-cream-dark/60 hover:text-cream"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "glass-card border-2 border-gold-muted ring-1 ring-gold-muted/30 shadow-2xl scale-[1.02] bg-gradient-to-b from-gold-muted/10 via-deep-black/80 to-deep-black"
                  : "glass-card border border-graphite/60 hover:border-gold-muted/40 shadow-xl"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-muted text-deep-black font-mono text-[9px] uppercase tracking-widest font-black shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular for Businesses
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-gold-muted uppercase tracking-wider bg-gold-muted/10 px-2.5 py-1 rounded-md border border-gold-muted/20 font-bold">
                    {tier.badge}
                  </span>
                  <span className="font-mono text-[10px] text-cream-dark/50 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-muted" />
                    {tier.deliveryTime}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-xl text-cream mb-2">
                  {tier.name}
                </h3>
                <p className="text-cream-dark/70 text-xs leading-relaxed font-sans mb-6">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="py-4 border-y border-graphite/40 mb-6">
                  <div className="text-xs font-mono text-cream-dark/50 uppercase tracking-wider mb-1">
                    Starting Investment
                  </div>
                  <div className="font-sans font-black text-2xl md:text-3xl text-cream flex items-baseline gap-1">
                    <span className="text-gold-muted">
                      {currency === "IDR" ? tier.startingPriceIDR : tier.startingPriceUSD}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[10px] font-mono uppercase text-cream-dark/50 tracking-wider font-semibold">
                    What&apos;s Included:
                  </div>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-cream-dark/85">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-4 rounded-xl font-sans text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                    tier.popular
                      ? "shimmer-button bg-gold-muted hover:bg-cream text-deep-black shadow-gold-muted/20"
                      : "bg-cream/10 hover:bg-cream/20 text-cream border border-graphite/60"
                  }`}
                >
                  <span>Inquire {tier.badge.split(" ")[0]} Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Systems & Larger Platforms Callout */}
        <div className="mt-12 p-8 rounded-3xl glass-panel border border-gold-muted/20 bg-gradient-to-r from-deep-black via-graphite-dark to-gold-muted/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[10px] uppercase text-gold-muted tracking-widest font-bold">
              Enterprise &amp; High-Complexity Projects
            </span>
            <h3 className="font-sans font-bold text-xl text-cream">
              Custom System Development
            </h3>
            <p className="text-cream-dark/75 text-xs leading-relaxed font-sans">
              For larger platforms requiring multiple user roles, payment processing, multi-tenant architecture, complex automation, or high-volume data workflows.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono pt-1">
              <span className="text-gold-muted">
                Estimated Investment: {currency === "IDR" ? "Rp 25.000.000 – Rp 60.000.000+" : "$1,800 – $4,500+"}
              </span>
              <span className="text-cream-dark/50">•</span>
              <span className="text-cream-dark/70">Timeline: 6 – 12+ Weeks</span>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl glass-badge font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:border-gold-muted shrink-0 transition-all"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Inquiry & Payment Terms Banner */}
        <div className="mt-8 p-8 rounded-3xl glass-card border border-graphite/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-r from-emerald-950/20 via-deep-black to-gold-muted/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-muted/10 border border-gold-muted/40 flex items-center justify-center text-gold-muted shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg text-cream">
                Ready to Discuss Your Project Requirements?
              </h4>
              <p className="text-cream-dark/70 text-xs mt-1">
                Send your project brief or specifications directly via WhatsApp or email for instant evaluation and architectural quote.
              </p>
              <div className="mt-2 text-[10px] font-mono text-cream-dark/50">
                Payment Terms: 50% deposit • 30% design approval • 20% launch
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6282283549457?text=Hello%20Ahlul,%20I%20would%20like%20to%20inquire%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button px-6 py-3.5 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0"
          >
            <span>Inquire via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
