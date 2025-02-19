import { SummaryStore } from "@/components/summary-store";
import { redirect } from "next/navigation";
import { useSessionStorage } from "usehooks-ts";

interface Props {
  correctAnswers: number[];
}

export function SummaryResult({ correctAnswers }: Props) {
  const [answers] = useSessionStorage<number[]>("answers", []);

  const result = correctAnswers.reduce(
    (previousValue, currentValue, currentIndex) => {
      if (answers[currentIndex] === currentValue) return previousValue + 1;
      return previousValue;
    },
    0,
  );

  if (!answers.length) {
    return redirect("/");
  }

  return (
    <>
      <SummaryStore answers={answers} />
      <h2 className="text-white text-3xl font-bold text-center">{`You got ${result} out of ${correctAnswers.length} correct!`}</h2>
    </>
  );
}
