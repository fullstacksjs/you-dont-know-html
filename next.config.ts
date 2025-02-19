import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    await Promise.resolve(true);
    return [
      {
        source: "/quiz",
        destination: "/quiz/1",
        permanent: true,
      },
    ];
  },
  experimental: {
    // dynamicIO: true,
    // ppr: true,
    useCache: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
