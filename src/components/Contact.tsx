"use client";

import React, { useState } from "react";
import { Send, Terminal, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import ProjectEstimator from "./estimator/ProjectEstimator";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "systems",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const executeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setConsoleLogs([
      "Connecting to contact service...",
      "Validating message parameters...",
    ]);

    // Animate the status steps while the real request fires
    const steps = [
      `Formatting inquiry data...`,
      `Selected scope: ${formData.scope}`,
      "Sending message...",
      "Processing transmission...",
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 380));
      setConsoleLogs((prev) => [...prev, steps[i]]);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setConsoleLogs((prev) => [...prev, "✔ Message sent successfully. Status 200 OK."]);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", scope: "systems", message: "" });
      } else {
        const data = await res.json();
        setConsoleLogs((prev) => [...prev, `✖ Message error: ${data.error || "Unknown error. Please retry."}`]);
      }
    } catch {
      setConsoleLogs((prev) => [...prev, "✖ Network error: Could not send message. Please reach out directly."]);
    }

    setIsSubmitting(false);
  };


  return (
    <section id="contact" className="py-24 bg-deep-black border-t border-graphite/40 relative dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact // 13</span>
          </span>
          <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            Tell Me What You Are Trying to Improve
          </h2>
          <p className="text-cream-dark/75 text-sm leading-relaxed font-sans">
            You do not need a technical brief. Describe the current problem, workflow, spreadsheet, website, or early idea in your own words. Calculate a preliminary estimate or send your context below.
          </p>
        </div>

        {/* Interactive Scope & Cost Estimator Wizard */}
        <div className="mb-20">
          <ProjectEstimator />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl border border-graphite/60 shadow-2xl">
            <form onSubmit={executeSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase text-cream-dark/60 tracking-wider font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full glass-input rounded-xl px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase text-cream-dark/60 tracking-wider font-semibold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="operator@company.com"
                    className="w-full glass-input rounded-xl px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none"
                  />
                </div>

              </div>

              {/* Scope/Category */}
              <div className="space-y-2">
                <label htmlFor="scope" className="font-mono text-[10px] uppercase text-cream-dark/60 tracking-wider font-semibold">
                  WHAT ARE YOU LOOKING TO BUILD OR IMPROVE?
                </label>
                <select
                  id="scope"
                  name="scope"
                  value={formData.scope}
                  onChange={handleInputChange}
                  className="w-full glass-input rounded-xl px-4 py-3 text-sm text-cream outline-none cursor-pointer"
                >
                  <option value="systems" className="bg-graphite-dark text-cream">Business Website or Portal MVP</option>
                  <option value="export" className="bg-graphite-dark text-cream">Operational Dashboard or Internal Tool</option>
                  <option value="web" className="bg-graphite-dark text-cream">Community Platform or Directory</option>
                  <option value="brand" className="bg-graphite-dark text-cream">Digital Product &amp; Workflow Review</option>
                  <option value="consulting" className="bg-graphite-dark text-cream">Ongoing Product Improvement</option>
                </select>
              </div>

              {/* Project Brief */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-[10px] uppercase text-cream-dark/60 tracking-wider font-semibold">
                  DESCRIBE YOUR CURRENT SITUATION OR GOAL *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about what you are currently doing (e.g. manual spreadsheets, outdated site, messy process) and what you want to achieve..."
                  className="w-full glass-input rounded-xl px-4 py-3 text-sm text-cream placeholder-cream-dark/30 outline-none resize-y"
                ></textarea>
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="shimmer-button w-full py-4 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs uppercase tracking-wider rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Delivering context packet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Your Project Context</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Console Output Log */}
          <div className="lg:col-span-5 glass-card border border-graphite/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[340px] md:h-[420px]">
            {/* Window Top Bar */}
            <div className="bg-graphite-dark/95 px-5 py-3.5 flex items-center border-b border-graphite/80">
              <div className="flex items-center gap-1.5 shrink-0 mr-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-cream-dark/60 tracking-wider truncate font-semibold">
                <Terminal className="w-3.5 h-3.5 text-gold-muted" />
                <span>stdout: contact_status.log</span>
              </div>
            </div>

            {/* Console Log Area */}
            <div className="flex-1 p-5 font-mono text-xs text-cream-dark/80 space-y-2 overflow-y-auto bg-black/40">
              {consoleLogs.length === 0 ? (
                <div className="text-cream-dark/30 italic font-mono text-[11px]">
                  Awaiting inquiry submission to stream packet delivery logs...
                </div>
              ) : (
                consoleLogs.map((log, idx) => (
                  <div key={idx} className={log.startsWith("✔") ? "text-emerald-400 font-bold" : ""}>
                    <span className="text-gold-muted mr-2">$</span>
                    {log}
                  </div>
                ))
              )}
              {isSubmitting && (
                <div className="animate-pulse flex items-center gap-1 text-gold-muted font-bold">
                  <span>$</span>
                  <span>Transmitting...</span>
                </div>
              )}
              {submitSuccess && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 space-y-2 shadow-lg">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>INQUIRY DELIVERED</span>
                  </div>
                  <p className="text-[11px] text-emerald-300/80 leading-relaxed font-sans">
                    Your message has been received. I will review your workflow details and respond directly.
                  </p>
                </div>
              )}
            </div>

            {/* Console Footer */}
            <div className="bg-graphite-dark/95 px-5 py-2.5 border-t border-graphite/80 flex items-center justify-between font-mono text-[9px] text-cream-dark/50 font-bold">
              <span>STATUS: {submitSuccess ? "READY" : isSubmitting ? "BUSY" : "IDLE"}</span>
              <span>PROTOCOL: SECURE_POST</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
