"use server";

import {
  isDuplicationError,
  isPermissionError,
} from "@/lib/supabase/supabase-error";
import { sleep } from "@fullstacksjs/toolbox";
import { redirect } from "next/navigation";

interface Args {
  step: number;
  answers: Record<number, number>;
  isLastQuestion: boolean;
}

export const submitAnswer = async (
  _prevState: { error?: string },
  { step, isLastQuestion }: Args,
): Promise<{ error?: string }> => {
  try {
    if (isLastQuestion) {
      // await saveUserAnswers(answers);
      await sleep(100);
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
