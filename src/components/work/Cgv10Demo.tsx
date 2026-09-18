"use client";

import React, { useState } from "react";
import {
  Globe,
  UserCheck,
  ShieldCheck,
  ShoppingBag,
  FileText,
  DollarSign,
  Send,
  CheckCircle2,
  Clock,
  Camera,
  Building,
  Info,
  ChevronRight,
  PlusCircle,
  Lock
} from "lucide-react";

type RoleType = "public" | "resident" | "admin";

interface PublicListing {
  id: string;
  name: string;
  category: string;
  tagline: string;
}

interface ServiceRequest {
  id: string;
  trackingCode: string;
  category: "Environmental" | "Resident Data" | "Document" | "Security" | "Aspiration";
  title: string;
  description: string;
  hasPhoto: boolean;
  status: "Pending" | "In Progress" | "Resolved";
  timestamp: string;
}

interface ContributionItem {
  id: string;
  referenceId: string;
  period: string;
  amount: string;
  status: "Unverified" | "Verified";
  submittedAt: string;
}

export default function Cgv10Demo() {
  const [activeRole, setActiveRole] = useState<RoleType>("resident");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);

  // Form states for resident service request
  const [reqCategory, setReqCategory] = useState<ServiceRequest["category"]>("Environmental");
  const [reqTitle, setReqTitle] = useState("");
  const [reqDesc, setReqDesc] = useState("");
  const [reqPhotoAttached, setReqPhotoAttached] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Demo datasets (generic, demonstration data only)
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([
    {
      id: "sr-1",
      trackingCode: "REQ-2026-081",
      category: "Environmental",
      title: "Penerangan Jalan Blok C Perlu Perbaikan",
      description: "Lampu penerangan jalan di persimpangan Blok C padam sejak kemarin malam.",
      hasPhoto: true,
      status: "In Progress",
      timestamp: "10:15 WIB"
    },
    {
      id: "sr-2",
      trackingCode: "REQ-2026-082",
      category: "Document",
      title: "Surat Pengantar Pembuatan KTP Baru",
      description: "Permohonan surat pengantar RT untuk pengurusan KTP anggota keluarga.",
      hasPhoto: false,
      status: "Pending",
      timestamp: "09:30 WIB"
    }
  ]);

  const [contributions, setContributions] = useState<ContributionItem[]>([
    {
      id: "cb-1",
      referenceId: "TRX-CGV-8941",
      period: "September 2026",
      amount: "Rp 150.000",
      status: "Unverified",
      submittedAt: "08:45 WIB"
    },
    {
      id: "cb-2",
      referenceId: "TRX-CGV-8930",
      period: "September 2026",
      amount: "Rp 150.000",
      status: "Verified",
      submittedAt: "Kemarin"
    }
  ]);

  const publicListings: PublicListing[] = [
    {
      id: "l-1",
      name: "Dapur Berkah CGV",
      category: "Kuliner & Katering",
      tagline: "Aneka masakan rumahan harian dan snack box warga"
    },
    {
      id: "l-2",
      name: "Mandiri AC & Elektronik",
      category: "Jasa Servis",
      tagline: "Cuci AC, perbaikan pipa, dan servis perangkat rumah"
    },
    {
      id: "l-3",
      name: "Toko Sembako Blok B",
      category: "Kebutuhan Pokok",
      tagline: "Beras, minyak goreng, dan kebutuhan dapur siap antar"
    }
  ];

  // Role journey step definitions matching the brief
  const roleJourneys = {
    public: {
      name: "Public Visitor",
      badge: "Open Community Layer",
      icon: <Globe className="w-4 h-4 text-teal-400" />,
      steps: [
        { label: "1. Open Portal", action: "Browse Community Home & Leadership Info" },
        { label: "2. Read Information", action: "View RT Notices & Public Guidelines" },
        { label: "3. View News", action: "Explore Official Neighborhood Announcements" },
        { label: "4. Explore PALUGADA", action: "Discover Local Resident UMKM Directory" },
        { label: "5. Register or Sign In", action: "Resident Authentication Entry Point" }
      ]
    },
    resident: {
      name: "Registered Resident",
      badge: "Authenticated Resident Layer",
      icon: <UserCheck className="w-4 h-4 text-emerald-400" />,
      steps: [
        { label: "1. Sign In", action: "Authenticate with Resident Credentials" },
        { label: "2. Personal Portal", action: "Access Personalized Resident Home & Dashboard" },
        { label: "3. Submit Request", action: "Submit Environmental or Admin Request with Photo" },
        { label: "4. Access Finance", action: "Review Community Kas Balance & Contribution Status" },
        { label: "5. PALUGADA Hub", action: "Explore Resident Directory or Register Business" }
      ]
    },
    admin: {
      name: "Community Administrator",
      badge: "Authorized Operations Layer",
      icon: <ShieldCheck className="w-4 h-4 text-gold-muted" />,
      steps: [
        { label: "1. Authorized Sign In", action: "Role-Based Authentication with Admin Clearance" },
        { label: "2. Operations Cockpit", action: "Overview of Requests, Finances & Listings" },
        { label: "3. Review Requests", action: "Process Resident Service Reports & Follow Up" },
        { label: "4. Verify Contributions", action: "Audit & Confirm Resident Dues Submissions" },
        { label: "5. Moderate & Publish", action: "Approve PALUGADA Listings & Publish News" }
      ]
    }
  };

  const currentJourney = roleJourneys[activeRole];

  const handleRoleChange = (role: RoleType) => {
    setActiveRole(role);
    setActiveStepIndex(0);
    setSubmitSuccess(false);
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqTitle.trim()) return;

    const newReq: ServiceRequest = {
      id: `sr-${Date.now()}`,
      trackingCode: `REQ-2026-${Math.floor(100 + Math.random() * 900)}`,
      category: reqCategory,
      title: reqTitle,
      description: reqDesc || "Deskripsi laporan warga percontohan.",
      hasPhoto: reqPhotoAttached,
      status: "Pending",
      timestamp: "Baru saja"
    };

    setServiceRequests((prev) => [newReq, ...prev]);
    setReqTitle("");
    setReqDesc("");
    setReqPhotoAttached(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 4000);
  };

  const handleVerifyContribution = (id: string) => {
    setContributions((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Verified" } : c))
    );
  };

  const handleUpdateReqStatus = (id: string, newStatus: ServiceRequest["status"]) => {
    setServiceRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl mt-6 font-sans">
      {/* Privacy Notice Banner required by brief */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-5 py-3 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-semibold text-slate-200">
            Privacy &amp; Security Assurance
          </span>
        </div>
        <p className="text-[11px] text-slate-400 leading-tight">
          Screens shown in this case study use redacted or demonstration data. Resident identities, contact information, addresses, billing details, transaction records, and administrative information are intentionally concealed.
        </p>
      </div>

      {/* Role Navigation Header */}
      <div className="bg-slate-900/60 border-b border-slate-800 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-teal-400 uppercase font-bold block mb-1">
              Interactive Prototype
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              Resident Access Journey
            </h3>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700/60 self-start sm:self-auto">
            <span>3-Tier Access System</span>
          </div>
        </div>

        {/* 3 Role Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleRoleChange("public")}
            className={`p-3 rounded-xl text-left transition-all border ${
              activeRole === "public"
                ? "bg-teal-950/40 border-teal-500/60 text-white shadow-lg shadow-teal-950/30"
                : "bg-slate-900/30 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-xs flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                1. Public Visitor
              </span>
              {activeRole === "public" && (
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              )}
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-1">
              Open portal, news, info &amp; public marketplace
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange("resident")}
            className={`p-3 rounded-xl text-left transition-all border ${
              activeRole === "resident"
                ? "bg-emerald-950/40 border-emerald-500/60 text-white shadow-lg shadow-emerald-950/30"
                : "bg-slate-900/30 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-xs flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                2. Registered Resident
              </span>
              {activeRole === "resident" && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-1">
              Personal dashboard, requests, Kas RT &amp; PALUGADA
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange("admin")}
            className={`p-3 rounded-xl text-left transition-all border ${
              activeRole === "admin"
                ? "bg-amber-950/40 border-amber-500/60 text-white shadow-lg shadow-amber-950/30"
                : "bg-slate-900/30 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                3. Community Administrator
              </span>
              {activeRole === "admin" && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-1">
              Review requests, verify dues, moderate &amp; publish
            </p>
          </button>
        </div>
      </div>

      {/* Step Pipeline Bar */}
      <div className="bg-slate-900/30 border-b border-slate-800 px-4 py-3 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {currentJourney.steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? "bg-slate-800 text-white border border-slate-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 border border-transparent"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? "bg-teal-500 text-slate-950"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {idx + 1}
                </span>
                <span>{step.label}</span>
                {idx < currentJourney.steps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Demo Body */}
      <div className="p-4 sm:p-6 min-h-[380px]">
        {/* ======================= ROLE 1: PUBLIC VISITOR ======================= */}
        {activeRole === "public" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block">
                  Public Experience // portalwargacgv.id
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Informasi Lingkungan &amp; Etalase Publik RT 010 / RW 021
                </h4>
              </div>
              <span className="text-xs font-mono text-teal-300 bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-full self-start">
                Open Access
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Community Announcement Box */}
              <div className="md:col-span-2 space-y-3">
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-teal-400" />
                      Warta &amp; Pengumuman RT 010
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">12 September 2026</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-100">
                    Kerja Bakti Lingkungan &amp; Peremajaan Saluran Air Blok A-D
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dihimbau kepada seluruh warga RT 010/RW 021 untuk berpartisipasi dalam agenda kebersihan lingkungan serentak hari Minggu mendatang mulai pukul 07.00 WIB.
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                    <span>📍 Lokasi: Balai Warga RT 010</span>
                    <span>•</span>
                    <span>👤 Pengurus RT 010</span>
                  </div>
                </div>

                {/* PALUGADA Public Listings Preview */}
                <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                      PALUGADA — Direktori Usaha Warga
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">3 Direktori Contoh</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {publicListings.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-lg space-y-1 hover:border-amber-500/40 transition-colors"
                      >
                        <span className="text-[9px] font-mono text-amber-400 bg-amber-950/50 px-1.5 py-0.5 rounded block w-fit">
                          {item.category}
                        </span>
                        <div className="font-bold text-xs text-white pt-1">{item.name}</div>
                        <p className="text-[10px] text-slate-400 leading-snug">{item.tagline}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Public Actions & Resident Entry */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Akses Khusus Warga
                  </span>
                  <div className="p-3 bg-teal-950/30 border border-teal-500/20 rounded-lg text-xs text-slate-300 space-y-1.5">
                    <div className="font-bold text-teal-300">Warga Terdaftar?</div>
                    <p className="text-[11px] text-slate-400">
                      Masuk untuk membuat permohonan layanan, pantau transparansi kas, dan kelola usaha di PALUGADA.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleRoleChange("resident")}
                    className="w-full py-2.5 px-3 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/20"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    Simulasikan Masuk Warga
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRoleChange("admin")}
                    className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    Simulasikan Pengurus RT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= ROLE 2: REGISTERED RESIDENT ======================= */}
        {activeRole === "resident" && (
          <div className="space-y-6">
            {/* Resident Personal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                  Authenticated Resident Portal // Warga Terverifikasi
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Dashboard Personal Warga CGV</span>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded font-normal">
                    PWA Session Active
                  </span>
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">ID Warga:</span>
                <span className="text-emerald-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                  CGV-W-DEMO
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar (Aggregated & Privacy Safe) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[10px] uppercase">Kas RT Terbuka (Agregat)</span>
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">
                  Rp 14.850.000
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">
                  Audit Kas Realtime 100% Terbuka
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[10px] uppercase">Status Iuran Lingkungan</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-teal-300 font-mono">
                  Lunas — Sep 2026
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Iuran Kebersihan &amp; Keamanan
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[10px] uppercase">Layanan Aktif</span>
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-amber-300 font-mono">
                  {serviceRequests.filter((r) => r.status !== "Resolved").length} Laporan Berjalan
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Pantau Progres Tindak Lanjut
                </div>
              </div>
            </div>

            {/* Service Request Creation Form & Live Tracker */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Form Box */}
              <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <PlusCircle className="w-4 h-4 text-emerald-400" />
                    Form Permohonan Layanan Warga (Layanan Warga)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    Role: Warga
                  </span>
                </div>

                <form onSubmit={handleSubmitRequest} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                      Kategori Permohonan / Laporan
                    </label>
                    <select
                      value={reqCategory}
                      onChange={(e) => setReqCategory(e.target.value as ServiceRequest["category"])}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-white outline-none"
                    >
                      <option value="Environmental">Laporan Lingkungan &amp; Fasilitas Umum</option>
                      <option value="Document">Permohonan Surat Administrasi RT</option>
                      <option value="Resident Data">Pembaruan Data Keluarga / Warga</option>
                      <option value="Security">Keamanan &amp; Ketertiban Lingkungan</option>
                      <option value="Aspiration">Saran &amp; Aspirasi Warga</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                      Judul Laporan / Permohonan
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Lampu Penerangan Jalan Padam"
                      value={reqTitle}
                      onChange={(e) => setReqTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                      Rincian Keterangan
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Berikan deskripsi singkat untuk pengurus RT..."
                      value={reqDesc}
                      onChange={(e) => setReqDesc(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-white outline-none resize-none"
                    />
                  </div>

                  {/* Photo Evidence Attachment Simulator */}
                  <div className="flex items-center justify-between p-2.5 bg-slate-950/70 border border-slate-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-300 font-sans">
                        Lampiran Foto Bukti Pendukung
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setReqPhotoAttached(!reqPhotoAttached)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${
                        reqPhotoAttached
                          ? "bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-400"
                      }`}
                    >
                      {reqPhotoAttached ? "✓ Foto Terlampir" : "+ Tambah Foto"}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Kirim Permohonan ke Pengurus RT
                  </button>

                  {submitSuccess && (
                    <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-xs text-emerald-300 flex items-center gap-2 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Permohonan berhasil dikirim! Kode pelacakan diterbitkan.
                    </div>
                  )}
                </form>
              </div>

              {/* Realtime Request Tracker Feed */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-teal-400" />
                    Status Laporan Anda
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 animate-pulse">
                    Live Status
                  </span>
                </div>

                <div className="space-y-2.5">
                  {serviceRequests.map((req) => (
                    <div
                      key={req.id}
                      className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-2 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-teal-400 font-bold">{req.trackingCode}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full font-semibold ${
                            req.status === "Resolved"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-500/30"
                              : req.status === "In Progress"
                              ? "bg-amber-950 text-amber-400 border border-amber-500/30"
                              : "bg-slate-800 text-slate-300 border border-slate-700"
                          }`}
                        >
                          {req.status}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white">{req.title}</div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{req.description}</p>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1.5 border-t border-slate-800/80">
                        <span>{req.hasPhoto ? "📷 Ada Foto Bukti" : "📄 Tanpa Foto"}</span>
                        <span>{req.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= ROLE 3: COMMUNITY ADMINISTRATOR ======================= */}
        {activeRole === "admin" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                  Authorized Admin Operations // Pengurus RT 010
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Pusat Kendali Operasional Pengurus RT</span>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded font-normal">
                    Admin Clearance: High
                  </span>
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">Peran:</span>
                <span className="text-amber-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                  Admin RT 010/RW 021
                </span>
              </div>
            </div>

            {/* Admin Overview Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Permohonan Menunggu</span>
                <span className="text-base font-bold text-amber-400 font-mono">
                  {serviceRequests.filter((r) => r.status === "Pending").length} Berkas
                </span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Sedang Ditindaklanjuti</span>
                <span className="text-base font-bold text-teal-300 font-mono">
                  {serviceRequests.filter((r) => r.status === "In Progress").length} Berkas
                </span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Verifikasi Iuran</span>
                <span className="text-base font-bold text-emerald-400 font-mono">
                  {contributions.filter((c) => c.status === "Unverified").length} Menunggu
                </span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Listing PALUGADA</span>
                <span className="text-base font-bold text-white font-mono">3 Aktif</span>
              </div>
            </div>

            {/* Admin Workflow Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Service Request Review & Resolution */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-400" />
                    Review &amp; Tindak Lanjut Layanan Warga
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Moderasi</span>
                </div>

                <div className="space-y-2.5">
                  {serviceRequests.map((req) => (
                    <div
                      key={req.id}
                      className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg space-y-2"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-amber-400 font-bold">{req.trackingCode}</span>
                        <span className="text-slate-400">{req.category}</span>
                      </div>
                      <div className="text-xs font-bold text-white">{req.title}</div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                        <span className="text-[10px] font-mono text-slate-400">
                          Status: <strong className="text-slate-200">{req.status}</strong>
                        </span>
                        <div className="flex items-center gap-1.5">
                          {req.status === "Pending" && (
                            <button
                              type="button"
                              onClick={() => handleUpdateReqStatus(req.id, "In Progress")}
                              className="px-2 py-1 bg-amber-950/70 hover:bg-amber-900 text-amber-300 border border-amber-500/40 rounded text-[10px] font-mono transition-colors"
                            >
                              Proses Laporan
                            </button>
                          )}
                          {req.status === "In Progress" && (
                            <button
                              type="button"
                              onClick={() => handleUpdateReqStatus(req.id, "Resolved")}
                              className="px-2 py-1 bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 rounded text-[10px] font-mono transition-colors"
                            >
                              Selesaikan
                            </button>
                          )}
                          {req.status === "Resolved" && (
                            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Selesai
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contribution Verification & Ledger Audit */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    Verifikasi Konfirmasi Iuran Warga
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Keuangan RT</span>
                </div>

                <div className="space-y-2.5">
                  {contributions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg space-y-2"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-300 font-bold">{item.referenceId}</span>
                        <span className="text-slate-400">{item.period}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">{item.amount}</div>
                          <span className="text-[10px] font-mono text-slate-500">
                            Waktu: {item.submittedAt}
                          </span>
                        </div>
                        <div>
                          {item.status === "Unverified" ? (
                            <button
                              type="button"
                              onClick={() => handleVerifyContribution(item.id)}
                              className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded text-[10px] font-mono transition-all shadow"
                            >
                              Verifikasi Iuran
                            </button>
                          ) : (
                            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Terverifikasi
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-slate-950 border border-slate-800/80 rounded-lg text-[10px] font-mono text-slate-400 flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Verifikasi iuran otomatis memperbarui rekapan saldo Kas RT pada laporan terbuka warga.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info / Selected Step Summary */}
      <div className="bg-slate-900/80 border-t border-slate-800 px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-teal-400">Tahap Aktif:</span>
          <span className="text-white font-medium">
            {currentJourney.steps[activeStepIndex]?.label} — {currentJourney.steps[activeStepIndex]?.action}
          </span>
        </div>
        <div className="text-[10px] text-slate-500">
          Portal Warga CGV • RT 010 / RW 021
        </div>
      </div>
    </div>
  );
}
