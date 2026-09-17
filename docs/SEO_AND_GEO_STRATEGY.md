# 🌐 SEO & GEO (Generative Engine Optimization) Master Plan
**Portfolio & Systems Architecture Showcase: [ahlulfirdaus.com](https://ahlulfirdaus.com)**

Dokumen ini memuat panduan komprehensif, arsitektur metadata, strategi backlink ekosistem, panduan verifikasi Google Search Console, dan optimasi AI Search Engine (ChatGPT Search, Perplexity, Gemini, Claude).

---

## 📌 1. Google Search Console (GSC) Setup Guide

### Memilih Tipe Properti di GSC:
Ada dua metode pendaftaran properti saat pertama kali membuka Google Search Console:

| Metode | Input yang Dimasukkan | Rekomendasi | Cara Verifikasi |
| :--- | :--- | :--- | :--- |
| **Domain (Kiri)** | `ahlulfirdaus.com` *(tanpa https:// dan tanpa sitemap.xml)* | ⭐ **Sangat Direkomendasikan** | Tambahkan **DNS TXT Record** di dashboard penyedia domain (Cloudflare / Niagahoster / Namecheap / Domainesia). Otomatis mencakup semua subdomain (termasuk `sakku.ahlulfirdaus.com`). |
| **URL Prefix (Kanan)** | `https://ahlulfirdaus.com` | Pilihan Cepat (Alternative) | Pasang meta tag `<meta name="google-site-verification" content="..." />` di `src/app/layout.tsx` atau verifikasi otomatis jika menggunakan Google Analytics. |

> [!IMPORTANT]
> **Di mana memasukkan sitemap.xml?**
> Link sitemap (`https://ahlulfirdaus.com/sitemap.xml`) **BUKAN** dimasukkan di halaman pendaftaran properti awal.
> 1. Verifikasi domain terlebih dahulu hingga masuk ke Dashboard GSC.
> 2. Di sidebar kiri, klik menu **Indexing -> Sitemaps (Peta Situs)**.
> 3. Masukkan `sitemap.xml` di kolom input lalu klik **Submit**.

---

## 🏗️ 2. Status Implementasi Teknis Codebase (Telah Aktif)

### A. Dynamic Sitemap & Metadata
- **Sitemap Generator**: [src/app/sitemap.ts](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/sitemap.ts)
  - Prioritas halaman: `1.0` (Home), `0.9` (Blog index), `0.85` (Selected Work & Templates), `0.7` (Artifacts).
- **Robots Rules & AI Bot Whitelist**: [src/app/robots.ts](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/robots.ts)
  - Mengizinkan crawling bot AI: `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `Amazonbot`, `Bytespider`, `Applebot-Extended`, `Meta-ExternalAgent`, `cohere-ai`.
- **Instant Indexing Endpoint**: [src/app/api/indexnow/route.ts](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/api/indexnow/route.ts)
  - Menyediakan endpoint POST untuk ping instan ke Bing, Perplexity, dan Yandex.

### B. Schema.org Structured Data (JSON-LD)
1. **Root Layout** ([src/app/layout.tsx](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/layout.tsx)):
   - `Person` (Nama, Pekerjaan, Keahlian/knowsAbout, social sameAs).
   - `WebSite` (Author, Site Name).
   - `ProfessionalService` (Lokasi: Batam, Kontak, Geo Coordinates).
2. **Project Detail Pages** ([src/app/work/[id]/page.tsx](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/work/%5Bid%5D/page.tsx)):
   - `SoftwareApplication` + `BreadcrumbList` (Home > Selected Work > Project Name).
3. **Blog / Technical Papers** ([src/app/blog/[slug]/page.tsx](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/blog/%5Bslug%5D/page.tsx)):
   - `TechArticle` + `BreadcrumbList` (Home > System Writings > Article Title).
4. **Templates Studio** ([src/app/templates/layout.tsx](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/templates/layout.tsx)):
   - `CollectionPage` + `BreadcrumbList`.
5. **Artifacts Detail** ([src/app/artifacts/[id]/page.tsx](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/src/app/artifacts/%5Bid%5D/page.tsx)):
   - `SoftwareSourceCode` + `BreadcrumbList`.

### C. LLM Knowledge Scraper (GEO Optimization)
- **Compact Summary**: [public/llms.txt](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/public/llms.txt)
- **Full Architecture Specification**: [public/llms-full.txt](file:///c:/Users/lenovo/.gemini/antigravity/scratch/ahlul-firdaus-portfolio/public/llms-full.txt)

---

## 🔗 3. Strategi Backlink Ekosistem & Cross-Linking

Pasang credit link ke `https://ahlulfirdaus.com` pada setiap proyek live yang dibangun untuk mengalirkan *Domain Authority (PageRank)* secara organik:

### A. Sakku 2.0 (Sudah Terpasang)
- **Status**: ✅ Selesai (`made with ❤️ by ahlulfirdaus.com`)
- **Domain**: `https://sakku.ahlulfirdaus.com`

### B. OOI — Origin of Indonesia (`ooindonesia.com`)
```html
<p className="text-xs text-gray-400">
  © {new Date().getFullYear()} Origin of Indonesia (OOI). 
  Systems Architecture & Engineered by{" "}
  <a 
    href="https://ahlulfirdaus.com" 
    target="_blank" 
    rel="noopener"
    className="text-amber-400 hover:underline font-medium"
  >
    Ahlul Firdaus
  </a>
</p>
```

### C. CGV10 Portal Warga (`portalwargacgv.id`)
```html
<div className="text-xs text-slate-400">
  <span>Portal Warga RT 010 / RW 021 • </span>
  <span>Sistem Informasi & Tata Kelola Digital oleh </span>
  <a 
    href="https://ahlulfirdaus.com" 
    target="_blank" 
    rel="noopener"
    className="text-emerald-400 hover:text-emerald-300 font-semibold"
  >
    Ahlul Firdaus
  </a>
</div>
```

### D. Masjid Al-Ikhlas Digital (`alikhlascgv.vercel.app`)
```html
<p className="text-xs text-stone-400">
  Media Informasi & Akuntansi Kas Masjid Al-Ikhlas • Dikelola & Dikembangkan oleh{" "}
  <a 
    href="https://ahlulfirdaus.com" 
    target="_blank" 
    rel="noopener"
    className="text-amber-500 hover:underline font-medium"
  >
    Ahlul Firdaus
  </a>
</p>
```

---

## 🎯 4. Target Keyword Matrix

Targetkan frasa-frasa dengan intensitas pencarian spesifik tinggi:

| Cluster | Kata Kunci Target | Halaman Landing |
| :--- | :--- | :--- |
| **Personal Branding & Local Authority** | *Ahlul Firdaus*, *Digital Systems Architect Batam*, *Fullstack Developer Batam Kepri*, *PT Ahlul Karya Utama* | `/` (Homepage) |
| **B2B & Trade Platform** | *B2B Export Platform Next.js*, *Sistem Ekspor Multi-Supplier Batam FTZ*, *Origin of Indonesia* | `/work/ooi`, `/blog/smart-consolidation-indonesian-food-export-ooi` |
| **PWA & Privacy Systems** | *Local-First PWA Indonesia*, *Aplikasi Keuangan Zero-Knowledge*, *Sakku Wealth OS* | `/work/sakku` |
| **Community Governance** | *Sistem Kas RT Digital*, *Aplikasi Portal Warga QR Access*, *CGV10 Portal Warga* | `/work/cgv10`, `/blog/from-whatsapp-chaos-to-qr-gate-control-cgv10` |
| **Enterprise UI & ERP** | *High-Density SaaS Dashboard Architecture*, *Industrial Manufacturing ERP Template* | `/templates`, `/blog/designing-high-density-saas-dashboards-oneecos` |

---

## 📈 5. Monitoring & Validasi Checklist

- [ ] Verifikasi domain di [Google Search Console](https://search.google.com/search-console).
- [ ] Submit sitemap di GSC (`sitemap.xml`).
- [ ] Lakukan *URL Inspection -> Request Indexing* untuk homepage (`https://ahlulfirdaus.com/`).
- [ ] Verifikasi di [Bing Webmaster Tools](https://www.bing.com/webmasters) (Bisa import langsung dari GSC dalam 1 klik).
- [ ] Test schema rich snippet menggunakan [Google Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Cek status LLM file di `https://ahlulfirdaus.com/llms.txt`.
