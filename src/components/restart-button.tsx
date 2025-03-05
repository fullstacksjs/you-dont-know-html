"use client";

import { cn } from "@/lib/cn";
import { useProgress } from "@bprogress/next";
import Link from "next/link";
import { useSessionStorage } from "usehooks-ts";

import { Button } from "./button";

export const RestartButton = ({ className }: { className?: string }) => {
  const { start } = useProgress();
  const [, , remove] = useSessionStorage("answers", []);

  return (
    <Button asChild className={cn("mx-auto", className)}>
      <Link
        href="/quiz"
        onClick={() => {
          remove();
          start();
        }}
      >
        Give It A Go!
      </Link>
    </Button>
  );
};
