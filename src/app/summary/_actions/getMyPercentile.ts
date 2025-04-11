"use server";
import { questions } from "@app/questions/questions";
import { getGamesCountWithCorrectAnswers } from "@app/supabase/supabase";
import { percent } from "@fullstacksjs/toolbox";

export async function getMyPercentile(correctAnswers: number) {
  const gamesCount = await getGamesCountWithCorrectAnswers(correctAnswers);
  return percent(gamesCount, questions.length);
}
