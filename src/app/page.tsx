import { Question } from "@/components/question";
import { allQuestions } from "@/questions/all-questions";

export default function Home() {
  return (
    <main className="mb-28">
      <h2 className="text-center">{"You don't know html"}</h2>

      {allQuestions.map((question) => (
        <section key={question.id}>
          <h1>Question {question.id}</h1>
          <Question question={question} />
          <br />
          <hr />
          <br />
        </section>
      ))}
    </main>
  );
}
