import { CodeBlock } from "@/components/code-block";
import { Suspense } from "react";

const code = "<p>test</p>";

export default function CodeExample() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <CodeBlock lang="html">{code}</CodeBlock>
    </Suspense>
  );
}
