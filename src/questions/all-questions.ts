import type { Question } from "./Question";

import questionOne from "./01";
import questionTwo from "./02";
import questionThree from "./03";

export const allQuestions = [
  questionOne,
  questionTwo,
  questionThree,
] satisfies Question[];

export const correctAnswers = allQuestions.map(
  (question) => question.correctAnswerId,
);
