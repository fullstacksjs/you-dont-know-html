import type { Question } from "@/questions/Question";

import { OptionWrapper } from "./option-wrapper";

interface Props {
  question: Question;
}

export function Review({ question }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Question #{question.id}</h2>
      <div className="question text-review">
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
      <details className="bg-bg-elevated px-6 py-4 mt-6 rounded">
        <summary className="text-lg font-bold cursor-pointer focus-visible:outline-none focus-visible:underline ">
          Explanation
        </summary>
        <div className="question mt-4 flex flex-col gap-4">
          <question.explanation />
        </div>
      </details>
    </section>
  );
}
