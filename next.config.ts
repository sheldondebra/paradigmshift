import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [90, 92, 95, 100],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 200, 256, 384, 512, 640, 750, 828, 1024],
  },
};

export default nextConfig;
