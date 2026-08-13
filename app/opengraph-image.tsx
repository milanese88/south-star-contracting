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
          background: "#0E0E10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {/* Gold top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#B8B3AB" }} />

        {/* Logo */}
        <img
          src="https://south-star-contracting.com/logo-white.png"
          style={{ width: 480, height: "auto", objectFit: "contain" }}
        />

        {/* Divider */}
        <div style={{ width: 48, height: 1, background: "#B8B3AB", opacity: 0.5 }} />

        {/* Tagline */}
        <div
          style={{
            color: "#B8B3AB",
            fontSize: 20,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          Luxury Home Builder · South Florida
        </div>

        {/* License */}
        <div
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: 14,
            letterSpacing: "0.15em",
            fontFamily: "sans-serif",
          }}
        >
          FL License #CGC1536437
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#B8B3AB" }} />
      </div>
    ),
    { ...size }
  );
}
