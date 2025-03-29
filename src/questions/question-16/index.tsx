import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

export default {
  id: 16,
  inquiry: await compileMDX(
    "What is the purpose of the inert attribute in HTML?",
  ),
  options: [
    {
      id: 1,
      text: await compileMDX("To prevent elements from being interactive."),
    },
    {
      id: 2,
      text: await compileMDX(
        "It disables all styles applied to an element and its children.",
      ),
    },
    {
      id: 3,
      text: await compileMDX(
        "It pauses animations and transitions for an element.",
      ),
    },
    { id: 4, text: await compileMDX("I don't know.") },
  ],
  explanation: () => "explanation question 16",
  correctAnswerId: 1,
} satisfies Question;
