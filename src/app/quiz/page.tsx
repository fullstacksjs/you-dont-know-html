"use client";

import { Question } from "@/components/question";
import { allQuestions } from "@/questions/all-questions";
import { useState } from "react";

interface Answer {
  questionId: number;
  selectedOptionId: number;
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentQuestion = allQuestions[step];
  const isEndsQuestion = step === allQuestions.length;

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  const answerQuestion = (questionId: number, selectedOptionId: number) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId, selectedOptionId },
    ]);
    nextStep();
  };

  return (
    <main className="p-4">
      {isEndsQuestion ? (
        <div>
          <p>ends - review answers</p>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      ) : (
        <Question answerQuestion={answerQuestion} question={currentQuestion} />
      )}
    </main>
  );
}
