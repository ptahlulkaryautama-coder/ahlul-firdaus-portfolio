"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth springs for fluid mouse follow
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if coarse pointer (touch device)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHasMoved(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: hasMoved ? 1 : 0,
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 w-72 h-72 rounded-full bg-radial from-gold-muted/12 via-gold-muted/3 to-transparent blur-2xl transition-opacity duration-500"
    />
  );
}
