"use client";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
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
        "flex w-full items-center gap-3 rounded-lg border border-black p-3 has-checked:text-accent relative",
        {
          "border-success": isCorrectOption,
          "border-error": isWrongAnswered,
          "border-muted2": !isCorrectOption && !isWrongAnswered,
        },
      )}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: isCorrectOption
            ? "#00a16e"
            : isWrongAnswered
              ? "#ca343e"
              : "#585858",
          opacity: "20%",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 3,
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      />
      <div
        style={{
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {children}
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
