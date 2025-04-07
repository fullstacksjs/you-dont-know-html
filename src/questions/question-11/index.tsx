import type { Question } from "../Question";

import { IDontKnow, InvalidHTML } from "../shared-options";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 11,
  inquiry,
  options: [
    InvalidHTML,
    { id: 1, text: () => "Blue" },
    { id: 2, text: () => "Red" },
    { id: 3, text: () => "CanvasText" },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 2,
} satisfies Question;
