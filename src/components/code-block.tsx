import type { BundledLanguage } from "shiki";

import { customTheme } from "@/lib/custom-theme";
import { use, useMemo } from "react";
import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export function CodeBlock({ children, lang }: Props) {
  const codeToHtmlPromise = useMemo(() => {
    return codeToHtml(children, {
      lang,
      theme: customTheme,
    });
  }, [children, lang]);

  const out = use(codeToHtmlPromise);

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
