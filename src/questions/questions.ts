import type { Question } from "./Question";

import questionOne from "./question-1";
import questionTwo from "./question-2";
import questionThree from "./question-3";
import questionFour from "./question-4";
import questionFive from "./question-5";

export const questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
] satisfies Question[];

export const correctAnswers = questions.map(
  (question) => question.correctAnswerId,
);
