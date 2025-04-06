import { questions } from "@app/questions/questions";
import { notFound } from "next/navigation";

import { Question } from "../_components/question/question";
import { QuestionProgressbar } from "../_components/question/question-progressbar";
import { QuizHeader } from "../../_components/quiz-header";

export function generateStaticParams() {
  return questions.map((_, index) => ({ step: String(index + 1) }));
}

interface Props {
  params: Promise<{ step: string }>;
}

export default async function QuizPage({ params }: Props) {
  const step = Number((await params).step);
  const currentStep = step - 1;
  const currentQuestion = questions[currentStep];

  if (!currentQuestion) return notFound();

  return (
    <>
      <QuizHeader
        getHref={(s) => (s === 0 ? "/" : `/quiz/${s}`)}
        getLabel={(s) => `Question ${s}/${questions.length}`}
        step={step}
      />
      <QuestionProgressbar currentStep={currentStep} />
      <Question
        id={currentQuestion.id}
        inquiry={<currentQuestion.inquiry />}
        step={step}
        isLastQuestion={step === questions.length}
        options={currentQuestion.options.map((option) => ({
          id: option.id,
          text: <option.text />,
        }))}
      />
    </>
  );
}
