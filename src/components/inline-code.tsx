import { fullstacksJSTheme } from "@/lib/mdx/fullstacksjs-theme";
import { transformerRenderWhitespace } from "@shikijs/transformers";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki";

interface Props {
  children: string;
}

export async function InlineCode(props: Props) {
  const out = await codeToHast(props.children, {
    lang: "html-derivative",
    theme: fullstacksJSTheme,
    transformers: [transformerRenderWhitespace({ position: "boundary" })],
    tabindex: false,
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      code: Fragment,
      pre: (p) => <span data-codeblock {...p} />,
    },
  }) as React.JSX.Element;
}
