import { codeBlock } from "@app/mdx/code-block";
import { compileMDX } from "@app/mdx/compileMdx";

import type { Question } from "../Question";

import { IDontKnow } from "../shared-options";
import explanation from "./explanation.mdx";

export default {
  id: 5,
  inquiry: () =>
    'What is the correct way to define the term "CSS" in HTML using semantic markup?',
  options: [
    {
      id: 1,
      text: await compileMDX(
        codeBlock`
          <p>
           <dfn>CSS</dfn> controls web page styles.
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
           <dfn title="Cascading Style Sheets">CSS</dfn> controls web page styles.
          </p>`,
      ),
    },
    {
      id: 4,
      text: await compileMDX(
        codeBlock`
          <dfn title="Cascading Style Sheets">
           <abbr>CSS</abbr> controls web page styles.
          </dfn>`,
      ),
    },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 2,
} satisfies Question;
