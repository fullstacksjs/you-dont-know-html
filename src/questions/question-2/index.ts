import type { Question } from "../Question";

import inquiry from "./inquiry.mdx";

export default {
  id: 2,
  inquiry,
  options: [
    { id: 1, text: () => "red" },
    { id: 2, text: () => "blue" },
    { id: 3, text: () => "white" },
    { id: 4, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 2",
  correctAnswerId: 1,
} satisfies Question;
