import { ChoiceIdentifier } from "@/lib/choice/mod";
import {
  QuestionIdentifier,
  type QuestionDefinition,
} from "@/lib/question/mod";
import codeExample from "./code-example";

const questionDefinition: QuestionDefinition = {
  id: QuestionIdentifier.of(2),
  title: "What does the following HTML snippet represent?",
  codeExample: codeExample,
  choices: [
    {
      id: ChoiceIdentifier.of(1),
      content: "An unordered list",
      isSolution: true,
    },
    {
      id: ChoiceIdentifier.of(2),
      content: "An ordered list",
      isSolution: false,
    },
    {
      id: ChoiceIdentifier.of(3),
      content: "A navigation menu",
      isSolution: false,
    },
  ],
};

export default questionDefinition;
export { questionDefinition };
