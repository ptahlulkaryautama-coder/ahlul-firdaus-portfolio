"use client";

import React, { useState } from "react";
import {
  Store,
  Layers,
  TrendingUp,
  ShieldAlert,
  Users,
  CreditCard,
  Package,
  FileText,
  Settings,
  CheckCircle2,
  ExternalLink,
  Coffee,
  QrCode,
  Sliders,
  DollarSign,
  AlertTriangle,
  Clock
} from "lucide-react";

type ActiveTab = "layers" | "dashboard" | "pos" | "roles" | "areas";

export default function TaminoDemo() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("layers");
  const [selectedLayer, setSelectedLayer] = useState<"run" | "control" | "grow">("run");
  const [posCart, setPosCart] = useState<Array<{ name: string; price: number; qty: number }>>([
    { name: "Single Origin Latte", price: 35000, qty: 2 },
    { name: "Butter Croissant", price: 28000, qty: 1 }
  ]);
  const [paymentDone, setPaymentDone] = useState(false);

  const cartTotal = posCart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="rounded-2xl border border-emerald-900/30 bg-[#0F1713] p-6 sm:p-8 text-slate-200 space-y-6 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-emerald-900/40">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Interactive System Explorer // Tamino
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Tamino — F&amp;B Point of Sale &amp; Operations System
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            A desktop-first F&amp;B operating system connecting point-of-sale transactions, inventory monitoring, staff roles, payments, and business reporting.
          </p>
        </div>

        <a
          href="https://custom-fnb-pos-system-desktop.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-lg shadow-emerald-500/20 shrink-0 group"
        >
          <span>View Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-slate-800/80">
        <button
          onClick={() => setActiveTab("layers")}
          className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === "layers"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>01. Three Product Layers</span>
        </button>

        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === "dashboard"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>02. Decision Dashboard &amp; Alerts</span>
        </button>

        <button
          onClick={() => setActiveTab("pos")}
          className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === "pos"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <Store className="w-3.5 h-3.5" />
          <span>03. POS &amp; Payment Flow</span>
        </button>

        <button
          onClick={() => setActiveTab("areas")}
          className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === "areas"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>04. 8 Product Areas</span>
        </button>

        <button
          onClick={() => setActiveTab("roles")}
          className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === "roles"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>05. Role-Based Workspaces</span>
        </button>
      </div>

      {/* Tab 1: Three Product Layers */}
      {activeTab === "layers" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* RUN */}
            <div
              onClick={() => setSelectedLayer("run")}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedLayer === "run"
                  ? "bg-emerald-950/40 border-emerald-500/80 ring-1 ring-emerald-500/30"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  LAYER 01 // RUN
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">Interactive Live</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Daily Execution</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Core day-to-day operational execution: POS cashier, order taking, payments, menu catalog, inventory records, and transaction logs.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["POS", "Orders", "Payments", "Menu", "Inventory", "Transactions"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-slate-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-900/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CONTROL */}
            <div
              onClick={() => setSelectedLayer("control")}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedLayer === "control"
                  ? "bg-emerald-950/40 border-emerald-500/80 ring-1 ring-emerald-500/30"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-500/30">
                  LAYER 02 // CONTROL
                </span>
                <span className="text-[10px] font-mono text-teal-400 font-bold">Interactive Live</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Managerial Visibility</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Supervisory and owner oversight: Real-time sales visibility, stock condition alerts, top-performing product telemetry, and business reports.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Sales Visibility", "Stock Conditions", "Product Performance", "User Roles", "Reports"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-slate-950/80 text-teal-300 px-2 py-0.5 rounded border border-teal-900/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GROW */}
            <div
              onClick={() => setSelectedLayer("grow")}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedLayer === "grow"
                  ? "bg-purple-950/40 border-purple-500/80 ring-1 ring-purple-500/30"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-950/80 px-2.5 py-0.5 rounded border border-purple-500/30">
                  LAYER 03 // GROW
                </span>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">Future Roadmap</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Expansion Foundation</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Architectural groundwork designed for future capabilities: customer CRM, loyalty engine, advanced business analytics, and AI assistant.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["CRM / Loyalty", "Advanced Analytics", "Multi-Outlet", "AI Assistant"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-slate-950/80 text-purple-300 px-2 py-0.5 rounded border border-purple-900/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Layer Detail Callout */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Architecture Principle:
              </span>
              <span className="text-xs text-slate-300">
                Clear distinction between interactive current product state (RUN + CONTROL) and future architectural direction (GROW).
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Decision Dashboard */}
      {activeTab === "dashboard" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Today&apos;s Gross Sales</span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">Rp 14,580,000</span>
              <span className="text-[10px] font-mono text-emerald-400 block mt-1">+18.4% vs last week</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Transactions</span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">184 orders</span>
              <span className="text-[10px] font-mono text-slate-400 block mt-1">Avg 22 / hr</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Average Order Value</span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">Rp 79,240</span>
              <span className="text-[10px] font-mono text-emerald-400 block mt-1">+6.2% upsell</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Products Sold</span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">412 items</span>
              <span className="text-[10px] font-mono text-slate-400 block mt-1">Across 34 SKUs</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Needs Attention Drawer */}
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
                    Needs Attention (Operational Triage)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-900/60 font-bold">
                  2 Action Items
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Highlights operational bottlenecks that require immediate action before they disrupt business:
              </p>

              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-red-900/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Low Stock Alert: Butter Croissant</span>
                      <span className="text-slate-400 text-[11px]">Only 3 units remaining in kitchen inventory</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-amber-400 bg-amber-950/60 px-2 py-1 rounded border border-amber-900/40 shrink-0">
                    Restock
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-red-900/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-red-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Pending QRIS Settlement #TRX-8842</span>
                      <span className="text-slate-400 text-[11px]">Awaiting gateway callback confirmation (Rp 121,000)</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-red-400 bg-red-950/60 px-2 py-1 rounded border border-red-900/40 shrink-0">
                    Verify
                  </span>
                </div>
              </div>
            </div>

            {/* Top-Selling Items */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Top-Selling Products (Today)
                </span>
                <span className="text-[10px] font-mono text-emerald-400">By Revenue</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  { name: "Single Origin Latte", qty: "68 cups", rev: "Rp 2,380,000", share: "75%" },
                  { name: "Iced Caramel Macchiato", qty: "52 cups", rev: "Rp 1,976,000", share: "62%" },
                  { name: "Artisan Butter Croissant", qty: "44 pcs", rev: "Rp 1,232,000", share: "48%" },
                  { name: "Matcha Oat Latte", qty: "36 cups", rev: "Rp 1,368,000", share: "40%" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="font-mono text-slate-300">{item.rev} ({item.qty})</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: item.share }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: POS & Payment Flow */}
      {activeTab === "pos" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Menu Selection */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold">
                  Menu Quick Selection (Tap to add)
                </span>
                <span className="text-xs font-mono text-emerald-400">Cashier Register Mode</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Single Origin Latte", price: 35000, cat: "Coffee" },
                  { name: "Americano", price: 28000, cat: "Coffee" },
                  { name: "Cappuccino", price: 32000, cat: "Coffee" },
                  { name: "Butter Croissant", price: 28000, cat: "Pastry" },
                  { name: "Pain au Chocolat", price: 32000, cat: "Pastry" },
                  { name: "Matcha Oat Latte", price: 38000, cat: "Beverage" }
                ].map((product, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPaymentDone(false);
                      setPosCart((prev) => {
                        const exists = prev.find((p) => p.name === product.name);
                        if (exists) {
                          return prev.map((p) => (p.name === product.name ? { ...p, qty: p.qty + 1 } : p));
                        }
                        return [...prev, { name: product.name, price: product.price, qty: 1 }];
                      });
                    }}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/60 text-left transition-all hover:bg-slate-900 group"
                  >
                    <span className="text-[10px] font-mono text-emerald-400/80 uppercase block">{product.cat}</span>
                    <span className="font-semibold text-xs text-white group-hover:text-emerald-300 transition-colors block mt-0.5">
                      {product.name}
                    </span>
                    <span className="font-mono text-xs text-slate-300 block mt-1">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Cart & Checkout */}
            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="font-mono text-xs font-bold text-white uppercase">Active Order Cart</span>
                  <span className="font-mono text-[10px] text-slate-400">{posCart.length} lines</span>
                </div>

                <div className="space-y-2.5 py-3 max-h-48 overflow-y-auto">
                  {posCart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-white font-medium block">{item.name}</span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          {item.qty} × Rp {item.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <span className="font-mono text-emerald-300 font-semibold">
                        Rp {(item.price * item.qty).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-xs text-slate-300 uppercase">Subtotal</span>
                  <span className="text-base font-bold text-white">
                    Rp {cartTotal.toLocaleString("id-ID")}
                  </span>
                </div>

                {paymentDone ? (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-center space-y-1">
                    <span className="text-xs font-mono text-emerald-300 font-bold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Payment Successful (QRIS Verified)
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono block">
                      Receipt Printed · Inventory Auto-Deducted
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPaymentDone(true)}
                      className="py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>QRIS Pay</span>
                    </button>
                    <button
                      onClick={() => setPaymentDone(true)}
                      className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Cash / Card</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: 8 Product Areas */}
      {activeTab === "areas" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "1. Dashboard",
              icon: TrendingUp,
              desc: "Sales KPIs, average order value, sales trends, top products, and Needs Attention triage drawer."
            },
            {
              title: "2. POS & Cashier",
              icon: Store,
              desc: "Rapid touch ordering, cart management, modifiers, table numbers, split bill, and QRIS payments."
            },
            {
              title: "3. Menu Management",
              icon: Coffee,
              desc: "Category hierarchies, product availability toggles, SKU pricing, and recipe configurations."
            },
            {
              title: "4. Inventory",
              icon: Package,
              desc: "Real-time stock tracking, recipe-level automatic deduction, supplier notes, and low-stock alerts."
            },
            {
              title: "5. Transactions",
              icon: FileText,
              desc: "Detailed transaction history, receipt lookups, payment status tracking, and refund workflows."
            },
            {
              title: "6. Reports",
              icon: DollarSign,
              desc: "End-of-shift reconciliation, daily cashier summaries, payment method breakdowns, and exportable CSVs."
            },
            {
              title: "7. Users & Roles",
              icon: Users,
              desc: "Role-based access for Owners, Managers, and Cashiers with distinct permission boundaries."
            },
            {
              title: "8. Settings",
              icon: Settings,
              desc: "Tax/service charge rules, printer integrations, outlet profile, and currency formatting."
            }
          ].map((area, idx) => {
            const Icon = area.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-white">{area.title}</h4>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 5: Role-Based Workspaces */}
      {activeTab === "roles" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Role: Cashier
            </span>
            <h4 className="text-base font-bold text-white">Daily Order Execution</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Rapid touch point-of-sale</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>QRIS, Cash &amp; Card checkout</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Shift cash drawer counting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Restricted from modifying pricing</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-500/30">
              Role: Manager
            </span>
            <h4 className="text-base font-bold text-white">Operational Supervision</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Stock management &amp; restock logging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Menu item toggles &amp; availability</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Needs Attention resolution triage</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Daily shift audit &amp; reconciliation</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
              Role: Owner
            </span>
            <h4 className="text-base font-bold text-white">Executive Command</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Top-line revenue &amp; sales trends</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Product profitability analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>User role management &amp; settings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Multi-outlet expansion telemetry</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
