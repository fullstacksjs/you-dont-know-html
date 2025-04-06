"use client";

import type { ReactNode } from "react";

import { cn } from "@app/cn";
import { useUserAnswers } from "@app/state/useAnswers";
import { useIsClient } from "usehooks-ts";

import { RadioLabel } from "../../_components/radio-label";

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
    <RadioLabel
      className={cn("relative", {
        "border-success": isCorrectOption,
        "border-error": isWrongAnswered,
      })}
    >
      <div
        style={{ width: `${percentage}%` }}
        className={cn("absolute -z-10 opacity-20 h-full left-0 top-0", {
          "bg-success": isCorrectOption,
          "bg-error": isWrongAnswered,
          "bg-muted-2": !isCorrectOption && !isWrongAnswered,
        })}
      />
      <span className="flex-1">{children}</span>
      <span className="shrink-0">{Math.round(percentage)}%</span>
    </RadioLabel>
  );
}
