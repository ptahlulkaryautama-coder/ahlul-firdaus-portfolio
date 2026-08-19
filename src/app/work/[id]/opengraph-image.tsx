import { ImageResponse } from "next/og";
import { getProjectById } from "../../../data/projects";

export const runtime = "edge";
export const alt = "Project Case Study Specification | Ahlul Firdaus";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Image({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  const title = project ? project.name : "System Blueprint Case Study";
  const category = project ? project.category : "Software Architecture";
  const description = project
    ? project.oneLiner
    : "Detailed architecture specification and operational deliverables.";
  const status = project ? project.status : "Active";
  const techStack = project ? project.techStack.slice(0, 4) : ["Next.js", "TypeScript"];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#060D08",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(201, 165, 90, 0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(14, 56, 40, 0.35), transparent 50%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#F3EFE6",
        }}
      >
        {/* Top Header Category & Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(201, 165, 90, 0.15)",
              border: "1px solid rgba(201, 165, 90, 0.4)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#C9A55A",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#34D399",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#34D399",
              }}
            />
            {status}
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "980px",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#C2BCAE",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

        {/* Tech Stack Footer Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  fontFamily: "monospace",
                  color: "#E2DED4",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <span
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#C9A55A",
              fontWeight: 700,
            }}
          >
            AHLUL FIRDAUS // CASE STUDY
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
