"use client";

import { useStoreAnswer, useUserAnswers } from "@app/state/useAnswers";
import { useRouter } from "next/navigation";
import {
  startTransition,
  useActionState,
  useEffect,
  unstable_ViewTransition as ViewTransition,
} from "react";

import { submitAnswer } from "../../_actions/submit-answer";
import { QuestionOption } from "./question-option";

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
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  const handleSelect = (optionId: number) => {
    setUserAnswers(optionId);
    if (!isLastQuestion) {
      router.push(`/quiz/${step + 1}`);
      return;
    }

    startTransition(() => {
      // Need to update the answers object manually to avoid the stale state
      const answers = { ...userAnswers };
      answers[id] = optionId;
      formAction({ answers });
    });
  };

  return (
    <ViewTransition name="question">
      <form>
        <div className="question text-question">{inquiry}</div>
        <hr className="w-full my-5 text-shade-2" />
        <ul className="flex flex-col gap-2">
          {options.map((option, index) => (
            <li key={`${id}-${option.id}`}>
              <QuestionOption
                checked={userAnswers[id] === option.id}
                data-index={index}
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
