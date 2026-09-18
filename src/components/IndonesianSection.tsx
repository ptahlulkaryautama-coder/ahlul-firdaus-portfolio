"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function IndonesianSection() {
  return (
    <section id="indonesia" className="py-20 bg-[#0A120D] border-t border-graphite/40 relative dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl border border-gold-muted/30 bg-gold-muted/5 p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle gold accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNTUK BISNIS &amp; ORGANISASI DI INDONESIA</span>
            </span>

            <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl text-cream leading-tight">
              Mulai dari Masalah yang Sedang Anda Hadapi
            </h2>

            <div className="space-y-4 text-cream-dark/85 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Saya membantu menyederhanakan proses kerja, pelaporan, administrasi, informasi, dan layanan menjadi website, dashboard, atau portal digital yang lebih terstruktur.
              </p>
              <p>
                Anda tidak perlu menyiapkan spesifikasi teknis. Cukup ceritakan bagaimana prosesnya berjalan sekarang, bagian mana yang sering membingungkan, dan hasil seperti apa yang ingin dicapai.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="shimmer-button px-6 py-3.5 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs uppercase tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Ceritakan Kebutuhan Anda</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/6281291254064?text=Halo%20Ahlul,%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20website/sistem%20operasional."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 glass-card border border-graphite/60 hover:border-gold-muted text-cream hover:text-gold-muted font-sans text-xs uppercase tracking-wider rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
