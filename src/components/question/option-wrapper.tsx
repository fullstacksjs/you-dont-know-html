import type { ComponentType } from "react";

import { renderField } from "@/lib/utils";
import { allQuestions } from "@/questions/all-questions";

import { QuestionOption } from "./option";

interface Props {
  name: string;
  option: {
    id: number;
    text: string | ComponentType;
  };
}

export function OptionWrapper({ name, option }: Props) {
  return (
    <li>
      <QuestionOption
        id={option.id}
        name={name}
        totalNumber={allQuestions.length}
      >
        <span>{renderField(option.text)}</span>
      </QuestionOption>
    </li>
  );
}
