import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Layers, MessageSquare, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-black text-cream flex flex-col font-sans selection:bg-gold-muted selection:text-deep-black">
      <Header />

      <main id="main-content" className="flex-1 flex items-center justify-center pt-28 pb-20 px-6">
        <div className="max-w-2xl w-full text-center space-y-8 glass-card p-8 md:p-12 rounded-3xl border border-graphite/60 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-muted/10 blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-badge text-gold-muted font-mono text-xs uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-gold-muted" />
              <span>HTTP Status // 404 Not Found</span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl text-cream tracking-tight">
              Page Not Found
            </h1>

            <p className="text-cream-dark/75 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-sans">
              The page, blueprint, or route you are looking for does not exist or has been relocated within the systems architecture.
            </p>
          </div>

          {/* Quick Navigation Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-graphite/40 relative z-10 text-left">
            <Link
              href="/#work"
              className="p-4 rounded-2xl glass-card hover:border-gold-muted/50 border border-graphite/60 transition-all duration-300 group flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-gold-muted/10 border border-gold-muted/20 text-gold-muted group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="font-sans font-bold text-xs text-cream group-hover:text-gold-muted transition-colors">
                  Explore Selected Work
                </div>
                <div className="text-[11px] text-cream-dark/60 font-sans mt-0.5">
                  Browse live products, prototypes &amp; tools
                </div>
              </div>
            </Link>

            <Link
              href="/#contact"
              className="p-4 rounded-2xl glass-card hover:border-gold-muted/50 border border-graphite/60 transition-all duration-300 group flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-gold-muted/10 border border-gold-muted/20 text-gold-muted group-hover:scale-110 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="font-sans font-bold text-xs text-cream group-hover:text-gold-muted transition-colors">
                  Discuss Your Workflow
                </div>
                <div className="text-[11px] text-cream-dark/60 font-sans mt-0.5">
                  Send your project requirements or questions
                </div>
              </div>
            </Link>
          </div>

          <div className="pt-2 relative z-10">
            <Link
              href="/"
              className="shimmer-button inline-flex items-center gap-2 px-6 py-3 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
