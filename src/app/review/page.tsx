import { questions } from "@app/questions/questions";

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
      {questions.map((question) => (
        <div className="mb-14" key={question.id}>
          <Review question={question} />
          <hr className="text-border-dark my-12" />
        </div>
      ))}
    </>
  );
}
