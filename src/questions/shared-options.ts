import type { Question } from "./Question";

export const IDontKnow = {
  id: 127,
  text: () => "I don't know",
} satisfies Question["options"][number];

export const InvalidHTML = {
  id: 128,
  text: () => "It's not a valid HTML syntax",
} satisfies Question["options"][number];
