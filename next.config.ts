import type { NextConfig } from "next";

import createMDX from "@next/mdx";

import { mdxOptions } from "./src/lib/mdx/mdx-options";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    await Promise.resolve(true);
    return [{ source: "/quiz", destination: "/quiz/1", permanent: true }];
  },
  experimental: { useCache: true },
};

const withMDX = createMDX({ options: mdxOptions });

export default withMDX(nextConfig);
