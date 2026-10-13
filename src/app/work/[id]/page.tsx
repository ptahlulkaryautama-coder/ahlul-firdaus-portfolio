import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, getAllProjectIds } from "../../../data/projects";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Cgv10Demo from "../../../components/work/Cgv10Demo";
import OoiDemo from "../../../components/work/OoiDemo";
import OneEcosDemo from "../../../components/work/OneEcosDemo";
import AlIkhlasDemo from "../../../components/work/AlIkhlasDemo";
import CorumDemo from "../../../components/work/CorumDemo";
import SakkuDemo from "../../../components/work/SakkuDemo";
import TaminoDemo from "../../../components/work/TaminoDemo";
import ArchitectureDiagram from "../../../components/work/ArchitectureDiagram";
import ProjectGallery from "../../../components/work/ProjectGallery";
import AccessArchitectureFlow from "../../../components/work/AccessArchitectureFlow";
import MasjidArchitectureFlow from "../../../components/work/MasjidArchitectureFlow";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  Clock,
  User,
  Activity,
  Code2,
  ShieldCheck,
  Terminal,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Ahlul Firdaus",
    };
  }

  if (id === "tamino") {
    const ogImage = "/Image/project/tamino/tamino-portfolio-thumbnail.png";
    return {
      title: "Tamino — F&B POS & Operations System | Product Case Study | Ahlul Firdaus",
      description:
        "Tamino is an interactive F&B point-of-sale and operations MVP connecting orders, payments, inventory, transactions, staff roles, and business reporting in one structured workspace.",
      alternates: {
        canonical: "https://www.ahlulfirdaus.com/work/tamino",
      },
      openGraph: {
        title: "Tamino — F&B POS & Operations System | Product Case Study | Ahlul Firdaus",
        description:
          "Tamino is an interactive F&B point-of-sale and operations MVP connecting orders, payments, inventory, transactions, staff roles, and business reporting in one structured workspace.",
        url: "https://www.ahlulfirdaus.com/work/tamino",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: "Tamino — F&B Point of Sale & Operations System",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Tamino — F&B POS & Operations System | Product Case Study | Ahlul Firdaus",
        description:
          "Tamino is an interactive F&B point-of-sale and operations MVP connecting orders, payments, inventory, transactions, staff roles, and business reporting in one structured workspace.",
        images: [ogImage],
      },
    };
  }

  const ogUrl = `/api/og?title=${encodeURIComponent(project.name)}&subtitle=${encodeURIComponent(project.oneLiner)}&category=${encodeURIComponent(project.category)}&tag=CASE%20STUDY`;

  return {
    title: `${project.name} — Case Study | Ahlul Firdaus`,
    description: project.oneLiner,
    alternates: {
      canonical: `https://www.ahlulfirdaus.com/work/${id}`,
    },
    openGraph: {
      title: `${project.name} — Case Study | Ahlul Firdaus`,
      description: project.oneLiner,
      url: `https://www.ahlulfirdaus.com/work/${id}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Case Study | Ahlul Firdaus`,
      description: project.oneLiner,
      images: [ogUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": project.id === "corum" ? "CreativeWork" : "SoftwareApplication",
        "@id": `https://www.ahlulfirdaus.com/work/${id}#main`,
        name: project.name,
        description: project.oneLiner,
        ...(project.id !== "corum" && {
          applicationCategory: project.category,
          operatingSystem: "Web-based",
        }),
        author: {
          "@type": "Person",
          name: "Ahlul Firdaus",
          url: "https://www.ahlulfirdaus.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ahlulfirdaus.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Selected Work",
            item: "https://www.ahlulfirdaus.com/#work",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `https://www.ahlulfirdaus.com/work/${id}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors font-mono group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Selected Work
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-b border-slate-800 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-teal-400 mb-3">
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 uppercase tracking-wider">
              {project.id === "tamino" ? "F&B OPERATIONS & POINT OF SALE • Interactive MVP" : project.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200">
              <span className={`w-2 h-2 rounded-full ${project.statusBadge === "Live Product" ? "bg-emerald-400 animate-pulse" : "bg-emerald-400"}`} />
              <span className="font-semibold">{project.statusBadge || project.status}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {project.name}
          </h1>
          {project.id === "tamino" ? (
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                Tamino is a desktop-first point-of-sale and operational management system designed for cafés, restaurants, bakeries, and other small F&amp;B businesses. It brings order processing, payments, menu management, inventory monitoring, transaction records, staff roles, and business reporting into one clear operational workspace.
              </p>
              <div className="pt-2">
                <a
                  href="https://custom-fnb-pos-system-desktop.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm font-sans transition-all shadow-lg shadow-emerald-500/20"
                >
                  <span>View Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
              {project.oneLiner}
            </p>
          )}

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80">
            <div>
              <span className="text-xs text-slate-500 font-mono block mb-1">
                Role &amp; Responsibility
              </span>
              <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-400" />
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-mono block mb-1">
                Duration
              </span>
              <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                {project.duration}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-mono block mb-1">
                Domain
              </span>
              <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                {project.id === "tamino" ? "Food & Beverage Operations" : project.category.split(" ")[0]}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-mono block mb-1">
                Project Classification
              </span>
              <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                {project.id === "tamino" ? "Interactive MVP — Phase 1 Demo" : (project.statusBadge || project.status)}
              </span>
            </div>
          </div>
        </header>

        {/* Screenshot Gallery / System Preview with Click-to-Enlarge Lightbox */}
        <ProjectGallery
          projectId={project.id}
          projectName={project.name}
          images={project.images || []}
        />

        {/* 3-Tier Access Architecture Explanatory Section for CGV10 */}
        {project.id === "cgv10" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-1">
                  System Hierarchy
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>3-Tier Access Architecture</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700/60 px-3 py-1 rounded-full">
                Strict Role Separation
              </span>
            </div>

            {/* Interactive Flow Chart Diagram (Architecture Baru) */}
            <div className="mb-8">
              <AccessArchitectureFlow />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Layer 1: Public */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-teal-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-teal-400 font-bold uppercase bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-500/30">
                    Tier 01 // Public
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">Public Portal</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Open community reference point accessible to all visitors and residents without authentication.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Community Homepage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>News &amp; Neighborhood Notices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Leadership &amp; Committee Contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Public Transparency Information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Public PALUGADA UMKM Listings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Resident Sign In &amp; Registration</span>
                  </li>
                </ul>
              </div>

              {/* Layer 2: Authenticated Resident */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Tier 02 // Resident
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">Authenticated Resident Portal</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Personalized resident workspace unlocked upon secure authentication for services, finance, and trade.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Personalized Resident Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Environmental Issue Reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Administrative Document Requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Photo Evidence Attachments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Community Finance &amp; Kas RT View</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>PALUGADA Listing Registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Installable PWA Experience</span>
                  </li>
                </ul>
              </div>

              {/* Layer 3: Authorized Admin */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                    Tier 03 // Admin
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">Authorized Admin Operations</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated administrator operations center for neighborhood management, verification, and moderation.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Operational Overview Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Resident Data Administration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Service Request Review &amp; Follow-up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Contribution &amp; Dues Verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>PALUGADA Marketplace Moderation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>News &amp; Content Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Role-Based Operational Security</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Community Information & Stewardship Architecture for Masjid Al Ikhlas */}
        {project.id === "masjid-al-ikhlas" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A55A] font-bold block mb-1">
                  System Hierarchy &amp; Stewardship
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Community Information &amp; Stewardship Architecture</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-[#0E3828] border border-[#C9A55A]/40 px-3 py-1 rounded-full font-bold">
                Faith &amp; Civic Tech Model
              </span>
            </div>

            {/* Interactive Flow Chart Diagram (Masjid Architecture) */}
            <div className="mb-8">
              <MasjidArchitectureFlow />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Layer 1: Public & Jamaah */}
              <div className="bg-[#0C1810]/60 border border-[#0E3828] rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Tier 01 // Jamaah &amp; Public
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">Worship &amp; Education Gateway</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Open community access point for daily prayer timetables, TPQ education curriculum, and warta publications.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Dynamic Batam Prayer Times &amp; Countdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>TPQ Al-Mardhotillah Student Portal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Kajian Schedule &amp; Agenda Calendar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Media Hub &amp; Khutbah Archive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Installable Mobile PWA Experience</span>
                  </li>
                </ul>
              </div>

              {/* Layer 2: Financial Transparency */}
              <div className="bg-[#0C1810]/60 border border-[#0E3828] rounded-2xl p-6 space-y-4 hover:border-[#C9A55A]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C9A55A] font-bold uppercase bg-amber-950/60 px-2.5 py-1 rounded-full border border-[#C9A55A]/30">
                    Tier 02 // Transparency
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">Public Kas &amp; Infaq Guidance</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Open financial summaries and official donation channels building trusted community stewardship.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A]" />
                    <span>Published Monthly Cash Summaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A]" />
                    <span>Social &amp; Friday Program Balances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A]" />
                    <span>Verified Official QRIS Guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A]" />
                    <span>Bank Transfer Verification Workflow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A]" />
                    <span>100% Donor Privacy Protection</span>
                  </li>
                </ul>
              </div>

              {/* Layer 3: DKM Stewardship */}
              <div className="bg-[#0C1810]/60 border border-[#0E3828] rounded-2xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                    Tier 03 // Protected
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">DKM Admin &amp; Reconciliation</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Protected administrative workspace for monthly financial bookkeeping, reconciliation, and bulletin management.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Cash Flow &amp; Expense Composition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Ledger Reconciliation Operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Official Warta &amp; News Publishing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>TPQ Santri &amp; Program Administration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Demonstration State Compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* System Architecture Blueprint */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              System Architecture Diagram
            </h2>
          </div>
          <ArchitectureDiagram projectId={project.id} />
        </section>

        {/* Dynamic Interactive Demo Preview section */}
        {project.id === "cgv10" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-muted" />
                Resident Access Journey (Public, Resident &amp; Administrator)
              </h2>
              <span className="text-xs font-mono text-emerald-400 glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Prototype
              </span>
            </div>
            <Cgv10Demo />
          </section>
        )}

        {project.id === "ooi" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-muted" />
                Interactive Consolidated Shipping Estimator &amp; Sourcing Flow
              </h2>
              <span className="text-xs font-mono text-gold-muted glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
              </span>
            </div>
            <OoiDemo />
          </section>
        )}

        {project.id === "oneecos" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Interactive Connected Trade Operations Prototype
              </h2>
              <span className="text-xs font-mono text-cyan-300 glass-badge px-2.5 py-1 rounded-full font-bold">
                Operational Prototype
              </span>
            </div>
            <OneEcosDemo />
          </section>
        )}

        {project.id === "masjid-al-ikhlas" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#C9A55A]" />
                Digital Mosque Journey Explorer (Jamaah, TPQ, Supporter &amp; DKM)
              </h2>
              <span className="text-xs font-mono text-emerald-400 glass-badge px-2.5 py-1 rounded-full font-bold">
                Interactive Journey Explorer
              </span>
            </div>
            <AlIkhlasDemo />
          </section>
        )}

        {project.id === "corum" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                Interactive Sustainability Reporting Template (4 Views &amp; JSON Interchange)
              </h2>
              <span className="text-xs font-mono text-emerald-300 glass-badge px-2.5 py-1 rounded-full font-bold">
                Interactive Prototype Simulator
              </span>
            </div>
            <CorumDemo />
          </section>
        )}

        {project.id === "sakku" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-teal-400" />
                Interactive Personal Finance Demo (Rule-Based Conversational Input &amp; Envelope Budgeting)
              </h2>
              <span className="text-xs font-mono text-teal-300 glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
              </span>
            </div>
            <SakkuDemo />
          </section>
        )}

        {project.id === "tamino" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                Interactive F&amp;B Operating System Explorer (RUN, CONTROL &amp; GROW)
              </h2>
              <span className="text-xs font-mono text-emerald-400 glass-badge px-2.5 py-1 rounded-full font-bold">
                Interactive Live Prototype
              </span>
            </div>
            <TaminoDemo />
          </section>
        )}

        {/* Detailed Case Breakdown (Tamino Case Study Framework) */}
        {project.id === "tamino" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content for Tamino */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Project Narrative & Background */}
              <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Code2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                    Project Narrative &amp; Background
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  From Disconnected Tools to One Connected F&amp;B Operating System
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Small F&amp;B businesses often manage sales, menu availability, inventory, payments, and reporting through separate tools or manual records. This creates fragmented information, delayed stock updates, limited visibility for owners, and unnecessary administrative work for staff.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Tamino was developed as an exploration of how a focused digital operating system could connect these workflows without overwhelming everyday users.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  The product was designed around three operational roles—Owner, Manager, and Cashier—each requiring different levels of access and information. The result is a structured but approachable system that supports both frontline transactions and management-level decision-making.
                </p>
              </section>

              {/* The Operational Challenge vs The Product Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-xl space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-2">
                    <span>The Operational Challenge</span>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    F&amp;B teams need to process orders quickly while simultaneously maintaining accurate product availability, payment records, inventory levels, and daily sales information.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    The key challenge was to connect these operational areas without creating a crowded or overly technical interface. Cashiers need speed, managers need operational control, and owners need concise business visibility.
                  </p>
                </div>

                <div className="bg-emerald-950/15 border border-emerald-900/30 p-6 rounded-xl space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                    <span>The Product Solution</span>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Tamino unifies the primary F&amp;B workflow into one connected system:
                  </p>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-emerald-500/30 font-mono text-xs text-emerald-300 font-bold text-center">
                    Order → Payment → Transaction Record → Inventory Update → Business Report
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    The POS interface enables staff to search and select products, choose order types, assign tables, calculate tax, and simulate cash or QRIS payments. Operational data then flows into transaction history, inventory monitoring, sales summaries, product performance, payment breakdowns, and management alerts.
                  </p>
                </div>
              </div>

              {/* Primary Users: 3-Tier Operational Roles */}
              <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-400" />
                    <span>Primary Users &amp; Role Hierarchy</span>
                  </h2>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    3 Operational Roles
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Owner */}
                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Owner
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">Executive Visibility</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Access to the complete dashboard, reports, business settings, and user management.
                    </p>
                  </div>

                  {/* Manager */}
                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 hover:border-teal-500/40 transition-colors">
                    <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                      Manager
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">Operational Control</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Access to operational dashboards, menu management, inventory, transactions, and reports.
                    </p>
                  </div>

                  {/* Cashier */}
                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      Cashier
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">Frontline Execution</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Focused access to the POS workflow and relevant transaction history.
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Product & Design Decisions */}
              <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  Key Product &amp; Design Decisions
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Designed around real operational roles",
                      desc: "The system separates Owner, Manager, and Cashier responsibilities to reduce unnecessary information and keep each workspace relevant."
                    },
                    {
                      title: "Prioritised transaction speed",
                      desc: "The POS layout keeps product selection, categories, order details, totals, and payment controls within one focused operational view."
                    },
                    {
                      title: "Connected sales with inventory awareness",
                      desc: "Products display availability and low-stock status directly within the ordering workflow, helping staff avoid selling unavailable items."
                    },
                    {
                      title: "Turned data into operational priorities",
                      desc: "Instead of displaying metrics alone, the dashboard highlights items requiring attention, including low inventory and incomplete payments."
                    },
                    {
                      title: "Used plain business language",
                      desc: "Labels such as “Kondisi bisnis hari ini,” “Perlu Perhatian,” and “Angka yang membantu Anda mengambil langkah berikutnya” make the system understandable to non-technical business users."
                    },
                    {
                      title: "Created a calm, premium interface",
                      desc: "The visual direction uses restrained colour, clear hierarchy, generous spacing, and focused calls to action to reduce cognitive load in a busy operating environment."
                    }
                  ].map((decision, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-lg border border-slate-800/60"
                    >
                      <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded shrink-0 font-bold">
                        0{idx + 1}
                      </span>
                      <div>
                        <strong className="text-white block mb-0.5 font-semibold">
                          {decision.title}
                        </strong>
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {decision.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Key Deliverables & System Capabilities */}
              <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    Key Deliverables &amp; System Capabilities
                  </h2>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    19 Capabilities
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Desktop-first POS and cashier workspace",
                    "Product search and category filtering",
                    "Dine-in, takeaway, and online order types",
                    "Table selection for dine-in orders",
                    "Automated subtotal, tax, and total calculation",
                    "Cash and QRIS payment simulation",
                    "Menu and product management",
                    "Inventory monitoring with configurable low-stock thresholds",
                    "Stock-in and stock-out operational workflow",
                    "Transaction history with payment and status tracking",
                    "Daily, seven-day, and thirty-day reporting periods",
                    "Sales, transaction, average order value, and product-volume metrics",
                    "Best-selling product analysis",
                    "Payment-method breakdown",
                    "Operational alerts for low inventory and incomplete payments",
                    "CSV report export",
                    "Owner, Manager, and Cashier role structure",
                    "Responsive operational dashboard",
                    "Browser-based demo data persistence"
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Project Outcome & Operational Value */}
              <section className="bg-emerald-950/10 border border-emerald-900/30 rounded-xl p-6 sm:p-8 space-y-3">
                <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Project Outcome &amp; Operational Value
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tamino demonstrates how a small F&amp;B business can manage daily sales and operational information from a single, structured workspace.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The interactive MVP connects cashier activities with inventory visibility and management reporting, reducing the separation between frontline transactions and owner-level decision-making.
                </p>
              </section>

              {/* Current Product Maturity & Planned Next Phase */}
              <section className="bg-slate-900/60 rounded-xl border border-slate-800 p-6 sm:p-8 space-y-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      Current Product Maturity
                    </span>
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                      Interactive MVP — Phase 1 Demo
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    The current version demonstrates the complete core workflow and interface direction. Data is stored locally in the user’s browser, payments are simulated, and the product is intended for product validation, workflow testing, and portfolio demonstration rather than live commercial transaction processing.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Planned Next Phase</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Future Roadmap</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Secure server-side authentication",
                      "Enforced role-based access control",
                      "Cloud database and multi-device synchronisation",
                      "Production QRIS/payment-gateway integration",
                      "Receipt printing",
                      "Ingredient-level inventory and recipe costing",
                      "Supplier and purchasing workflows",
                      "Multi-outlet management",
                      "Audit logs and enhanced data security",
                      "Production deployment and user validation"
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800 text-xs text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar for Tamino */}
            <div className="space-y-6">
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-6 sticky top-28 space-y-6">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                    Technology Stack &amp; Tools
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <a
                    href="https://custom-fnb-pos-system-desktop.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/#contact"
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    Have a Similar Workflow? Let’s Discuss It
                  </Link>
                  <Link
                    href="/#work"
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono rounded-lg flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    Explore All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-400" />
                Project Narrative &amp; Background
              </h2>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line mb-4">
                {project.longDescription}
              </p>
              <p className="text-sm text-slate-400 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80 font-mono">
                <span className="text-teal-400 font-semibold">Architectural Context:</span>{" "}
                {project.context}
              </p>
            </section>

            {/* Problem / Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-xl">
                <h3 className="text-sm font-mono uppercase tracking-wider text-red-400 mb-2 font-bold flex items-center gap-2">
                  <span>The Operational Challenge</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.challenge || project.problem}
                </p>
              </div>

              <div className="bg-teal-950/10 border border-teal-900/30 p-6 rounded-xl">
                <h3 className="text-sm font-mono uppercase tracking-wider text-teal-400 mb-2 font-bold flex items-center gap-2">
                  <span>The Engineering Solution</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Decisions */}
            {project.keyDecisions && project.keyDecisions.length > 0 && (
              <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-gold-muted" />
                  Key Architectural &amp; Design Decisions
                </h2>
                <ul className="space-y-3">
                  {project.keyDecisions.map((decision, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-lg border border-slate-800/60"
                    >
                      <span className="font-mono text-xs text-gold-muted bg-gold-muted/10 px-2 py-0.5 rounded shrink-0 font-bold">
                        0{idx + 1}
                      </span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Key Deliverables */}
            <section className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Key Deliverables &amp; System Capabilities
              </h2>
              <ul className="space-y-3">
                {project.keyDeliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Expected / Measured Outcome */}
            {project.outcome && (
              <section className="bg-emerald-950/10 border border-emerald-900/30 rounded-xl p-6 sm:p-8">
                <h2 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Project Outcome &amp; Operational Impact
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.outcome}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack Box */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-6 sticky top-28">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Technology Stack &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-3">
                <Link
                  href="/#contact"
                  className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20"
                >
                  Have a Similar Workflow? Let’s Discuss It
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="/#work"
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors text-center"
                >
                  Explore All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      </main>

      <Footer />
    </div>
  );
}
