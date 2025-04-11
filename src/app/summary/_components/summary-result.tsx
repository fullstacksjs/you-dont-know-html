"use client";

import { isNull } from "@fullstacksjs/toolbox";
import { use, useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

import { getMyPercentile } from "../_actions/getMyPercentile";
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

function getPercentileMessage(percentile: number) {
  if (percentile === 0) return "You're in a league of your own!";
  return `You did better than ${percentile}% of people!`;
}

export function SummaryResult() {
  const { correctAnswers, loading, total } = use(AnswersContext);
  const isClient = useIsClient();
  const [percentile, setPercentile] = useState<number | undefined>();
  const isPercentileLoading = !isClient || isNull(percentile);

  useEffect(() => {
    getMyPercentile(correctAnswers)
      .then(setPercentile)
      .catch(() => {
        setPercentile(0);
      });
  }, [correctAnswers]);

  if (loading || isPercentileLoading) return <Skeleton />;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-3xl font-bold text-center">
        {getQuizResultMessage(correctAnswers, total)}
      </h2>
      <p className="text-center text-muted-1">
        {getPercentileMessage(percentile)}
      </p>
    </div>
  );
}
