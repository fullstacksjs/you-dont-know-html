import type { Question } from "../Question";

import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 16,
  inquiry,
  options: [
    { id: 1, text: () => "1" },
    { id: 2, text: () => "2" },
    { id: 3, text: () => "3" },
    { id: 4, text: () => "I don't know." },
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
