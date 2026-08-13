import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "South Star Contracting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F0E8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {/* Accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "#161618" }} />

        {/* Logo — Black SOUTH STAR */}
        <img
          src="https://south-star-contracting.com/logo-black.png"
          style={{ width: 520, height: "auto", objectFit: "contain" }}
        />

        {/* Divider */}
        <div style={{ width: 48, height: 1, background: "#161618", opacity: 0.3 }} />

        {/* Tagline */}
        <div
          style={{
            color: "#161618",
            fontSize: 20,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          Luxury Home Builder · South Florida
        </div>

        {/* License */}
        <div
          style={{
            color: "#6E6D6A",
            fontSize: 14,
            letterSpacing: "0.15em",
            fontFamily: "sans-serif",
          }}
        >
          FL License #CGC1536437
        </div>

        {/* Accent bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: "#161618" }} />
      </div>
    ),
    { ...size }
  );
}
