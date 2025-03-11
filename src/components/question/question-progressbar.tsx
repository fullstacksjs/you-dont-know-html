import { allQuestions } from "@/questions/all-questions";

interface Props {
  currentStep: number;
}

export const QuestionProgressbar = ({ currentStep }: Props) => {
  return (
    <div
      className="fixed top-0 left-0 bg-accent h-1 transition-[width] duration-1000"
      style={{ width: `${(currentStep / allQuestions.length) * 100}%` }}
    />
  );
};
