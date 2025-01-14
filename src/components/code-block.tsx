import type { BundledLanguage } from "shiki";

import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export async function CodeBlock({ children, lang }: Props) {
  const out = await codeToHtml(children, {
    lang,
    theme: "github-dark",
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
