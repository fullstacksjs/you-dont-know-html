import { CodeBlock } from "@/components/code-block";
import { Skeleton } from "@/components/skeleton";
import { Suspense } from "react";

const code = `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;

export default function CodeExample() {
  return (
    <Suspense fallback={<Skeleton />}>
      <CodeBlock lang="html">{code}</CodeBlock>
    </Suspense>
  );
}
