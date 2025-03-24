import type { Question } from "./Question";

import question1 from "./question-1";
import question2 from "./question-2";
import question3 from "./question-3";
import question4 from "./question-4";
import question5 from "./question-5";
import question6 from "./question-6";

export const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
] satisfies Question[];

export const correctAnswers = questions.map(
  (question) => question.correctAnswerId,
);
