import { CodeBlock } from "@/components/code-block";

import type { Question } from "../Question";

import Question4 from "./question.mdx";

export default {
  id: 3,
  inquiry: Question4,
  options: [
    { id: 1, text: () => "It does nothing." },
    {
      id: 2,
      text: () => (
        <>
          It creates a new standalone custom element called{" "}
          <CodeBlock>{"<counter-button>"}</CodeBlock>
        </>
      ),
    },
    {
      id: 3,
      text: () => (
        <>
          It can extend the <CodeBlock>{"<button>"}</CodeBlock> element with a
          custom behavior defined in the counter-button class.
        </>
      ),
    },
    { id: 4, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 4",
  correctAnswerId: 3,
} satisfies Question;
