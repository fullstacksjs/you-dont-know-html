import type { Question } from "../Question";

import { IDontKnow } from "../IDontKnow";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 9,
  inquiry,
  options: [
    { id: 1, text: () => "Red" },
    { id: 2, text: () => "White" },
    { id: 3, text: () => "Blue" },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
