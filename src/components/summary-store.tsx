import { saveAnswers } from "@/actions/save-answers.action";
import { memo, useEffect } from "react";

interface Props {
  answers: number[];
}

export const SummaryStore = memo(
  ({ answers }: Props) => {
    useEffect(() => {
      void saveAnswers(answers);
    }, [answers]);

    return null;
  },
  () => true,
);
