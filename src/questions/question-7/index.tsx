import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

export default {
  id: 7,
  inquiry: await compileMDX(
    "Which of the following best describes the purpose of the <H>\\<meter></H> element in HTML?",
  ),
  options: [
    {
      id: 1,
      text: () =>
        "It displays a progress bar for tasks like file uploads or downloads.",
    },
    {
      id: 2,
      text: () =>
        "It defines a scalar measurement within a known range, such as a score, battery level, or disk usage.",
    },
    { id: 3, text: () => "It collects numeric input from users in a form." },
    {
      id: 4,
      text: () =>
        "It visually styles numeric text using CSS based on its value.",
    },
    { id: 5, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 6",
  correctAnswerId: 2,
} satisfies Question;
