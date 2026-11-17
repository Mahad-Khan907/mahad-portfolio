import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb, #06b6d4)",
          borderRadius: "13px",
          padding: "2.5px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: "11px",
            color: "#2563eb",
            fontWeight: 900,
            fontSize: "28px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          M
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
