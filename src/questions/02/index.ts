import type { Question } from "../Question";

import question from "./question.mdx";

export default {
  id: 2,
  inquiry: question,
  options: [
    { id: 1, text: () => "red" },
    { id: 2, text: () => "blue" },
    { id: 3, text: () => "white" },
    { id: 4, text: () => "I don’t know" },
  ],
  explanation: () => "explanation question 2",
  correctAnswerId: 1,
} satisfies Question;
