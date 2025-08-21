import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/chat",
        destination: "https://wa.me/923126569883", // your WhatsApp link
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
