import { ChoiceIdentifier } from "@/lib/choice/mod";
import {
  type QuestionDefinition,
  QuestionIdentifier,
} from "@/lib/question/mod";

const questionDefinition: QuestionDefinition = {
  id: QuestionIdentifier.of(1),
  title: "What does HTML stand for?",
  choices: [
    {
      id: ChoiceIdentifier.of(1),
      content: "Hyper Text Markup Language",
      isSolution: true,
    },
    {
      id: ChoiceIdentifier.of(2),
      content: "Hyperlinks and Text Markup Language",
    },
    {
      id: ChoiceIdentifier.of(3),
      content: "Home Tool Markup Language",
    },
  ],
};

export default questionDefinition;
export { questionDefinition };
