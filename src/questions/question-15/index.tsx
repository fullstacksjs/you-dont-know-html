import { compileMDX } from "@app/mdx/compileMdx";

import type { Question } from "../Question";

import { IDontKnow } from "../shared-options";
import explanation from "./explanation.mdx";

export default {
  id: 15,
  inquiry: await compileMDX("What does the `inert` attribute do in HTML?"),
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
    IDontKnow,
  ],
  explanation,
  correctAnswerId: 1,
} satisfies Question;
