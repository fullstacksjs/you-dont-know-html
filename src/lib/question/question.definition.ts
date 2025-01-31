import type { Choices } from "../choice/choice.definition";
import type { QuestionIdentifier } from "./question.identifier";

export interface QuestionDefinition extends QuestionChoices {
  id: QuestionIdentifier;
  title: string;
  codeExample?: string | React.ComponentType;
}

export interface QuestionChoices {
  readonly choices: Required<Choices>;
}
