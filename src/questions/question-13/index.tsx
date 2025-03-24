import type { Question } from "../Question";

import inquiry from "./inquiry.mdx";

export default {
  id: 13,
  inquiry,
  options: [
    { id: 1, text: () => "It displays a blank page." },
    { id: 2, text: () => "It throws a syntax error." },
    {
      id: 3,
      text: () =>
        'It displays an image with a source of "https://placehold.co/600x400".',
    },
    { id: 4, text: () => "I don't know." },
  ],
  explanation: () => "explanation question 13",
  correctAnswerId: 3,
} satisfies Question;
