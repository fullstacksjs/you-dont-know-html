import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
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
    useCache: true,
    // ppr: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
