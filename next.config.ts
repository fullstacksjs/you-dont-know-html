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
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    viewTransition: true,
  },
};

const withMDX = createMDX({ options: mdxOptions });

export default withMDX(nextConfig);
