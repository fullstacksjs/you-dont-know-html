import { codeBlock } from "@/lib/mdx/code-block";
import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 3,
  inquiry,
  options: [
    {
      id: 3,
      text: await compileMDX(codeBlock`
        <p>
          <input aria-invalid="true" aria-errormessage="err">
          <span id="err">Error: Enter a valid email address</span>
        </p>
      `),
    },
    {
      id: 1,
      text: await compileMDX(codeBlock`
        <p>
          <input aria-invalid="true" aria-errormessage="err">
          <span id="err">Error: Enter a valid email address</span>
        </p>
      `),
    },
    {
      id: 2,
      text: await compileMDX(codeBlock`
        <p>
          <input aria-invalid="true" aria-errormessage="Error: Enter a valid email address">
          <span>Error: Enter a valid email address</span>
        </p>
      `),
    },
  ],
  explanation,
  correctAnswerId: 1,
} satisfies Question;
