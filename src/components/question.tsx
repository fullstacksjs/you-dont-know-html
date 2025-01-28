import type { Question } from "@/types";

import { renderField } from "@/lib/utils";

interface Props {
  question: Question;
  answerQuestion: (questionId: number, selectedOptionId: number) => void;
}

export function Question({ question, answerQuestion }: Props) {
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
        <hr className="w-full border text-[#000000]" />
      </div>
      <ul className="flex flex-col gap-2">
        {question.options.map((option) => (
          <li key={option.id}>
            <button
              className="flex w-full items-center gap-2 rounded-lg border border-black p-2"
              type="button"
              onClick={handleOptionClick(option.id)}
            >
              <input name={`question-${question.id}`} type="radio" />
              {renderField(option.text)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
