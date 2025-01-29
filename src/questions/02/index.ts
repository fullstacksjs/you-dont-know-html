import codeExample from "./code-example";
import question from "./question.mdx";

export default {
  id: 2,
  question,
  codeExample,
  options: [
    { id: 1, text: "Answer" },
    { id: 2, text: "Long answer so it should wrap to the next line" },
    { id: 3, text: "I don’t know" },
  ],
  explanation: "explanation question 2",
  correctAnswer: 1,
};
