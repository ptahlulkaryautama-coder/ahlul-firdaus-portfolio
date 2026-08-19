"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "../data/posts";

export default function WritingsPreview() {
  return (
    <section id="writings" className="py-24 bg-deep-black border-t border-graphite/40 relative dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>System Writings // 09</span>
            </span>
            <h2 className="font-sans font-black tracking-tight text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
              Architecture &amp; Strategy Papers
            </h2>
            <p className="text-cream-dark/75 text-sm leading-relaxed font-sans">
              Technical breakdowns of B2B escrow engineering, community governance systems, and high-density interface design.
            </p>
          </div>
          <Link
            href="/blog"
            className="shimmer-button px-5 py-2.5 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0"
          >
            <span>Explore All Papers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Writings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="glass-card rounded-3xl p-6 border border-graphite/60 flex flex-col justify-between hover:border-gold-muted/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-gold-muted/5"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-cream-dark/50 mb-4 pb-3 border-b border-graphite/40">
                  <span className="text-gold-muted font-semibold uppercase tracking-wider bg-gold-muted/10 px-2 py-0.5 rounded border border-gold-muted/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-muted" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-lg text-cream group-hover:text-gold-muted transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-cream-dark/70 text-xs leading-relaxed font-sans mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-graphite/40 flex items-center justify-between">
                <span className="font-mono text-[10px] text-cream-dark/50">
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-mono text-xs text-gold-muted group-hover:text-cream font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
