import type { NextConfig } from "next";

// Static export: `npm run build` writes a self-contained site to /out,
// which can be hosted on Vercel or uploaded as-is to go.octopipoker.ai.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
