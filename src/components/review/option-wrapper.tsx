import type { ComponentType } from "react";

import { renderField } from "@/lib/utils";
import { correctAnswers } from "@/questions/all-questions";
// import { supabase } from "@/supabase";

import { ReviewOption } from "./review-option";

interface Props {
  option: {
    id: number;
    text: string | ComponentType;
  };
  step: number;
  questionId: number;
}

export async function OptionWrapper({
  option,
  step,
  // questionId
}: Props) {
  // const s = await supabase.from("answers").select();

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <li>
      <ReviewOption
        step={step}
        correctAnswers={correctAnswers}
        optionId={option.id}
      >
        <span>{renderField(option.text)}</span>
      </ReviewOption>
    </li>
  );
}
