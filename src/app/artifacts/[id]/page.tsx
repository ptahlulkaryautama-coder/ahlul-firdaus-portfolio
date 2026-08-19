import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtifactById, getAllArtifactIds } from "../../../data/artifacts";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ArtifactCodeViewer from "../../../components/ArtifactCodeViewer";
import { ArrowLeft, FileCode2, Terminal, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const ids = getAllArtifactIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const artifact = getArtifactById(id);

  if (!artifact) {
    return {
      title: "Artifact Not Found | Ahlul Firdaus",
    };
  }

  return {
    title: `${artifact.title} | Technical Artifact`,
    description: artifact.description,
  };
}

export default async function ArtifactDetailPage({ params }: PageProps) {
  const { id } = await params;
  const artifact = getArtifactById(id);

  if (!artifact) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      <Header />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#artifacts"
            className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors font-mono group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to System Artifacts
          </Link>
        </div>

        {/* Header */}
        <header className="border-b border-slate-800 pb-8 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 uppercase tracking-wider">
              {artifact.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{artifact.filename}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 flex items-center gap-3">
            <FileCode2 className="w-8 h-8 text-teal-400 shrink-0" />
            {artifact.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {artifact.description}
          </p>
        </header>

        {/* Code Artifact Viewer Client Component */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Full Source & Specification</span>
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase">
              {artifact.language}
            </span>
          </div>

          <ArtifactCodeViewer artifact={artifact} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
