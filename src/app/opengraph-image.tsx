import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahlul Firdaus | Digital Systems Architect & Founder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#0C1810",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(201, 165, 90, 0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(14, 56, 64, 0.25), transparent 50%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#F3EFE6",
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#C9A55A",
              boxShadow: "0 0 12px rgba(201, 165, 90, 0.8)",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontFamily: "monospace",
              color: "#C9A55A",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            AHLUL FIRDAUS // PORTFOLIO ARCHITECTURE
          </span>
        </div>

        {/* Center Main Copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "960px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            Digital Systems Architect & Founder
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#C2BCAE",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Engineering B2B export ecosystems, digital community hubs, and high-density SaaS operation dashboards.
          </p>
        </div>

        {/* Bottom System Showcase Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderTop: "1px solid rgba(201, 165, 90, 0.2)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(14, 56, 40, 0.6)",
              border: "1px solid rgba(201, 165, 90, 0.4)",
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              color: "#C9A55A",
              fontWeight: 700,
            }}
          >
            🕌 Masjid Al Ikhlas Digital Hub
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              color: "#F3EFE6",
              fontWeight: 600,
            }}
          >
            🚢 OOI B2B Export System
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              color: "#F3EFE6",
              fontWeight: 600,
            }}
          >
            🏡 CGV10 Portal Warga
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
