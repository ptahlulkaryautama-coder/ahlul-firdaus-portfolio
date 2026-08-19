import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs } from "../../../data/posts";
import { getProjectById } from "../../../data/projects";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, Clock, Calendar, User, Tag, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Ahlul Firdaus",
    };
  }

  const ogUrl = `/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.excerpt)}&category=${encodeURIComponent(post.category)}&tag=TECHNICAL%20PAPER`;

  return {
    title: `${post.title} | Systems Architecture Paper`,
    description: post.excerpt,
    alternates: {
      canonical: `https://ahlulfirdaus.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://ahlulfirdaus.com/blog/${slug}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedProject = post.relatedProjectId
    ? getProjectById(post.relatedProjectId)
    : undefined;

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
  };

  return (
    <div className="min-h-screen bg-deep-black text-cream flex flex-col font-sans selection:bg-gold-muted selection:text-deep-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-gold-muted hover:text-cream transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to System Writings
          </Link>
        </div>

        {/* Article Header */}
        <header className="border-b border-graphite/60 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gold-muted mb-4">
            <span className="px-3 py-1 rounded-full bg-gold-muted/10 border border-gold-muted/30 uppercase tracking-wider font-bold">
              {post.category}
            </span>
            <span className="text-cream-dark/40">•</span>
            <span className="flex items-center gap-1 text-cream-dark/60">
              <Clock className="w-3.5 h-3.5 text-gold-muted" />
              {post.readTime}
            </span>
            <span className="text-cream-dark/40">•</span>
            <span className="flex items-center gap-1 text-cream-dark/60">
              <Calendar className="w-3.5 h-3.5 text-gold-muted" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-cream tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-cream-dark/80 font-sans leading-relaxed border-l-2 border-gold-muted pl-4 italic">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-graphite/40">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full border border-gold-muted/40 object-cover"
            />
            <div>
              <div className="font-sans font-bold text-sm text-cream">
                {post.author.name}
              </div>
              <div className="font-mono text-[10px] text-gold-muted uppercase tracking-wider">
                {post.author.role} · Batam (GMT+7)
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-cream-dark/85 font-sans leading-relaxed space-y-6">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl font-bold text-cream font-sans mt-10 mb-4 pt-6 border-t border-graphite/40"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-lg font-bold text-gold-muted font-sans mt-6 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("```")) {
              const codeContent = paragraph.replace(/```[a-z]*/g, "").trim();
              return (
                <pre
                  key={idx}
                  className="bg-black/80 border border-graphite/80 p-5 rounded-2xl font-mono text-xs text-gold-muted overflow-x-auto my-6"
                >
                  <code>{codeContent}</code>
                </pre>
              );
            }
            if (paragraph.startsWith("---")) {
              return <hr key={idx} className="border-graphite/40 my-8" />;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n- ");
              return (
                <ul key={idx} className="space-y-2 my-4 pl-4 list-disc text-sm">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ")) {
              const items = paragraph.split("\n");
              return (
                <ol key={idx} className="space-y-2 my-4 pl-4 list-decimal text-sm">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="text-base text-cream-dark/80 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Related Project Banner if applicable */}
        {relatedProject && (
          <div className="mt-16 p-8 rounded-3xl glass-card border border-gold-muted/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase text-gold-muted tracking-widest font-bold mb-1">
                Related Live Ecosystem
              </div>
              <h3 className="font-sans font-bold text-xl text-cream">
                {relatedProject.name}
              </h3>
              <p className="text-cream-dark/70 text-xs mt-1 max-w-lg">
                {relatedProject.oneLiner}
              </p>
            </div>
            <Link
              href={`/work/${relatedProject.id}`}
              className="shimmer-button px-6 py-3 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              <span>Inspect Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
