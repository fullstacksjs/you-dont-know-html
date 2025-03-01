import type { QuestionOption } from "@/questions/Question";

import { getAnswersCount, getPlayCount } from "@/lib/db";
import { correctAnswers } from "@/questions/all-questions";

import { ReviewOption } from "./review-option";

interface Props {
  option: QuestionOption;
  step: number;
  questionId: number;
}

export async function OptionWrapper({ option, step, questionId }: Props) {
  const playCount = await getPlayCount(questionId);
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
        <span className="text-white font-medium">
          <option.text />
        </span>
      </ReviewOption>
    </li>
  );
}
