"use client";

import React, { useState, useEffect } from "react";
import { Palette } from "lucide-react";

export default function AccentSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<"gold" | "emerald" | "blue">("gold");

  useEffect(() => {
    const saved = localStorage.getItem("af-portfolio-theme") as "gold" | "emerald" | "blue" | null;
    if (saved) {
      setCurrentTheme(saved);
      if (saved === "gold") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", saved);
      }
    }
  }, []);

  const setTheme = (theme: "gold" | "emerald" | "blue") => {
    setCurrentTheme(theme);
    localStorage.setItem("af-portfolio-theme", theme);
    if (theme === "gold") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-card border border-graphite/60 text-[10px] font-mono">
      <Palette className="w-3 h-3 text-cream-dark/60 mr-0.5" />
      <button
        onClick={() => setTheme("gold")}
        className={`w-3.5 h-3.5 rounded-full transition-transform ${
          currentTheme === "gold" ? "scale-125 ring-2 ring-cream border border-deep-black" : "opacity-60 hover:opacity-100"
        }`}
        style={{ backgroundColor: "#C5A880" }}
        title="Gold Accent (Default)"
        aria-label="Gold Accent"
      />
      <button
        onClick={() => setTheme("emerald")}
        className={`w-3.5 h-3.5 rounded-full transition-transform ${
          currentTheme === "emerald" ? "scale-125 ring-2 ring-cream border border-deep-black" : "opacity-60 hover:opacity-100"
        }`}
        style={{ backgroundColor: "#10B981" }}
        title="Emerald Accent"
        aria-label="Emerald Accent"
      />
      <button
        onClick={() => setTheme("blue")}
        className={`w-3.5 h-3.5 rounded-full transition-transform ${
          currentTheme === "blue" ? "scale-125 ring-2 ring-cream border border-deep-black" : "opacity-60 hover:opacity-100"
        }`}
        style={{ backgroundColor: "#3B82F6" }}
        title="Cyber Blue Accent"
        aria-label="Cyber Blue Accent"
      />
    </div>
  );
}
