"use client";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useIsClient, useSessionStorage } from "usehooks-ts";

interface Props {
  children: ReactNode;
  correctAnswers: number[];
  optionId: number;
  step: number;
  percentage: number;
}

export function ReviewOption({
  children,
  correctAnswers,
  optionId,
  step,
  percentage,
}: Props) {
  const currentStep = step - 1;
  const [answers] = useSessionStorage<number[]>("answers", []);
  const isClient = useIsClient();

  const answer = answers[currentStep];
  const correctAnswer = correctAnswers[currentStep];
  const isCorrect = correctAnswer === answer;

  const isCorrectOption = optionId === correctAnswer;
  const isWrongAnswered = isClient && !isCorrect && answer === optionId;

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
      <div className="flex items-center w-full">
        <span className="flex-1">{children}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
