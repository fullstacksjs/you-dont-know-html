"use client";
import type { ReactNode } from "react";

import { useTransitionRouter } from "next-view-transitions";
import { useParams } from "next/navigation";
import { useSessionStorage } from "usehooks-ts";

interface Props {
  name: string;
  children: ReactNode;
  id: number;
  totalNumber: number;
}

export function QuestionOption({ name, children, id, totalNumber }: Props) {
  const router = useTransitionRouter();
  const step = Number(useParams().step);
  const currentStep = step - 1;
  const [answers, setAnswers] = useSessionStorage<number[]>("answers", []);

  const currentAnswer = answers[currentStep];

  const nextStep = () => {
    if (step === totalNumber) {
      return router.push("/summary");
    }

    return router.push(`/quiz/${step + 1}`);
  };

  const answerQuestion = () => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentStep] = id;
      return newAnswers;
    });
    nextStep();
  };

  const isAnswered = currentAnswer != null;

  return (
    <label
      className="flex w-full items-center gap-3 rounded-lg border border-border-dark p-3 cursor-pointer has-checked:text-accent has-checked:bg-shade-2"
      htmlFor={name}
    >
      <div className="size-[26px] cursor-pointer rounded-full border-2 border-foreground grid justify-center items-center has-checked:border-accent">
        <input
          checked={isAnswered && id === currentAnswer}
          className="hidden peer"
          id={name}
          type="radio"
          onClick={answerQuestion}
        />
        <div className="hidden size-[14px] rounded-full bg-accent peer-checked:block"></div>
      </div>
      {children}
    </label>
  );
}
