"use client";
import { Link } from "next-view-transitions";

import { SummaryResult } from "./summary-result";

interface Props {
  correctAnswers: number[];
}

export function Summary({ correctAnswers }: Props) {
  const share = () => {
    // TODO: share the result
  };

  return (
    <main className="flex flex-col gap-6 justify-center items-center h-[100dvh] px-3">
      <SummaryResult correctAnswers={correctAnswers} />
      <p className="text-lg">
        {"Feeling confident? Challenge yourself with another quiz!"}
      </p>

      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          className="w-1/5 py-3 text-lg bg-accent cursor-pointer text-background font-bold rounded-sm text-center"
          href={"/review"}
        >
          {"Review Choices"}
        </Link>
        <button
          className="w-1/5 py-3 text-lg text-accent cursor-pointer bg-black/20 font-bold rounded-sm"
          type="button"
          onClick={share}
        >
          {"Share"}
        </button>
        <Link
          className="w-1/5 py-3 text-lg text-accent cursor-pointer bg-black/20 font-bold rounded-sm text-center"
          href={"/"}
        >
          {"Start Over"}
        </Link>
      </div>
    </main>
  );
}
