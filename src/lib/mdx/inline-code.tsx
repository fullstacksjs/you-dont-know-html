import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki";

import { shikiOptions } from "./shiki-options";

interface Props {
  children: string;
}

export async function InlineCode(props: Props) {
  const out = await codeToHast(props.children, {
    lang: "html-derivative",
    ...shikiOptions,
    transformers: [],
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      code: Fragment,
      pre: ({ children }) => <span data-inline-code>{children}</span>,
    },
  }) as React.JSX.Element;
}
