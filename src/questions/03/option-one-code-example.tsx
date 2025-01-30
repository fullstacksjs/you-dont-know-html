import { CodeBlock } from "@/components/code-block";
import { Skeleton } from "@/components/skeleton";
import { Suspense } from "react";

const code = "<h2>Heading</h2>";

export default function CodeExample() {
  return (
    <Suspense fallback={<Skeleton />}>
      <CodeBlock lang="html">{code}</CodeBlock>
    </Suspense>
  );
}
