/* eslint-disable */
import type { Question } from "@/types";

import { renderField } from "@/lib/utils";

interface Props {
  question: Question;
}

export function Question({ question }: Props) {
  return (
    <section>
      <h2>question: {renderField(question.question)}</h2>
      <br />
      <section>code example: {renderField(question.codeExample)}</section>
      <br />
      options:
      <ul>
        {question.options.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
      <br />
      <section>{renderField(question.explanation)}</section>
    </section>
  );
}
