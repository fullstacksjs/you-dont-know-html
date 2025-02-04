import questionOne from "@/questions/01";
import questionTwo from "@/questions/02";
import questionThree from "@/questions/03";

export const allQuestions = [questionOne, questionTwo, questionThree];

export const correctAnswers = allQuestions.map(
  (question) => question.correctAnswer
);
