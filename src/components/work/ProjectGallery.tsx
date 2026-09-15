"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
  ExternalLink,
  Layers
} from "lucide-react";

export interface GalleryItem {
  src: string;
  title: string;
  alt: string;
  badge?: string;
  isPrimary?: boolean;
}

interface ProjectGalleryProps {
  projectId: string;
  projectName: string;
  images: string[];
}

export default function ProjectGallery({
  projectId,
  projectName,
  images,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Define structured gallery items for CGV10 or fallback for other projects
  const getGalleryItems = (): GalleryItem[] => {
    if (projectId === "cgv10") {
      return [
        {
          src: "/Image/project/cgv10/cgv10-resident-portal-redacted.png",
          title: "Authenticated Resident Portal",
          badge: "Authenticated Resident Layer",
          alt: "Portal Warga CGV — Authenticated Resident Portal",
          isPrimary: true,
        },
        {
          src: "/Image/project/cgv10/cgv10-layanan-warga.png",
          title: "Resident Service Request",
          badge: "Layanan Warga Workflow",
          alt: "Portal Warga CGV — Resident Service Request",
          isPrimary: false,
        },
        {
          src: "/Image/project/cgv10/cgv10-palugada-redacted.png",
          title: "PALUGADA Local Marketplace",
          badge: "Local Neighborhood UMKM",
          alt: "Portal Warga CGV — PALUGADA Local Marketplace",
          isPrimary: false,
        },
        {
          src: "/Image/project/cgv10/cgv10-admin-dashboard-redacted.png",
          title: "Authorized Admin Operations",
          badge: "Admin Operations & Moderation",
          alt: "Portal Warga CGV — Authorized Admin Operations",
          isPrimary: false,
        },
      ];
    }

    // Default fallback mapping for other projects
    return images.map((src, i) => ({
      src,
      title: `${projectName} — Preview ${i + 1}`,
      alt: `${projectName} — screenshot ${i + 1}`,
      badge: `Screen 0${i + 1}`,
      isPrimary: i === 0,
    }));
  };

  const galleryItems = getGalleryItems();

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
    setZoomLevel(1);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryItems.length : 0
    );
    setZoomLevel(1);
  }, [selectedIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryItems.length) % galleryItems.length
        : 0
    );
    setZoomLevel(1);
  }, [selectedIndex, galleryItems.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.4, 2.8));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.4, 0.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, handleNext, handlePrev]);

  const currentItem =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section className="mb-16 font-sans">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          System Preview Gallery
        </h2>
        <span className="text-xs font-mono text-teal-400 bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5" />
          Click Any Image to Enlarge &amp; Zoom
        </span>
      </div>

      {/* Privacy Notice Banner for CGV10 */}
      {projectId === "cgv10" && (
        <div className="mb-6 p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed text-slate-300">
            <strong className="text-white">Privacy &amp; Redaction Notice:</strong>{" "}
            Screens shown in this case study use redacted or demonstration data.
            Resident identities, contact information, addresses, billing details,
            transaction records, and administrative information are intentionally
            concealed.
          </p>
        </div>
      )}

      {/* Structured Layout for CGV10 */}
      {projectId === "cgv10" ? (
        <div className="space-y-4">
          {/* Primary Large Screenshot (Resident Portal) */}
          {galleryItems[0] && (
            <div
              onClick={() => handleOpenModal(0)}
              className="group relative w-full rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 shadow-2xl bg-slate-950 cursor-zoom-in transition-all duration-300"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                fill
                unoptimized
                priority
                className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              {/* Top Hover Hint */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <span className="flex items-center gap-1.5 text-xs font-mono text-white bg-slate-900/90 border border-emerald-500/40 px-3 py-1.5 rounded-full shadow-xl backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  Click to View Full HD
                </span>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-300 bg-slate-950/90 px-3.5 py-1.5 rounded-full border border-emerald-500/40 uppercase tracking-wider shadow-lg backdrop-blur-sm">
                  {galleryItems[0].title}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700">
                  {galleryItems[0].badge}
                </span>
              </div>
            </div>
          )}

          {/* 3 Supporting Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryItems.slice(1).map((item, idx) => {
              const actualIndex = idx + 1;
              return (
                <div
                  key={actualIndex}
                  onClick={() => handleOpenModal(actualIndex)}
                  className="group relative w-full rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 shadow-xl bg-slate-950 cursor-zoom-in transition-all duration-300"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-[1.025] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  
                  {/* Hover Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="p-1.5 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[10.5px] font-bold text-slate-200 bg-slate-950/90 px-2.5 py-1 rounded-full border border-slate-700 group-hover:border-emerald-500/40 uppercase tracking-wider block truncate shadow backdrop-blur-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Standard Gallery for Other Projects */
        <div className="grid grid-cols-1 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenModal(idx)}
              className="group relative w-full rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-500/60 shadow-2xl bg-slate-950 cursor-zoom-in transition-all duration-300"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                priority={idx === 0}
                className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="flex items-center gap-1.5 text-xs font-mono text-white bg-slate-900/90 border border-teal-500/40 px-3 py-1.5 rounded-full shadow-xl">
                  <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                  Click to Enlarge
                </span>
              </div>

              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-xs font-bold text-teal-300 bg-slate-950/90 px-3 py-1.5 rounded-full border border-teal-500/30 uppercase tracking-wider shadow">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 select-none"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-800 z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full uppercase">
                  {currentItem.badge || `Screen 0${selectedIndex + 1}`}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
                  {currentItem.title}
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1 bg-slate-900 border border-slate-700/80 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    title="Zoom Out (-)"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-mono text-xs text-slate-300 min-w-[50px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    title="Zoom In (+)"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    title="Reset Zoom (0)"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors ml-1 border-l border-slate-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Raw Image Link */}
                <a
                  href={currentItem.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Raw Image in New Tab"
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors hidden sm:flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  title="Close (Esc)"
                  className="p-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-rose-950/80 border border-slate-700/80 hover:border-rose-500/50 rounded-lg transition-colors flex items-center justify-center shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View Area with Zoom & Pan */}
            <div className="relative flex-1 flex items-center justify-center overflow-auto my-3 p-2 rounded-xl bg-slate-950 border border-slate-900">
              {/* Prev Button */}
              {galleryItems.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white shadow-2xl transition-all hover:scale-105"
                  title="Previous Image (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* High-Resolution Crisp Zoomable Image Container */}
              <motion.div
                key={currentItem.src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: zoomLevel, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="max-h-[75vh] w-auto max-w-[92vw] object-contain rounded-lg shadow-2xl border border-slate-800"
                  style={{
                    imageRendering: "auto",
                  }}
                />
              </motion.div>

              {/* Next Button */}
              {galleryItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white shadow-2xl transition-all hover:scale-105"
                  title="Next Image (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Modal Footer / Thumbnails & Information */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800 z-10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span>
                  Image {selectedIndex + 1} of {galleryItems.length}
                </span>
                <span>•</span>
                <span className="text-slate-500">
                  Gunapan panah keyboard (← / →) untuk navigasi, (Esc) untuk keluar
                </span>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {galleryItems.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(idx);
                      setZoomLevel(1);
                    }}
                    className={`relative w-14 h-9 rounded-md overflow-hidden border transition-all shrink-0 ${
                      selectedIndex === idx
                        ? "border-emerald-400 ring-2 ring-emerald-500/30 scale-105"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
