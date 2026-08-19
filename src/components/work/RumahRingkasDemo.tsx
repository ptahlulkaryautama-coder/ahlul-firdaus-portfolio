"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Wallet,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Plus,
  Zap,
  Building2,
  CreditCard,
  HeartHandshake
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
  { id: "a1", name: "Dompet Tunai", type: "Cash", balance: 850000 },
  { id: "a2", name: "BCA Bersama", type: "Bank", balance: 18400000 },
  { id: "a3", name: "GoPay", type: "E-Wallet", balance: 620000 },
  { id: "a4", name: "Bareksa Reksadana", type: "Investasi", balance: 12300000 },
  { id: "a5", name: "Cicilan Motor", type: "Utang", balance: 6200000 }
];

const initialEnvelopes: EnvelopeItem[] = [
  { id: "e1", category: "Makan & Jajan", spent: 1150000, limit: 1500000, icon: "Utensils" },
  { id: "e2", category: "Belanja Rumah", spent: 1640000, limit: 2000000, icon: "Shopping" },
  { id: "e3", category: "Transportasi", spent: 480000, limit: 600000, icon: "Car" },
  { id: "e4", category: "Anak & Sekolah", spent: 540000, limit: 800000, icon: "Graduation" }
];

export default function RumahRingkasDemo() {
  const [accounts, setAccounts] = useState<AccountItem[]>(initialAccounts);
  const [envelopes, setEnvelopes] = useState<EnvelopeItem[]>(initialEnvelopes);
  const [inputText, setInputText] = useState<string>("Makan siang 25rb pakai GoPay");
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

    // Simulated Natural Language Regex Parser
    let amount = 25000;
    if (textToProcess.includes("50rb")) amount = 50000;
    if (textToProcess.includes("12jt") || textToProcess.includes("gaji")) amount = 12000000;
    if (textToProcess.includes("340rb")) amount = 340000;

    const isIncome = textToProcess.toLowerCase().includes("gaji") || textToProcess.toLowerCase().includes("masuk");
    const accountName = textToProcess.toLowerCase().includes("bca") ? "BCA Bersama" : "GoPay";
    const categoryName = isIncome ? "Gaji & Income" : "Makan & Jajan";

    const newLog = {
      note: textToProcess,
      amount,
      category: categoryName,
      account: accountName,
      type: isIncome ? ("income" as const) : ("expense" as const)
    };

    setParsedLog(newLog);

    // Update GoPay / BCA balance & envelope spent
    setAccounts((prev) =>
      prev.map((a) => {
        if (a.name === accountName) {
          return {
            ...a,
            balance: isIncome ? a.balance + amount : a.balance - amount
          };
        }
        return a;
      })
    );

    if (!isIncome) {
      setEnvelopes((prev) =>
        prev.map((e) =>
          e.category === "Makan & Jajan"
            ? { ...e, spent: Math.min(e.limit, e.spent + amount) }
            : e
        )
      );
    }
  };

  const netWorth = calculateNetWorth();

  return (
    <div className="w-full rounded-3xl glass-card border border-teal-500/30 bg-gradient-to-br from-[#091510] via-deep-black to-[#0F221A] p-6 md:p-8 shadow-2xl text-cream font-sans">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-teal-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-teal-400">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>RUMAH RINGKAS — KEUANGAN KELUARGA (PWA)</span>
          </div>
          <h3 className="font-sans font-black text-2xl text-cream">
            Family Financial Orchestration &amp; Wealth Hub
          </h3>
          <p className="text-cream-dark/70 text-xs md:text-sm mt-0.5">
            Natural language quick entry, visual envelope budget caps, and multi-asset net worth aggregator.
          </p>
        </div>

        {/* Net Worth Badge */}
        <div className="bg-black/60 border border-teal-500/30 p-3.5 rounded-2xl text-right shrink-0">
          <div className="text-[10px] font-mono uppercase text-cream-dark/50 font-semibold">Total Net Worth</div>
          <div className="text-xl font-mono font-black text-emerald-400 mt-0.5">
            Rp {netWorth.toLocaleString("id-ID")}
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Catat Cepat AI Input & Envelopes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
        
        {/* Left Col: Catat Cepat Natural Language Parser */}
        <div className="lg:col-span-1 space-y-4 bg-black/50 border border-teal-500/20 p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <h4 className="font-sans font-bold text-base text-cream flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-teal-400" />
              "Catat Cepat" AI Input
            </h4>
            <span className="font-mono text-[9px] bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2 py-0.5 rounded-full font-bold">
              Natural Language
            </span>
          </div>

          <p className="text-xs text-cream-dark/70 leading-relaxed font-sans">
            Type informal Indonesian strings like in WhatsApp. The regex parser extracts amount, category, and account automatically:
          </p>

          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleParseAndAdd()}
                placeholder="mis. Makan siang 25rb pakai GoPay"
                className="flex-1 bg-black/80 border border-graphite/60 rounded-xl px-3.5 py-2.5 text-xs font-sans text-cream placeholder:text-cream-dark/40 focus:outline-none focus:border-teal-400 transition-colors"
              />
              <button
                onClick={() => handleParseAndAdd()}
                className="px-3.5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-deep-black font-bold text-xs transition-all shrink-0 flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Shortcut prompt buttons */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Bensin 50rb pakai GoPay",
                "Gaji masuk 12jt ke BCA",
                "Nonton 60rb GoPay"
              ].map((sample) => (
                <button
                  key={sample}
                  onClick={() => {
                    setInputText(sample);
                    handleParseAndAdd(sample);
                  }}
                  className="text-[10px] font-mono bg-graphite-dark/60 hover:bg-teal-500/20 hover:text-teal-300 border border-graphite/40 px-2.5 py-1 rounded-lg text-cream-dark/70 transition-colors"
                >
                  "{sample}"
                </button>
              ))}
            </div>
          </div>

          {/* Parsed Result Box */}
          {parsedLog && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/40 space-y-2 font-mono text-xs"
            >
              <div className="flex items-center justify-between text-[10px] text-teal-300 font-bold uppercase">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  NLP Extraction Complete
                </span>
                <span>{parsedLog.type.toUpperCase()}</span>
              </div>
              <div className="text-cream text-xs font-sans font-semibold font-mono">
                "{parsedLog.note}"
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] pt-1 border-t border-teal-500/20">
                <div>
                  <span className="text-cream-dark/50 block">Amount:</span>
                  <span className="text-emerald-400 font-bold">Rp {parsedLog.amount.toLocaleString("id-ID")}</span>
                </div>
                <div>
                  <span className="text-cream-dark/50 block">Account &amp; Category:</span>
                  <span className="text-gold-muted font-bold">{parsedLog.account} · {parsedLog.category}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right 2 Cols: Envelope Budgeting & Multi-Account Wealth Hub */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Envelopes Grid */}
          <div className="bg-black/50 border border-teal-500/20 p-5 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-sans font-bold text-base text-cream">Sistem Amplop (Envelope Budgeting)</h4>
              <span className="font-mono text-xs text-gold-muted font-bold">Category Caps</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {envelopes.map((env) => {
                const pct = Math.round((env.spent / env.limit) * 100);
                const isHigh = pct >= 90;
                return (
                  <div
                    key={env.id}
                    className="p-3.5 rounded-xl bg-black/60 border border-graphite/60 space-y-2 font-mono text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-cream">{env.category}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isHigh
                            ? "bg-red-500/20 text-red-300 border border-red-500/40"
                            : "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                        }`}
                      >
                        {pct}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-graphite rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isHigh ? "bg-red-400" : "bg-gradient-to-r from-teal-400 to-gold-muted"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-[10px] text-cream-dark/60">
                      <span>Rp {env.spent.toLocaleString("id-ID")}</span>
                      <span>Cap: Rp {env.limit.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Accounts List (Wealth Hub) */}
          <div className="bg-black/50 border border-teal-500/20 p-5 rounded-2xl space-y-3">
            <h4 className="font-sans font-bold text-base text-cream">Multi-Account Balances</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              {accounts.map((acc) => (
                <div key={acc.id} className="p-3 rounded-xl bg-black/70 border border-graphite/50">
                  <div className="text-[10px] text-cream-dark/50 uppercase">{acc.type}</div>
                  <div className="font-bold text-cream text-xs mt-0.5 truncate">{acc.name}</div>
                  <div
                    className={`font-bold mt-1 text-xs ${
                      acc.type === "Utang" ? "text-red-400" : "text-emerald-400"
                    }`}
                  >
                    {acc.type === "Utang" ? "-" : ""}Rp {acc.balance.toLocaleString("id-ID")}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
