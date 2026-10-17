import { ImageResponse } from "next/og";
import { site } from "@/data/site";

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          padding: "80px",
          backgroundImage:
            "linear-gradient(145deg, #060e1f 0%, #0b1730 50%, #142443 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 960,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#f9b62b",
            }}
          >
            Akamwesi Solar Energy · Lumina
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Solar equipment supply in Kampala, Uganda
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#c3cfe4",
            }}
          >
            Panels, batteries, inverters and solar lighting
          </div>
        </div>
      </div>
    ),
    size,
  );
}
