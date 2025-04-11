import { isNull } from "@fullstacksjs/toolbox";
import "server-only";

import type { Database } from "./Database";

import { createSupabaseClient } from "./createClient";

export interface AnswerDto {
  questionId: number;
  answerId: number;
  correct: boolean;
}

type CreateAnswerSchema = Database["public"]["Tables"]["answer"]["Insert"];

export async function createGame(answers: AnswerDto[]) {
  const client = await createSupabaseClient();
  const { data: game, error: insertGameError } = await client
    .from("game")
    .insert({})
    .select("id")
    .single();

  if (!game)
    throw new Error("Failed to create game", { cause: insertGameError });

  const { data, error: insertAnswersError } = await client
    .from("answer")
    .insert(
      answers.map<CreateAnswerSchema>((a) => ({
        answer_id: a.answerId,
        question_id: a.questionId,
        is_correct: a.correct,
        game_id: game.id,
      })),
    )
    .select("id");

  if (!data)
    throw new Error("Failed to insert answers", { cause: insertAnswersError });

  return game.id;
}

export async function getAnswersCount(questionId: number, optionId: number) {
  const client = await createSupabaseClient();
  const { count, error } = await client
    .from("answer")
    .select("*", { count: "exact" })
    .eq("question_id", questionId)
    .eq("answer_id", optionId);

  if (isNull(count))
    throw new Error("Failed to get answers count", { cause: error });

  return count;
}

export async function getGamesCount(questionId: number) {
  const client = await createSupabaseClient();
  const { count, error } = await client
    .from("answer")
    .select("*", { count: "exact" })
    .eq("question_id", questionId);

  if (isNull(count))
    throw new Error("Failed to get games count", { cause: error });

  return count;
}

export async function getGamesCountWithCorrectAnswers(correctAnswers: number) {
  const client = await createSupabaseClient();
  const { data, error } = await client.rpc("get_games_with_correct_answers", {
    min_correct_answers: correctAnswers,
  });

  if (error) throw new Error("Failed to get rank", { cause: error });

  return data.length;
}
