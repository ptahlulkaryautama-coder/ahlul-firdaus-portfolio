"use client";

import React, { useState, useEffect } from "react";
import { GitCommit, GitBranch, ShieldCheck, Terminal, ExternalLink, Activity } from "lucide-react";

interface CommitItem {
  id: string;
  repo: string;
  message: string;
  time: string;
  author: string;
}

export default function GitHubActivity() {
  const [commits, setCommits] = useState<CommitItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated live commit feed matching user's repos (ooindonesia, cgv10, alikhlas)
    const mockCommits: CommitItem[] = [
      {
        id: "c8f92a1",
        repo: "ahlul-firdaus/ooindonesia",
        message: "feat(escrow): add automated BL document checksum validation & Midtrans webhook listener",
        time: "3 hours ago",
        author: "ahlul-firdaus",
      },
      {
        id: "f4b109e",
        repo: "ahlul-firdaus/cgv10",
        message: "perf(pwa): optimize QR scanner frame rate for gate tablet interface & offline fallback",
        time: "1 day ago",
        author: "ahlul-firdaus",
      },
      {
        id: "a1c772b",
        repo: "ahlul-firdaus/alikhlas-cgv-digital-ecosystem",
        message: "fix(finance): weekly disbursement ledger sync & Batam prayer time calculation offset",
        time: "3 days ago",
        author: "ahlul-firdaus",
      },
    ];

    const timer = setTimeout(() => {
      setCommits(mockCommits);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass-card rounded-2xl border border-graphite/60 p-6 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-graphite/40 font-mono text-xs">
        <div className="flex items-center gap-2 text-gold-muted font-bold">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>LIVE ARCHITECTURE ACTIVITY STREAM</span>
        </div>
        <a
          href="https://github.com/ahlul-firdaus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream-dark/50 hover:text-gold-muted transition-colors flex items-center gap-1 text-[10px] uppercase tracking-wider"
        >
          <span>@ahlul-firdaus</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {loading ? (
        <div className="py-8 text-center font-mono text-xs text-cream-dark/40 animate-pulse">
          Streaming GitHub event data...
        </div>
      ) : (
        <div className="space-y-3 font-mono text-xs">
          {commits.map((c) => (
            <div
              key={c.id}
              className="p-3 rounded-xl bg-black/40 border border-graphite/40 hover:border-gold-muted/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <GitCommit className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] text-cream-dark/50">
                    <span className="text-emerald-400 font-bold">{c.repo}</span>
                    <span>•</span>
                    <span className="text-gold-muted bg-gold-muted/10 px-1.5 py-0.5 rounded text-[9px]">{c.id}</span>
                  </div>
                  <div className="text-cream text-xs truncate mt-0.5 font-sans font-medium">
                    {c.message}
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-cream-dark/40 shrink-0 self-end md:self-auto">
                {c.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
