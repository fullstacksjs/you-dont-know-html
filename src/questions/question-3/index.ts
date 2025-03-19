import type { Question } from "../Question";

import option1 from "./option-1.mdx";
import option2 from "./option-2.mdx";
import option3 from "./option-3.mdx";
import Question3 from "./question.mdx";

export default {
  id: 3,
  inquiry: Question3,
  options: [
    { id: 3, text: option3 },
    { id: 1, text: option1 },
    { id: 2, text: option2 },
  ],
  explanation: () => "explanation question 3",
  correctAnswerId: 1,
} satisfies Question;
