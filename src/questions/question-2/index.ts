import type { Question } from "../Question";

import { IDontKnow } from "../IDontKnow";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 2,
  inquiry,
  options: [
    { id: 1, text: () => "Red" },
    { id: 2, text: () => "Blue" },
    { id: 3, text: () => "White" },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 1,
} satisfies Question;
