import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing images from src/assets
  images: {
    unoptimized: true,
  },
  // Webpack config for Three.js GLTF/GLB support
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
};

export default nextConfig;
