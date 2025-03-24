"use client";
import type { UserAnswers } from "@/state/useAnswers";
import type { ReactNode } from "react";

import { useStoreAnswer, useUserAnswers } from "@/state/useAnswers";
import { usePress } from "react-aria";

interface Props {
  children: ReactNode;
  id: number;
  onSelect?: (id: number, answers: UserAnswers) => void;
  questionId: number;
}

export function QuestionOption({ children, questionId, id, onSelect }: Props) {
  const userAnswers = useUserAnswers();
  const answerQuestion = useStoreAnswer(questionId);
  const userAnswer = userAnswers[questionId];
  const isAnswered = userAnswer != null;

  const handleSelect = () => {
    answerQuestion(id);
    onSelect?.(id, userAnswers);
  };

  const { pressProps } = usePress({ onPress: handleSelect });

  return (
    <label
      className="flex w-full items-center gap-3 rounded-lg border border-border-dark p-3 cursor-pointer has-checked:text-accent has-checked:bg-shade-2"
      tabIndex={0}
      {...pressProps}
    >
      <div className="size-[26px] shrink-0 cursor-pointer rounded-full border-2 border-foreground grid justify-center items-center has-checked:border-accent">
        <input
          checked={isAnswered && id === userAnswer}
          className="hidden peer"
          type="radio"
        />
        <div className="hidden size-[14px] rounded-full bg-accent peer-checked:block"></div>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </label>
  );
}
