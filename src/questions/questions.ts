import type { Question } from "./Question";

import question1 from "./question-1";
import question10 from "./question-10";
import question11 from "./question-11";
import question12 from "./question-12";
import question13 from "./question-13";
import question14 from "./question-14";
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
  question10,
  question11,
  question12,
  question13,
  question14,
] satisfies Question[];

export const correctAnswers = questions.map(
  (question) => question.correctAnswerId,
);
