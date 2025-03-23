import { questions } from "@/questions/questions";

import { CorrectAnswerCount } from "./correct-answer-count";

export function SummaryResult() {
  const questionResults = questions.map((q) => ({
    id: q.id,
    correctAnswerId: q.correctAnswerId,
  }));

  return (
    <h2 className="text-white text-3xl font-bold text-center">
      You got <CorrectAnswerCount questions={questionResults} /> out of{" "}
      {questions.length} correct!
    </h2>
  );
}
