import { Previews } from "@/components/question/previews";
import { Question } from "@/components/question/question";
import { allQuestions } from "@/questions/all-questions";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allQuestions.map((_, index) => ({ step: String(index + 1) }));
}

interface Props {
  params: Promise<{ step: string }>;
}

export default async function QuizPage({ params }: Props) {
  const step = Number((await params).step);
  const currentStep = step - 1;

  if (Number.isNaN(step) || step > allQuestions.length || step < 0) {
    return notFound();
  }

  const currentQuestion = allQuestions[currentStep];

  return (
    <div className="p-4 md:px-0 w-full md:w-1/2">
      <Previews
        getHref={(s) => `/quiz/${s}`}
        getLabel={(s) => `Question ${s}/${allQuestions.length}`}
        step={step}
      />
      <Question question={currentQuestion} />
    </div>
  );
}
