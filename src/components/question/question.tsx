"use client";
import type { UserAnswers } from "@/state/useAnswers";

import { submitAnswer } from "@/actions/submit-answer";
import { useStoreAnswer, useUserAnswers } from "@/state/useAnswers";
import {
  startTransition,
  useActionState,
  unstable_ViewTransition as ViewTransition,
} from "react";

import { QuestionOption } from "./question-option";

export interface AnswerEvent {
  questionId: number;
  optionId: number;
  userAnswers: UserAnswers;
}

interface Props {
  id: number;
  inquiry: React.ReactNode;
  step: number;
  options: {
    id: number;
    text: React.ReactNode;
  }[];
  isLastQuestion: boolean;
}

export function Question({
  id,
  inquiry,
  options,
  step,
  isLastQuestion,
}: Props) {
  const [, formAction, pending] = useActionState(submitAnswer, {});
  const setUserAnswers = useStoreAnswer(id);
  const userAnswers = useUserAnswers();

  const handleSelect = (optionId: number) => {
    setUserAnswers(optionId);

    startTransition(() => {
      // Need to update the answers object manually to avoid the stale state
      const answers = { ...userAnswers };
      answers[id] = optionId;
      formAction({ step, answers, isLastQuestion });
    });
  };

  return (
    <ViewTransition name="question">
      <form>
        <div className="question text-question">{inquiry}</div>
        <hr className="w-full my-5 text-shade-2" />
        <ul className="flex flex-col gap-2">
          {options.map((option) => (
            <li key={`${id}-${option.id}`}>
              <QuestionOption
                checked={userAnswers[id] === option.id}
                disabled={pending}
                id={option.id}
                onSelect={handleSelect}
                questionId={id}
              >
                {option.text}
              </QuestionOption>
            </li>
          ))}
        </ul>
      </form>
    </ViewTransition>
  );
}
