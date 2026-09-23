import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `${site.name} — Coaching sportif personnalisé`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(70% 80% at 50% 110%, rgba(194,154,94,0.25), transparent 70%), #0b0a08",
          color: "#f1ece1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "2px solid rgba(194,154,94,0.35)",
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: 14,
            display: "flex",
          }}
        >
          <span style={{ color: "#f1ece1" }}>SO&nbsp;</span>
          <span style={{ color: "#c29a5e" }}>WORKFIT</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(241,236,225,0.75)",
          }}
        >
          {`${site.experienceYears} ans d'expérience · Première séance offerte`}
        </div>
      </div>
    ),
    size,
  );
}
