"use server";

import type { AnswerDto } from "@/lib/db";

import { createGame } from "@/lib/db";
import { allQuestions } from "@/questions/all-questions";

export async function saveAnswers(answerIds: number[]) {
  const answers = allQuestions.map<AnswerDto>((question, index) => {
    return {
      questionId: question.id,
      answerId: answerIds[index],
      correct: question.correctAnswerId === answerIds[index],
    };
  });

  const response = await createGame(answers);

  return response;
}
