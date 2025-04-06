import type { Question } from "@app/questions/Question";

import { Explanation } from "./explanation";
import { OptionWrapper } from "./option-wrapper";

interface Props {
  question: Question;
}

export function Review({ question }: Props) {
  return (
    <article className="scroll-mt-8" id={`question-${question.id}`}>
      <a href={`#question-${question.id}`}>
        <h2 className="text-2xl font-bold mb-4">Question #{question.id}</h2>
      </a>
      <div className="question text-lg font-bold">
        <question.inquiry />
      </div>
      <ul className="flex flex-col gap-4">
        {question.options.map((option) => (
          <OptionWrapper
            key={`${question.id}-${option.id}`}
            option={option}
            questionId={question.id}
          />
        ))}
      </ul>
      <Explanation>
        <question.explanation />
      </Explanation>
    </article>
  );
}
