import { useCallback } from "react";
import { useSessionStorage } from "usehooks-ts";

export type UserAnswers = Record<number, number>;

const initialAnswers: UserAnswers = {};

export function useResetUserAnswers() {
  return useSessionStorage("answers", initialAnswers)[2];
}

export function useUserAnswers() {
  return useSessionStorage<UserAnswers>("answers", initialAnswers)[0];
}

export function useStoreAnswer(questionId: number) {
  const [, setAnswers] = useSessionStorage<UserAnswers>(
    "answers",
    initialAnswers,
  );

  return useCallback(
    (answerId: number) => {
      setAnswers((answers) => ({ ...answers, [questionId]: answerId }));
    },
    [questionId, setAnswers],
  );
}
