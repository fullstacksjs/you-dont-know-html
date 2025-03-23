import { codeBlock } from "@/lib/mdx/code-block";
import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

export default {
  id: 3,
  inquiry: () =>
    'How do you properly define the term "CSS" in HTML using semantic elements?',
  options: [
    {
      id: 1,
      text: await compileMDX(
        codeBlock`
          <p>
            <dfn>CSS</dfn> control web page styles.
          </p>`,
      ),
    },
    {
      id: 2,
      text: await compileMDX(
        codeBlock`
          <p>
            <dfn><abbr title="Cascading Style Sheets">CSS</abbr></dfn>
            controls web page styles.
          </p>`,
      ),
    },
    {
      id: 3,
      text: await compileMDX(
        codeBlock`
          <p>
            <dfn title="Cascading Style Sheets">CSS</dfn> is used for styling HTML.
          </p>`,
      ),
    },
    {
      id: 4,
      text: await compileMDX(
        codeBlock`
          <dfn title="Cascading Style Sheets">
            <abbr>CSS</abbr> is used for styling HTML.
          </dfn>`,
      ),
    },
    { id: 5, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 4",
  correctAnswerId: 3,
} satisfies Question;
