"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  FileText,
  Layers,
  Sparkles,
  Terminal,
  ArrowRight,
  X,
  ExternalLink,
  Code,
  Box,
  User,
  MessageSquare,
  FileCode,
  Calculator,
  Compass,
  Building2
} from "lucide-react";
import { projects } from "../data/projects";
import { blogPosts } from "../data/posts";

interface CommandItem {
  id: string;
  title: string;
  description: string;
  category: "Projects" | "Writings" | "Artifacts" | "Tools & Pages" | "Quick Actions";
  icon: React.ElementType;
  url?: string;
  action?: () => void;
  keywords?: string[];
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Command items catalog
  const items: CommandItem[] = [
    // Tools & Pages
    {
      id: "tool-templates",
      title: "Industrial & Construction System Kits",
      description: "Company profiles, EPC, real estate & logistics starters (/templates)",
      category: "Tools & Pages",
      icon: Building2,
      url: "/templates",
      keywords: ["templates", "kits", "industrial", "construction", "property", "company profile", "epc", "real estate", "logistics"]
    },
    {
      id: "tool-logo",
      title: "Monogram Logo Studio",
      description: "Interactive vector & motion asset playground (/logo)",
      category: "Tools & Pages",
      icon: Box,
      url: "/logo",
      keywords: ["logo", "monogram", "brand", "vector", "studio", "af"]
    },
    {
      id: "tool-estimator",
      title: "Project Cost & Architecture Estimator",
      description: "Interactive timeline & scope cost visualizer",
      category: "Tools & Pages",
      icon: Calculator,
      url: "/#estimator",
      keywords: ["estimator", "cost", "pricing", "quote", "scope", "budget"]
    },
    {
      id: "tool-identity",
      title: "Architectural Identity & Philosophy",
      description: "Core engineering principles & profile overview",
      category: "Tools & Pages",
      icon: User,
      url: "/#identity",
      keywords: ["identity", "about", "bio", "architect", "ahlul"]
    },
    {
      id: "tool-artifacts",
      title: "System Architecture Artifacts",
      description: "Technical DB schemas, blueprints, and system prompts",
      category: "Tools & Pages",
      icon: FileCode,
      url: "/#artifacts",
      keywords: ["artifacts", "blueprint", "schema", "architecture", "doc"]
    },
    {
      id: "tool-writings",
      title: "Engineering Writings & Articles",
      description: "Deep dives into escrow architecture & B2B platforms",
      category: "Tools & Pages",
      icon: FileText,
      url: "/blog",
      keywords: ["blog", "writings", "articles", "posts", "architecture"]
    },

    // Projects
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      title: p.name,
      description: `${p.oneLiner} — ${p.category}`,
      category: "Projects" as const,
      icon: Layers,
      url: `/work/${p.id}`,
      keywords: [p.id, p.name, p.oneLiner, p.category, ...(p.techStack || [])]
    })),

    // Writings
    ...blogPosts.map((post) => ({
      id: `post-${post.slug}`,
      title: post.title,
      description: `${post.readTime} — ${post.category}`,
      category: "Writings" as const,
      icon: FileText,
      url: `/blog/${post.slug}`,
      keywords: [post.slug, post.title, post.category, post.excerpt]
    })),

    // Quick Actions
    {
      id: "action-whatsapp",
      title: "Direct WhatsApp Consultation",
      description: "Open instant chat with Ahlul Firdaus (+62 822-8354-9457)",
      category: "Quick Actions",
      icon: MessageSquare,
      action: () => {
        window.open("https://wa.me/6282283549457?text=Hello%20Ahlul,%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.", "_blank");
      },
      keywords: ["whatsapp", "contact", "chat", "message", "hire", "consult"]
    },
    {
      id: "action-email",
      title: "Copy Direct Email Address",
      description: "ahlulfirdaus.official@gmail.com",
      category: "Quick Actions",
      icon: Terminal,
      action: () => {
        navigator.clipboard.writeText("ahlulfirdaus.official@gmail.com");
        alert("Email address copied to clipboard!");
      },
      keywords: ["email", "contact", "copy", "mail"]
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      description: "github.com/ahlul-firdaus",
      category: "Quick Actions",
      icon: Code,
      action: () => {
        window.open("https://github.com/ahlul-firdaus", "_blank");
      },
      keywords: ["github", "code", "repository", "open source"]
    }
  ];

  // Filter items based on query
  const filteredItems = query.trim() === ""
    ? items
    : items.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords?.some((k) => k.toLowerCase().includes(q))
        );
      });

  // Toggle open with Cmd+K / Ctrl+K or custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation within the list
  const handleItemKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      executeItem(filteredItems[selectedIndex]);
    }
  };

  const executeItem = (item: CommandItem) => {
    setIsOpen(false);
    if (item.action) {
      item.action();
    } else if (item.url) {
      if (item.url.startsWith("http")) {
        window.open(item.url, "_blank");
      } else {
        router.push(item.url);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-deep-black/80 backdrop-blur-xl z-0"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl bg-[#0B0F0C]/95 border border-graphite/80 rounded-2xl shadow-2xl shadow-gold-muted/5 overflow-hidden flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-graphite/60 bg-graphite-dark/60 gap-3">
              <Search className="w-4 h-4 text-gold-muted shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleItemKeyDown}
                placeholder="Search projects, writings, artifacts, or commands... (e.g. Escrow, Logo, WhatsApp)"
                className="w-full bg-transparent text-cream placeholder-cream-dark/40 font-sans text-xs md:text-sm focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-cream-dark/50 hover:text-cream hover:bg-graphite transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-cream-dark/40 font-mono text-xs">
                  No matching systems or commands found for &quot;{query}&quot;
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const IconComp = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => executeItem(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-150 text-left ${
                        isSelected
                          ? "bg-gold-muted/15 border border-gold-muted/40 text-cream"
                          : "bg-transparent border border-transparent text-cream-dark/80 hover:bg-graphite-dark/40 hover:text-cream"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-3">
                        <div
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-gold-muted/20 border-gold-muted/60 text-gold-muted"
                              : "bg-graphite-dark border-graphite/60 text-cream-dark/60"
                          }`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-sans font-bold text-xs text-cream truncate flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="font-mono text-[9px] text-cream-dark/40 px-1.5 py-0.5 rounded bg-graphite/50 border border-graphite/60 shrink-0">
                              {item.category}
                            </span>
                          </div>
                          <div className="font-mono text-[10px] text-cream-dark/50 truncate mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 font-mono text-[10px] text-gold-muted opacity-0 group-hover:opacity-100 flex items-center gap-1">
                        <span>Jump</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2.5 bg-graphite-dark/80 border-t border-graphite/60 flex items-center justify-between font-mono text-[9px] text-cream-dark/50">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-graphite rounded border border-graphite-dark text-cream">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-graphite rounded border border-graphite-dark text-cream">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-graphite rounded border border-graphite-dark text-cream">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-graphite rounded border border-graphite-dark text-cream">ESC</kbd>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
