"use server";

import type { UserAnswers } from "@app/state/useAnswers";
import type { AnswerDto } from "@app/supabase/supabase";

import { questions } from "@app/questions/questions";
import { createGame } from "@app/supabase/supabase";

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
