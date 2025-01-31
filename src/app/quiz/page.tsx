"use client";
import type { Answer } from "@/types";

import { PreviewsIcon } from "@/components/previews-icon";
import { Question } from "@/components/question";
import questions from "@/questions/all-questions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentQuestion = questions[step];
  const currentAnswer = answers[step];
  const isEndsQuestion = step === questions.length;

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const previewsStep = () => {
    if (step === 0) {
      return router.push("/");
    }
    setStep((prevStep) => prevStep - 1);
  };

  const answerQuestion = (questionId: number, selectedOptionId: number) => {
    setAnswers((prevAnswers) => {
      const newAnswer = { questionId, selectedOptionId };
      const newAnswers = [...prevAnswers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
    nextStep();
  };

  return (
    <main
      className="flex justify-center md:items-center h-[100dvh]
"
    >
      <div className="p-4 md:px-0 w-full md:w-1/2">
        {!isEndsQuestion && (
          <button
            className=" text-white p-2 rounded-lg flex items-center gap-3 cursor-pointer mb-2"
            type="button"
            onClick={previewsStep}
          >
            <PreviewsIcon />
            <span className="text-muted font-bold">
              Question {step + 1}/{questions.length}
            </span>
          </button>
        )}
        {isEndsQuestion ? (
          <div>
            <p>ends - review answers</p>
            <pre>{JSON.stringify(answers, null, 2)}</pre>
          </div>
        ) : (
          <Question
            answer={currentAnswer}
            answerQuestion={answerQuestion}
            question={currentQuestion}
          />
        )}
      </div>
    </main>
  );
}
