import type { Question } from "@/types";

import { renderField } from "@/lib/utils";

import { OptionWrapper } from "./option-wrapper";

interface Props {
  question: Question;
}

export function Question({ question }: Props) {
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
        {question.options.map((option) => (
          <OptionWrapper
            key={`${question.id}-${option.id}`}
            name={`question-${question.id}-option-${option.id}`}
            option={option}
          />
        ))}
      </ul>
    </section>
  );
}
