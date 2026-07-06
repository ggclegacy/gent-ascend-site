import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.picard.replit.dev",
    "*.replit.app",
  ],
};

export default nextConfig;
