import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Custom query parameters
    const title = searchParams.get("title") || "Ahlul Firdaus";
    const subtitle =
      searchParams.get("subtitle") ||
      "Digital Systems Architect & Founder";
    const category = searchParams.get("category") || "SYSTEMS ARCHITECTURE";
    const tag = searchParams.get("tag") || "PORTFOLIO & CASE STUDIES";

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
            backgroundColor: "#070707",
            padding: "60px 80px",
            fontFamily: "sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Background Radial Glow */}
          <div
            style={{
              position: "absolute",
              top: "-150px",
              right: "-150px",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 128, 0.15) 0%, rgba(7, 7, 7, 0) 70%)",
            }}
          />

          {/* Grid Background Pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(197, 168, 128, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 168, 128, 0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top Bar: Brand Monogram & Category */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              zIndex: 10,
            }}
          >
            {/* AF Monogram Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                {/* Letter A */}
                <path
                  d="M 49,10 L 20,26.7 L 20,73.3 L 29,78.5 L 29,56 L 40,56 L 40,84.8 L 49,90 Z M 29,47 L 40,47 L 40,24.2 L 29,30.5 Z"
                  fill="#C5A880"
                />
                {/* Letter F */}
                <path
                  d="M 51,29.7 L 80,29.7 L 80,38.7 L 60,38.7 L 60,49.7 L 72,49.7 L 78,58.7 L 60,58.7 L 60,84.8 L 51,90 Z"
                  fill="#C5A880"
                />
                {/* Top Fold Triangle */}
                <path d="M 51,10 L 80,26.7 L 51,26.7 Z" fill="#F7F4EF" />
              </svg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#F7F4EF",
                    letterSpacing: "1px",
                  }}
                >
                  AHLUL FIRDAUS
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    color: "#C5A880",
                    letterSpacing: "2px",
                  }}
                >
                  SYSTEMS ARCHITECT
                </span>
              </div>
            </div>

            {/* Category Tag */}
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "30px",
                backgroundColor: "rgba(197, 168, 128, 0.12)",
                border: "1px solid rgba(197, 168, 128, 0.3)",
                color: "#C5A880",
                fontSize: "13px",
                fontFamily: "monospace",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {category}
            </div>
          </div>

          {/* Center Title & Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "960px",
              zIndex: 10,
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontFamily: "monospace",
                color: "#C5A880",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              // {tag}
            </div>
            <div
              style={{
                fontSize: "48px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-1px",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "rgba(247, 244, 239, 0.7)",
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Bottom Footer Specs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "24px",
              color: "rgba(247, 244, 239, 0.4)",
              fontSize: "12px",
              fontFamily: "monospace",
              letterSpacing: "1px",
              zIndex: 10,
            }}
          >
            <span>https://ahlulfirdaus.com</span>
            <span>BATAM, INDONESIA (UTC+7)</span>
            <span>B2B ESCROW // COMMUNITY // SAAS</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    });
  }
}
