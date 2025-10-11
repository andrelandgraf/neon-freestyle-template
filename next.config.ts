import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * For freestyle.sh deployment, otherwise remove:
   */
  output: "standalone", 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
