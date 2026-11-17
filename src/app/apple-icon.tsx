import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
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
          borderRadius: "44px",
          padding: "8px",
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
            borderRadius: "36px",
            color: "#2563eb",
            fontWeight: 900,
            fontSize: "108px",
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
