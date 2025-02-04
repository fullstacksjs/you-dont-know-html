import { Summary } from "@/components/summary";
import { correctAnswers } from "@/questions/all-questions";

export default function SummaryPage() {
  return <Summary correctAnswers={correctAnswers} />;
}
