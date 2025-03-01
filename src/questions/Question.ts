import type { ComponentType } from "react";

type ID = number;

export interface QuestionOption {
  id: ID;
  text: ComponentType;
}

export interface Question {
  id: ID;
  inquiry: ComponentType;
  options: QuestionOption[];
  explanation: ComponentType;
  correctAnswerId: ID;
}
