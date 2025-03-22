"use client";
import { questions } from "@/questions/questions";
import { useUserAnswers } from "@/state/useAnswers";
import { isEmptyObject } from "@fullstacksjs/toolbox";
import { redirect } from "next/navigation";

export function SummaryResult() {
  const answers = useUserAnswers();

  const correctAnswers = questions.filter(
    (question, index) => answers[index] === question.correctAnswerId,
  );

  if (isEmptyObject(answers)) return redirect("/");

  return (
    <h2 className="text-white text-3xl font-bold text-center">{`You got ${correctAnswers.length} out of ${correctAnswers.length} correct!`}</h2>
  );
}
