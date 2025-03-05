import { PreviewsIcon } from "@/components/previews-icon";
import Link from "next/link";

interface Props {
  step: number;
  getHref: (step: number) => string;
  getLabel: (step: number) => string;
}

export function Previews({ step, getHref, getLabel }: Props) {
  return (
    <Link
      className="text-muted1 p-2 rounded-lg flex items-center gap-3 cursor-pointer mb-2"
      href={getHref(step - 1)}
    >
      <PreviewsIcon />
      <span className="text-muted1 font-bold">{getLabel(step)}</span>
    </Link>
  );
}
