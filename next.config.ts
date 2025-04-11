import type { NextConfig } from "next";

import createMDX from "@next/mdx";

import { mdxOptions } from "./src/lib/mdx/mdx-options";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  redirects() {
    return Promise.resolve([
      { source: "/quiz", destination: "/quiz/1", permanent: true },
    ]);
  },
  rewrites() {
    return Promise.resolve([
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ]);
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    viewTransition: true,
    ppr: true,
  },
};

const withMDX = createMDX({ options: mdxOptions });

export default withMDX(nextConfig);
