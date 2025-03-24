import { PreviewsIcon } from "@/components/previews-icon";
import { Link } from "next-view-transitions";

interface Props {
  step: number;
  getHref: (step: number) => string;
  getLabel: (step: number) => string;
}

export function QuizHeader({ step, getHref, getLabel }: Props) {
  return (
    <Link
      className="text-muted-1 font-mono p-2 rounded-lg inline-flex items-center gap-3 cursor-pointer mb-2"
      href={getHref(step - 1)}
    >
      <PreviewsIcon />
      <span className="text-muted-1 font-bold">{getLabel(step)}</span>
    </Link>
  );
}
