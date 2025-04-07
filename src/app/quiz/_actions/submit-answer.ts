"use server";

import {
  isDuplicationError,
  isPermissionError,
} from "@app/supabase/supabase-error";
import { redirect } from "next/navigation";

import { saveUserAnswers } from "./save-answers.action";

interface Args {
  answers: Record<number, number>;
}

export const submitAnswer = async (
  _prevState: { error?: string },
  { answers }: Args,
): Promise<{ error?: string }> => {
  try {
    await saveUserAnswers(answers);
    redirect("/summary");
  } catch (e) {
    if (isPermissionError(e)) {
      return { error: "Not permitted! The project might be misconfigured." };
    }
    if (isDuplicationError(e)) {
      return { error: "You have already submitted your answers." };
    }
    throw e;
  }
};
