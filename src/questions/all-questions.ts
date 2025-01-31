import type { QuestionDefinition } from "@/lib/question/mod";
import questionOne from "@/questions/01";
import questionTwo from "@/questions/02";
import questionThree from "@/questions/03";

type QuestionSet = Set<QuestionDefinition>;
const questionSet: QuestionSet = new Set([
  questionOne,
  questionTwo,
  questionThree,
]);

type Questions = Array<QuestionDefinition>;
const questions: Questions = Array.from(questionSet);

export default questions;
export { questions, questionSet };
