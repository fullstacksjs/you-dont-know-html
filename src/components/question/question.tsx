import type { Question } from "@/questions/Question";
import type { UserAnswers } from "@/state/useAnswers";

import { QuestionOption } from "./question-option";

export interface AnswerEvent {
  questionId: number;
  optionId: number;
  userAnswers: UserAnswers;
}

interface Props {
  question: Question;
  onAnswer: (e: AnswerEvent) => Promise<void>;
}

export function Question({ question, onAnswer }: Props) {
  const handleSelect = async (optionId: number, userAnswers: UserAnswers) => {
    "use server";
    await onAnswer({ questionId: question.id, optionId, userAnswers });
  };

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
              onSelect={handleSelect}
              questionId={question.id}
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
