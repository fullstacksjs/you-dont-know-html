import type { Question } from "../Question";

import inquiry from "./inquiry.mdx";

export default {
  id: 14,
  inquiry,
  options: [
    { id: 1, text: () => "Blue" },
    { id: 2, text: () => "Red" },
    { id: 3, text: () => "White" },
    { id: 4, text: () => "I don't know." },
  ],
  explanation: () => "explanation question 14",
  correctAnswerId: 1,
} satisfies Question;
