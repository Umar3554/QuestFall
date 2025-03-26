import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Pages/Home",
        permanent: true, // Set to true for a 301 redirect; false for a 302 redirect
      },
    ];
  },
};

export default nextConfig;
