import type { BundledLanguage } from "shiki";

import { getShikiTheme } from "@/lib/get-shiki-theme";
import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export async function CodeBlock({ children, lang }: Props) {
  "use cache";
  const customTheme = await getShikiTheme();

  const out = await codeToHtml(children, {
    lang,
    theme: customTheme,
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
