import type { Question } from "@/questions/Question";
import type { UserAnswers } from "@/state/useAnswers";

import { isDuplicationError, isPermissionError } from "@/lib/supabase/supabase";

import { QuestionOption } from "./question-option";

export interface AnswerEvent {
  questionId: number;
  optionId: number;
  userAnswers: UserAnswers;
}

interface Props {
  question: Question;
  onAnswer: (e: AnswerEvent) => Promise<{ error?: string }>;
}

export function Question({ question, onAnswer }: Props) {
  const handleSelect = async (optionId: number, userAnswers: UserAnswers) => {
    "use server";
    try {
      await onAnswer({ questionId: question.id, optionId, userAnswers });
    } catch (e) {
      if (isPermissionError(e)) {
        throw Error("Not permitted! The project might be misconfigured.", {
          cause: e,
        });
      }
      if (isDuplicationError(e)) {
        throw Error("You have already submitted your answers.", { cause: e });
      }
      throw e;
    }
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
