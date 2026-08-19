import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById, getAllProjectIds } from "../../../data/projects";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Cgv10Demo from "../../../components/work/Cgv10Demo";
import OoiDemo from "../../../components/work/OoiDemo";
import OneEcosDemo from "../../../components/work/OneEcosDemo";
import AlIkhlasDemo from "../../../components/work/AlIkhlasDemo";
import CorumDemo from "../../../components/work/CorumDemo";
import RumahRingkasDemo from "../../../components/work/RumahRingkasDemo";
import ArchitectureDiagram from "../../../components/work/ArchitectureDiagram";
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

  const ogUrl = `/api/og?title=${encodeURIComponent(project.name)}&subtitle=${encodeURIComponent(project.oneLiner)}&category=${encodeURIComponent(project.category)}&tag=CASE%20STUDY`;

  return {
    title: `${project.name} | Project Case Study`,
    description: project.oneLiner,
    alternates: {
      canonical: `https://ahlulfirdaus.com/work/${id}`,
    },
    openGraph: {
      title: `${project.name} | Ahlul Firdaus Case Study`,
      description: project.oneLiner,
      url: `https://ahlulfirdaus.com/work/${id}`,
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
      title: `${project.name} | Ahlul Firdaus Case Study`,
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
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.oneLiner,
    applicationCategory: project.category,
    operatingSystem: "Web-based",
    author: {
      "@type": "Person",
      name: "Ahlul Firdaus",
      url: "https://ahlulfirdaus.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Header />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#selected-work"
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
              {project.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200">
              <span className={`w-2 h-2 rounded-full ${project.statusBadge === "Live Project" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
              <span className="font-semibold">{project.statusBadge || project.status}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {project.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {project.oneLiner}
          </p>

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
                {project.category.split(" ")[0]}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-mono block mb-1">
                Project Classification
              </span>
              <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                {project.statusBadge || project.status}
              </span>
            </div>
          </div>
        </header>

        {/* Screenshot Gallery — shown if project has images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                System Preview
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={src}
                    alt={`${project.name} — screenshot ${i + 1}`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] text-teal-400 bg-slate-950/80 px-2.5 py-1 rounded-full border border-teal-500/30 uppercase tracking-wider">
                      {project.name}
                    </span>
                  </div>
                </div>
              ))}
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

        {/* Dynamic Interactive Demo Preview section if available */}
        {project.id === "cgv10" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-muted" />
                Interactive System Prototype
              </h2>
              <span className="text-xs font-mono text-gold-muted glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
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
                Interactive Trade Simulation (Escrow, Customs &amp; RFQ)
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
                <Terminal className="w-5 h-5 text-gold-muted" />
                Interactive Operations Cockpit Simulation
              </h2>
              <span className="text-xs font-mono text-gold-muted glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
              </span>
            </div>
            <OneEcosDemo />
          </section>
        )}

        {project.id === "masjid-al-ikhlas" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-muted" />
                Interactive Digital Ecosystem Prototype (Prayer, Financial Ledger &amp; Agenda)
              </h2>
              <span className="text-xs font-mono text-gold-muted glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
              </span>
            </div>
            <AlIkhlasDemo />
          </section>
        )}

        {project.id === "corum" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-muted" />
                Interactive ESG Compliance Dashboard (Multi-Dept Sync &amp; PDF Audit)
              </h2>
              <span className="text-xs font-mono text-gold-muted glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
              </span>
            </div>
            <CorumDemo />
          </section>
        )}

        {project.id === "rumah-ringkas" && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cream flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-muted" />
                Interactive Household Wealth Engine (Catat Cepat &amp; Amplop Budget)
              </h2>
              <span className="text-xs font-mono text-gold-muted glass-badge px-2.5 py-1 rounded-full font-bold">
                Live Interactive Component
              </span>
            </div>
            <RumahRingkasDemo />
          </section>
        )}

        {/* Detailed Case Breakdown (6-Part Framework) */}
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
                  Inquire About Similar Architecture
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="/#selected-work"
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors text-center"
                >
                  Explore All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
