import type { BundledLanguage } from "shiki";

import { use, useMemo } from "react";
import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export function CodeBlock({ children, lang }: Props) {
  const codeToHtmlPremiss = useMemo(
    () =>
      codeToHtml(children, {
        lang,
        theme: "github-dark",
      }),
    [children, lang],
  );
  const out = use(codeToHtmlPremiss);

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
