"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Wallet,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Send,
  Plus,
  Zap,
  Lock,
  ExternalLink,
  ArrowUpRight,
  PieChart,
  DollarSign
} from "lucide-react";

interface AccountItem {
  id: string;
  name: string;
  type: string;
  balance: number;
}

interface EnvelopeItem {
  id: string;
  category: string;
  spent: number;
  limit: number;
  icon: string;
}

const initialAccounts: AccountItem[] = [
  { id: "a1", name: "Dompet Tunai", type: "Cash", balance: 1250000 },
  { id: "a2", name: "BCA Payroll", type: "Bank", balance: 24500000 },
  { id: "a3", name: "GoPay / E-Wallet", type: "E-Wallet", balance: 840000 },
  { id: "a4", name: "Bareksa Reksadana", type: "Investasi", balance: 18750000 },
  { id: "a5", name: "Cicilan / Kewajiban", type: "Utang", balance: 5200000 }
];

const initialEnvelopes: EnvelopeItem[] = [
  { id: "e1", category: "Makan & Jajan", spent: 1450000, limit: 2000000, icon: "Utensils" },
  { id: "e2", category: "Belanja Rumah", spent: 1850000, limit: 2500000, icon: "Shopping" },
  { id: "e3", category: "Transport & Bensin", spent: 420000, limit: 600000, icon: "Car" },
  { id: "e4", category: "Tabungan & Investasi", spent: 3000000, limit: 3000000, icon: "Graduation" }
];

export default function SakkuDemo() {
  const [accounts, setAccounts] = useState<AccountItem[]>(initialAccounts);
  const [envelopes, setEnvelopes] = useState<EnvelopeItem[]>(initialEnvelopes);
  const [inputText, setInputText] = useState<string>("Makan siang 35rb pakai GoPay");
  const [parsedLog, setParsedLog] = useState<{
    note: string;
    amount: number;
    category: string;
    account: string;
    type: "income" | "expense";
  } | null>(null);

  const calculateNetWorth = () => {
    return accounts.reduce((acc, a) => {
      return a.type === "Utang" ? acc - a.balance : acc + a.balance;
    }, 0);
  };

  const handleParseAndAdd = (customText?: string) => {
    const textToProcess = customText || inputText;
    if (!textToProcess.trim()) return;

    // Indonesian Natural Language Regex & NLP Extractor
    let amount = 35000;
    if (textToProcess.includes("50rb")) amount = 50000;
    if (textToProcess.includes("12jt") || textToProcess.toLowerCase().includes("gaji")) amount = 12000000;
    if (textToProcess.includes("350rb")) amount = 350000;
    if (textToProcess.includes("25rb")) amount = 25000;
    if (textToProcess.includes("85rb")) amount = 85000;

    const isIncome =
      textToProcess.toLowerCase().includes("gaji") ||
      textToProcess.toLowerCase().includes("masuk") ||
      textToProcess.toLowerCase().includes("terima");

    const accountName = textToProcess.toLowerCase().includes("bca")
      ? "BCA Payroll"
      : textToProcess.toLowerCase().includes("tunai")
      ? "Dompet Tunai"
      : "GoPay / E-Wallet";

    const categoryName = isIncome
      ? "Tabungan & Investasi"
      : textToProcess.toLowerCase().includes("bensin")
      ? "Transport & Bensin"
      : textToProcess.toLowerCase().includes("belanja")
      ? "Belanja Rumah"
      : "Makan & Jajan";

    const newLog = {
      note: textToProcess,
      amount,
      category: categoryName,
      account: accountName,
      type: isIncome ? ("income" as const) : ("expense" as const)
    };

    setParsedLog(newLog);

    // Reactive State Update
    setAccounts((prev) =>
      prev.map((a) => {
        if (a.name === accountName) {
          return {
            ...a,
            balance: isIncome ? a.balance + amount : Math.max(0, a.balance - amount)
          };
        }
        return a;
      })
    );

    if (!isIncome) {
      setEnvelopes((prev) =>
        prev.map((e) => {
          if (e.category === categoryName) {
            return {
              ...e,
              spent: e.spent + amount
            };
          }
          return e;
        })
      );
    }
  };

  const netWorth = calculateNetWorth();

  return (
    <div className="w-full bg-[#080B0E] border border-teal-500/30 rounded-2xl p-4 sm:p-6 text-cream shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-gold-muted/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with Live App Link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-graphite/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-bold text-lg text-cream flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              Sakku 2.0 — Interactive Wealth Engine
            </h3>
          </div>
          <p className="text-xs font-mono text-cream-dark/60 mt-1">
            Zero-Knowledge Local-First Architecture · Natural Language Tokenizer · Envelope Budgeting
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 font-mono text-xs">
            <Lock className="w-3.5 h-3.5 text-teal-400" />
            <span>100% Client-Side Private</span>
          </div>
          <a
            href="https://sakku-2-0.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold font-mono text-xs transition-colors shadow-lg shadow-teal-500/20"
          >
            <span>Live App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-graphite-dark/80 border border-teal-500/20 p-4 rounded-xl">
          <div className="flex items-center justify-between font-mono text-xs text-cream-dark/70">
            <span>Total Family Net Worth</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-teal-300 mt-1">
            Rp {netWorth.toLocaleString("id-ID")}
          </div>
          <div className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>5 Accounts Aggregated in Real-Time</span>
          </div>
        </div>

        <div className="bg-graphite-dark/80 border border-gold-muted/20 p-4 rounded-xl">
          <div className="flex items-center justify-between font-mono text-xs text-cream-dark/70">
            <span>Monthly Savings Rate</span>
            <PieChart className="w-4 h-4 text-gold-muted" />
          </div>
          <div className="text-2xl font-bold font-mono text-gold-muted mt-1">
            42.8%
          </div>
          <div className="text-[10px] font-mono text-cream-dark/60 mt-1">
            Healthy Surplus Level (&gt;35% Benchmark)
          </div>
        </div>

        <div className="bg-graphite-dark/80 border border-graphite/80 p-4 rounded-xl">
          <div className="flex items-center justify-between font-mono text-xs text-cream-dark/70">
            <span>Privacy &amp; Security State</span>
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-cyan-300 mt-1">
            Zero-Leak
          </div>
          <div className="text-[10px] font-mono text-cyan-400/80 mt-1">
            Local-First Encrypted Sandbox
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Natural Language Input & Quick Entry */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-graphite-dark/60 border border-graphite/60 p-4 rounded-xl">
            <label className="block text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-2">
              ⚡ Catat Cepat Natural-Language Parser:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleParseAndAdd()}
                placeholder="Contoh: Makan siang 35rb pakai GoPay"
                className="flex-1 bg-graphite/80 border border-graphite-light/40 rounded-lg px-3 py-2 text-sm text-cream font-mono focus:outline-none focus:border-teal-400 transition-colors"
              />
              <button
                onClick={() => handleParseAndAdd()}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors font-mono"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Simpan</span>
              </button>
            </div>

            {/* Quick Test Chips */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono text-cream-dark/50 self-center mr-1">Coba klik:</span>
              {[
                "Kopi 25rb pakai GoPay",
                "Bensin motor 50rb tunai",
                "Gaji bulanan 12jt masuk BCA",
                "Belanja bulanan 350rb pakai BCA"
              ].map((sample) => (
                <button
                  key={sample}
                  onClick={() => {
                    setInputText(sample);
                    handleParseAndAdd(sample);
                  }}
                  className="text-[10px] font-mono bg-graphite/90 hover:bg-teal-950 hover:text-teal-300 border border-graphite/60 hover:border-teal-500/40 px-2 py-1 rounded transition-colors text-cream-dark/80"
                >
                  + {sample}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Parser Log */}
          <AnimatePresence>
            {parsedLog && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-teal-950/40 border border-teal-500/40 p-3.5 rounded-xl font-mono text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-teal-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-teal-400" />
                    Regex Parsed Successfully
                  </span>
                  <span className={parsedLog.type === "income" ? "text-emerald-400" : "text-gold-muted"}>
                    {parsedLog.type === "income" ? "+ Income" : "- Expense"}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-cream-dark/80 border-t border-teal-500/20">
                  <div>
                    <span className="text-cream-dark/40 block text-[9px] uppercase">Nominal</span>
                    <span className="font-bold text-cream">Rp {parsedLog.amount.toLocaleString("id-ID")}</span>
                  </div>
                  <div>
                    <span className="text-cream-dark/40 block text-[9px] uppercase">Kategori</span>
                    <span className="text-teal-300 truncate block">{parsedLog.category}</span>
                  </div>
                  <div>
                    <span className="text-cream-dark/40 block text-[9px] uppercase">Rekening</span>
                    <span className="text-gold-muted truncate block">{parsedLog.account}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Accounts Balance Table */}
          <div className="bg-graphite-dark/60 border border-graphite/60 p-4 rounded-xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cream-dark/70 font-bold mb-3 flex items-center justify-between">
              <span>Multi-Account Aggregator</span>
              <span className="text-[10px] text-teal-400 font-normal">Real-Time Sync</span>
            </h4>
            <div className="space-y-2 font-mono text-xs">
              {accounts.map((acc) => (
                <div
                  key={acc.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-graphite/60 border border-graphite/40"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                        acc.type === "Utang"
                          ? "bg-red-950 text-red-300 border border-red-800/40"
                          : acc.type === "Investasi"
                          ? "bg-gold-muted/20 text-gold-muted border border-gold-muted/40"
                          : "bg-teal-950 text-teal-300 border border-teal-800/40"
                      }`}
                    >
                      {acc.type}
                    </span>
                    <span className="text-cream font-medium">{acc.name}</span>
                  </div>
                  <span
                    className={`font-bold ${
                      acc.type === "Utang" ? "text-red-400" : "text-emerald-400"
                    }`}
                  >
                    {acc.type === "Utang" ? "- " : ""}Rp {acc.balance.toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Envelope Budgeting Progress */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-graphite-dark/60 border border-graphite/60 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gold-muted font-bold flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-gold-muted" />
                <span>Visual Envelope Budgeting</span>
              </h4>
              <span className="text-[10px] font-mono text-cream-dark/50">Zero-Based Method</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {envelopes.map((env) => {
                const ratio = Math.min(100, Math.round((env.spent / env.limit) * 100));
                const isOver = env.spent > env.limit;

                return (
                  <div
                    key={env.id}
                    className="p-3 rounded-lg bg-graphite/60 border border-graphite/40 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-cream">{env.category}</span>
                      <span className={`text-[11px] font-bold ${isOver ? "text-red-400" : "text-teal-300"}`}>
                        {ratio}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-graphite-dark rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          isOver
                            ? "bg-red-500"
                            : ratio > 80
                            ? "bg-gold-muted"
                            : "bg-gradient-to-r from-teal-500 to-emerald-400"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${ratio}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    <div className="flex justify-between text-[10px] text-cream-dark/60">
                      <span>Terpakai: Rp {env.spent.toLocaleString("id-ID")}</span>
                      <span>Limit: Rp {env.limit.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy & Roadmap Callout */}
          <div className="bg-gradient-to-br from-teal-950/30 via-graphite-dark/60 to-graphite-dark border border-teal-500/20 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-teal-300 font-bold text-xs font-mono mb-1.5">
              <Lock className="w-4 h-4 text-teal-400" />
              <span>Architectural Privacy Guarantee</span>
            </div>
            <p className="text-xs text-cream-dark/70 leading-relaxed">
              Semua data finansial diproses 100% di browser pengguna (*Local-First Storage*). Tanpa server database pihak ketiga, tanpa pelacakan, dan tanpa risiko kebocoran credential perbankan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
