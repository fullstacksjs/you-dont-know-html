import { QuizHeader } from "@/components/question/quiz-header";
import { Review } from "@/components/review/review";
import { questions } from "@/questions/questions";

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
