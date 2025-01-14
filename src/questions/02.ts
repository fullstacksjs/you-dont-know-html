import snippet from "@/components/snippet/02-snippet";
import question from "@/mdx/02-question.mdx";

export default {
  id: 2,
  question,
  codeExample: snippet,
  options: [
    { id: 1, text: "Second Answer" },
    { id: 2, text: "Second Answer" },
    { id: 3, text: "Second Answer" },
  ],
  explanation: "explanation question 2",
  correctAnswer: 1,
};
