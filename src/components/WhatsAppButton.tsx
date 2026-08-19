"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phone = "6281291254064";
  const defaultText = encodeURIComponent(
    "Halo Ahlul, saya melihat portofolio Anda dan ingin berdiskusi tentang project..."
  );
  const waUrl = `https://wa.me/${phone}?text=${defaultText}`;

  useEffect(() => {
    // Show quick tooltip after 3 seconds
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Popover Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-emerald-500/40 text-cream font-sans text-xs shadow-2xl animate-in fade-in slide-in-from-right-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span>Chat via WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-cream-dark/50 hover:text-cream ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="w-13 h-13 md:w-14 md:h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-deep-black flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 group relative border border-emerald-300/40"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-deep-black"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-deep-black stroke-emerald-500 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
