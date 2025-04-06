import type { NextMDXOptions } from "@next/mdx";

import rehypeShiki from "@shikijs/rehype";

import { shikiOptions } from "./shiki-options";

export const mdxOptions: NextMDXOptions["options"] = {
  rehypePlugins: [[rehypeShiki, shikiOptions]],
};
