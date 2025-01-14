import type { ComponentType } from "react";

export interface Question {
  id: number;
  question: string | ComponentType;
  codeExample: string | ComponentType;
  options: {
    id: number;
    text: string;
  }[];
  explanation: string | ComponentType;
  correctAnswer: number;
}
