"use client";

import { useUserAnswers } from "@app/state/useAnswers";
import { redirect } from "next/navigation";
import { useIsClient } from "usehooks-ts";

export function Guard({
  children,
  questionCount,
}: {
  children: React.ReactNode;
  questionCount: number;
}) {
  const isClient = useIsClient();
  const answers = useUserAnswers();

  if (isClient && Object.keys(answers).length < questionCount) {
    redirect(`/quiz/1`);
  }

  return children;
}
