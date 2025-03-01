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

  return (
    <label
      className="flex w-full items-center gap-3 rounded-lg border border-black p-3 cursor-pointer has-checked:text-accent"
      htmlFor={name}
    >
      <input
        checked={currentAnswer ? id === currentAnswer : false}
        className="appearance-none w-5 h-5 cursor-pointer rounded-full border-2 border-white checked:bg-accent checked:border-accent checked:shadow-radio-ring"
        id={name}
        type="radio"
        onChange={answerQuestion}
      />
      {children}
    </label>
  );
}
