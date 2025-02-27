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
      <section className="border border-black rounded-md p-4">
        <CodeBlock lang="html">{code}</CodeBlock>
      </section>
    </Suspense>
  );
}
