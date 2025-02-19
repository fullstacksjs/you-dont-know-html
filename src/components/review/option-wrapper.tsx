import type { ComponentType } from "react";

import { getAnswersCount } from "@/lib/db";
import { renderField } from "@/lib/utils";
import { correctAnswers } from "@/questions/all-questions";

import { ReviewOption } from "./review-option";

interface Props {
  option: {
    id: number;
    text: string | ComponentType;
  };
  step: number;
  questionId: number;
  playCount: number;
}

export async function OptionWrapper({
  option,
  step,
  questionId,
  playCount,
}: Props) {
  const answersCount = await getAnswersCount(questionId, option.id);

  const percentage = (answersCount / playCount) * 100;

  return (
    <li>
      <ReviewOption
        percentage={percentage}
        step={step}
        correctAnswers={correctAnswers}
        optionId={option.id}
      >
        <span>{renderField(option.text)}</span>
      </ReviewOption>
    </li>
  );
}
