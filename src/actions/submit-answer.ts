"use server";

import { saveUserAnswers } from "@/actions/save-answers.action";
import {
  isDuplicationError,
  isPermissionError,
} from "@/lib/supabase/supabase-error";
import { redirect } from "next/navigation";

export const submitAnswer = async (
  _prevState: { error?: string },
  {
    step,
    answers,
    isLastQuestion,
  }: { step: number; answers: Record<number, number>; isLastQuestion: boolean },
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
