import { questions } from "@app/questions/questions";
import Link from "next/link";

import { Button } from "../_components/button";
import { Guard } from "../_components/guard";
import { AnswersProvider } from "./_components/answers-provider";
import { Confetti } from "./_components/confetti";
import { ShareButton } from "./_components/share-button";
import { SummaryResult } from "./_components/summary-result";

export default function SummaryPage() {
  const questionResults = questions.map((q) => ({
    id: q.id,
    correctAnswerId: q.correctAnswerId,
  }));

  return (
    <Guard questionCount={questions.length}>
      <AnswersProvider questions={questionResults}>
        <SummaryResult />
        <Confetti />
        <div className="flex flex-col items-center gap-4 max-w-[400px] w-full mx-auto">
          <Button asChild>
            <Link href="/review">Review Choices</Link>
          </Button>
          <ShareButton />
          <Button asChild variant="secondary">
            <Link href="/">Start Over</Link>
          </Button>
        </div>
      </AnswersProvider>
    </Guard>
  );
}
