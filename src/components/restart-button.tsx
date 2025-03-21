"use client";

import { cn } from "@/lib/cn";
import { useResetUserAnswers } from "@/state/useAnswers";
import Link from "next/link";

import { Button } from "./button";

export const RestartButton = ({ className }: { className?: string }) => {
  const remove = useResetUserAnswers();

  return (
    <Button asChild className={cn("mx-auto", className)}>
      <Link href="/quiz" onClick={remove}>
        Give It A Go!
      </Link>
    </Button>
  );
};
