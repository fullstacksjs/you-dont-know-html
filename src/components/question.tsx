import type { Answer, Question } from "@/types";

import { renderField } from "@/lib/utils";

interface Props {
  question: Question;
  answerQuestion: (questionId: number, selectedOptionId: number) => void;
  answer?: Answer;
}

export function Question({ question, answerQuestion, answer }: Props) {
  const handleOptionClick = (optionId: number) => {
    return () => answerQuestion(question.id, optionId);
  };

  return (
    <section>
      <div>
        <h3 className="text-lg font-bold text-white">
          {renderField(question.question)}
        </h3>
        {question.codeExample && (
          <div className="mt-2">{renderField(question.codeExample)}</div>
        )}
      </div>
      <div className="m-5 flex justify-center">
        <hr className="w-full border text-black opacity-20" />
      </div>
      <ul className="flex flex-col gap-2">
        {question.options.map((option) => {
          return (
            <li key={option.id}>
              <label
                className="flex w-full items-center gap-3 rounded-lg border border-black p-3 cursor-pointer has-checked:text-accent"
                htmlFor={`question-${question.id}-option-${option.id}`}
              >
                <input
                  className="appearance-none w-5 h-5 cursor-pointer rounded-full border-2 border-white checked:bg-accent checked:border-accent checked:shadow-radio-ring"
                  id={`question-${question.id}-option-${option.id}`}
                  type="radio"
                  onChange={handleOptionClick(option.id)}
                  checked={
                    answer ? option.id === answer.selectedOptionId : false
                  }
                />
                <span>{renderField(option.text)}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
