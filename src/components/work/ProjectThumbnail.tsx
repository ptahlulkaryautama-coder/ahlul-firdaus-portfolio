"use client";

import React from "react";
import Image from "next/image";


interface ProjectThumbnailProps {
  projectId: string;
  projectName: string;
  category: string;
}

export default function ProjectThumbnail({ projectId }: ProjectThumbnailProps) {
  switch (projectId) {
    case "ooi":
      return (
        <div className="w-full h-44 rounded-xl border border-amber-900/30 relative overflow-hidden bg-[#FBF7F0] group-hover:border-[#8B263E]/50 transition-colors">
          <Image
            src="/screenshots/ooi-portfolio-thumbnail-v2.png"
            alt="OOI Origin of Indonesia premium food marketplace and global sourcing platform"
            fill
            unoptimized
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "cgv10":
      return (
        <div className="w-full h-44 rounded-xl border border-emerald-900/30 relative overflow-hidden bg-slate-950 group-hover:border-emerald-500/50 transition-colors">
          <Image
            src="/Image/project/cgv10/portal-warga-cgv-thumbnail-v2.png"
            alt="Portal Warga CGV integrated residential community platform with resident services, local marketplace, financial transparency, and admin operations"
            fill
            unoptimized
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "masjid-al-ikhlas":
      return (
        <div className="w-full h-44 rounded-xl border border-emerald-900/40 relative overflow-hidden bg-slate-950 group-hover:border-emerald-500/50 transition-colors">
          <Image
            src="/images/projects/masjid-al-ikhlas/masjid-al-ikhlas-thumbnail-v3-official-logo.png"
            alt="Masjid Al Ikhlas digital mosque and community ecosystem with prayer times, TPQ education, programs, and financial transparency"
            fill
            unoptimized
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "oneecos":
      return (
        <div className="w-full h-44 rounded-xl border border-cyan-500/30 relative overflow-hidden bg-slate-950 group-hover:border-cyan-400/60 transition-colors">
          <Image
            src="/Image/project/oneecos/oneecos-portfolio-thumbnail-v2.png"
            alt="OneEcos connected B2B trade workflow and export operations dashboard"
            fill
            unoptimized
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "corum":
      return (
        <div className="w-full h-44 rounded-xl border border-emerald-900/40 relative overflow-hidden bg-slate-950 group-hover:border-emerald-500/50 transition-colors">
          <Image
            src="/Image/project/pt.corum/pt-corum-portfolio-thumbnail-v2.png"
            alt="PT. Corum browser-based sustainability reporting and data-entry template"
            fill
            unoptimized
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );

    case "sakku":
    default:
      return (
        <div className="w-full h-44 rounded-xl border border-teal-500/30 relative overflow-hidden bg-slate-950 group-hover:border-teal-400/60 transition-colors">
          <Image
            src="/screenshots/sakkupreview.png"
            alt="Sakku 2.0 — Personal & Household Finance"
            fill
            unoptimized
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
      );
  }
}
