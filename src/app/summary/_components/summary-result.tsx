"use client";

import { use } from "react";

import { AnswersContext } from "./answers-provider";
import { Skeleton } from "./skeleton";

function getQuizResultMessage(score: number, total: number) {
  if (score === 0) {
    return (
      <>
        😅 You got 0 out of {total}.
        <br />
        At least you're honest!
      </>
    );
  } else if (score === total) {
    return (
      <>
        🔥 Flawless! You nailed all {total} questions.
        <br /> Maybe you *do* know HTML after all.
      </>
    );
  } else {
    return (
      <>
        You scored {score} out of {total}.
        <br />
        Not bad! Keep sharpening those tags.
      </>
    );
  }
}

export function SummaryResult() {
  const { correctAnswers, loading, total } = use(AnswersContext);

  if (loading) return <Skeleton />;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-3xl font-bold text-center">
        {getQuizResultMessage(correctAnswers, total)}
      </h2>
      <p className="text-lg text-muted-1 text-center">
        Feeling confident? Challenge yourself with another quiz!
      </p>
    </div>
  );
}
