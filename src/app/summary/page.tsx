"use client";

import { useSessionStorage } from "usehooks-ts";

export default function SummaryPage() {
  const [answers] = useSessionStorage<number[]>("answers", []);

  return (
    <div>
      summary page
      <div>
        <p>ends - review answers</p>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      </div>
    </div>
  );
}
