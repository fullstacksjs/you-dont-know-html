"use client";

import { isNull } from "@fullstacksjs/toolbox";
import { use, useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

import { getMyPercentile } from "../_actions/getMyPercentile";
import { AnswersContext } from "./answers-provider";
import { Skeleton } from "./skeleton";

function getQuizResultMessage(score: number, total: number) {
  const percentage = (score * 100) / total;

  if (percentage === 0) {
    return (
      <>
        😅 You got 0 out of {total}.
        <br />
        At least you're honest! Better luck next time. 😉
      </>
    );
  } else if (percentage === 100) {
    return (
      <>
        🔥 Flawless! You nailed all {total} questions.
        <br /> You really *know* HTML!
      </>
    );
  } else if (percentage >= 75) {
    return (
      <>
        👍 You scored {score} out of {total}.
        <br />
        Excellent! You're really close to perfection. Keep up the great work!
      </>
    );
  } else if (percentage >= 50) {
    return (
      <>
        👍 You scored {score} out of {total}.
        <br />
        Great job! You're on the right track — keep going, you're doing awesome!
      </>
    );
  } else if (percentage >= 25) {
    return (
      <>
        You scored {score} out of {total}.
        <br />
        Not bad! You’re getting there. Keep practicing and you'll improve fast!
      </>
    );
  } else {
    return (
      <>
        You scored {score} out of {total}.
        <br />
        Not bad! Keep sharpening those tags. You're on the right track!
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

  if (loading) return <Skeleton />;

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-white text-3xl font-bold text-center">
        {getQuizResultMessage(correctAnswers, total)}
      </h2>
      {isPercentileLoading ? (
        <output className="inline-block w-72 h-7 bg-muted-2 animate-pulse rounded-md" />
      ) : (
        <p className="text-center text-muted-1">
          {getPercentileMessage(percentile)}
        </p>
      )}
    </div>
  );
}
