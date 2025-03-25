import { createServerSupabaseClient } from "./supabase/createServerClient";

export interface AnswerDto {
  questionId: number;
  answerId: number;
  correct: boolean;
}

export const createGame = async (answers: AnswerDto[]) => {
  const supabase = await createServerSupabaseClient();
  supabase.from("game").insert({});
};

export const getAnswersCount = (questionId: number, optionId: number) => {
  // prisma.answer.count({ where: { questionId, answerId: optionId } });
};

export const getGamesCount = (questionId: number) => {
  // prisma.answer.count({ where: { questionId } });
};
