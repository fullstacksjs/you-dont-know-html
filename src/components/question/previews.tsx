import { PreviewsIcon } from "@/components/previews-icon";
import { allQuestions } from "@/questions/all-questions";
import Link from "next/link";

interface Props {
  step: number;
  startPoint: string;
  baseURL: string;
}

export function Previews({ step, startPoint, baseURL }: Props) {
  return (
    <Link
      className=" text-white p-2 rounded-lg flex items-center gap-3 cursor-pointer mb-2"
      href={step === 1 ? startPoint : `${baseURL}/${step - 1}`}
    >
      <PreviewsIcon />
      <span className="text-muted font-bold">
        Question {step}/{allQuestions.length}
      </span>
    </Link>
  );
}
