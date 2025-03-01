import type { Question } from "../Question";

import optionOneCodeExample from "./option-one-code-example.mdx";
import Question3 from "./question.mdx";

export default {
  id: 3,
  inquiry: Question3,
  options: [
    { id: 1, text: () => "Second Answer 3" },
    { id: 2, text: optionOneCodeExample },
    { id: 3, text: () => "Second Answer 3" },
  ],
  explanation: () => "explanation question 3",
  correctAnswerId: 1,
} satisfies Question;
