import type { Question } from "../Question";

import { IDontKnow } from "../shared-options";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 14,
  inquiry,
  options: [
    { id: 1, text: () => "Blue" },
    { id: 2, text: () => "Red" },
    { id: 3, text: () => "White" },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 1,
} satisfies Question;
