import { CodeBlock } from "@/components/code-block";
import { Suspense } from "react";

const code = "<h2>Heading</h2>";

export default function CodeExample() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <CodeBlock lang="html">{code}</CodeBlock>
    </Suspense>
  );
}
