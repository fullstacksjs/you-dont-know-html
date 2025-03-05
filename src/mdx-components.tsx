import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "./components/code-block";

// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks, @eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    H: ({ children }) => {
      return <CodeBlock>{children}</CodeBlock>;
    },
  };
}
