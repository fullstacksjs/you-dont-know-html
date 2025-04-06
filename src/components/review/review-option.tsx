"use client";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useUserAnswers } from "@/state/useAnswers";
import { useIsClient } from "usehooks-ts";

import { ReviewLabel } from "../review-label";

interface Props {
  children: ReactNode;
  optionId: number;
  correctAnswerId: number;
  questionId: number;
  percentage: number;
}

export function ReviewOption({
  children,
  optionId,
  correctAnswerId,
  questionId,
  percentage,
}: Props) {
  const answers = useUserAnswers();
  const isClient = useIsClient();

  const userAnswer = answers[questionId];

  const isUserAnswerCorrect = correctAnswerId === userAnswer;
  const isCorrectOption = optionId === correctAnswerId;
  const isWrongAnswered =
    isClient && !isUserAnswerCorrect && userAnswer === optionId;

  return (
    <ReviewLabel
      className={cn("relative", {
        "border-success": isCorrectOption,
        "border-error": isWrongAnswered,
      })}
    >
      <div
        style={{ width: `${percentage}%` }}
        className={cn("absolute opacity-20 h-full left-0 top-0", {
          "bg-success": isCorrectOption,
          "bg-error": isWrongAnswered,
          "bg-muted-2": !isCorrectOption && !isWrongAnswered,
        })}
      />
      <div className="flex items-center w-full">
        <span className="flex-1 overflow-x-auto">{children}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </ReviewLabel>
  );
}
