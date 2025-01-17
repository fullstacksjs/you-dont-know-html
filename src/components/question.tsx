import type { Question } from "@/types";

import { renderField } from "@/lib/utils";

interface Props {
  question: Question;
}

export function Question({ question }: Props) {
  return (
    <section>
      <div>question: {renderField(question.question)}</div>
      <br />
      <div>code example: {renderField(question.codeExample)}</div>
      <br />
      options:
      <ul>
        {question.options.map((option) => (
          <li key={option.id}>{renderField(option.text)}</li>
        ))}
      </ul>
      <br />
      <div>{renderField(question.explanation)}</div>
    </section>
  );
}
