import { Question } from "@/components/question";
import questionOne from "@/questions/01";
import questionTwo from "@/questions/02";

export default function Home() {
  return (
    <main>
      <h2 className="text-center">{"You don't know html"}</h2>

      <h1>Question 1</h1>
      <Question question={questionOne} />

      <br />
      <hr />
      <br />

      <h1>Question 2</h1>
      <Question question={questionTwo} />
    </main>
  );
}
