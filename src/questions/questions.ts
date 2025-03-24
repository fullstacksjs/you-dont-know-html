import type { Question } from "./Question";

import question1 from "./question-1";
import question2 from "./question-2";
import question3 from "./question-3";
import question4 from "./question-4";
import question5 from "./question-5";
import question6 from "./question-6";
import question7 from "./question-7";
import question8 from "./question-8";
import question9 from "./question-9";

export const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
] satisfies Question[];

export const correctAnswers = questions.map(
  (question) => question.correctAnswerId,
);
