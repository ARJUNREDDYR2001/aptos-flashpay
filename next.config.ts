import path from 'path';
import type { Configuration as WebpackConfig } from 'webpack';

type NextConfig = {
  webpack?: (config: WebpackConfig) => WebpackConfig;
  // Add turbopack config at the root level
  turbopack?: {
    // Turbopack-specific configurations can go here
    resolve?: {
      alias?: Record<string, string>;
    };
  };
};

const nextConfig: NextConfig = {
  // Turbopack configuration
  turbopack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  },
  
  // Webpack configuration (kept for compatibility)
  webpack: (config: WebpackConfig) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
};

export default nextConfig;
