import { codeBlock } from "@app/mdx/code-block";
import { compileMDX } from "@app/mdx/compileMdx";

import type { Question } from "../Question";

import { IDontKnow } from "../shared-options";
import inquiry from "./inquiry.mdx";

export default {
  id: 8,
  inquiry,
  options: [
    {
      id: 1,
      text: await compileMDX(
        codeBlock`
          <p>
           The event took place on
           <date value="2025-06-15">June 15</date>.
          </p>`,
      ),
    },
    {
      id: 2,
      text: await compileMDX(
        codeBlock`
          <p>
           The event took place on
           <date date="2025-06-15">June 15</date>.
          </p>`,
      ),
    },
    {
      id: 3,
      text: await compileMDX(
        codeBlock`
          <p>
           The event took place on
           <datetime value="2025-06-15">June 15</datetime>.
          </p>`,
      ),
    },
    {
      id: 4,
      text: await compileMDX(
        codeBlock`
          <p>
           The event took place on
           <time datetime="2025-06-15">June 15</time>.
          </p>`,
      ),
    },
    IDontKnow,
  ],
  explanation: await compileMDX(`
      > The <H>{'<time>'}</H> HTML element represents a specific period in time.
      > It may include the <H>{"datetime"}</H> attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
      > [Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
    `),
  correctAnswerId: 4,
} satisfies Question;
