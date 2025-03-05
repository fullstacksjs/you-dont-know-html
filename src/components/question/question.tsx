import type { Question } from "@/questions/Question";

import { allQuestions } from "@/questions/all-questions";

import { QuestionOption } from "./question-option";

interface Props {
  question: Question;
}

export function Question({ question }: Props) {
  return (
    <section>
      <div className="question text-question">
        <question.inquiry />
      </div>
      <hr className="w-full my-5 text-shade-2" />
      <ul className="flex flex-col gap-2">
        {question.options.map((option) => (
          <li key={`${question.id}-${option.id}`}>
            <QuestionOption
              id={option.id}
              name={`question-${question.id}-option-${option.id}`}
              totalNumber={allQuestions.length}
            >
              <div>
                <option.text />
              </div>
            </QuestionOption>
          </li>
        ))}
      </ul>
    </section>
  );
}
