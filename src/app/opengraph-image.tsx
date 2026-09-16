import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#60a5fa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a1a1aa", marginTop: 28 }}>
          {site.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
