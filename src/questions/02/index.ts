import type { Question } from "../Question";

import question from "./question.mdx";

export default {
  id: 2,
  inquiry: question,
  options: [
    { id: 1, text: () => "Answer" },
    { id: 2, text: () => "Long answer so it should wrap to the next line" },
    { id: 3, text: () => "I don’t know" },
  ],
  explanation: () => "explanation question 2",
  correctAnswerId: 1,
} satisfies Question;
