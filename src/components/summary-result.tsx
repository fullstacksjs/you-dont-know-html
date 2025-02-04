import { useTransitionRouter } from "next-view-transitions";
import { useSessionStorage } from "usehooks-ts";

interface Props {
  correctAnswers: number[];
}

export function SummaryResult({ correctAnswers }: Props) {
  const router = useTransitionRouter();
  const [answers] = useSessionStorage<number[]>("answers", []);

  const result = correctAnswers.reduce(
    (previousValue, currentValue, currentIndex) => {
      if (answers[currentIndex] === currentValue) return previousValue + 1;
      return previousValue;
    },
    0
  );

  if (!answers.length) {
    router.push("/");
    return null;
  }

  return (
    <h2 className="text-white text-3xl font-bold text-center">{`You got ${result} out of ${correctAnswers.length} correct!`}</h2>
  );
}
