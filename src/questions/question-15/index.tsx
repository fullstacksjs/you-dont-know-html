import type { Question } from "../Question";

export default {
  id: 15,
  inquiry: () => "What is the purpose of the inert attribute in HTML?",
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
  explanation: () => "explanation question 15",
  correctAnswerId: 1,
} satisfies Question;
