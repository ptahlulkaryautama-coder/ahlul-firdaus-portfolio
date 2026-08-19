"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck, Code, Zap, FileText } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of systems do you specialize in engineering?",
    answer:
      "I specialize in custom B2B export transaction platforms with milestone escrow engines, neighborhood governance PWAs (dues ledgers, gate visitor verification), high-density SaaS operational cockpits, transparent public accounting ledgers, and sub-second headless storefronts.",
    icon: Code,
    category: "Architecture Scope"
  },
  {
    question: "What is your typical project timeline and milestone delivery model?",
    answer:
      "Projects follow a structured 4-phase pipeline: (1) Architectural Schematics & Data Model design (Days 1–3), (2) Core DB Schema & Escrow Logic build (Week 1–2), (3) High-Density UI & Interactive Demos (Week 2–3), and (4) Security Audit, CSP configuration & Vercel deployment (Final Week). Delivery ranges from 1 to 4 weeks based on scope.",
    icon: Zap,
    category: "Process & Delivery"
  },
  {
    question: "Do clients receive full IP and source code ownership?",
    answer:
      "Yes, 100%. Upon final deployment and milestone clearance, complete source code ownership, private GitHub repository access, database credentials, and production environment keys are transferred directly to your organization.",
    icon: ShieldCheck,
    category: "IP & Ownership"
  },
  {
    question: "How do you handle B2B Escrow and Payment Gateway integrations?",
    answer:
      "I engineer multi-tier escrow pipelines supporting QRIS, Virtual Accounts (Midtrans/Xendit/Stripe), manual bank transfer reconciliation with verification audit trails, multi-currency invoicing (USD, IDR, SGD), and automated PDF dispatch via Resend API.",
    icon: FileText,
    category: "Escrow & Payments"
  },
  {
    question: "Can you audit and optimize existing legacy applications for performance and security?",
    answer:
      "Yes. I perform technical due diligence audits, migrate legacy monoliths to Next.js App Router, implement strict Content Security Policies (CSP), optimize bundle sizes, and tune Core Web Vitals to achieve 95+ Google Lighthouse performance scores.",
    icon: HelpCircle,
    category: "Audits & Tuning"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="py-20 relative bg-emerald-depths/20 border-t border-forest-light/20">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-muted/10 border border-gold-muted/20 text-gold text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Architecture & Engagement FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream mb-4">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h2>
          <p className="text-cream-dark/70 text-sm max-w-xl mx-auto">
            Direct answers on project scope, milestone escrow delivery, source code transfer, and technical security standards.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-forest-dark/70 border-gold-muted/40 shadow-lg shadow-gold-muted/5"
                    : "bg-forest-dark/30 border-forest-light/30 hover:border-forest-light/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded-lg ${
                        isOpen
                          ? "bg-gold-muted/20 text-gold"
                          : "bg-forest-light/20 text-cream-dark/60"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gold/80 block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-base font-semibold text-cream">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gold/70 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-cream-dark/80 border-t border-forest-light/20 leading-relaxed pl-[3.25rem]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs font-mono text-cream-dark/50">
          Have a unique custom architectural requirement?{" "}
          <a
            href="https://wa.me/6281291254064"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline hover:text-gold-light"
          >
            Direct WhatsApp Consultation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
