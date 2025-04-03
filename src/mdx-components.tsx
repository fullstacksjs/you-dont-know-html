import type { MDXComponents } from "mdx/types";

import { InlineCode } from "./components/inline-code";

// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks, @eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    hr: () => <hr className="text-border-dark my-4" />,
    H: ({ children }) => {
      return <InlineCode>{children}</InlineCode>;
    },
    code: (props) => <code className="inline" {...props}></code>,
  };
}
