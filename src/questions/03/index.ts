import { ChoiceIdentifier } from "@/lib/choice/mod";
import {
  type QuestionDefinition,
  QuestionIdentifier,
} from "@/lib/question/mod";

const questionDefinition: QuestionDefinition = {
  id: QuestionIdentifier.of(3),
  title: "What is the purpose of the <head> tag in HTML?",
  choices: [
    {
      id: ChoiceIdentifier.of(1),
      content: "To contain meta-information about the document",
      isSolution: true,
    },
    {
      id: ChoiceIdentifier.of(2),
      content: "To define the main content of the document",
      isSolution: false,
    },
    {
      id: ChoiceIdentifier.of(3),
      content: "To create a header for the document",
      isSolution: false,
    },
  ],
};

export default questionDefinition;
export { questionDefinition };
