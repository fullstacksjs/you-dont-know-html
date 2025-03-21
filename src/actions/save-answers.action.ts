"use server";

import type { AnswerDto } from "@/lib/db";
import type { UserAnswers } from "@/state/useAnswers";

import { createGame } from "@/lib/db";
import { questions } from "@/questions/questions";

export async function saveUserAnswers(userAnswers: UserAnswers) {
  const answers = Object.entries(userAnswers).map<AnswerDto>(
    ([questionId, answerId]) => ({
      questionId: Number(questionId),
      answerId,
      correct:
        questions.find((q) => q.id === Number(questionId))?.correctAnswerId ===
        answerId,
    }),
  );
  const response = await createGame(answers);

  return response;
}
