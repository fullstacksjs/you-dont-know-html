import { codeBlock } from "@app/mdx/code-block";
import { compileMDX } from "@app/mdx/compileMdx";

import type { Question } from "../Question";

import { IDontKnow } from "../IDontKnow";
import explanation from "./explanation.mdx";

export default {
  id: 5,
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
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 2,
} satisfies Question;
