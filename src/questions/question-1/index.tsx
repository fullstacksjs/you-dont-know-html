import type { Question } from "../Question";

import { CodeBlock } from "../../components/code-block";
import explanation from "./explanation.mdx";
import question from "./question.mdx";

export default {
  id: 1,
  inquiry: question,
  options: [
    {
      id: 1,
      text: () => (
        <>
          <CodeBlock>{"<code>"}</CodeBlock>,<CodeBlock>{"<output>"}</CodeBlock>
        </>
      ),
    },
    {
      id: 2,
      text: () => (
        <>
          <CodeBlock>{"<pre>"}</CodeBlock>,<CodeBlock>{"<output>"}</CodeBlock>
        </>
      ),
    },
    {
      id: 3,
      text: () => (
        <>
          <CodeBlock>{"<code>"}</CodeBlock>,<CodeBlock>{"<samp>"}</CodeBlock>
        </>
      ),
    },
    {
      id: 4,
      text: () => (
        <>
          <CodeBlock>{"<pre>"}</CodeBlock>,<CodeBlock>{"<samp>"}</CodeBlock>
        </>
      ),
    },
    { id: 5, text: () => "I don't know" },
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
