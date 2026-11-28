import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite compilar para outra pasta (ex.: NEXT_DIST_DIR=.next-build) sem estragar um `next dev` a correr.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
