import Link from "next/link";

interface Props {
  step: number;
  getHref: (step: number) => string;
  getLabel: (step: number) => string;
}

export function QuizHeader({ step, getHref, getLabel }: Props) {
  return (
    <Link
      className="text-muted-1 font-mono px-1 py-2 rounded-lg inline-flex items-center gap-1 cursor-pointer mb-2"
      href={getHref(step - 1)}
    >
      <i className="i-arrow-left" />
      <span className="text-muted-1 font-bold">{getLabel(step)}</span>
    </Link>
  );
}
