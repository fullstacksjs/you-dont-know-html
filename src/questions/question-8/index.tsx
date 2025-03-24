import { codeBlock } from "@/lib/mdx/code-block";
import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

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
    { id: 5, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 8",
  correctAnswerId: 4,
} satisfies Question;
