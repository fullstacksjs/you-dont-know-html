import "server-only";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

import { useMDXComponents } from "../../mdx-components";
import { mdxOptions } from "./mdx-options";

export const compileMDX = async (mdx: string) => {
  const { default: Component } = await evaluate(mdx, {
    ...runtime,
    ...mdxOptions,
    // @ts-expect-error - This is a hack to make useMDXComponents work with the runtime and Next.js Plugin
    useMDXComponents,
  });
  return Component;
};
