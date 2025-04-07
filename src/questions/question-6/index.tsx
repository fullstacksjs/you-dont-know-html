import { codeBlock } from "@app/mdx/code-block";
import { compileMDX } from "@app/mdx/compileMdx";

import type { Question } from "../Question";

import { IDontKnow } from "../shared-options";
import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 6,
  inquiry,
  options: [
    {
      id: 1,
      text: await compileMDX(
        codeBlock`
          <p>
           The old price was <strike>$49.99</strike>, but now it's just $29.99
          </p>
        `,
      ),
    },
    {
      id: 2,
      text: await compileMDX(
        codeBlock`
          <p>
           The old price was <del>$49.99</del>, but now it's just $29.99
          </p>
        `,
      ),
    },
    {
      id: 3,
      text: await compileMDX(
        codeBlock`
          <p>
           The old price was <del>$49.99</del>, but now it's just <ins>$29.99</ins>
          </p>
        `,
      ),
    },
    {
      id: 4,
      text: await compileMDX(
        codeBlock`
          <p>
           The old price was <s>$49.99</s>, but now it's just $29.99
          </p>
        `,
      ),
    },
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 4,
} satisfies Question;
