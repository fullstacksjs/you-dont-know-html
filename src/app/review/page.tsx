import { Previews } from "@/components/question/previews";
import { Review } from "@/components/review/review";
import { questions } from "@/questions/questions";

export default function ReviewPage() {
  return (
    <>
      <Previews
        getHref={() => "/summary"}
        getLabel={() => "Reviews"}
        step={1}
      />
      {questions.map((question) => (
        <div className="mb-14" key={question.id}>
          <Review question={question} />
        </div>
      ))}
    </>
  );
}
