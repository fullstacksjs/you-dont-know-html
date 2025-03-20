"use client";
import { saveAnswers } from "@/actions/save-answers.action";
import { questions } from "@/questions/questions";
import { isNullOrEmptyArray } from "@fullstacksjs/toolbox";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";

export function SummaryResult() {
  const [answers] = useSessionStorage<number[]>("answers", []);

  const correctAnswers = questions.filter(
    (question, index) => answers[index] === question.correctAnswerId,
  );

  useEffect(() => {
    if (isNullOrEmptyArray(answers)) return;
    void saveAnswers(answers);
  }, [answers]);

  if (isNullOrEmptyArray(answers)) return redirect("/");

  return (
    <h2 className="text-white text-3xl font-bold text-center">{`You got ${correctAnswers.length} out of ${questions.length} correct!`}</h2>
  );
}
