"use client";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { questions } from "@/questions/questions";
import { useUserAnswers } from "@/state/useAnswers";
import { useIsClient } from "usehooks-ts";

interface Props {
  children: ReactNode;
  optionId: number;
  step: number;
  percentage: number;
}

export function ReviewOption({ children, optionId, step, percentage }: Props) {
  const currentStep = step - 1;
  const answers = useUserAnswers();
  const isClient = useIsClient();

  const userAnswer = answers[currentStep];
  const correctAnswerId = questions.find(
    (q) => q.id === currentStep,
  )?.correctAnswerId;

  const isUserAnswerCorrect = correctAnswerId === userAnswer;
  const isCorrectOption = optionId === correctAnswerId;
  const isWrongAnswered =
    isClient && !isUserAnswerCorrect && userAnswer === optionId;

  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-md border border-border-dark p-3 has-checked:text-accent relative",
        {
          "border-success": isCorrectOption,
          "border-error": isWrongAnswered,
          "border-muted2": !isCorrectOption && !isWrongAnswered,
        },
      )}
    >
      <div
        style={{ width: `${percentage}%` }}
        className={cn("absolute opacity-20 h-full left-0 top-0", {
          "bg-success": isCorrectOption,
          "bg-error": isWrongAnswered,
          "bg-muted2": !isCorrectOption && !isWrongAnswered,
        })}
      />
      <div className="flex items-center w-full gap-4">
        <span className="flex-1 overflow-x-auto">{children}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
