import type { ChoiceIdentifier } from "./choice.identifier";

export type Choices = TwoChoice | FourChoice;

export type TwoChoice = [
  FirstChoice: ChoiceDefinition<1>,
  SecondChice: ChoiceDefinition<2>,
];

export type FourChoice = [
  FirstChioce: ChoiceDefinition<1>,
  SecondChoice: ChoiceDefinition<2>,
  ThirdChoice: ChoiceDefinition<3>,
];

export interface ChoiceDefinition<I extends number = number> {
  id: ChoiceIdentifier<I>;
  content: string | React.ComponentType;
  isSolution: boolean;
}
