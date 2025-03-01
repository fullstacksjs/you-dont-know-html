import type { Question } from "../Question";

import explanation from "./explanation.mdx";

export default {
  id: 1,
  inquiry: () => "What does HTML stand for?",
  options: [
    { id: 1, text: () => "Hyper Text Markup Language" },
    { id: 2, text: () => "Hyperlinks and Text Markup Language" },
    { id: 3, text: () => "Home Tool Markup Language" },
  ],
  explanation,
  correctAnswerId: 1,
} satisfies Question;
