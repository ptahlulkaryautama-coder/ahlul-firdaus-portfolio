"use client";

import React, { useState } from "react";
import {
  Package,
  Boxes,
  Truck,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Send,
  Building2
} from "lucide-react";

interface BrandSupplier {
  id: string;
  name: string;
  category: "Snacks" | "Cashews" | "Specialty Coffee" | "Spices" | "Gift Kits";
  origin: string;
  certifications: string[];
  sampleProduct: string;
}

const BRAND_SUPPLIERS: BrandSupplier[] = [
  {
    id: "arva",
    name: "Arva Gourmet",
    category: "Snacks",
    origin: "Yogyakarta, Central Java",
    certifications: ["BPOM", "Halal"],
    sampleProduct: "Truffle Tempeh Chips (100g)"
  },
  {
    id: "yava",
    name: "YAVA Bali",
    category: "Cashews",
    origin: "Karangasem, Bali",
    certifications: ["BPOM", "Halal", "HACCP"],
    sampleProduct: "Wild Harvested Roasted Cashews (250g)"
  },
  {
    id: "otten",
    name: "Otten Coffee",
    category: "Specialty Coffee",
    origin: "Gayo Highlands, Aceh",
    certifications: ["BPOM", "Halal"],
    sampleProduct: "Single-Origin Gayo Arabica (200g)"
  },
  {
    id: "bamboe",
    name: "Bamboe Asia",
    category: "Spices",
    origin: "Surabaya, East Java",
    certifications: ["BPOM", "Halal", "HACCP"],
    sampleProduct: "Authentic Rendang & Curry Spice Blend (60g)"
  },
  {
    id: "giftkit",
    name: "Archipelago Gift Collection",
    category: "Gift Kits",
    origin: "Consolidated, Batam FTZ",
    certifications: ["Curated Pack"],
    sampleProduct: "Archipelago Essentials Curated Box"
  }
];

interface DestinationRate {
  id: string;
  region: string;
  baseRatePerSupplier: number;
  consolidatedBaseRate: number;
  ratePerKg: number;
  leadTime: string;
}

const DESTINATIONS: DestinationRate[] = [
  {
    id: "us",
    region: "USA & Canada",
    baseRatePerSupplier: 38,
    consolidatedBaseRate: 42,
    ratePerKg: 11,
    leadTime: "8–12 Business Days"
  },
  {
    id: "eu",
    region: "UK & European Union",
    baseRatePerSupplier: 40,
    consolidatedBaseRate: 44,
    ratePerKg: 12,
    leadTime: "7–11 Business Days"
  },
  {
    id: "au",
    region: "Australia & New Zealand",
    baseRatePerSupplier: 32,
    consolidatedBaseRate: 35,
    ratePerKg: 9.5,
    leadTime: "6–10 Business Days"
  },
  {
    id: "sg",
    region: "Singapore & ASEAN",
    baseRatePerSupplier: 18,
    consolidatedBaseRate: 20,
    ratePerKg: 5,
    leadTime: "3–6 Business Days"
  },
  {
    id: "ea",
    region: "Japan & East Asia",
    baseRatePerSupplier: 30,
    consolidatedBaseRate: 34,
    ratePerKg: 8.5,
    leadTime: "6–9 Business Days"
  }
];

export default function OoiDemo() {
  const [activeTab, setActiveTab] = useState<"estimator" | "catalog" | "inquiry">("estimator");

  // Estimator state
  const [selectedDestination, setSelectedDestination] = useState<string>("us");
  const [selectedBrandIds, setSelectedBrandIds] = useState<string[]>(["arva", "yava", "otten", "bamboe"]);
  const [weightKg, setWeightKg] = useState<number>(6);
  const [buyerType, setBuyerType] = useState<"retail" | "b2b">("b2b");

  // Inquiry form prototype state
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState({
    companyName: "Nordic Specialty Foods Ltd",
    contactEmail: "buyer@nordicspecialty.com",
    interest: "Curated Sample Kit + Wholesale Price List",
    estimatedVolume: "20–50 kg / month"
  });

  const currentDestination = DESTINATIONS.find((d) => d.id === selectedDestination) || DESTINATIONS[0];
  const supplierCount = Math.max(1, selectedBrandIds.length);

  // Toggle brand selection
  const toggleBrand = (id: string) => {
    if (selectedBrandIds.includes(id)) {
      if (selectedBrandIds.length > 1) {
        setSelectedBrandIds(selectedBrandIds.filter((b) => b !== id));
      }
    } else {
      setSelectedBrandIds([...selectedBrandIds, id]);
    }
  };

  // Shipping cost calculations (illustrative model)
  // Separate shipments: each supplier incurs separate minimum international base dispatch fees + apportioned weight
  const separateShipmentCost = supplierCount * currentDestination.baseRatePerSupplier + weightKg * currentDestination.ratePerKg * 1.15;
  // Consolidated shipment: single base dispatch fee from Batam Hub + weight charge + small packing fee
  const consolidatedShipmentCost = currentDestination.consolidatedBaseRate + weightKg * currentDestination.ratePerKg + (supplierCount > 1 ? 4 : 0);
  
  const savingsAmount = Math.max(0, separateShipmentCost - consolidatedShipmentCost);
  const savingsPercentage = separateShipmentCost > 0 ? Math.round((savingsAmount / separateShipmentCost) * 100) : 0;

  return (
    <div className="glass-card border border-graphite/80 rounded-2xl overflow-hidden shadow-2xl mt-6">
      {/* Sub-tabs header */}
      <div className="bg-graphite-dark/95 border-b border-graphite/80 flex items-center justify-between p-1.5">
        <div className="flex gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab("estimator")}
            className={`px-3.5 py-2 rounded-xl font-mono text-[10px] uppercase flex items-center gap-2 transition-all ${
              activeTab === "estimator"
                ? "bg-gold-muted/15 border border-gold-muted/40 text-gold-muted font-bold shadow-md"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Consolidated Shipping Estimator</span>
          </button>
          <button
            onClick={() => setActiveTab("catalog")}
            className={`px-3.5 py-2 rounded-xl font-mono text-[10px] uppercase flex items-center gap-2 transition-all ${
              activeTab === "catalog"
                ? "bg-gold-muted/15 border border-gold-muted/40 text-gold-muted font-bold shadow-md"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Curated Brand Sampler</span>
          </button>
          <button
            onClick={() => setActiveTab("inquiry")}
            className={`px-3.5 py-2 rounded-xl font-mono text-[10px] uppercase flex items-center gap-2 transition-all ${
              activeTab === "inquiry"
                ? "bg-gold-muted/15 border border-gold-muted/40 text-gold-muted font-bold shadow-md"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>B2B &amp; Sample Inquiry</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-full mr-2">
          <Sparkles className="w-3 h-3" />
          <span>Batam FTZ Consolidation</span>
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="p-5 sm:p-7">
        {/* TAB 1: CONSOLIDATED SHIPPING ESTIMATOR */}
        {activeTab === "estimator" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Interactive Inputs */}
              <div className="lg:col-span-7 space-y-5">
                <div className="border border-graphite/60 rounded-xl p-4 bg-slate-950/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gold-muted font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" />
                      1. Destination &amp; Buyer Journey
                    </span>
                    {/* Buyer Type Toggle */}
                    <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
                      <button
                        onClick={() => setBuyerType("retail")}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          buyerType === "retail" ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30" : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        Retail Sample
                      </button>
                      <button
                        onClick={() => setBuyerType("b2b")}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          buyerType === "b2b" ? "bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30" : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        B2B Sourcing
                      </button>
                    </div>
                  </div>

                  {/* Destination dropdown */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Target Destination Region</label>
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-100 focus:outline-none focus:border-gold-muted"
                    >
                      {DESTINATIONS.map((dest) => (
                        <option key={dest.id} value={dest.id}>
                          {dest.region} (Indicative Lead Time: {dest.leadTime})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Multi-Supplier Selection */}
                <div className="border border-graphite/60 rounded-xl p-4 bg-slate-950/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gold-muted font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      2. Select Regional Brands to Combine ({selectedBrandIds.length} Selected)
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Single Batam Box</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BRAND_SUPPLIERS.map((brand) => {
                      const isSelected = selectedBrandIds.includes(brand.id);
                      return (
                        <button
                          key={brand.id}
                          type="button"
                          onClick={() => toggleBrand(brand.id)}
                          className={`p-2.5 rounded-lg border text-left transition-all flex items-start justify-between ${
                            isSelected
                              ? "bg-amber-950/20 border-amber-500/40 text-slate-100"
                              : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs flex items-center gap-1.5">
                              <span>{brand.name}</span>
                              <span className="text-[9px] font-mono text-gold-muted font-normal bg-gold-muted/10 px-1.5 py-0.2 rounded">
                                {brand.category}
                              </span>
                            </div>
                            <div className="text-[10px] font-mono text-slate-400 mt-0.5">{brand.origin}</div>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] mt-0.5 shrink-0 ${
                              isSelected ? "bg-amber-500 border-amber-400 text-slate-950 font-bold" : "border-slate-700"
                            }`}
                          >
                            {isSelected && "✓"}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="border border-graphite/60 rounded-xl p-4 bg-slate-950/50 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Estimated Total Shipment Weight:</span>
                    <span className="text-gold-muted font-bold text-sm">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500">
                    <span>1 kg (Sample Box)</span>
                    <span>10 kg (Commercial Sample)</span>
                    <span>25 kg (Wholesale Batch)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Comparative Telemetry Card */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-gold-muted/30 rounded-2xl p-6 relative overflow-hidden shadow-xl space-y-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Logistics Telemetry</span>
                    <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold">
                      {savingsPercentage}% Lower Freight Cost
                    </span>
                  </div>

                  {/* Comparison Bars */}
                  <div className="space-y-4">
                    {/* Separate Shipments */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Separate Shipments ({supplierCount} packages):</span>
                        <span className="text-slate-300 font-semibold">${separateShipmentCost.toFixed(0)} USD</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400/70 w-full" />
                      </div>
                      <div className="text-[9px] font-mono text-red-400/80">
                        {supplierCount}x individual origin dispatch fees + duplicate customs overhead
                      </div>
                    </div>

                    {/* Consolidated Shipment */}
                    <div className="space-y-1 pt-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-amber-300 font-bold flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5 text-amber-400" />
                          Batam FTZ Consolidated Box:
                        </span>
                        <span className="text-amber-300 font-bold text-base">${consolidatedShipmentCost.toFixed(0)} USD</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-amber-500/30">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (consolidatedShipmentCost / separateShipmentCost) * 100)}%` }}
                        />
                      </div>
                      <div className="text-[9px] font-mono text-emerald-400">
                        Single consolidated dispatch from Batam Hub · Combined master invoice
                      </div>
                    </div>
                  </div>

                  {/* Savings Highlight Box */}
                  <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">Estimated Savings</span>
                      <span className="text-xl font-bold text-white font-mono">${savingsAmount.toFixed(0)} USD</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Lead Time</span>
                      <span className="text-xs font-semibold text-slate-200 font-mono">{currentDestination.leadTime}</span>
                    </div>
                  </div>

                  {/* Key Operational Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Single packaging checkpoint &amp; unified export declaration.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Certified compliance tracking across BPOM, Halal &amp; HACCP.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-slate-400 text-[10px] font-mono flex items-center justify-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-gold-muted shrink-0" />
              <span>
                <strong>Illustrative estimate only.</strong> Final shipping cost depends on destination, weight, carrier, product category, and current logistics rates.
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: CURATED BRAND SAMPLER */}
        {activeTab === "catalog" && (
          <div className="space-y-5">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  Curated Indonesian Food Brands &amp; Origins
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Unified catalog spanning regional snacks, cashews, specialty coffee, and traditional spice blends.
                </p>
              </div>
              <span className="text-[10px] font-mono text-teal-400 bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-full">
                5 Certified Categories
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {BRAND_SUPPLIERS.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3 hover:border-gold-muted/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-gold-muted/10 border border-gold-muted/30 text-gold-muted px-2 py-0.5 rounded font-semibold">
                        {brand.category}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">{brand.origin}</span>
                    </div>
                    <h4 className="font-bold text-sm text-white">{brand.name}</h4>
                    <p className="text-xs text-slate-300 mt-1 font-serif italic">
                      Sample: {brand.sampleProduct}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {brand.certifications.map((cert) => (
                        <span key={cert} className="text-[8px] font-mono bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                          {cert}
                        </span>
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-semibold">Verified Brand</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-muted" />
                <span>Need customized product specifications or private-label sourcing?</span>
              </span>
              <button
                onClick={() => setActiveTab("inquiry")}
                className="text-gold-muted hover:text-white font-bold flex items-center gap-1 transition-colors"
              >
                <span>Request B2B Deck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: B2B & SAMPLE INQUIRY FUNNEL */}
        {activeTab === "inquiry" && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                B2B Sourcing &amp; Curated Sample Request
              </h3>
              <p className="text-xs text-slate-400">
                Direct inquiry channel for specialty retailers, food importers, and international distribution partners.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white font-mono">Inquiry Prototype Registered</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Sample inquiry routed to Batam Consolidation desk for <strong>{inquiryData.companyName}</strong>. Standard turnaround for quotation and spec sheets is 24–48 hours.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-lg transition-colors"
                >
                  Reset Prototype Form
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase">Company / Organization</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.companyName}
                      onChange={(e) => setInquiryData({ ...inquiryData, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-gold-muted"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase">Contact Work Email</label>
                    <input
                      type="email"
                      required
                      value={inquiryData.contactEmail}
                      onChange={(e) => setInquiryData({ ...inquiryData, contactEmail: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-gold-muted"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase">Inquiry Type</label>
                    <select
                      value={inquiryData.interest}
                      onChange={(e) => setInquiryData({ ...inquiryData, interest: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-gold-muted"
                    >
                      <option>Curated Sample Kit + Wholesale Price List</option>
                      <option>Bulk Container Wholesale (FCL/LCL)</option>
                      <option>Private Label / OEM Packaging</option>
                      <option>Regional Distributor Partnership</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase">Estimated Monthly Volume</label>
                    <input
                      type="text"
                      value={inquiryData.estimatedVolume}
                      onChange={(e) => setInquiryData({ ...inquiryData, estimatedVolume: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-gold-muted"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
                  >
                    <span>Generate Sample Sourcing Ticket</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
