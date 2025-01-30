"use client";
import type { Answer } from "@/types";

import { PreviewsIcon } from "@/components/previews-icon";
import { Question } from "@/components/question";
import { allQuestions } from "@/questions/all-questions";
import { useState } from "react";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentQuestion = allQuestions[step];
  const currentAnswer = answers[step];
  const isEndsQuestion = step === allQuestions.length;

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const previewsStep = () => setStep((prevStep) => prevStep - 1);

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
      <div className="p-4 md:w-1/2">
        {step > 0 && !isEndsQuestion && (
          <button
            className=" text-white p-2 rounded-lg flex items-center gap-3 cursor-pointer mb-2"
            type="button"
            onClick={previewsStep}
          >
            <PreviewsIcon />
            <span className="text-muted">
              Question {step}/{allQuestions.length}
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
