import { ImageResponse } from "next/og";

export const alt = "Md Jonaed Joshim — Web Developer & Competitive Programmer";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          backgroundColor: "#0f1719",
          color: "#eceff0",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#5eead4",
              marginRight: 18,
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#5eead4" }}>
            PORTFOLIO / 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -2 }}>
            Md Jonaed Joshim
          </div>
          <div style={{ fontSize: 38, color: "#9aa8ab", marginTop: 18 }}>
            Web Developer &amp; Competitive Programmer
          </div>
          <div style={{ fontSize: 26, color: "#5eead4", marginTop: 20 }}>
            Bangladesh · Open to opportunities
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27363a",
            paddingTop: 26,
          }}
        >
          <div style={{ fontSize: 24, color: "#9aa8ab" }}>
            md-jonaed-joshim.vercel.app
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#5eead4" }}>
            MJ
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
