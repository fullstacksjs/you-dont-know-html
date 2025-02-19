import { Previews } from "@/components/question/previews";
import { Review } from "@/components/review/review";
import { allQuestions } from "@/questions/all-questions";

export default function ReviewPage() {
  return (
    <main
      className="flex justify-center md:items-center
  "
    >
      <div className="p-4 md:px-0 w-full md:w-1/2">
        <Previews baseURL="/review" step={1} startPoint="/summary" />
        {allQuestions.map((question, index) => (
          <div className="mb-14" key={question.id}>
            <Review step={index + 1} question={question} />
          </div>
        ))}
      </div>
    </main>
  );
}
