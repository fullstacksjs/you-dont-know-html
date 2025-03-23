import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

import inquiry from "./inquiry.mdx";

export default {
  id: 3,
  inquiry,
  options: [
    { id: 1, text: () => "It does nothing." },
    {
      id: 2,
      text: await compileMDX(
        `It creates a new standalone custom element called <H>{"<counter-button>"}</H>`,
      ),
    },
    {
      id: 3,
      text: await compileMDX(
        `It can extend the <H>{"<button>"}</H> element with a custom behavior defined in the counter-button class.`,
      ),
    },
    { id: 4, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 4",
  correctAnswerId: 3,
} satisfies Question;
