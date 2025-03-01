import type { Question } from "@/questions/Question";

import { allQuestions } from "@/questions/all-questions";

import { QuestionOption } from "./question-option";

interface Props {
  question: Question;
}

export function Question({ question }: Props) {
  return (
    <section>
      <div>
        <h3 className="text-lg font-bold text-white">
          <question.inquiry />
        </h3>
      </div>
      <div className="m-5 flex justify-center">
        <hr className="w-full border text-black opacity-20" />
      </div>
      <ul className="flex flex-col gap-2">
        {question.options.map((option) => (
          <li key={`${question.id}-${option.id}`}>
            <QuestionOption
              id={option.id}
              name={`question-${question.id}-option-${option.id}`}
              totalNumber={allQuestions.length}
            >
              <span>
                <option.text />
              </span>
            </QuestionOption>
          </li>
        ))}
      </ul>
    </section>
  );
}
