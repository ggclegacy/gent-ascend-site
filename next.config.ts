import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.picard.replit.dev",
    "*.replit.app",
    "*.spock.replit.dev",
    "*.kirk.replit.dev",
  ],
};

export default nextConfig;
