import type { MDXComponents } from "mdx/types";

import { InlineCode } from "./components/inline-code";

// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks, @eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    blockquote: ({ children }) => (
      <blockquote className="relative bg-info/10 pl-8 pr-4 py-3 rounded border border-border-dark text-muted-3 leading-relaxed before:content-['“'] before:text-foreground/40 before:font-bold before:text-2xl before:absolute before:top-3 before:left-3 before:font-mono **:data-code:text-accent **:data-code:text-sm **:data-codeblock:text-sm">
        {children}
      </blockquote>
    ),
    a: ({ children, ...props }) => (
      <a
        data-external
        className="text-info underline"
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="text-border-dark" />,
    H: ({ children }) => {
      return <InlineCode>{children}</InlineCode>;
    },
    code: (props) => <code className="inline" data-code {...props}></code>,
  };
}
