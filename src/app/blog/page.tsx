import React from "react";
import Link from "next/link";
import { blogPosts } from "../../data/posts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, ArrowRight, BookOpen, Sparkles, User, Tag } from "lucide-react";

export const metadata = {
  title: "Engineering Writings & Architecture Thoughts | Ahlul Firdaus",
  description:
    "Deep-dive articles on B2B escrow architecture, community SaaS systems, high-density dashboard design, and software engineering strategy.",
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-deep-black text-cream flex flex-col font-sans selection:bg-gold-muted selection:text-deep-black">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 max-w-6xl mx-auto w-full">
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gold-muted hover:text-cream transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-muted flex items-center gap-2 mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Insights &amp; Architecture Papers</span>
          </span>
          <h1 className="font-sans font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl text-cream mb-4">
            System Writings
          </h1>
          <p className="text-cream-dark/75 text-base sm:text-lg leading-relaxed">
            In-depth breakdowns of real-world software architecture, fintech escrow flows, high-density visual design, and operational engineering.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-3xl p-6 border border-graphite/60 flex flex-col justify-between hover:border-gold-muted/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-gold-muted/5"
            >
              <div>
                {/* Category & Date */}
                <div className="flex items-center justify-between text-[10px] font-mono text-cream-dark/50 mb-4 pb-3 border-b border-graphite/40">
                  <span className="text-gold-muted font-semibold flex items-center gap-1.5 bg-gold-muted/10 px-2.5 py-0.5 rounded-md border border-gold-muted/20 uppercase tracking-wider">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-muted" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-sans font-extrabold text-xl text-cream group-hover:text-gold-muted transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-cream-dark/70 text-xs leading-relaxed mb-6 font-sans">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer / Read Article CTA */}
              <div className="pt-4 border-t border-graphite/40 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono text-cream-dark/60">
                  <User className="w-3.5 h-3.5 text-gold-muted" />
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-mono text-xs text-gold-muted group-hover:text-cream font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
