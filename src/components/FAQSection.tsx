"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck, Code, Zap, FileText } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of digital systems do you specialize in building?",
    answer:
      "I specialize in practical web applications, B2B trade and sourcing platforms, residential community portals, sustainability reporting templates, operational dashboards, and focused digital MVPs that streamline real-world workflows.",
    icon: Code,
    category: "Architecture Scope"
  },
  {
    question: "What is your typical project timeline and development process?",
    answer:
      "Projects typically follow a structured 4-stage process: (1) Workflow Discovery & Requirement Definition, (2) Information Architecture & Interface Design, (3) Next.js / React Implementation, and (4) Testing, Deployment Configuration & Handover. Typical delivery ranges from 1 to 6 weeks depending on scope.",
    icon: Zap,
    category: "Process & Delivery"
  },
  {
    question: "Do clients receive full code ownership and repository access?",
    answer:
      "Yes. Unless agreed otherwise under a custom contract, clients receive full source code ownership, private repository access, deployment configurations, and handover documentation upon final project completion.",
    icon: ShieldCheck,
    category: "IP & Ownership"
  },
  {
    question: "How do you handle payment integrations and complex requirements?",
    answer:
      "Integrations such as payment gateways (QRIS, bank transfers, or checkout services), authentication providers, transactional email, and data exports are evaluated and scoped based on project requirements and compliance needs during discovery.",
    icon: FileText,
    category: "Integrations & Scoping"
  },
  {
    question: "Can you review and improve existing workflows, prototypes, or websites?",
    answer:
      "Yes. I conduct digital product and workflow reviews to examine existing spreadsheets, legacy interfaces, or early prototypes, identifying usability bottlenecks, structuring data models, and providing an actionable improvement plan.",
    icon: HelpCircle,
    category: "Reviews & Advisory"
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
            <HelpCircle className="w-3.5 h-3.5 text-gold-muted" />
            <span>Process &amp; Scope FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-cream mb-4">
            Frequently Asked <span className="text-gold-muted italic">Questions</span>
          </h2>
          <p className="text-cream-dark/70 text-sm max-w-xl mx-auto font-sans">
            Direct answers on project scope, phased delivery models, source code ownership, and technical review procedures.
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
                    : "bg-forest-dark/30 border-graphite/40 hover:border-graphite/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg ${isOpen ? "bg-gold-muted/20 text-gold-muted" : "bg-graphite/40 text-cream-dark/60"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-gold-muted tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-sans font-bold text-sm sm:text-base text-cream">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-cream-dark/80 leading-relaxed border-t border-graphite/30 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
