import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  }, images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-803b3b3d93b74c55b52a07f14de345ae.r2.dev",
      },
    ],
  },
};

export default nextConfig;
