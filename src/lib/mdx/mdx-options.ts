import type { NextMDXOptions } from "@next/mdx";

import rehypeShiki from "@shikijs/rehype";
import { transformerRenderWhitespace } from "@shikijs/transformers";

import { fullstacksJSTheme } from "./fullstacksjs-theme";

export const mdxOptions: NextMDXOptions["options"] = {
  rehypePlugins: [
    [
      rehypeShiki,
      {
        theme: fullstacksJSTheme,
        transformers: [transformerRenderWhitespace({ position: "boundary" })],
      },
    ],
  ],
};
