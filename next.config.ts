import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/chat",
        destination:
          "https://mail.google.com/mail/?view=cm&fs=1&to=khan03126569@gmail.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
