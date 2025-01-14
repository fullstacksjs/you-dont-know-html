import { CodeBlock } from "@/components/code-block";
import { Suspense } from "react";

const code = "<p>test</p>";

export default function Snippet() {
  return (
    <Suspense fallback={<p>snippet loading...</p>}>
      <CodeBlock lang="html">{code}</CodeBlock>
    </Suspense>
  );
}
