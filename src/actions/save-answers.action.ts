"use server";

import { createPlay } from "@/lib/db";
import { allQuestions } from "@/questions/all-questions";

export async function saveAnswers(answers: number[]) {
  const playPayload = allQuestions.map((question, index) => {
    return {
      questionId: question.id,
      answerId: answers[index],
      correct: question.correctAnswer === answers[index],
    };
  });

  const response = await createPlay(playPayload);

  return response;
}
