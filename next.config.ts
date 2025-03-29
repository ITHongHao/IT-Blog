import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Enable React Strict Mode for development
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],  // Support .mdx files alongside other file types
  webpack(config) {
    // Customize Webpack config if needed (e.g., adding support for MDX)
    config.module.rules.push({
      test: /\.mdx$/,
      use: ['next-mdx-remote/loader', '@mdx-js/loader'],  // Use MDX loader for handling .mdx files
    });
    return config;
  },
  env: {
    // Add environment variables if needed (e.g., API URL, etc.)
    // Example: BLOG_API_URL: process.env.BLOG_API_URL,
  },
};

export default nextConfig;
