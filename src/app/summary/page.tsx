import { Button } from "@/components/button";
import { SummaryResult } from "@/components/summary-result";
import { Link } from "next-view-transitions";

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
