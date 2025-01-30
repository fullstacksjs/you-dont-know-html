import { CodeBlock } from "@/components/code-block";
import { Skeleton } from "@/components/skeleton";
import { Suspense } from "react";

const code = "<h2>Heading</h2>";

export default function CodeExample() {
  return (
    <Suspense fallback={<Skeleton />}>
      <section className="border border-black rounded-md p-4">
        <CodeBlock lang="html">{code}</CodeBlock>
      </section>
    </Suspense>
  );
}
