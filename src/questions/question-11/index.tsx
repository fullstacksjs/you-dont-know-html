import type { Question } from "../Question";

import inquiry from "./inquiry.mdx";

export default {
  id: 11,
  inquiry,
  options: [
    { id: 1, text: () => "Red" },
    { id: 2, text: () => "White" },
    { id: 3, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 11",
  correctAnswerId: 1,
} satisfies Question;
