"use client";

import type { Question } from "@app/questions/Question";

import { useUserAnswers } from "@app/state/useAnswers";
import { isNull } from "@fullstacksjs/toolbox";
import { createContext, useEffect, useMemo, useState } from "react";
import { useIsClient } from "usehooks-ts";

export const AnswersContext = createContext<{
  correctAnswers: number;
  loading: boolean;
  total: number;
}>({
  correctAnswers: 0,
  total: 0,
  loading: true,
});

export const AnswersProvider = ({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: Pick<Question, "correctAnswerId" | "id">[];
}) => {
  const isClient = useIsClient();
  const answers = useUserAnswers();
  const [correctAnswers, setCorrectAnswers] = useState<number>();
  const loading = !isClient || isNull(correctAnswers);

  useEffect(() => {
    setCorrectAnswers(
      questions.filter((q) => answers[q.id] === q.correctAnswerId).length,
    );
  }, [answers, questions]);

  const value = useMemo(
    () => ({
      correctAnswers: correctAnswers ?? 0,
      loading,
      total: questions.length,
    }),
    [correctAnswers, loading, questions.length],
  );

  return <AnswersContext value={value}>{children}</AnswersContext>;
};
