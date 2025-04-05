import type { Question } from "../Question";

import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 12,
  inquiry,
  options: [
    { id: 1, text: () => "1" },
    { id: 2, text: () => "3" },
    { id: 3, text: () => "4" },
    { id: 4, text: () => "None, there's a syntax error" },
    { id: 5, text: () => "I don't know" },
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
