"use client";
import type { Question } from "@app/questions/Question";

import { useUserAnswers } from "@app/state/useAnswers";
import { isNull } from "@fullstacksjs/toolbox";
import { useEffect, useState } from "react";

import { Skeleton } from "./skeleton";

interface Props {
  questions: Pick<Question, "correctAnswerId" | "id">[];
}

export const CorrectAnswerCount = ({ questions }: Props) => {
  const answers = useUserAnswers();
  const [correctAnswers, setCorrectAnswers] = useState<number>();

  useEffect(() => {
    setCorrectAnswers(
      questions.filter((q) => answers[q.id] === q.correctAnswerId).length,
    );
  }, [answers, questions]);

  if (isNull(correctAnswers)) return <Skeleton />;
  return correctAnswers.toString().padStart(2, "0");
};
