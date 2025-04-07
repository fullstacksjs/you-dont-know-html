import type { Question } from "../Question";

import { IDontKnow, InvalidHTML } from "../shared-options";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 12,
  inquiry,
  options: [
    InvalidHTML,
    { id: 1, text: () => "1" },
    { id: 2, text: () => "3" },
    { id: 3, text: () => "4" },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
