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

export type ProjectPreset = "ooi" | "cgv10" | "oneecos" | "corum" | "sakku" | "rumah-ringkas" | "masjid-al-ikhlas";

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
    title: "OOI Product & Fulfillment Architecture",
    subtitle: "Curated Brands, Unified Catalog, Batam Consolidation Hub & Global Delivery",
    badgeText: "Product & Operational Model",
    badgeColor: "amber",
    description:
      "Product & Operational Architecture: Model illustrating how verified regional Indonesian brands are curated into a unified catalog, routed through retail or B2B inquiry journeys, consolidated at Batam FTZ, and fulfilled for global buyers.",
    nodes: [
      {
        id: "brands",
        name: "Verified Indonesian Brands",
        subtitle: "Curated Producers",
        category: "External",
        icon: <Building2 className="w-5 h-5 text-amber-400" />,
        status: "Verified",
        description: "Curated regional food producers with origin verification and applicable compliance (BPOM, Halal, HACCP).",
        specs: [
          { label: "Categories", value: "Snacks, Coffee, Spices, Cashews" },
          { label: "Origin", value: "Java, Bali, Sumatra, Sulawesi" },
          { label: "Standards", value: "Export Ready" }
        ],
        connections: ["catalog"]
      },
      {
        id: "catalog",
        name: "OOI Curated Catalog",
        subtitle: "Unified Discovery Hub",
        category: "Gateway",
        icon: <Layers className="w-5 h-5 text-teal-400" />,
        status: "Active",
        description: "Unified discovery experience featuring product cards, origin details, certifications, and gift collections.",
        specs: [
          { label: "Platform", value: "Next.js & Responsive UI" },
          { label: "Discovery", value: "Origin & Attribute Filtering" },
          { label: "Collections", value: "Gift Kits & Single-Origin" }
        ],
        connections: ["order_inquiry"]
      },
      {
        id: "order_inquiry",
        name: "Retail Order or B2B Inquiry",
        subtitle: "Conversion Pathways",
        category: "Logic",
        icon: <Zap className="w-5 h-5 text-purple-400" />,
        status: "Idle",
        description: "Separate conversion journeys based on buyer type, order volume, sample requirements, and commercial terms.",
        specs: [
          { label: "Retail", value: "Direct Cart & Checkout" },
          { label: "B2B", value: "Wholesale & Sample Inquiry" },
          { label: "Routing", value: "Buyer-Type Classification" }
        ],
        connections: ["batam_hub"]
      },
      {
        id: "batam_hub",
        name: "Batam Consolidation Hub",
        subtitle: "Strategic FTZ Fulfillment",
        category: "Database",
        icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
        status: "Idle",
        description: "Proposed coordination point for multi-supplier preparation, export packing, and single-shipment consolidation.",
        specs: [
          { label: "Location", value: "Batam Free Trade Zone" },
          { label: "Savings", value: "Up to 40% Shipping Reduction" },
          { label: "Model", value: "Multi-Supplier Single Box" }
        ],
        connections: ["buyer_partner"]
      },
      {
        id: "buyer_partner",
        name: "International Buyer / Partner",
        subtitle: "Global Fulfillment",
        category: "Client",
        icon: <Globe className="w-5 h-5 text-cyan-400" />,
        status: "Active",
        description: "Consumers, specialty retailers, food importers, distributors, and global sourcing partners.",
        specs: [
          { label: "Markets", value: "USA, UK, Europe, Australia, SG" },
          { label: "Lead Time", value: "7–14 Business Days" },
          { label: "Fulfillment", value: "Consolidated Door-to-Door" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Brand Onboarding & Curation",
        activeNodes: ["brands", "catalog"],
        activeConnections: [["brands", "catalog"]],
        logMessage: "BRAND_INGEST -> Verified YAVA, Arva, Otten Coffee & Bamboe. Compliance specs and origin mapped to catalog.",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Catalog Discovery & Cart Routing",
        activeNodes: ["catalog", "order_inquiry"],
        activeConnections: [["catalog", "order_inquiry"]],
        logMessage: "BUYER_JOURNEY -> Discovery across Snacks & Coffee. Selection routed to B2B Sample & Wholesale Channel.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Batam FTZ Multi-Supplier Consolidation",
        activeNodes: ["order_inquiry", "batam_hub"],
        activeConnections: [["order_inquiry", "batam_hub"]],
        logMessage: "CONSOLIDATION_HUB -> Merged 4 regional suppliers into 1 consolidated export package at Batam FTZ.",
        status: "PROCESSING"
      },
      {
        step: 4,
        title: "4. Consolidated International Fulfillment",
        activeNodes: ["batam_hub", "buyer_partner"],
        activeConnections: [["batam_hub", "buyer_partner"]],
        logMessage: "DISPATCH_COMPLETE -> Consolidated shipment dispatched to International Buyer. Estimated 40% logistics savings.",
        status: "SUCCESS"
      }
    ]
  },
  cgv10: {
    title: "Portal Warga CGV — 3-Tier Role-Based Architecture",
    subtitle: "Public Community Portal, Authenticated Resident Services & Admin Operations",
    badgeText: "Role-Based Civic Architecture",
    badgeColor: "emerald",
    description:
      "Architecture delivering distinct access layers for public visitors, registered residents, and authorized administrators with Row Level Security (RLS) data protection.",
    nodes: [
      {
        id: "public_portal",
        name: "1. Public Visitor Portal",
        subtitle: "Open Community Layer",
        category: "Client",
        icon: <Globe className="w-5 h-5 text-teal-400" />,
        status: "Active",
        description: "Open portal for neighborhood news, leadership info, community guidelines, and PALUGADA directory.",
        specs: [
          { label: "Access", value: "Open Public" },
          { label: "Features", value: "News & PALUGADA" },
          { label: "PWA", value: "Responsive Web" }
        ],
        connections: ["auth_engine"]
      },
      {
        id: "resident_portal",
        name: "2. Authenticated Resident Portal",
        subtitle: "Personalized Resident Layer",
        category: "Client",
        icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
        status: "Active",
        description: "Personal dashboard for service requests (with photo upload), Kas RT transparency, and PALUGADA registration.",
        specs: [
          { label: "Access", value: "Verified Residents" },
          { label: "Services", value: "Reports & Documents" },
          { label: "Finance", value: "Transparent Ledger" }
        ],
        connections: ["auth_engine"]
      },
      {
        id: "admin_cockpit",
        name: "3. Authorized Admin Operations",
        subtitle: "Operations & Moderation Layer",
        category: "Client",
        icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
        status: "Active",
        description: "Operational dashboard for resident management, request review, contribution verification, and content moderation.",
        specs: [
          { label: "Access", value: "Role-Based Clearance" },
          { label: "Workflows", value: "Review & Verification" },
          { label: "Moderation", value: "PALUGADA & News" }
        ],
        connections: ["auth_engine"]
      },
      {
        id: "auth_engine",
        name: "Role-Based Access Engine",
        subtitle: "Supabase Auth & RLS Router",
        category: "Gateway",
        icon: <Zap className="w-5 h-5 text-gold-muted" />,
        status: "Idle",
        description: "Enforces strict Row Level Security (RLS) policies separating public, resident, and admin access boundaries.",
        specs: [
          { label: "Security", value: "Row Level Security (RLS)" },
          { label: "Auth", value: "JWT Session Tokens" },
          { label: "Latency", value: "< 15ms" }
        ],
        connections: ["community_db"]
      },
      {
        id: "community_db",
        name: "PostgreSQL Community Store",
        subtitle: "Relational Ledger & Media Store",
        category: "Database",
        icon: <Database className="w-5 h-5 text-cyan-400" />,
        status: "Idle",
        description: "Stores service requests, contribution verification records, moderated marketplace listings, and encrypted attachments.",
        specs: [
          { label: "Engine", value: "PostgreSQL 16" },
          { label: "Storage", value: "Photo Attachments" },
          { label: "Audits", value: "Aggregated Kas RT" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Public Portal Discovery",
        activeNodes: ["public_portal", "auth_engine"],
        activeConnections: [["public_portal", "auth_engine"]],
        logMessage: "PUBLIC_VISITOR -> Browsing RT 010 announcements & public PALUGADA local marketplace directory.",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Resident Authentication & Request",
        activeNodes: ["resident_portal", "auth_engine"],
        activeConnections: [["resident_portal", "auth_engine"]],
        logMessage: "RESIDENT_PORTAL -> Authenticated resident session active. Submitted environmental report with photo evidence.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. RLS Data Isolation & Routing",
        activeNodes: ["auth_engine", "community_db"],
        activeConnections: [["auth_engine", "community_db"]],
        logMessage: "RLS_SECURITY_ENGINE -> Validated JWT role claim. Isolated private identity; routed ticket to PostgreSQL store.",
        status: "PROCESSING"
      },
      {
        step: 4,
        title: "4. Admin Review & Transparency Sync",
        activeNodes: ["admin_cockpit", "community_db"],
        activeConnections: [["admin_cockpit", "community_db"]],
        logMessage: "ADMIN_OPERATIONS -> Administrator reviewed service ticket, verified contribution, and synced Kas RT aggregate.",
        status: "SUCCESS"
      }
    ]
  },
  oneecos: {
    title: "OneEcos Trade Operations Architecture",
    subtitle: "People Execute. OneEcos Connects. Business Scales.",
    badgeText: "B2B Trade Workflow Architecture",
    badgeColor: "cyan",
    description:
      "Architecture model illustrating the connected operational chain: Commercial Records, Operational Execution, Trade & Logistics, Financial Control, Decision Support, and Platform Foundation.",
    nodes: [
      {
        id: "commercial",
        name: "1. Commercial Records",
        subtitle: "Buyers | Products | Quotes | Orders",
        category: "Client",
        icon: <Layers className="w-5 h-5 text-cyan-400" />,
        status: "Active",
        description: "Maintains linked commercial account profiles, SKU & carton specifications, RFQ inbox, and confirmed sales orders.",
        specs: [
          { label: "Flow", value: "Buyer → Quote → Order" },
          { label: "Catalog", value: "SKU, MOQ & CBM specs" },
          { label: "Records", value: "Sample Workspace Data" }
        ],
        connections: ["execution", "decision_support"]
      },
      {
        id: "execution",
        name: "2. Operational Execution",
        subtitle: "Procurement | Work Orders | Packing",
        category: "Logic",
        icon: <Building2 className="w-5 h-5 text-blue-400" />,
        status: "Active",
        description: "Coordinates supplier procurement requests, work-order status, production readiness gates, and export packaging.",
        specs: [
          { label: "Coordination", value: "Work Order Pipeline" },
          { label: "Readiness", value: "Material & QC Gates" },
          { label: "State", value: "Operational Prototype" }
        ],
        connections: ["logistics", "decision_support"]
      },
      {
        id: "logistics",
        name: "3. Trade & Logistics",
        subtitle: "Shipments | Routing | Trade Docs",
        category: "Logic",
        icon: <Ship className="w-5 h-5 text-teal-400" />,
        status: "Idle",
        description: "Tracks dispatch milestones, container loading references, ETD/ETA routing, and export document preview sets.",
        specs: [
          { label: "Dispatch", value: "Route & Container Ref" },
          { label: "Documents", value: "PEB, BL, Packing List" },
          { label: "Tracking", value: "Milestone Log" }
        ],
        connections: ["finance", "decision_support"]
      },
      {
        id: "finance",
        name: "4. Financial Control",
        subtitle: "Invoices | Milestones | Collection",
        category: "External",
        icon: <FileCheck className="w-5 h-5 text-emerald-400" />,
        status: "Idle",
        description: "Monitors billing milestones, invoice status, overdue collection follow-ups, and monthly operational records.",
        specs: [
          { label: "Billing", value: "Milestone Invoices" },
          { label: "Collection", value: "Overdue Follow-up" },
          { label: "Telemetry", value: "Sample Workspace Data" }
        ],
        connections: ["platform"]
      },
      {
        id: "decision_support",
        name: "5. Decision Support",
        subtitle: "Daily Brief | Alerts | Next Actions",
        category: "Gateway",
        icon: <Zap className="w-5 h-5 text-amber-400" />,
        status: "Active",
        description: "Surfaces operational exception alerts, guided next actions, attention triggers, and KPI reference views.",
        specs: [
          { label: "Brief", value: "Daily Context & Triggers" },
          { label: "Logic", value: "Rule-Based Alerts" },
          { label: "Modes", value: "Operator & Executive" }
        ],
        connections: ["platform"]
      },
      {
        id: "platform",
        name: "6. Platform Foundation",
        subtitle: "Data Schema | Auth | Roadmap",
        category: "Database",
        icon: <Database className="w-5 h-5 text-indigo-400" />,
        status: "Idle",
        description: "Client-side state management, backup/export utilities, and planned PostgreSQL/Supabase multi-user architecture.",
        specs: [
          { label: "Current", value: "Reactive Prototype State" },
          { label: "Roadmap", value: "Postgres + Supabase Auth" },
          { label: "Security", value: "RBAC & Audit History" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Commercial Ingestion & Quotation",
        activeNodes: ["commercial", "decision_support"],
        activeConnections: [["commercial", "decision_support"]],
        logMessage: "COMMERCIAL_CHAIN -> Buyer Al-Noor Trading linked to Quote QT-2026-001 and Sales Order SO-2026-001.",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Operational Execution & Readiness",
        activeNodes: ["commercial", "execution", "decision_support"],
        activeConnections: [["commercial", "execution"], ["execution", "decision_support"]],
        logMessage: "EXECUTION_STAGE -> Work Order WO-2026-001 coordinated; material readiness verified; QC gate passed.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Dispatch, Documentation & Financial Control",
        activeNodes: ["execution", "logistics", "finance", "platform"],
        activeConnections: [["execution", "logistics"], ["logistics", "finance"], ["finance", "platform"]],
        logMessage: "FINANCE_LOGISTICS -> Shipment EXP-2026-001 logged with docs preview; Invoice INV-2026-001 linked for collection tracking.",
        status: "SUCCESS"
      }
    ]
  },
  corum: {
    title: "PT. Corum Sustainability Reporting Workflow",
    subtitle: "Reporting Package → Sections & Owners → Department Input → Completion Review → JSON Export → Manual Consolidation → Print/PDF Report",
    badgeText: "Browser Reporting Prototype",
    badgeColor: "emerald",
    description:
      "Prototype workflow modeling how 23 sustainability sections across multiple departments are structured, recorded locally, reviewed for completion, exported via JSON, and prepared for browser print/PDF export.",
    nodes: [
      {
        id: "pkg_structure",
        name: "1. Package & Section Structure",
        subtitle: "23 Tracked Sections",
        category: "Client",
        icon: <Layers className="w-5 h-5 text-emerald-400" />,
        status: "Active",
        description: "Defines the 23 reporting sections and assigned departmental owners (Facilities, EHS, HR, Procurement, QA/QC, Finance, Production).",
        specs: [
          { label: "Tracked Sections", value: "23 Structured Fields" },
          { label: "Departments", value: "7 Operational Teams" },
          { label: "Status Modes", value: "Not Started | Progress | Complete" }
        ],
        connections: ["dept_input"]
      },
      {
        id: "dept_input",
        name: "2. Department Data Entry",
        subtitle: "Browser-Local Input",
        category: "Gateway",
        icon: <Building2 className="w-5 h-5 text-teal-400" />,
        status: "Active",
        description: "Department contributors enter qualitative answers and sample monthly figures locally in their browser session.",
        specs: [
          { label: "Input Engine", value: "Guided Form Fields" },
          { label: "Persistence", value: "Browser localStorage" },
          { label: "Infrastructure", value: "Zero Server Dependencies" }
        ],
        connections: ["review_trends"]
      },
      {
        id: "review_trends",
        name: "3. Completion Review & Trends",
        subtitle: "Status & Visualizer",
        category: "Logic",
        icon: <Activity className="w-5 h-5 text-gold-muted" />,
        status: "Idle",
        description: "Provides multi-view progress monitoring (Overview, Already Reported, Data Trends, Fill In Data) with sample trend charts.",
        specs: [
          { label: "Views", value: "Overview, Reported, Trends, Fill In" },
          { label: "Analytics", value: "Client-Side Chart.js" },
          { label: "Review", value: "Color-Coded Status Matrix" }
        ],
        connections: ["json_consolidate", "pdf_export"]
      },
      {
        id: "json_consolidate",
        name: "4. JSON Export & Consolidation",
        subtitle: "File-Based Interchange",
        category: "Database",
        icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
        status: "Idle",
        description: "Allows department users to export their section data to a local JSON file or import and merge files manually without a cloud database.",
        specs: [
          { label: "Data Format", value: "Structured JSON File" },
          { label: "Consolidation", value: "Manual File Import & Merge" },
          { label: "Sync Model", value: "Standalone Client-Side" }
        ],
        connections: ["pdf_export"]
      },
      {
        id: "pdf_export",
        name: "5. Print & PDF Document Output",
        subtitle: "CSS Print Formatter",
        category: "External",
        icon: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
        status: "Idle",
        description: "Formats the completed reporting package into a clean print layout for browser-native PDF export.",
        specs: [
          { label: "Print Engine", value: "Browser @media print CSS" },
          { label: "Output", value: "Print / Export to PDF" },
          { label: "Scope", value: "Executive Summary & Sections" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Reporting Package & Department Structure",
        activeNodes: ["pkg_structure", "dept_input"],
        activeConnections: [["pkg_structure", "dept_input"]],
        logMessage: "PACKAGE_LOAD -> 23 sections structured across 7 department owners (Sample Data).",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Department Entry & Completion Review",
        activeNodes: ["dept_input", "review_trends"],
        activeConnections: [["dept_input", "review_trends"]],
        logMessage: "DATA_ENTRY -> Sample department entries recorded. Section completion tracked locally via browser localStorage.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. JSON Export, Manual Consolidation & PDF Report",
        activeNodes: ["review_trends", "json_consolidate", "pdf_export"],
        activeConnections: [["review_trends", "json_consolidate"], ["json_consolidate", "pdf_export"]],
        logMessage: "WORKFLOW_COMPLETE -> JSON package exported for manual consolidation; browser print-to-PDF ready.",
        status: "SUCCESS"
      }
    ]
  },
  sakku: {
    title: "Sakku 2.0 Privacy-First Wealth Architecture",
    subtitle: "Natural Language Quick Entry -> Envelope Budgeting -> Multi-Account Net Worth Sync",
    badgeText: "Local-First FinTech OS",
    badgeColor: "teal",
    description:
      "Zero-Knowledge FinTech PWA linking personal & family multi-account balances into a real-time Net Worth calculator with natural language text parsing.",
    nodes: [
      {
        id: "catat_cepat",
        name: "Catat Cepat Input",
        subtitle: "Conversational Client",
        category: "Client",
        icon: <Smartphone className="w-5 h-5 text-teal-400" />,
        status: "Active",
        description: "Users type informal conversational notes (e.g. 'Makan siang 35rb pakai GoPay').",
        specs: [
          { label: "Input", value: "Natural Language String" },
          { label: "Storage", value: "Zero-Knowledge Local-First" }
        ],
        connections: ["nlp_parser"]
      },
      {
        id: "nlp_parser",
        name: "Indonesian Regex Parser",
        subtitle: "Text & Amount Classifier",
        category: "Logic",
        icon: <Cpu className="w-5 h-5 text-teal-300" />,
        status: "Idle",
        description: "Extracts amounts ('35rb' -> 35000), maps categories, and resolves payment channels.",
        specs: [
          { label: "Currency Match", value: "rb / jt / numerical" },
          { label: "Category Match", value: "Auto-keyword map" }
        ],
        connections: ["envelope_engine"]
      },
      {
        id: "envelope_engine",
        name: "Envelope Budget Allocator",
        subtitle: "Cap & Spending Ratios",
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
        description: "Aggregates Cash, BCA, GoPay, Jago, Bareksa, and Liabilities into live Net Worth.",
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
        logMessage: "INPUT_PARSER -> Received string: 'Makan siang 35rb pakai GoPay'",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Regex Classification Executed",
        activeNodes: ["nlp_parser", "envelope_engine"],
        activeConnections: [["nlp_parser", "envelope_engine"]],
        logMessage: "NLP_EXTRACT -> Parsed: Amount: Rp 35.000 | Category: Makan & Jajan | Account: GoPay",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Envelope & Net Worth Synced",
        activeNodes: ["envelope_engine", "wealth_hub"],
        activeConnections: [["envelope_engine", "wealth_hub"]],
        logMessage: "WEALTH_HUB -> Deducted Rp 35.000 from GoPay. Envelope updated. Net Worth Synced locally.",
        status: "SUCCESS"
      }
    ]
  },
  "rumah-ringkas": {
    title: "Sakku 2.0 Privacy-First Wealth Architecture",
    subtitle: "Natural Language Quick Entry -> Envelope Budgeting -> Multi-Account Net Worth Sync",
    badgeText: "Local-First FinTech OS",
    badgeColor: "teal",
    description:
      "Zero-Knowledge FinTech PWA linking personal & family multi-account balances into a real-time Net Worth calculator with natural language text parsing.",
    nodes: [
      {
        id: "catat_cepat",
        name: "Catat Cepat Input",
        subtitle: "Conversational Client",
        category: "Client",
        icon: <Smartphone className="w-5 h-5 text-teal-400" />,
        status: "Active",
        description: "Users type informal conversational notes (e.g. 'Makan siang 35rb pakai GoPay').",
        specs: [
          { label: "Input", value: "Natural Language String" },
          { label: "Storage", value: "Zero-Knowledge Local-First" }
        ],
        connections: ["nlp_parser"]
      },
      {
        id: "nlp_parser",
        name: "Indonesian Regex Parser",
        subtitle: "Text & Amount Classifier",
        category: "Logic",
        icon: <Cpu className="w-5 h-5 text-teal-300" />,
        status: "Idle",
        description: "Extracts amounts ('35rb' -> 35000), maps categories, and resolves payment channels.",
        specs: [
          { label: "Currency Match", value: "rb / jt / numerical" },
          { label: "Category Match", value: "Auto-keyword map" }
        ],
        connections: ["envelope_engine"]
      },
      {
        id: "envelope_engine",
        name: "Envelope Budget Allocator",
        subtitle: "Cap & Spending Ratios",
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
        description: "Aggregates Cash, BCA, GoPay, Jago, Bareksa, and Liabilities into live Net Worth.",
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
        logMessage: "INPUT_PARSER -> Received string: 'Makan siang 35rb pakai GoPay'",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Regex Classification Executed",
        activeNodes: ["nlp_parser", "envelope_engine"],
        activeConnections: [["nlp_parser", "envelope_engine"]],
        logMessage: "NLP_EXTRACT -> Parsed: Amount: Rp 35.000 | Category: Makan & Jajan | Account: GoPay",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. Envelope & Net Worth Synced",
        activeNodes: ["envelope_engine", "wealth_hub"],
        activeConnections: [["envelope_engine", "wealth_hub"]],
        logMessage: "WEALTH_HUB -> Deducted Rp 35.000 from GoPay. Envelope updated. Net Worth Synced locally.",
        status: "SUCCESS"
      }
    ]
  },
  "masjid-al-ikhlas": {
    title: "Masjid Al Ikhlas Digital Ecosystem Architecture",
    subtitle: "Community Information, TPQ Education & DKM Stewardship Flow",
    badgeText: "Civic & Faith-Based Ecosystem",
    badgeColor: "emerald",
    description:
      "Architecture connecting jamaah, TPQ families, and community supporters with real-time worship schedules, Islamic education, warta media, and transparent financial stewardship managed by DKM.",
    nodes: [
      {
        id: "jamaah",
        name: "Jamaah & Community",
        subtitle: "Public & Family Access",
        category: "Client",
        icon: <Globe className="w-5 h-5 text-emerald-400" />,
        status: "Active",
        description: "Community members, santri parents, and donors accessing mosque schedules, education, and services.",
        specs: [
          { label: "Access", value: "Responsive Web & PWA" },
          { label: "Target", value: "Mobile-First Offline Ready" },
          { label: "Performance", value: "Instant Static Edge" }
        ],
        connections: ["hub"]
      },
      {
        id: "dkm_admin",
        name: "DKM & Administrators",
        subtitle: "Protected Stewardship",
        category: "Client",
        icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
        status: "Active",
        description: "Mosque leadership managing cash ledgers, period reconciliation, and publishing official warta bulletins.",
        specs: [
          { label: "Access", value: "Role-Based Protected" },
          { label: "Workflows", value: "Ledger & Reconciliation" },
          { label: "Publishing", value: "Warta & Agenda Sync" }
        ],
        connections: ["admin_engine"]
      },
      {
        id: "hub",
        name: "Masjid Digital Hub",
        subtitle: "Central Ecosystem Gateway",
        category: "Gateway",
        icon: <Building2 className="w-5 h-5 text-teal-400" />,
        status: "Idle",
        description: "Unified web portal routing visitors to prayer times, TPQ education, media recordings, and donation channels.",
        specs: [
          { label: "Platform", value: "Next.js & Vercel Edge" },
          { label: "Theme", value: "Islamic Emerald & Warm Gold" },
          { label: "PWA", value: "Installable Home Screen" }
        ],
        connections: ["schedules", "tpq_portal", "media_hub", "transparency"]
      },
      {
        id: "admin_engine",
        name: "Admin & Finance Engine",
        subtitle: "Ledger & Content Management",
        category: "Logic",
        icon: <Cpu className="w-5 h-5 text-amber-400" />,
        status: "Idle",
        description: "Internal operations engine processing monthly cash ledgers, donation categories, and verifying public balance summaries.",
        specs: [
          { label: "Finance", value: "Cash-Flow & Period Balances" },
          { label: "Verification", value: "Reconciliation Ledger" },
          { label: "Privacy", value: "100% Donor Data Redacted" }
        ],
        connections: ["hub"]
      },
      {
        id: "schedules",
        name: "Prayer Engine",
        subtitle: "Batam Schedule & Countdown",
        category: "Logic",
        icon: <Zap className="w-5 h-5 text-emerald-400" />,
        status: "Idle",
        description: "Dynamic schedule calculator for Batam prayer times and next adhan countdown.",
        specs: [
          { label: "Coordinates", value: "Batam (1.1301° N, 104.0529° E)" },
          { label: "Countdown", value: "Real-Time Interval" }
        ],
        connections: []
      },
      {
        id: "tpq_portal",
        name: "TPQ Al-Mardhotillah",
        subtitle: "Quran Education Portal",
        category: "Logic",
        icon: <Layers className="w-5 h-5 text-teal-300" />,
        status: "Idle",
        description: "Structured learning curriculum, tahsin schedules, and student family announcement hub.",
        specs: [
          { label: "Programs", value: "Tahsin, Tajwid, Tahfidz Juz 30" },
          { label: "Audience", value: "Santri & Wali Santri" }
        ],
        connections: []
      },
      {
        id: "media_hub",
        name: "Media & Knowledge Hub",
        subtitle: "Khutbah & Kajian Archive",
        category: "External",
        icon: <Globe className="w-5 h-5 text-blue-400" />,
        status: "Idle",
        description: "Digital bulletin library, khutbah archives, and recorded kajian references.",
        specs: [
          { label: "Content", value: "Khutbah Bulletins & Kajian" },
          { label: "Format", value: "Audio, PDF & Summaries" }
        ],
        connections: []
      },
      {
        id: "transparency",
        name: "Transparency & Infaq",
        subtitle: "Published Kas & QRIS Guidance",
        category: "External",
        icon: <FileCheck className="w-5 h-5 text-amber-300" />,
        status: "Idle",
        description: "Published summaries of mosque cash balance, weekly expenses, and official donation guidance.",
        specs: [
          { label: "Visibility", value: "Open Community Kas Summary" },
          { label: "Channels", value: "QRIS & Official Bank Transfer" }
        ],
        connections: []
      }
    ],
    simulationSteps: [
      {
        step: 1,
        title: "1. Jamaah Connects to Digital Hub",
        activeNodes: ["jamaah", "hub"],
        activeConnections: [["jamaah", "hub"]],
        logMessage: "JAMAAH_ACCESS -> Mobile visitor opened Masjid Al Ikhlas Digital Hub via installable PWA.",
        status: "INITIALIZING"
      },
      {
        step: 2,
        title: "2. Prayer Times & TPQ Education Loaded",
        activeNodes: ["hub", "schedules", "tpq_portal"],
        activeConnections: [["hub", "schedules"], ["hub", "tpq_portal"]],
        logMessage: "WORSHIP_EDUCATION -> Dynamic Batam prayer countdown loaded. TPQ Al-Mardhotillah curriculum active.",
        status: "PROCESSING"
      },
      {
        step: 3,
        title: "3. DKM Financial Reconciliation",
        activeNodes: ["dkm_admin", "admin_engine", "hub"],
        activeConnections: [["dkm_admin", "admin_engine"], ["admin_engine", "hub"]],
        logMessage: "DKM_STEWARDSHIP -> Admin verified monthly ledger. Reconciled cash-flow and published verified aggregate.",
        status: "PROCESSING"
      },
      {
        step: 4,
        title: "4. Verified Transparency & Media Broadcast",
        activeNodes: ["hub", "transparency", "media_hub"],
        activeConnections: [["hub", "transparency"], ["hub", "media_hub"]],
        logMessage: "COMMUNITY_SYNC -> Published transparent Kas report and updated Friday khutbah bulletin for jamaah.",
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
