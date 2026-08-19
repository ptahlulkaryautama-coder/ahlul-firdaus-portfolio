"use client";

import React, { useState } from "react";
import { Ship, DollarSign, FileCheck, Anchor, CheckCircle2, ShieldAlert, ArrowRight, RefreshCw } from "lucide-react";

interface Commodity {
  id: string;
  name: string;
  basePricePerKg: number;
  hsCode: string;
  origin: string;
}

const COMMODITIES: Commodity[] = [
  { id: "coffee", name: "Sumatra Arabica Coffee Beans (Grade 1)", basePricePerKg: 6.5, hsCode: "0901.11.10", origin: "Aceh, Indonesia" },
  { id: "sugar", name: "Organic Coconut Palm Sugar (Bulk)", basePricePerKg: 3.2, hsCode: "1702.90.90", origin: "Central Java, Indonesia" },
  { id: "cloves", name: "Whole Dried Cloves (Lal Pari)", basePricePerKg: 11.0, hsCode: "0907.10.00", origin: "Maluku, Indonesia" },
  { id: "cacao", name: "Fermented Cocoa Beans", basePricePerKg: 4.8, hsCode: "1801.00.00", origin: "Sulawesi, Indonesia" },
];

export default function OoiDemo() {
  const [activeTab, setActiveTab] = useState<"calculator" | "documents" | "rfq">("calculator");

  // Calculator state
  const [selectedCommodityId, setSelectedCommodityId] = useState<string>("coffee");
  const [weightKg, setWeightKg] = useState<number>(10000);
  const [containerType, setContainerType] = useState<"20ft" | "40ft">("20ft");
  const [destinationPort, setDestinationPort] = useState<string>("Rotterdam, NL (NLRTM)");
  const [incoterm, setIncoterm] = useState<"FOB" | "CIF">("CIF");

  // Document verification state
  const [docs, setDocs] = useState([
    { id: 1, name: "Certificate of Origin (Form A)", issuer: "Indonesian Chamber of Commerce", status: "Verified", critical: true },
    { id: 2, name: "Phytosanitary Certificate", issuer: "Ministry of Agriculture", status: "Verified", critical: true },
    { id: 3, name: "Bill of Lading (B/L)", issuer: "Maersk Shipping Line", status: "Pending Inspection", critical: true },
    { id: 4, name: "Fumigation & Pest Control Certificate", issuer: "Sucofindo International", status: "Verified", critical: false },
  ]);

  // RFQ Generator State
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [buyerCompany, setBuyerCompany] = useState("Global Commodity Importers BV");

  const selectedCommodity = COMMODITIES.find((c) => c.id === selectedCommodityId) || COMMODITIES[0];

  // Price calculations
  const rawGoodsCost = weightKg * selectedCommodity.basePricePerKg;
  const freightCost = containerType === "20ft" ? 2800 : 4500;
  const insuranceCost = incoterm === "CIF" ? rawGoodsCost * 0.015 : 0;
  const totalTransaction = rawGoodsCost + (incoterm === "CIF" ? freightCost + insuranceCost : 0);

  const depositEscrow = totalTransaction * 0.3;
  const finalEscrow = totalTransaction * 0.7;

  const toggleDocStatus = (id: number) => {
    setDocs((prev) =>
      prev.map((doc) =>
        doc.id === id
          ? { ...doc, status: doc.status === "Verified" ? "Pending Inspection" : "Verified" }
          : doc
      )
    );
  };

  return (
    <div className="glass-card border border-graphite/80 rounded-2xl overflow-hidden shadow-2xl mt-6">
      {/* Sub-tabs header */}
      <div className="bg-graphite-dark/95 border-b border-graphite/80 flex items-center justify-between p-1.5">
        <div className="flex gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-3.5 py-2 rounded-xl font-mono text-[10px] uppercase flex items-center gap-2 transition-all ${
              activeTab === "calculator"
                ? "bg-gold-muted/15 border border-gold-muted/40 text-gold-muted font-bold shadow-md"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <Ship className="w-3.5 h-3.5" />
            <span>Escrow & Freight Calc</span>
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`px-3.5 py-2 rounded-xl font-mono text-[10px] uppercase flex items-center gap-2 transition-all ${
              activeTab === "documents"
                ? "bg-gold-muted/15 border border-gold-muted/40 text-gold-muted font-bold shadow-md"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Customs Verification</span>
          </button>
          <button
            onClick={() => setActiveTab("rfq")}
            className={`px-3.5 py-2 rounded-xl font-mono text-[10px] uppercase flex items-center gap-2 transition-all ${
              activeTab === "rfq"
                ? "bg-gold-muted/15 border border-gold-muted/40 text-gold-muted font-bold shadow-md"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>RFQ Generator</span>
          </button>
        </div>
        <span className="font-mono text-[9px] text-cream-dark/40 uppercase tracking-widest hidden sm:block pr-3 font-semibold">
          OOI EXPORT ENGINE v3.1
        </span>
      </div>

      {/* Content area */}
      <div className="p-6">
        {/* TAB 1: Escrow & Freight Calculator */}
        {activeTab === "calculator" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[9px] text-gold-muted uppercase tracking-widest font-bold block">
                B2B Cargo Parameters
              </span>

              {/* Commodity Dropdown */}
              <div className="space-y-1">
                <label className="font-mono text-[9px] text-cream-dark/50 uppercase block">
                  Export Commodity Product
                </label>
                <select
                  value={selectedCommodityId}
                  onChange={(e) => setSelectedCommodityId(e.target.value)}
                  className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs text-cream outline-none cursor-pointer font-sans"
                >
                  {COMMODITIES.map((c) => (
                    <option key={c.id} value={c.id} className="bg-graphite-dark text-cream">
                      {c.name} (${c.basePricePerKg}/kg)
                    </option>
                  ))}
                </select>
              </div>

              {/* Volume & Container */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-cream-dark/50 uppercase block">
                    Cargo Net Weight (KG)
                  </label>
                  <input
                    type="number"
                    step={500}
                    min={1000}
                    max={50000}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full glass-input rounded-xl px-3.5 py-2 text-xs text-cream outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-cream-dark/50 uppercase block">
                    Container Spec
                  </label>
                  <select
                    value={containerType}
                    onChange={(e) => setContainerType(e.target.value as "20ft" | "40ft")}
                    className="w-full glass-input rounded-xl px-3.5 py-2 text-xs text-cream outline-none cursor-pointer font-mono"
                  >
                    <option value="20ft" className="bg-graphite-dark text-cream">20ft FCL Container</option>
                    <option value="40ft" className="bg-graphite-dark text-cream">40ft FCL Container</option>
                  </select>
                </div>
              </div>

              {/* Port & Incoterm */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-cream-dark/50 uppercase block">
                    Destination Discharge Port
                  </label>
                  <select
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    className="w-full glass-input rounded-xl px-3.5 py-2 text-xs text-cream outline-none cursor-pointer font-sans"
                  >
                    <option value="Rotterdam, NL (NLRTM)" className="bg-graphite-dark text-cream">Port of Rotterdam (NL)</option>
                    <option value="Hamburg, DE (DEHAM)" className="bg-graphite-dark text-cream">Port of Hamburg (DE)</option>
                    <option value="Los Angeles, US (USLAX)" className="bg-graphite-dark text-cream">Port of Los Angeles (US)</option>
                    <option value="Singapore (SGSIN)" className="bg-graphite-dark text-cream">Port of Singapore (SG)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-cream-dark/50 uppercase block">
                    Incoterm Terms
                  </label>
                  <select
                    value={incoterm}
                    onChange={(e) => setIncoterm(e.target.value as "FOB" | "CIF")}
                    className="w-full glass-input rounded-xl px-3.5 py-2 text-xs text-cream outline-none cursor-pointer font-mono"
                  >
                    <option value="CIF" className="bg-graphite-dark text-cream">CIF (Cost, Insurance & Freight)</option>
                    <option value="FOB" className="bg-graphite-dark text-cream">FOB (Free On Board Tanjung Priok)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Financial & Escrow Summary */}
            <div className="lg:col-span-6 glass-card p-5 rounded-2xl border border-graphite/60 space-y-4">
              <div className="flex items-center justify-between border-b border-graphite/50 pb-3">
                <span className="font-mono text-[10px] text-cream-dark/60 uppercase font-bold">
                  Transaction Escrow Breakdown
                </span>
                <span className="text-[9px] font-mono text-gold-muted glass-badge px-2.5 py-0.5 rounded-full font-bold">
                  HS: {selectedCommodity.hsCode}
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-cream-dark/70">
                  <span>Commodity Value ({weightKg.toLocaleString()} kg):</span>
                  <span className="text-cream font-bold">${rawGoodsCost.toLocaleString()}</span>
                </div>
                {incoterm === "CIF" && (
                  <>
                    <div className="flex justify-between text-cream-dark/70">
                      <span>Ocean Freight ({containerType}):</span>
                      <span className="text-cream font-bold">${freightCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-cream-dark/70">
                      <span>Marine Cargo Insurance (1.5%):</span>
                      <span className="text-cream font-bold">${insuranceCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between text-sm text-gold-muted font-bold pt-2 border-t border-graphite/40">
                  <span>TOTAL CONTRACT VALUE:</span>
                  <span>${totalTransaction.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              {/* Escrow Release Timeline */}
              <div className="space-y-2 pt-3 border-t border-graphite/40">
                <span className="font-mono text-[9px] text-cream-dark/50 uppercase block font-semibold">
                  Secured Escrow Release Stages
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-graphite-dark/60 border border-graphite/50 space-y-1">
                    <span className="text-[9px] font-mono text-amber-400 block font-bold">STAGE 1: 30% DEPOSIT</span>
                    <span className="text-sm font-bold text-cream font-mono">${depositEscrow.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    <p className="text-[9px] text-cream-dark/50 leading-tight font-sans">Released upon Original B/L issuing</p>
                  </div>
                  <div className="p-3 rounded-xl bg-graphite-dark/60 border border-graphite/50 space-y-1">
                    <span className="text-[9px] font-mono text-emerald-400 block font-bold">STAGE 2: 70% FINAL</span>
                    <span className="text-sm font-bold text-cream font-mono">${finalEscrow.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    <p className="text-[9px] text-cream-dark/50 leading-tight font-sans">Released upon customs clearance at {destinationPort.split(" ")[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Customs Verification */}
        {activeTab === "documents" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-gold-muted uppercase tracking-widest font-bold">
                Export Compliance Document Pipeline
              </span>
              <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                AUTOMATED CLEARANCE ENGINE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  className="glass-card p-4 rounded-xl border border-graphite/60 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-cream">{doc.name}</span>
                      {doc.critical && (
                        <span className="text-[8px] font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 uppercase">
                          Mandatory
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-mono text-cream-dark/50">Issuer: {doc.issuer}</p>
                  </div>

                  <button
                    onClick={() => toggleDocStatus(doc.id)}
                    className={`shrink-0 px-2.5 py-1 rounded-lg text-[9px] font-mono uppercase tracking-wider font-bold transition-all ${
                      doc.status === "Verified"
                        ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-400"
                        : "bg-amber-500/15 border border-amber-500/40 text-amber-400"
                    }`}
                  >
                    {doc.status}
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl glass-card border border-graphite/50 text-[11px] font-mono text-cream-dark/70 flex items-center justify-between">
              <span>System Verification Progress: 3 of 4 documents verified for export release</span>
              <button
                onClick={() => setDocs(docs.map((d) => ({ ...d, status: "Verified" })))}
                className="px-3 py-1 bg-gold-muted text-deep-black font-bold text-[10px] rounded-lg hover:bg-cream transition-colors"
              >
                Approve All Documents
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: RFQ Generator */}
        {activeTab === "rfq" && (
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-gold-muted uppercase tracking-widest font-bold">
              B2B International Request for Quotation
            </span>

            {rfqSubmitted ? (
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-cream text-sm">RFQ Sheet Transmitted to OOI Network</h4>
                <p className="text-xs text-cream-dark/80 max-w-md mx-auto">
                  Quotation proposal for <span className="text-gold-muted font-bold">{selectedCommodity.name}</span> dispatched to verified producers in {selectedCommodity.origin}.
                </p>
                <button
                  onClick={() => setRfqSubmitted(false)}
                  className="px-4 py-2 bg-graphite border border-graphite/80 text-cream text-xs rounded-xl font-mono uppercase"
                >
                  Generate Another RFQ
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRfqSubmitted(true);
                }}
                className="space-y-4 glass-card p-5 rounded-2xl border border-graphite/60"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[9px] text-cream-dark/50 uppercase block mb-1">
                      Buyer Entity Name
                    </label>
                    <input
                      type="text"
                      required
                      value={buyerCompany}
                      onChange={(e) => setBuyerCompany(e.target.value)}
                      className="w-full glass-input rounded-xl px-3.5 py-2 text-xs text-cream outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] text-cream-dark/50 uppercase block mb-1">
                      Target Delivery Window
                    </label>
                    <input
                      type="text"
                      defaultValue="Q3 / Q4 Shipping Season"
                      className="w-full glass-input rounded-xl px-3.5 py-2 text-xs text-cream outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="shimmer-button w-full py-3 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Dispatch B2B Commodity RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
