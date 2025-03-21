import type { QuestionOption } from "@/questions/Question";

import { getAnswersCount, getGamesCount } from "@/lib/db";

import { ReviewOption } from "./review-option";

interface Props {
  option: QuestionOption;
  step: number;
  questionId: number;
}

export async function OptionWrapper({ option, step, questionId }: Props) {
  const gamesCount = await getGamesCount(questionId);
  const answersCount = await getAnswersCount(questionId, option.id);

  const percentage = (answersCount / gamesCount) * 100;

  return (
    <li>
      <ReviewOption percentage={percentage} step={step} optionId={option.id}>
        <span className="text-white font-medium">
          <option.text />
        </span>
      </ReviewOption>
    </li>
  );
}
