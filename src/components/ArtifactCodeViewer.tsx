"use client";

import React, { useState } from "react";
import { Artifact } from "../data/artifacts";
import { Copy, Check, Download, FileCode, CheckCircle } from "lucide-react";

interface Props {
  artifact: Artifact;
}

export default function ArtifactCodeViewer({ artifact }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(artifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([artifact.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = artifact.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-slate-900/90">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-teal-400" />
            {artifact.filename}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Code Display Area */}
      <div className="p-4 sm:p-6 overflow-x-auto max-h-[600px] text-xs sm:text-sm font-mono text-slate-200 leading-relaxed bg-slate-950/60">
        <pre className="whitespace-pre">
          <code>{artifact.content}</code>
        </pre>
      </div>

      {/* Footer Info */}
      <div className="px-4 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          Verified Architecture Artifact
        </span>
        <span>{artifact.content.split("\n").length} lines</span>
      </div>
    </div>
  );
}
