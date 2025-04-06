"use server";

import {
  isDuplicationError,
  isPermissionError,
} from "@app/supabase/supabase-error";
import { redirect } from "next/navigation";

import { saveUserAnswers } from "./save-answers.action";

interface Args {
  step: number;
  answers: Record<number, number>;
  isLastQuestion: boolean;
}

export const submitAnswer = async (
  _prevState: { error?: string },
  { step, answers, isLastQuestion }: Args,
): Promise<{ error?: string }> => {
  try {
    if (isLastQuestion) {
      await saveUserAnswers(answers);
      redirect("/summary");
    } else {
      redirect(`/quiz/${step + 1}`);
    }
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
