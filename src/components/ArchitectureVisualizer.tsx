"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  Server,
  Database,
  Cpu,
  Play,
  RotateCcw,
  Terminal,
  ArrowRight,
  Lock,
  Smartphone,
  Globe,
  Ship,
  QrCode,
  Zap,
  Activity,
  CheckCircle2,
  FileCheck,
  Building2,
  HelpCircle
} from "lucide-react";

export type ProjectPreset = "ooi" | "cgv10" | "oneecos" | "corum" | "rumah-ringkas" | "masjid-al-ikhlas";

interface NodeData {
  id: string;
  name: string;
  subtitle: string;
  category: "Client" | "Gateway" | "Logic" | "Database" | "External";
  icon: React.ReactNode;
  status: "Active" | "Idle" | "Processing" | "Verified";
  description: string;
  specs: { label: string; value: string }[];
  connections: string[];
}

interface SimulationStep {
  step: number;
  title: string;
  activeNodes: string[];
  activeConnections: [string, string][];
  logMessage: string;
  status: "SUCCESS" | "PROCESSING" | "INITIALIZING";
}

interface PresetConfig {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeColor: string;
  description: string;
  nodes: NodeData[];
  simulationSteps: SimulationStep[];
}

const presets: Record<ProjectPreset, PresetConfig> = {
  ooi: {
    title: "OOI Proposed Export Escrow Concept",
    subtitle: "Proposed B2B Milestone Escrow & Trade Logistics State Machine",
    badgeText: "Future-State Concept",
    badgeColor: "emerald",
    description:
      "Future-State Architecture Concept: Interactive visual representing a proposed future transaction workflow. Not connected to live customs, shipping, banking, escrow, or government systems.",
    nodes: [
      {
        id: "buyer",
        name: "Global Bulk Buyer",
        subtitle: "Client Terminal",
        category: "Client",
        icon: <Globe className="w-5 h-5 text-emerald-400" />,
        status: "Active",
        description: "Overseas commodity buyer placing bulk RFQ and funding the Escrow vault.",
        specs: [
          { label: "Protocol", value: "HTTPS / TLS 1.3" },
          { label: "Currency", value: "USD / EUR Escrow" },
          { label: "Auth", value: "2FA Verified" }
        ],
        connections: ["gateway"]
      },
      {
        id: "gateway",
        name: "API Gateway",
        subtitle: "Next.js Edge Route",
        category: "Gateway",
        icon: <Server className="w-5 h-5 text-teal-400" />,
        status: "Idle",
        description: "Validates trade payloads, authenticates state requests, and routes escrow triggers.",
        specs: [
          { label: "Runtime", value: "Next.js 16 Edge" },
          { label: "Rate Limit", value: "1,000 req/min" },
          { label: "Validation", value: "Zod Schema" }
        ],
        connections: ["escrow", "customs"]
      },
      {
        id: "escrow",
        name: "Escrow Vault",
        subtitle: "Smart State Lock",
        category: "Logic",
        icon: <Lock className="w-5 h-5 text-gold-muted" />,
        status: "Idle",
        description: "Holds funds in multi-signature vault. Triggers 30% / 60% / 10% milestone payouts.",
        specs: [
          { label: "Security", value: "Multi-Sig Lock" },
          { label: "Milestones", value: "Loading / Transit / Arrival" },
          { label: "Audit", value: "Immutable Log" }
        ],
        connections: ["payout"]
      },
      {
        id: "customs",
        name: "Bea Cukai API",
        subtitle: "Government Sync",
        category: "External",
        icon: <FileCheck className="w-5 h-5 text-purple-400" />,
        status: "Idle",
        description: "Verifies export clearance documents, PEB checksums, and container manifests.",
        specs: [
          { label: "Endpoint", value: "Bea Cukai Ingest" },
          { label: "Latency", value: "140ms" },
          { label: "Verification", value: "Digital Signature" }
        ],
        connections: ["vessel"]
      },
      {
        id: "vessel",
        name: "AIS Vessel Track",
        subtitle: "Satellite GPS Sync",
        category: "External",
        icon: <Ship className="w-5 h-5 text-cyan-400" />,
        status: "Idle",
        description: "Tracks container vessel departure from Batam port to confirm Bill of Lading departure.",
        specs: [
          { label: "Telemetry", value: "AIS Satellite" },
          { label: "Refresh", value: "Every 15 mins" },
          { label: "Event Trigger", value: "Departure Signal" }
        ],
        connections: ["escrow"]
      },
      {
        id: "payout",
        name: "Supplier Payout",
        subtitle: "Local Bank Settlement",
        category: "Database",
        icon: <Building2 className="w-5 h-5 text-emerald-300" />,
        status: "Idle",
        description: "Automated disbursement directly to Indonesian producer local bank accounts.",
        specs: [
          { label: "Settlement", value: "Real-time RTGS" },
          { label: "Fee", value: "0.0%" },
          { label: "Status", value: "Automated Release" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Escrow Lock Initiated",
        activeNodes: ["buyer", "gateway", "escrow"],
        activeConnections: [["buyer", "gateway"], ["gateway", "escrow"]],
        logMessage: "BUYER_PAYMENT_DEPOSITED -> Vault Locked $150,000 USD (Ref #ESC-8921)",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Customs Document Audit",
        activeNodes: ["gateway", "customs"],
        activeConnections: [["gateway", "customs"]],
        logMessage: "BEA_CUKAI_SYNC -> PEB #7721-EXP Verified. Export Permit Validated (30% Unlocked)",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Vessel Departure Verified",
        activeNodes: ["customs", "vessel", "escrow"],
        activeConnections: [["customs", "vessel"], ["vessel", "escrow"]],
        logMessage: "AIS_GPS_PING -> Vessel 'MV Nusantara' departed Port of Batam. Bill of Lading Validated (60% Unlocked)",
        status: "PROCESSING"
      },
      {
        step: 4,
        title: "4. Escrow Disbursement Complete",
        activeNodes: ["escrow", "payout"],
        activeConnections: [["escrow", "payout"]],
        logMessage: "PAYOUT_ENGINE -> Direct RTGS Transfer to Local Supplier Executed. Status: 100% SETTLED",
        status: "SUCCESS"
      }
    ]
  },
  cgv10: {
    title: "CGV10 Community Gate & Ledger System",
    subtitle: "Realtime Edge Synchronization & Offline-First Gate Verification",
    badgeText: "PWA Community Ecosystem",
    badgeColor: "purple",
    description:
      "Architecture linking 500+ resident mobile devices with security guardhouse tablets and a shared transparent financial ledger.",
    nodes: [
      {
        id: "resident",
        name: "Resident PWA",
        subtitle: "Mobile Web App",
        category: "Client",
        icon: <Smartphone className="w-5 h-5 text-purple-400" />,
        status: "Active",
        description: "Resident app for instant QR visitor pass creation and QRIS dues payment.",
        specs: [
          { label: "Type", value: "Progressive Web App" },
          { label: "Offline Mode", value: "IndexedDB Storage" },
          { label: "Push", value: "WebPush Alerts" }
        ],
        connections: ["edge"]
      },
      {
        id: "edge",
        name: "Supabase Realtime Engine",
        subtitle: "Edge Data Router",
        category: "Gateway",
        icon: <Zap className="w-5 h-5 text-gold-muted" />,
        status: "Idle",
        description: "Listens for database changes and broadcasts instant gate verification pings.",
        specs: [
          { label: "Protocol", value: "WebSockets / WSS" },
          { label: "Latency", value: "< 12ms" },
          { label: "Security", value: "Row Level Security (RLS)" }
        ],
        connections: ["guard", "db"]
      },
      {
        id: "guard",
        name: "Guardhouse Scanner",
        subtitle: "Gate Security Tablet",
        category: "Logic",
        icon: <QrCode className="w-5 h-5 text-emerald-400" />,
        status: "Idle",
        description: "Tablet running camera QR scanner. Validates visitor QR pass in < 5 seconds.",
        specs: [
          { label: "Scanner", value: "HTML5 Camera Feed" },
          { label: "Validation Time", value: "< 500ms" },
          { label: "Fallback", value: "Offline Local Cache" }
        ],
        connections: ["audit"]
      },
      {
        id: "db",
        name: "PostgreSQL & Ledger",
        subtitle: "Audit Ledger Store",
        category: "Database",
        icon: <Database className="w-5 h-5 text-cyan-400" />,
        status: "Idle",
        description: "Stores resident billing history, gate logs, and public community financial balance.",
        specs: [
          { label: "Engine", value: "PostgreSQL 16" },
          { label: "Transparency", value: "Public Read Audits" },
          { label: "Backups", value: "Daily Automated" }
        ],
        connections: ["audit"]
      },
      {
        id: "audit",
        name: "Community Audit Board",
        subtitle: "Public Dashboard",
        category: "External",
        icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
        status: "Idle",
        description: "Live web view showing 100% transparent income & expenditure reports.",
        specs: [
          { label: "Access", value: "All Verified Residents" },
          { label: "Update Rate", value: "Realtime" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Visitor QR Generated",
        activeNodes: ["resident", "edge"],
        activeConnections: [["resident", "edge"]],
        logMessage: "RESIDENT_APP -> Generated Temporary Visitor QR Code (Expiry: 4 Hours)",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Realtime Edge Sync",
        activeNodes: ["edge", "guard"],
        activeConnections: [["edge", "guard"]],
        logMessage: "SUPABASE_WSS -> Pushed Visitor Token #QR-904 to Guardhouse Tablet (Latency: 8ms)",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Gate Camera Scan & Verification",
        activeNodes: ["guard", "db"],
        activeConnections: [["guard", "db"]],
        logMessage: "GUARD_SCANNER -> QR Code Scanned. Token Match Verified! Barrier Gate OPENED (0.4s)",
        status: "PROCESSING"
      },
      {
        step: 4,
        title: "4. Immutable Entry Audit Logged",
        activeNodes: ["db", "audit"],
        activeConnections: [["db", "audit"]],
        logMessage: "AUDIT_LEDGER -> Visitor Entry Logged to PostgreSQL RLS Table. Public Audit Updated.",
        status: "SUCCESS"
      }
    ]
  },
  oneecos: {
    title: "OneEcos Business Ecosystem Platform",
    subtitle: "Sales Order to Shipment to Payment Workflow Engine",
    badgeText: "Business Ecosystem",
    badgeColor: "cyan",
    description:
      "Unified Order-to-Cash workflow engine linking Sales Order, Procurement, Manufacturing, Shipment, Invoice, and Payment Settlement into an integrated ecosystem.",
    nodes: [
      {
        id: "sales",
        name: "1. Sales Order",
        subtitle: "Capture | Validate | Confirm",
        category: "Client",
        icon: <Globe className="w-5 h-5 text-cyan-400" />,
        status: "Active",
        description: "Omnichannel order capture, customer validation, and inventory allocation.",
        specs: [
          { label: "Orders", value: "1,246 Active (+12.5%)" },
          { label: "Validation", value: "Automated Credit Check" }
        ],
        connections: ["procurement", "mfg"]
      },
      {
        id: "procurement",
        name: "2. Procurement",
        subtitle: "Source | Order | Manage",
        category: "Gateway",
        icon: <Cpu className="w-5 h-5 text-blue-400" />,
        status: "Idle",
        description: "Vendor PO generation, raw material sourcing, and supplier lead-time management.",
        specs: [
          { label: "Suppliers", value: "Multi-Vendor Network" },
          { label: "Availability", value: "99.2% Raw Material" }
        ],
        connections: ["mfg"]
      },
      {
        id: "mfg",
        name: "3. Manufacturing",
        subtitle: "Plan | Produce | Monitor",
        category: "Logic",
        icon: <Building2 className="w-5 h-5 text-indigo-400" />,
        status: "Idle",
        description: "Work order scheduling, shop floor machine telemetry, and quality control batch audits.",
        specs: [
          { label: "Yield", value: "98.4% Quality Pass" },
          { label: "OEE", value: "Realtime Telemetry" }
        ],
        connections: ["shipment"]
      },
      {
        id: "shipment",
        name: "4. Shipment",
        subtitle: "Pack | Ship | Track",
        category: "Logic",
        icon: <Ship className="w-5 h-5 text-teal-400" />,
        status: "Idle",
        description: "Container load planning, carrier dispatch, bill of lading generation, and global vessel tracking.",
        specs: [
          { label: "Shipments", value: "982 Active (+8.7%)" },
          { label: "On-Time", value: "96.4% Delivery Rate" }
        ],
        connections: ["invoice"]
      },
      {
        id: "invoice",
        name: "5. Invoice",
        subtitle: "Bill | Reconcile | Send",
        category: "Logic",
        icon: <FileCheck className="w-5 h-5 text-emerald-400" />,
        status: "Idle",
        description: "Automated B2B tax invoicing, multi-currency matching, and customer portal dispatch.",
        specs: [
          { label: "Invoicing", value: "Automated Tax & VAT" },
          { label: "Reconciliation", value: "Realtime Matching" }
        ],
        connections: ["payment"]
      },
      {
        id: "payment",
        name: "6. Payment",
        subtitle: "Collect | Match | Settle",
        category: "External",
        icon: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
        status: "Idle",
        description: "Payment collection, Virtual Account & Escrow matching, ledger posting, and cash settlement.",
        specs: [
          { label: "Cash Flow", value: "$8.42M Collected (+15.3%)" },
          { label: "Settlement", value: "Automated Ledger Posting" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Sales Order Captured",
        activeNodes: ["sales", "procurement"],
        activeConnections: [["sales", "procurement"]],
        logMessage: "SALES_ENGINE -> Order #SO-1246 captured & credit validated. Material PO dispatched.",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Manufacturing & Packing",
        activeNodes: ["procurement", "mfg", "shipment"],
        activeConnections: [["procurement", "mfg"], ["mfg", "shipment"]],
        logMessage: "MFG_SCHEDULER -> Work order completed (Yield 98.4%). Container dispatched to carrier.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Invoicing & Payment Settlement",
        activeNodes: ["shipment", "invoice", "payment"],
        activeConnections: [["shipment", "invoice"], ["invoice", "payment"]],
        logMessage: "FINANCE_CORE -> Invoice #INV-982 reconciled. $8.42M Payment matched and posted to ledger.",
        status: "SUCCESS"
      }
    ]
  },
  corum: {
    title: "PT. Corum Sustainability Reporting Engine",
    subtitle: "Multi-Department ESG Data Pipeline & Client-Side JSON Sync",
    badgeText: "Industrial ESG Audit",
    badgeColor: "emerald",
    description:
      "Architecture unifying 7 manufacturing departments (Facilities, EHS, HR, Finance, Procurement, QC, IT) for 23 industrial ESG compliance parameters.",
    nodes: [
      {
        id: "pic_inputs",
        name: "7 Department PICs",
        subtitle: "Web Form Client",
        category: "Client",
        icon: <Building2 className="w-5 h-5 text-emerald-400" />,
        status: "Active",
        description: "Department heads logging monthly figures for energy, water, raw resin, and waste.",
        specs: [
          { label: "Departments", value: "7 Tracked Teams" },
          { label: "Parameters", value: "23 Compliance Fields" }
        ],
        connections: ["json_engine"]
      },
      {
        id: "json_engine",
        name: "JSON Sync Protocol",
        subtitle: "Offline Interchange",
        category: "Gateway",
        icon: <FileCheck className="w-5 h-5 text-gold-muted" />,
        status: "Idle",
        description: "Enables offline data logging and exports encrypted/formatted JSON packages for cross-department merging.",
        specs: [
          { label: "Mode", value: "Client-side Zero-Server" },
          { label: "Merge Engine", value: "Conflict-Free Timestamp Sync" }
        ],
        connections: ["db_store"]
      },
      {
        id: "db_store",
        name: "LocalStorage / Cache",
        subtitle: "SRP2026 Master Store",
        category: "Database",
        icon: <Database className="w-5 h-5 text-cyan-400" />,
        status: "Idle",
        description: "Stores historical baseline data and merged monthly compliance figures locally.",
        specs: [
          { label: "Storage", value: "LocalStorage / IndexedDB" },
          { label: "Prefill Engine", value: "SRP2026 Historical Seed" }
        ],
        connections: ["pdf_engine"]
      },
      {
        id: "pdf_engine",
        name: "PDF Audit Generator",
        subtitle: "CSS Print Engine",
        category: "External",
        icon: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
        status: "Idle",
        description: "Formats live Chart.js analytics and department entries into C-level PDF audit packages.",
        specs: [
          { label: "Print Engine", value: "@media print CSS" },
          { label: "Export", value: "Audit-Ready PDF" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Department PIC Entry Logged",
        activeNodes: ["pic_inputs", "json_engine"],
        activeConnections: [["pic_inputs", "json_engine"]],
        logMessage: "DEPT_EHS -> Logged 310,049 kWh Electricity & 273 m³ Net Water Usage (Jan 2026)",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Offline JSON Package Export",
        activeNodes: ["json_engine", "db_store"],
        activeConnections: [["json_engine", "db_store"]],
        logMessage: "JSON_INTERCHANGE -> Exported signed package 'corum-srp2026-ehs.json'",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Master Multi-Department Merge",
        activeNodes: ["db_store", "pdf_engine"],
        activeConnections: [["db_store", "pdf_engine"]],
        logMessage: "MASTER_MERGE -> Merged 7 department payloads into Master Store. All 23 sections VERIFIED.",
        status: "SUCCESS"
      }
    ]
  },
  "rumah-ringkas": {
    title: "Rumah Ringkas Household Wealth Engine",
    subtitle: "Natural Language Quick Entry -> Envelope Budgeting -> Multi-Account Net Worth Sync",
    badgeText: "Family FinTech",
    badgeColor: "gold",
    description:
      "FinTech PWA linking family household members into a single real-time Net Worth calculator with natural language text parsing.",
    nodes: [
      {
        id: "catat_cepat",
        name: "Catat Cepat Input",
        subtitle: "Text / Voice Client",
        category: "Client",
        icon: <Smartphone className="w-5 h-5 text-gold-muted" />,
        status: "Active",
        description: "Family members type informal text notes (e.g. 'Makan siang 25rb pakai GoPay').",
        specs: [
          { label: "Input", value: "Natural Language String" },
          { label: "User Roles", value: "Danu, Sari, Ibu Tuti" }
        ],
        connections: ["nlp_parser"]
      },
      {
        id: "nlp_parser",
        name: "Indonesian Regex Parser",
        subtitle: "Text Classifier",
        category: "Logic",
        icon: <Cpu className="w-5 h-5 text-teal-400" />,
        status: "Idle",
        description: "Extracts amounts ('25rb' -> 25000), maps categories, and resolves accounts.",
        specs: [
          { label: "Currency Match", value: "rb / jt / numerical" },
          { label: "Category Match", value: "Auto-keyword map" }
        ],
        connections: ["envelope_engine"]
      },
      {
        id: "envelope_engine",
        name: "Envelope Budget Allocator",
        subtitle: "Cap & Cap-Ratio State",
        category: "Gateway",
        icon: <Layers className="w-5 h-5 text-purple-400" />,
        status: "Idle",
        description: "Calculates weekly vs monthly budget limits and updates visual envelope percentages.",
        specs: [
          { label: "Method", value: "Envelope Budgeting" },
          { label: "Alerts", value: "Threshold Warning (>90%)" }
        ],
        connections: ["wealth_hub"]
      },
      {
        id: "wealth_hub",
        name: "Wealth & Net Worth Hub",
        subtitle: "Multi-Account Calculator",
        category: "Database",
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        status: "Idle",
        description: "Aggregates Cash, BCA, GoPay, Jago, Bareksa, and Utang/Piutang into live Net Worth.",
        specs: [
          { label: "Accounts", value: "Cash, Bank, E-Wallet, Utang" },
          { label: "Calculation", value: "Realtime Net Worth" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Natural Language Input Received",
        activeNodes: ["catat_cepat", "nlp_parser"],
        activeConnections: [["catat_cepat", "nlp_parser"]],
        logMessage: "INPUT_PARSER -> Received string: 'Makan siang 25rb pakai GoPay'",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Regex Classification Executed",
        activeNodes: ["nlp_parser", "envelope_engine"],
        activeConnections: [["nlp_parser", "envelope_engine"]],
        logMessage: "NLP_EXTRACT -> Parsed: Amount: Rp 25.000 | Category: Makan & Jajan | Account: GoPay",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Envelope & Net Worth Synced",
        activeNodes: ["envelope_engine", "wealth_hub"],
        activeConnections: [["envelope_engine", "wealth_hub"]],
        logMessage: "WEALTH_HUB -> Deducted Rp 25.000 from GoPay. Envelope 'Makan' updated (76%). Net Worth Synced.",
        status: "SUCCESS"
      }
    ]
  },
  "masjid-al-ikhlas": {
    title: "Masjid Al Ikhlas Community Information Architecture",
    subtitle: "Public Information and Community Access Architecture",
    badgeText: "Community Hub",
    badgeColor: "emerald",
    description:
      "Structured public information flow organizing jamaah access to prayer schedules, kajian programs, articles, donation guides, and published financial reports.",
    nodes: [
      {
        id: "jamaah",
        name: "Jamaah & Community",
        subtitle: "Mobile & Web Access",
        category: "Client",
        icon: <Globe className="w-5 h-5 text-emerald-400" />,
        status: "Active",
        description: "Community members accessing mosque announcements, schedules, and reports.",
        specs: [
          { label: "Access", value: "Responsive Web" },
          { label: "Target", value: "Mobile First" },
          { label: "Optimization", value: "Fast Load Speed" }
        ],
        connections: ["website"]
      },
      {
        id: "website",
        name: "Masjid Digital Hub",
        subtitle: "Central Information Portal",
        category: "Gateway",
        icon: <Building2 className="w-5 h-5 text-teal-400" />,
        status: "Idle",
        description: "Centralized responsive website serving structured community content.",
        specs: [
          { label: "Platform", value: "Netlify Static Engine" },
          { label: "Design", value: "SVG & Dark Emerald Theme" },
          { label: "CDN", value: "Global Edge Network" }
        ],
        connections: ["schedules", "programs", "donations", "reports"]
      },
      {
        id: "schedules",
        name: "Prayer Schedules",
        subtitle: "Batam Time Engine",
        category: "Logic",
        icon: <Zap className="w-5 h-5 text-gold-muted" />,
        status: "Idle",
        description: "Calculates and displays daily prayer timings and live countdowns.",
        specs: [
          { label: "Calculation", value: "Batam Coordinates" },
          { label: "Display", value: "Live Countdown Timer" }
        ],
        connections: []
      },
      {
        id: "programs",
        name: "Kajian & Programs",
        subtitle: "Event & Article Hub",
        category: "Logic",
        icon: <Layers className="w-5 h-5 text-blue-400" />,
        status: "Idle",
        description: "Schedules for weekly kajian, Friday sermons, and community events.",
        specs: [
          { label: "View", value: "Grid / List Calendar" },
          { label: "Updates", value: "Regular Publication" }
        ],
        connections: []
      },
      {
        id: "donations",
        name: "Donation Guide",
        subtitle: "Bank & QR Information",
        category: "Logic",
        icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
        status: "Idle",
        description: "Official bank account numbers and QRIS graphics for community contributions.",
        specs: [
          { label: "Channels", value: "Bank Transfer & QRIS" },
          { label: "Instructions", value: "Published Direct Guide" }
        ],
        connections: []
      },
      {
        id: "reports",
        name: "Financial Reports",
        subtitle: "Public Transparency Showcase",
        category: "External",
        icon: <FileCheck className="w-5 h-5 text-purple-400" />,
        status: "Idle",
        description: "Published summaries of weekly cash inflows, outflows, and balance reports.",
        specs: [
          { label: "Audits", value: "Weekly Expense Summaries" },
          { label: "Visibility", value: "100% Public Access" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "Jamaah Requests Information",
        activeNodes: ["jamaah", "website"],
        activeConnections: [["jamaah", "website"]],
        logMessage: "User accesses Masjid Al Ikhlas website on mobile device.",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "Prayer Times & Program Load",
        activeNodes: ["website", "schedules", "programs"],
        activeConnections: [["website", "schedules"], ["website", "programs"]],
        logMessage: "Website renders Batam prayer countdown and active kajian program listings.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "Donation Guide & Financial Report Access",
        activeNodes: ["website", "donations", "reports"],
        activeConnections: [["website", "donations"], ["website", "reports"]],
        logMessage: "Jamaah accesses published donation instructions and transparent financial reports.",
        status: "SUCCESS"
      }
    ]
  }
};


export default function ArchitectureVisualizer({
  defaultPreset = "ooi"
}: {
  defaultPreset?: ProjectPreset;
}) {
  const [activePresetKey, setActivePresetKey] = useState<ProjectPreset>(defaultPreset);
  const currentPreset = presets[activePresetKey];

  const [selectedNodeId, setSelectedNodeId] = useState<string>(currentPreset.nodes[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  // Update selected node when preset changes
  useEffect(() => {
    setSelectedNodeId(currentPreset.nodes[0].id);
    setCurrentStepIndex(-1);
    setIsSimulating(false);
    setConsoleLogs([`[SYSTEM_READY] Initialized blueprint for ${currentPreset.title}`]);
  }, [activePresetKey, currentPreset]);

  // Simulation timer loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      if (currentStepIndex < currentPreset.simulationSteps.length - 1) {
        timer = setTimeout(() => {
          const nextIndex = currentStepIndex + 1;
          setCurrentStepIndex(nextIndex);
          const stepObj = currentPreset.simulationSteps[nextIndex];
          setConsoleLogs((prev) => [
            ...prev,
            `[${new Date().toLocaleTimeString()}] ${stepObj.logMessage}`
          ]);
        }, 1600);
      } else {
        setIsSimulating(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isSimulating, currentStepIndex, currentPreset]);

  const handleStartSimulation = () => {
    setCurrentStepIndex(0);
    setIsSimulating(true);
    const firstStep = currentPreset.simulationSteps[0];
    setConsoleLogs([
      `[SIMULATION_STARTED] Triggers activated for ${currentPreset.title}`,
      `[${new Date().toLocaleTimeString()}] ${firstStep.logMessage}`
    ]);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setCurrentStepIndex(-1);
    setConsoleLogs([`[SYSTEM_RESET] Blueprint reset to stand-by state.`]);
  };

  const activeStep =
    currentStepIndex >= 0 ? currentPreset.simulationSteps[currentStepIndex] : null;

  const selectedNode = currentPreset.nodes.find((n) => n.id === selectedNodeId) || currentPreset.nodes[0];

  return (
    <div className="w-full rounded-3xl glass-card border border-graphite/60 bg-gradient-to-b from-[#080E14] via-deep-black to-[#05090C] overflow-hidden shadow-2xl p-6 md:p-8">
      {/* Header & Preset Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-graphite/40">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-gold-muted">
            <Activity className="w-4 h-4 text-gold-muted animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE VISUALIZER</span>
          </div>
          <h3 className="font-sans font-black text-2xl md:text-3xl text-cream tracking-tight">
            {currentPreset.title}
          </h3>
          <p className="text-cream-dark/70 text-xs md:text-sm font-sans mt-1 max-w-2xl">
            {currentPreset.description}
          </p>
        </div>

        {/* Preset Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-black/60 p-1.5 rounded-2xl border border-graphite/60 self-start lg:self-center">
          {(["ooi", "cgv10", "oneecos", "corum", "rumah-ringkas"] as ProjectPreset[]).map((key) => {
            const presetInfo = presets[key];
            const isActive = activePresetKey === key;
            return (
              <button
                key={key}
                onClick={() => setActivePresetKey(key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-gold-muted text-deep-black shadow-lg shadow-gold-muted/20"
                    : "text-cream-dark/70 hover:text-cream hover:bg-graphite/40"
                }`}
              >
                {key === "ooi" && <ShieldCheck className="w-3.5 h-3.5" />}
                {key === "cgv10" && <Layers className="w-3.5 h-3.5" />}
                {key === "oneecos" && <Cpu className="w-3.5 h-3.5" />}
                {key === "corum" && <FileCheck className="w-3.5 h-3.5" />}
                {key === "rumah-ringkas" && <Smartphone className="w-3.5 h-3.5" />}
                <span>{presetInfo.badgeText}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Canvas + Control Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
        
        {/* Left 2 Cols: Node Flow Canvas */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Top Control Bar */}
          <div className="flex items-center justify-between bg-black/40 px-4 py-3 rounded-2xl border border-graphite/40 font-mono text-xs">
            <div className="flex items-center gap-2 text-cream-dark/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>
                Status:{" "}
                <strong className="text-cream font-bold">
                  {isSimulating ? "SIMULATION RUNNING" : activeStep ? "STEP COMPLETE" : "STANDBY (Click node to inspect)"}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {!isSimulating ? (
                <button
                  onClick={handleStartSimulation}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 font-bold transition-all flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Simulation</span>
                </button>
              ) : (
                <span className="px-3 py-1.5 rounded-xl bg-gold-muted/20 text-gold-muted border border-gold-muted/40 font-bold flex items-center gap-1.5 animate-pulse">
                  <Activity className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing Step {currentStepIndex + 1}...</span>
                </span>
              )}

              <button
                onClick={handleResetSimulation}
                className="p-1.5 rounded-xl bg-graphite/40 text-cream-dark hover:text-cream hover:bg-graphite/80 border border-graphite/60 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Topology Grid */}
          <div className="relative min-h-[300px] p-6 rounded-2xl bg-black/50 border border-graphite/60 overflow-hidden dot-grid flex flex-col justify-center">
            
            {/* Steps Progress Indicator */}
            {activeStep && (
              <div className="mb-6 bg-gold-muted/10 border border-gold-muted/30 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
                <span className="text-gold-muted font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{activeStep.title}</span>
                </span>
                <span className="text-cream-dark/60">
                  Step {activeStep.step} of {currentPreset.simulationSteps.length}
                </span>
              </div>
            )}

            {/* Nodes Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
              {currentPreset.nodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const isHighlightedInSim = activeStep?.activeNodes.includes(node.id);

                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 relative border ${
                      isSelected
                        ? "bg-gold-muted/10 border-gold-muted shadow-lg shadow-gold-muted/10 ring-1 ring-gold-muted/40"
                        : isHighlightedInSim
                        ? "bg-emerald-950/40 border-emerald-400/80 ring-2 ring-emerald-400/40 animate-pulse"
                        : "bg-black/60 border-graphite/60 hover:border-cream-dark/40 hover:bg-black/80"
                    }`}
                  >
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl glass-card border border-graphite/60 flex items-center justify-center">
                        {node.icon}
                      </div>
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          isHighlightedInSim
                            ? "bg-emerald-400 text-deep-black"
                            : isSelected
                            ? "bg-gold-muted/20 text-gold-muted border border-gold-muted/30"
                            : "bg-graphite/40 text-cream-dark/60"
                        }`}
                      >
                        {node.category}
                      </span>
                    </div>

                    <h4 className="font-sans font-bold text-sm text-cream group-hover:text-gold-muted transition-colors">
                      {node.name}
                    </h4>
                    <p className="font-mono text-[10px] text-cream-dark/60 mt-0.5">
                      {node.subtitle}
                    </p>

                    {/* Active pulse dot */}
                    {isHighlightedInSim && (
                      <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Instruction tooltip */}
            <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-cream-dark/50 pt-3 border-t border-graphite/30">
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-gold-muted" />
                Click any node box to inspect deep technical specifications.
              </span>
              <span className="hidden sm:inline">Data Flow: Left → Right Architecture</span>
            </div>
          </div>

          {/* Console / Log Terminal Output */}
          <div className="rounded-2xl bg-black/90 border border-graphite/80 p-4 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-graphite/60 pb-2 text-[11px] text-cream-dark/60">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>STATE_LOG_STREAM // REAL-TIME EXECUTION</span>
              </span>
              <span>{consoleLogs.length} Events Logged</span>
            </div>
            <div className="max-h-28 overflow-y-auto space-y-1.5 font-mono text-[11px] text-cream-dark/80 pt-1">
              {consoleLogs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-gold-muted select-none">&gt;</span>
                  <span className={log.includes("SUCCESS") ? "text-emerald-400 font-bold" : log.includes("SIMULATION") ? "text-cyan-300 font-bold" : ""}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Col: Selected Node Specifications & Inspector */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-black/60 border border-gold-muted/30 glass-card space-y-6 h-full flex flex-col justify-between"
            >
              <div>
                {/* Node Title & Icon Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-graphite/40">
                  <div className="w-12 h-12 rounded-2xl bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center text-gold-muted">
                    {selectedNode.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gold-muted font-bold uppercase tracking-wider">
                      Node Spec Inspector
                    </span>
                    <h4 className="font-sans font-black text-lg text-cream">
                      {selectedNode.name}
                    </h4>
                    <p className="font-mono text-xs text-cream-dark/60">
                      {selectedNode.subtitle}
                    </p>
                  </div>
                </div>

                {/* Node Overview */}
                <div className="py-4 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cream-dark/40 font-semibold">
                    Functional Purpose
                  </span>
                  <p className="text-cream-dark/80 text-xs leading-relaxed font-sans">
                    {selectedNode.description}
                  </p>
                </div>

                {/* Spec Badges */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cream-dark/40 font-semibold">
                    Technical Specifications
                  </span>
                  <div className="space-y-2">
                    {selectedNode.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-black/50 border border-graphite/40 font-mono text-xs"
                      >
                        <span className="text-cream-dark/60">{spec.label}</span>
                        <span className="text-cream font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connections Footer */}
              <div className="pt-4 border-t border-graphite/40 font-mono text-xs">
                <span className="text-cream-dark/40 text-[10px] uppercase font-semibold block mb-2">
                  Downstream Data Pipelines
                </span>
                {selectedNode.connections.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.connections.map((targetId) => {
                      const targetNode = currentPreset.nodes.find((n) => n.id === targetId);
                      return (
                        <button
                          key={targetId}
                          onClick={() => setSelectedNodeId(targetId)}
                          className="px-2.5 py-1 rounded-lg bg-graphite/40 hover:bg-gold-muted/20 hover:text-gold-muted border border-graphite/60 text-[11px] text-cream-dark transition-all flex items-center gap-1.5"
                        >
                          <span>{targetNode?.name || targetId}</span>
                          <ArrowRight className="w-3 h-3 text-gold-muted" />
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <span className="text-cream-dark/50 text-[11px] italic">
                    Terminal Node (Final Endpoint Settlement)
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
