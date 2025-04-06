import Link from "next/link";

import { Button } from "../_components/button";
import { SummaryResult } from "./_components/summary-result";

export default function SummaryPage() {
  return (
    <>
      <SummaryResult />
      <p className="text-lg text-center">
        Feeling confident? Challenge yourself with another quiz!
      </p>

      <div className="flex flex-col items-center gap-4">
        <Button asChild>
          <Link href="/review">Review Choices</Link>
        </Button>
        <Button type="button" variant="secondary">
          Share
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">Start Over</Link>
        </Button>
      </div>
    </>
  );
}
