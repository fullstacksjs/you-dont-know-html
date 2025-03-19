import type { Question } from "./Question";

import questionOne from "./question-1";
import questionTwo from "./question-2";
import questionThree from "./question-3";

export const questions = [
  questionOne,
  questionTwo,
  questionThree,
] satisfies Question[];

export const correctAnswers = questions.map(
  (question) => question.correctAnswerId,
);
