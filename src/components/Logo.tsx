"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  size?: number | string;
  className?: string;
  variant?: "vector" | "video" | "png";
  animateMode?: "none" | "draw" | "assemble" | "fold" | "glitch" | "hud";
  hoverMode?: "none" | "glow" | "lift" | "glitch" | "draw";
  color?: string; // custom color override, defaults to CSS vars
  triangleColor?: string; // custom triangle color override, defaults to CSS vars
}

export default function Logo({
  size = 40,
  className = "",
  variant = "vector",
  animateMode = "draw",
  hoverMode = "glow",
  color,
  triangleColor,
}: LogoProps) {
  // 0. Video & Image Media Variants
  if (variant === "video") {
    return (
      <video
        src="/logo/af-monogram-alternate.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  if (variant === "png") {
    return (
      <img
        src="/logo/af-monogram-alternate.png"
        alt="AF Monogram Logo"
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  // Theme colors derived from portfolio system
  const defaultLetterColor = color || "var(--color-gold-muted, #C5A880)";
  const defaultTriangleColor = triangleColor || "var(--color-cream, #F7F4EF)";

  // Path data
  const pathA = "M 49,10 L 20,26.7 L 20,73.3 L 29,78.5 L 29,56 L 40,56 L 40,84.8 L 49,90 Z M 29,47 L 40,47 L 40,24.2 L 29,30.5 Z";
  const pathF = "M 51,29.7 L 80,29.7 L 80,38.7 L 60,38.7 L 60,49.7 L 72,49.7 L 78,58.7 L 60,58.7 L 60,84.8 L 51,90 Z";
  const pathTriangle = "M 51,10 L 80,26.7 L 51,26.7 Z";

  // Outline drawing animation definition
  const drawTransition = {
    duration: 1.5,
    ease: "easeInOut",
  };

  // 1. Draw Animation Profiles
  if (animateMode === "draw") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none ${className}`}
        style={{ overflow: "visible" }}
      >
        <g className="transition-all duration-300">
          {/* Letter A */}
          <motion.path
            d={pathA}
            stroke={defaultLetterColor}
            strokeWidth="1.5"
            fill={defaultLetterColor}
            fillRule="evenodd"
            clipRule="evenodd"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { duration: 1.2, ease: "easeOut" },
              fillOpacity: { delay: 1.0, duration: 0.5 },
            }}
            whileHover={
              hoverMode === "glow"
                ? { filter: "drop-shadow(0px 0px 8px var(--color-gold-muted))", scale: 1.02 }
                : hoverMode === "lift"
                ? { y: -2 }
                : {}
            }
          />

          {/* Letter F */}
          <motion.path
            d={pathF}
            stroke={defaultLetterColor}
            strokeWidth="1.5"
            fill={defaultLetterColor}
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { delay: 0.3, duration: 1.2, ease: "easeOut" },
              fillOpacity: { delay: 1.2, duration: 0.5 },
            }}
            whileHover={
              hoverMode === "glow"
                ? { filter: "drop-shadow(0px 0px 8px var(--color-gold-muted))", scale: 1.02 }
                : hoverMode === "lift"
                ? { y: -2 }
                : {}
            }
          />

          {/* Triangle */}
          <motion.path
            d={pathTriangle}
            stroke={defaultTriangleColor}
            strokeWidth="1"
            fill={defaultTriangleColor}
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { delay: 0.6, duration: 1.0, ease: "easeOut" },
              fillOpacity: { delay: 1.3, duration: 0.4 },
            }}
            whileHover={
              hoverMode === "lift"
                ? { rotateY: 15, rotateX: -10, originX: 0, originY: 1 }
                : hoverMode === "glow"
                ? { filter: "drop-shadow(0px 0px 6px var(--color-cream))" }
                : {}
            }
          />
        </g>
      </svg>
    );
  }

  // 2. Assemble Animation (Pieces slide in from their directions)
  if (animateMode === "assemble") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none ${className}`}
        style={{ overflow: "visible" }}
      >
        <g>
          {/* Letter A (Slides in from Left) */}
          <motion.path
            d={pathA}
            fill={defaultLetterColor}
            fillRule="evenodd"
            clipRule="evenodd"
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.1 }}
            whileHover={
              hoverMode === "glow"
                ? { filter: "drop-shadow(0px 0px 8px var(--color-gold-muted))", scale: 1.02 }
                : {}
            }
          />

          {/* Letter F (Slides in from Bottom/Right) */}
          <motion.path
            d={pathF}
            fill={defaultLetterColor}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.2 }}
            whileHover={
              hoverMode === "glow"
                ? { filter: "drop-shadow(0px 0px 8px var(--color-gold-muted))", scale: 1.02 }
                : {}
            }
          />

          {/* Triangle (Fades and drops from Top) */}
          <motion.path
            d={pathTriangle}
            fill={defaultTriangleColor}
            initial={{ y: -20, x: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.4 }}
            whileHover={
              hoverMode === "lift"
                ? { rotateY: 25, originX: 0, originY: 1, filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))" }
                : {}
            }
          />
        </g>
      </svg>
    );
  }

  // 3. Fold Animation (3D-like fold reveal of the top triangle)
  if (animateMode === "fold") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none ${className}`}
        style={{ perspective: "400px", overflow: "visible" }}
      >
        <g>
          {/* Letter A & F fade and expand slightly */}
          <motion.path
            d={pathA}
            fill={defaultLetterColor}
            fillRule="evenodd"
            clipRule="evenodd"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.path
            d={pathF}
            fill={defaultLetterColor}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />

          {/* Triangle unfolds from the top fold edge */}
          <motion.path
            d={pathTriangle}
            fill={defaultTriangleColor}
            initial={{ rotateX: -90, opacity: 0, originX: 0.5, originY: 0.27 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{
              rotateY: 30,
              originX: 0,
              originY: 1,
              filter: "drop-shadow(-2px 4px 6px rgba(0,0,0,0.6))",
              transition: { duration: 0.3 }
            }}
          />
        </g>
      </svg>
    );
  }

  // 4. Cyberpunk Glitch Animation Mode
  if (animateMode === "glitch") {
    return (
      <div className="relative group" style={{ width: size, height: size }}>
        {/* Underlayer Red Glitch */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-150">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <motion.path
              d={pathA}
              fill="#FF0055"
              fillRule="evenodd"
              animate={{
                x: [-1, 2, -2, 1, 0],
                y: [1, -1, 2, -1, 0],
              }}
              transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
            />
            <motion.path
              d={pathF}
              fill="#FF0055"
              animate={{
                x: [2, -2, 1, -1, 0],
                y: [-1, 2, -2, 1, 0],
              }}
              transition={{ repeat: Infinity, duration: 0.25, repeatType: "mirror" }}
            />
          </svg>
        </div>

        {/* Underlayer Cyan Glitch */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-150">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <motion.path
              d={pathA}
              fill="#00FFFF"
              fillRule="evenodd"
              animate={{
                x: [2, -1, 1, -2, 0],
                y: [-2, 1, -1, 2, 0],
              }}
              transition={{ repeat: Infinity, duration: 0.22, repeatType: "mirror" }}
            />
            <motion.path
              d={pathF}
              fill="#00FFFF"
              animate={{
                x: [-1, 1, -2, 2, 0],
                y: [2, -2, 1, -1, 0],
              }}
              transition={{ repeat: Infinity, duration: 0.18, repeatType: "mirror" }}
            />
          </svg>
        </div>

        {/* Primary Layer */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <motion.path
            d={pathA}
            fill={defaultLetterColor}
            fillRule="evenodd"
            clipRule="evenodd"
            animate={{
              skewX: [0, 5, -5, 0, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1, 0.15, 1] }}
          />
          <motion.path
            d={pathF}
            fill={defaultLetterColor}
            animate={{
              skewX: [0, -5, 5, 0, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, times: [0, -0.05, 0.1, 0.15, 1], delay: 0.05 }}
          />
          <motion.path
            d={pathTriangle}
            fill={defaultTriangleColor}
            animate={{
              x: [0, 2, -2, 0, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.04, 0.08, 0.12, 1], delay: 0.1 }}
          />
        </svg>
      </div>
    );
  }

  // 5. HUD System Visualizer Animation
  if (animateMode === "hud") {
    return (
      <div className="relative flex items-center justify-center animate-[subtle-float_6s_ease-in-out_infinite]" style={{ width: size, height: size }}>
        {/* Animated HUD outer circle rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-gold-muted/10 p-2 pointer-events-none scale-140"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-gold-muted/5 pointer-events-none scale-125"
        />

        {/* Center Logo */}
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <motion.path
            d={pathA}
            fill={defaultLetterColor}
            fillRule="evenodd"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.path
            d={pathF}
            fill={defaultLetterColor}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          />
          <motion.path
            d={pathTriangle}
            fill={defaultTriangleColor}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  // Default: static SVG, with hover animations
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <path d={pathA} fill={defaultLetterColor} fillRule="evenodd" clipRule="evenodd" />
      <path d={pathF} fill={defaultLetterColor} />
      <path d={pathTriangle} fill={defaultTriangleColor} />
    </svg>
  );
}
