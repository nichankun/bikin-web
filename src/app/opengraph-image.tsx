import { ImageResponse } from "next/og";

export const runtime = "edge"; // Menggunakan Edge Runtime untuk kecepatan maksimal
export const alt = "DevPro Digital - Premium Web Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#38bdf8",
          fontSize: 60,
          fontWeight: "bold",
        }}
      >
        DevPro Digital
      </div>
      <div
        style={{
          display: "flex",
          color: "#f8fafc",
          fontSize: 32,
          marginTop: 20,
        }}
      >
        Premium Web Development & Systems
      </div>
    </div>,
    { ...size },
  );
}
