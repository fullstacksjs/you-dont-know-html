import { questions } from "@app/questions/questions";
import { isLastIndex } from "@fullstacksjs/toolbox";

import { QuizHeader } from "../_components/quiz-header";
import { Review } from "./_components/review";

export default function ReviewPage() {
  return (
    <>
      <QuizHeader
        getHref={() => "/summary"}
        getLabel={() => "Reviews"}
        step={1}
      />
      {questions.map((question, index) => (
        <div className="mb-14" key={question.id}>
          <Review question={question} />
          {!isLastIndex(questions, index) && (
            <hr className="text-border-dark my-12" />
          )}
        </div>
      ))}
    </>
  );
}
