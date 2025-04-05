import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

import explanation from "./explanation.mdx";

export default {
  id: 15,
  inquiry: await compileMDX(
    "What is the purpose of the `inert` attribute in HTML?",
  ),
  options: [
    { id: 1, text: () => "To prevent elements from being interactive." },
    {
      id: 2,
      text: () =>
        "It disables all styles applied to an element and its children.",
    },
    {
      id: 3,
      text: () => "It pauses animations and transitions for an element.",
    },
    { id: 4, text: () => "I don't know." },
  ],
  explanation,
  correctAnswerId: 1,
} satisfies Question;
