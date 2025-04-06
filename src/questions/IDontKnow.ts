import type { Question } from "./Question";

export const IDontKnow = {
  id: 127,
  text: () => "I don't know",
} satisfies Question["options"][number];
