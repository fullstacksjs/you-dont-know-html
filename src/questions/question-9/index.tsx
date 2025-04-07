import type { Question } from "../Question";

import { IDontKnow, InvalidHTML } from "../shared-options";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 9,
  inquiry,
  options: [
    InvalidHTML,
    { id: 1, text: () => "Red" },
    { id: 2, text: () => "White" },
    { id: 3, text: () => "Blue" },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
