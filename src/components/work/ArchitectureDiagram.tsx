"use client";

import React from "react";
import ArchitectureVisualizer, { ProjectPreset } from "../ArchitectureVisualizer";

interface ArchitectureDiagramProps {
  projectId: string;
}

export default function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  const presetKey: ProjectPreset =
    projectId === "ooi"
      ? "ooi"
      : projectId === "cgv10"
      ? "cgv10"
      : projectId === "oneecos"
      ? "oneecos"
      : projectId === "corum"
      ? "corum"
      : projectId === "sakku"
      ? "sakku"
      : projectId === "masjid-al-ikhlas"
      ? "masjid-al-ikhlas"
      : "ooi";

  return <ArchitectureVisualizer defaultPreset={presetKey} />;
}

