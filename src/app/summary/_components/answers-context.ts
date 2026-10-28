"use client";

import { createContext } from "react";

export const AnswersContext = createContext<{
  correctAnswers: number;
  loading: boolean;
  total: number;
}>({
  correctAnswers: 0,
  total: 0,
  loading: true,
});
AnswersContext.displayName = "AnswersContext";
